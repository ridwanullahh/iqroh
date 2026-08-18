"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Lock,
  CircleDot,
  FileCheck,
  BookOpen,
  Clock,
  Layers,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { curriculumData } from "@/lib/curriculum-data"
import {
  isModuleCompleted,
  isLessonCompleted,
  isAssessmentCompleted,
  getLastAccessedLesson,
} from "@/lib/progress-service"

const MODULE_COLORS = [
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-rose-500 to-pink-600",
  "from-lime-500 to-green-600",
  "from-fuchsia-500 to-pink-600",
  "from-indigo-500 to-blue-700",
  "from-orange-500 to-red-600",
  "from-teal-500 to-emerald-700",
  "from-purple-500 to-indigo-700",
  "from-yellow-500 to-amber-700",
  "from-pink-500 to-rose-700",
  "from-blue-500 to-cyan-700",
  "from-green-500 to-emerald-700",
]

export default function ModuleDetailPage() {
  const params = useParams<{ moduleId: string }>()
  const moduleId = Number.parseInt(params.moduleId, 10)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => setHydrated(true), [])

  const info = useMemo(() => {
    let id = 0
    for (const phase of curriculumData.phases) {
      for (const module of phase.modules) {
        id += 1
        if (id === moduleId) {
          return { id, phase: phase.title, phaseDescription: phase.description, module }
        }
      }
    }
    return null
  }, [moduleId])

  if (!info) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Module not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">Module {moduleId} does not exist.</p>
        <Button asChild className="mt-6">
          <Link href="/curriculum">Back to curriculum</Link>
        </Button>
      </div>
    )
  }

  const m = info.module as any
  const isLocked = !m.isAvailable
  const isCompleted = hydrated && isModuleCompleted(info.id)
  const hasAssessment = hydrated && isAssessmentCompleted(info.id)
  const completedLessons = hydrated ? m.lessons.filter((_: any, i: number) => isLessonCompleted(info.id, i + 1)).length : 0
  const pct = Math.round((completedLessons / m.lessons.length) * 100)
  const colorBand = MODULE_COLORS[(info.id - 1) % MODULE_COLORS.length]
  const lastAccessed = hydrated ? getLastAccessedLesson() : { moduleId: 1, lessonId: 1 }

  // Find next incomplete lesson in this module
  const nextLessonInModule = (() => {
    for (let i = 0; i < m.lessons.length; i++) {
      if (hydrated && !isLessonCompleted(info.id, i + 1)) return i + 1
    }
    return null
  })()

  const recommendedLessonId = nextLessonInModule ?? 1

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 md:px-6 md:py-8">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/curriculum" className="press-scale hover:text-foreground">
          <ArrowLeft className="mr-1 inline h-4 w-4" />
          Curriculum
        </Link>
        <span aria-hidden>/</span>
        <span className="text-foreground">Module {info.id}</span>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-border/60 shadow-soft"
      >
        <div className={cn("h-2 w-full bg-gradient-to-r", colorBand)} />
        <div className="grid gap-6 p-6 md:grid-cols-[auto,1fr]">
          <div className="flex items-center gap-4">
            <div className={cn("grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br text-3xl font-bold text-white shadow-medium", colorBand)}>
              {info.id}
            </div>
            <div className="md:hidden">
              <div className="text-xs text-muted-foreground">{info.phase}</div>
              <div className="text-xl font-bold">{m.title}</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="hidden text-xs text-muted-foreground md:block">{info.phase}</div>
            <h1 className="hidden text-2xl font-bold md:block">{m.title}</h1>
            <p className="text-sm text-muted-foreground">{m.description}</p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Badge variant="secondary" className="gap-1">
                <Layers className="h-3 w-3" /> {m.lessons.length} lessons
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Clock className="h-3 w-3" /> ~{m.lessons.length * 8} min
              </Badge>
              {isCompleted ? (
                <Badge className="bg-primary/10 text-primary">
                  <CheckCircle2 className="mr-1 h-3 w-3" /> Completed
                </Badge>
              ) : isLocked ? (
                <Badge variant="outline">
                  <Lock className="mr-1 h-3 w-3" /> Locked
                </Badge>
              ) : (
                <Badge variant="secondary">
                  <CircleDot className="mr-1 h-3 w-3" /> Available
                </Badge>
              )}
            </div>

            <div className="pt-2">
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-semibold text-primary">{pct}%</span>
              </div>
              <Progress value={pct} className="h-1.5" />
              <div className="mt-1 text-xs text-muted-foreground">{completedLessons} of {m.lessons.length} lessons complete</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Action bar */}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button asChild disabled={isLocked} className="press-scale">
          <Link href={isLocked ? "#" : `/lessons/${info.id}/${recommendedLessonId}`}>
            <BookOpen className="mr-1.5 h-4 w-4" />
            {isCompleted ? "Review module" : "Continue module"}
          </Link>
        </Button>
        <Button asChild variant="outline" disabled={isLocked} className="press-scale">
          <Link href={isLocked ? "#" : `/assessment/${info.id}`}>
            <FileCheck className="mr-1.5 h-4 w-4" />
            {hasAssessment ? "Review assessment" : "Take assessment"}
          </Link>
        </Button>
      </div>

      {/* Lesson list */}
      <div className="mt-6">
        <h2 className="mb-3 text-sm font-semibold text-muted-foreground">Lessons in this module</h2>
        <ul className="divide-y divide-border/40 rounded-xl border border-border/60 bg-card shadow-soft">
          {m.lessons.map((lesson: any, i: number) => {
            const lessonNumber = i + 1
            const done = hydrated && isLessonCompleted(info.id, lessonNumber)
            const inProgress = hydrated && !done && lessonNumber === lastAccessed.lessonId && info.id === lastAccessed.moduleId
            const lessonLocked = isLocked && !done && !inProgress
            return (
              <li key={`${info.id}-${lessonNumber}`}>
                <Link
                  href={lessonLocked ? "#" : `/lessons/${info.id}/${lessonNumber}`}
                  className={cn(
                    "flex items-center gap-4 px-4 py-4 press-scale",
                    lessonLocked ? "cursor-not-allowed opacity-60" : "hover:bg-muted/40",
                  )}
                  onClick={(e) => lessonLocked && e.preventDefault()}
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-muted/60 text-sm font-semibold">
                    {lessonLocked ? <Lock className="h-4 w-4" /> : done ? <CheckCircle2 className="h-5 w-5 text-primary" /> : inProgress ? <CircleDot className="h-5 w-5 text-accent" /> : lessonNumber}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-medium">{lesson.title}</div>
                    <div className="text-xs text-muted-foreground">Lesson {lessonNumber} · ~8 min</div>
                  </div>
                  {done && <Badge variant="secondary" className="bg-primary/10 text-primary">Done</Badge>}
                  {inProgress && <Badge variant="secondary" className="bg-accent/10 text-accent">In progress</Badge>}
                  {!lessonLocked && !done && !inProgress && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Next module */}
      <div className="mt-6 flex items-center justify-between rounded-xl border border-border/40 bg-muted/30 p-4">
        <div>
          <div className="text-xs text-muted-foreground">Next module</div>
          <div className="font-medium">Module {info.id + 1}</div>
        </div>
        <Button asChild variant="ghost" size="sm" className="press-scale">
          <Link href={`/curriculum/${info.id + 1}`}>
            Go to module {info.id + 1}
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
