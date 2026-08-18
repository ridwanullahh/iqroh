"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Search,
  BookOpen,
  CircleDot,
  FileCheck,
  ChevronDown,
  Layers,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { curriculumData } from "@/lib/curriculum-data"
import {
  loadProgress,
  isModuleCompleted,
  isLessonCompleted,
  isAssessmentCompleted,
  getLastAccessedLesson,
  getNextIncompleteLesson,
} from "@/lib/progress-service"

const MODULE_COLORS = [
  "from-emerald-500/80 to-teal-600/80",
  "from-amber-500/80 to-orange-600/80",
  "from-cyan-500/80 to-blue-600/80",
  "from-violet-500/80 to-purple-600/80",
  "from-rose-500/80 to-pink-600/80",
  "from-lime-500/80 to-green-600/80",
  "from-fuchsia-500/80 to-pink-600/80",
  "from-indigo-500/80 to-blue-700/80",
  "from-orange-500/80 to-red-600/80",
  "from-teal-500/80 to-emerald-700/80",
  "from-purple-500/80 to-indigo-700/80",
  "from-yellow-500/80 to-amber-700/80",
  "from-pink-500/80 to-rose-700/80",
  "from-blue-500/80 to-cyan-700/80",
  "from-green-500/80 to-emerald-700/80",
]

export default function CurriculumPage() {
  const [hydrated, setHydrated] = useState(false)
  const [expanded, setExpanded] = useState<number | null>(null)
  const [query, setQuery] = useState("")

  useEffect(() => {
    // Pre-expand the module containing the user's next incomplete lesson
    const next = getNextIncompleteLesson()
    setExpanded(next.moduleId)
    setHydrated(true)
  }, [])

  // Flatten modules into a lookup keyed by global module number
  const modules = useMemo(() => {
    const list: Array<{
      id: number
      phase: string
      phaseDescription: string
      module: (typeof curriculumData.phases)[0]["modules"][0]
    }> = []
    let id = 0
    for (const phase of curriculumData.phases) {
      for (const module of phase.modules) {
        id += 1
        list.push({
          id,
          phase: phase.title,
          phaseDescription: phase.description,
          module,
        })
      }
    }
    return list
  }, [])

  const filteredModules = useMemo(() => {
    if (!query.trim()) return modules
    const q = query.trim().toLowerCase()
    return modules
      .map((m) => ({
        ...m,
        // Keep modules whose title OR any lesson title matches
        matchModule: m.module.title.toLowerCase().includes(q),
        filteredLessons: m.module.lessons.filter((l: any) =>
          l.title.toLowerCase().includes(q) || (l.slug ?? "").toLowerCase().includes(q),
        ),
      }))
      .filter((m: any) => m.matchModule || m.filteredLessons.length > 0)
  }, [modules, query])

  const toggleExpand = (id: number) => {
    setExpanded((prev) => (prev === id ? null : id))
  }

  if (!hydrated) {
    return (
      <div className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6">
        <div className="h-10 w-1/3 rounded skeleton-shimmer" />
        <div className="mt-6 space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-24 rounded-xl skeleton-shimmer" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 md:px-6 md:py-8">
      {/* Header */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Curriculum</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {modules.length} modules · {modules.reduce((s, m) => s + m.module.lessons.length, 0)} lessons · 30-day plan
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ContinueLearningButton />
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search lessons or modules..."
          className="pl-9"
          aria-label="Search lessons or modules"
        />
      </div>

      {/* Module grid */}
      <div className="space-y-6">
        {filteredModules.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center text-sm text-muted-foreground">
              No lessons found for &ldquo;{query}&rdquo;.
            </CardContent>
          </Card>
        ) : (
          filteredModules.map((entry: any) => {
            const id = entry.id
            const m = entry.module as (typeof curriculumData.phases)[0]["modules"][0]
            const isExpanded = expanded === id || (!!query.trim() && (entry.filteredLessons?.length ?? 0) > 0)
            const isLocked = !m.isAvailable
            const isCompleted = isModuleCompleted(id)
            const hasAssessment = isAssessmentCompleted(id)
            const completedLessons = m.lessons.filter((_: any, i: number) => isLessonCompleted(id, i + 1)).length
            const pct = Math.round((completedLessons / m.lessons.length) * 100)
            const colorBand = MODULE_COLORS[(id - 1) % MODULE_COLORS.length]
            const lessonsToShow = query.trim() ? entry.filteredLessons : m.lessons

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft"
              >
                {/* Color band */}
                <div className={cn("h-1.5 w-full bg-gradient-to-r", colorBand)} />

                <div className="p-5">
                  {/* Module header */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(id)}
                    disabled={isLocked}
                    className={cn(
                      "flex w-full items-center gap-4 text-left press-scale",
                      isLocked && "cursor-not-allowed opacity-70",
                    )}
                  >
                    <div className="relative grid h-14 w-14 shrink-0 place-items-center">
                      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36" aria-hidden>
                        <circle cx="18" cy="18" r="15.5" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                        <circle
                          cx="18"
                          cy="18"
                          r="15.5"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray={`${(pct / 100) * 97.4} 97.4`}
                        />
                      </svg>
                      <span className="absolute text-sm font-semibold">{pct}%</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Module {id}</span>
                        {isCompleted ? (
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
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
                      <div className="mt-0.5 truncate text-base font-semibold">{m.title}</div>
                      <div className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">{m.description}</div>
                    </div>
                    <div className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
                      <Layers className="h-3.5 w-3.5" />
                      {m.lessons.length} lessons
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                        isExpanded && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Expandable lesson list */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 divide-y divide-border/40 border-t border-border/40">
                          {lessonsToShow.map((lesson: any, i: number) => {
                            const lessonNumber = m.lessons.indexOf(lesson) + 1
                            const done = isLessonCompleted(id, lessonNumber)
                            const inProgress = !done && lessonNumber === getLastAccessedLesson().lessonId && id === getLastAccessedLesson().moduleId
                            const lessonLocked = isLocked && !done && !inProgress

                            return (
                              <li key={`${id}-${lessonNumber}`}>
                                <Link
                                  href={lessonLocked ? "#" : `/lessons/${id}/${lessonNumber}`}
                                  className={cn(
                                    "flex items-center gap-3 px-2 py-3 transition-colors press-scale",
                                    lessonLocked
                                      ? "cursor-not-allowed opacity-60"
                                      : "hover:bg-muted/40",
                                  )}
                                  aria-disabled={lessonLocked}
                                  onClick={(e) => {
                                    if (lessonLocked) e.preventDefault()
                                  }}
                                >
                                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-muted/60 text-xs font-semibold">
                                    {lessonLocked ? (
                                      <Lock className="h-3.5 w-3.5" />
                                    ) : done ? (
                                      <CheckCircle2 className="h-4 w-4 text-primary" />
                                    ) : inProgress ? (
                                      <CircleDot className="h-4 w-4 text-accent" />
                                    ) : (
                                      <span>{lessonNumber}</span>
                                    )}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="truncate text-sm font-medium">{lesson.title}</div>
                                    <div className="text-xs text-muted-foreground">Lesson {lessonNumber}</div>
                                  </div>
                                  {done && (
                                    <Badge variant="secondary" className="bg-primary/10 text-primary">Done</Badge>
                                  )}
                                  {inProgress && (
                                    <Badge variant="secondary" className="bg-accent/10 text-accent">In progress</Badge>
                                  )}
                                  {!lessonLocked && !done && !inProgress && (
                                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                  )}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>

                        {/* Module actions */}
                        <div className="mt-4 flex flex-wrap gap-2 border-t border-border/40 pt-4">
                          <Button asChild size="sm" variant="default" disabled={isLocked} className="press-scale">
                            <Link href={isLocked ? "#" : `/curriculum/${id}`}>
                              <BookOpen className="mr-1.5 h-4 w-4" />
                              Module details
                            </Link>
                          </Button>
                          <Button asChild size="sm" variant="outline" disabled={isLocked} className="press-scale">
                            <Link href={isLocked ? "#" : `/lessons/${id}/1`}>
                              {isCompleted ? "Review module" : "Start module"}
                              <ArrowRight className="ml-1.5 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button asChild size="sm" variant={hasAssessment ? "outline" : "secondary"} disabled={isLocked} className="press-scale">
                            <Link href={isLocked ? "#" : `/assessment/${id}`}>
                              <FileCheck className="mr-1.5 h-4 w-4" />
                              {hasAssessment ? "Review assessment" : "Take assessment"}
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })
        )}
      </div>
    </div>
  )
}

function ContinueLearningButton() {
  const [next, setNext] = useState<{ moduleId: number; lessonId: number } | null>(null)

  useEffect(() => {
    setNext(getNextIncompleteLesson())
  }, [])

  if (!next) return null

  return (
    <Button asChild size="sm" className="press-scale">
      <Link href={`/lessons/${next.moduleId}/${next.lessonId}`}>
        Continue learning
        <ArrowRight className="ml-1.5 h-4 w-4" />
      </Link>
    </Button>
  )
}
