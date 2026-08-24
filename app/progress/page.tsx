"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Flame,
  Clock,
  Award,
  Target,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  loadProgress,
  getStreak,
  getTotalLessonCount,
} from "@/lib/progress-service"
import {
  loadReviewCards,
  getDueCount,
  getLearnedCount,
  getMasteredCount,
} from "@/lib/spaced-repetition"
import { curriculumData } from "@/lib/curriculum-data"

export default function ProgressPage() {
  const [hydrated, setHydrated] = useState(false)
  const [progress, setProgress] = useState<ReturnType<typeof loadProgress> | null>(null)
  const [streak, setStreak] = useState(0)
  const [totalLessons, setTotalLessons] = useState(0)
  const [reviewStats, setReviewStats] = useState<{ due: number; learned: number; mastered: number; total: number }>({
    due: 0,
    learned: 0,
    mastered: 0,
    total: 0,
  })

  useEffect(() => {
    setProgress(loadProgress())
    setStreak(getStreak().count)
    setTotalLessons(getTotalLessonCount())
    // Load review deck stats
    try {
      const cards = loadReviewCards()
      setReviewStats({
        due: getDueCount(cards),
        learned: getLearnedCount(cards),
        mastered: getMasteredCount(cards),
        total: cards.length,
      })
    } catch {
      // Review deck not yet initialised — leave the zeros
    }
    setHydrated(true)
  }, [])

  if (!hydrated || !progress) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 py-8 space-y-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-24 rounded-xl skeleton-shimmer" />
        ))}
      </div>
    )
  }

  const completed = progress.completedLessons.length
  const totalMinutes = progress.totalStudyMinutes ?? 0
  const overallPct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0

  // Per-module progress
  const moduleRows: Array<{ id: number; title: string; total: number; done: number; pct: number }> = []
  let id = 0
  for (const phase of curriculumData.phases) {
    for (const module of phase.modules) {
      id += 1
      const done = progress.completedLessons.filter((k) => k.startsWith(`${id}_`)).length
      moduleRows.push({
        id,
        title: module.title,
        total: module.lessons.length,
        done,
        pct: Math.round((done / module.lessons.length) * 100),
      })
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 md:px-6 md:py-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Progress</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Track your journey through the Iqroh curriculum.
        </p>
      </div>

      <Card className="border-border/60 shadow-soft">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative grid h-24 w-24 place-items-center">
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
                    strokeDasharray={`${(overallPct / 100) * 97.4} 97.4`}
                  />
                </svg>
                <div className="text-center">
                  <div className="text-lg font-bold leading-none text-primary">{overallPct}%</div>
                  <div className="text-[10px] text-muted-foreground">complete</div>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Overall progress</div>
                <div className="text-xl font-bold">{completed} / {totalLessons} lessons</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {totalLessons - completed} lessons remaining
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              <StatTile icon={Flame} value={streak} label="Day streak" tone="accent" />
              <StatTile icon={Clock} value={`${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m`} label="Study time" tone="primary" />
              <StatTile icon={BookOpen} value={progress.completedModules.length} label="Modules done" tone="accent" />
              <StatTile icon={Target} value={progress.completedAssessments.length} label="Assessments" tone="primary" />
              <StatTile icon={Award} value={progress.reviewedCards ?? 0} label="Cards reviewed" tone="accent" />
              <StatTile icon={Calendar} value={progress.activityLog?.length ?? 0} label="Sessions" tone="primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-soft">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Per-module progress</CardTitle>
          <CardDescription>Tap a module to open its lessons</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {moduleRows.map((row) => (
            <Link
              key={row.id}
              href={`/curriculum/${row.id}`}
              className="block rounded-lg border border-border/40 bg-muted/30 px-3 py-2.5 press-scale"
            >
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs text-muted-foreground">M{row.id}</span>
                  <span className="truncate font-medium">{row.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{row.done}/{row.total}</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">{row.pct}%</Badge>
                </div>
              </div>
              <Progress value={row.pct} className="mt-1.5 h-1" />
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Review deck stats */}
      <Card className="border-border/60 shadow-soft">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Review deck</CardTitle>
            <Button asChild variant="ghost" size="sm">
              <Link href="/review">
                Open review
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <CardDescription>Spaced-repetition cards (letters, harakat, vocabulary)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <ReviewStatTile label="Due now" value={reviewStats.due} tone="amber" />
            <ReviewStatTile label="Learning" value={reviewStats.learned} tone="sky" />
            <ReviewStatTile label="Mastered" value={reviewStats.mastered} tone="emerald" />
            <ReviewStatTile label="Total cards" value={reviewStats.total} tone="purple" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-soft">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Achievements</CardTitle>
            <Award className="h-4 w-4 text-accent" />
          </div>
          <CardDescription>Milestones you&apos;ve unlocked</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <AchievementTile
              icon={BookOpen}
              title="First lesson"
              description="Complete your first lesson"
              unlocked={completed >= 1}
            />
            <AchievementTile
              icon={Flame}
              title="3-day streak"
              description="Study 3 days in a row"
              unlocked={streak >= 3}
            />
            <AchievementTile
              icon={Flame}
              title="7-day streak"
              description="Study 7 days in a row"
              unlocked={streak >= 7}
            />
            <AchievementTile
              icon={Award}
              title="First module"
              description="Complete a full module"
              unlocked={progress.completedModules.length >= 1}
            />
            <AchievementTile
              icon={Target}
              title="First assessment"
              description="Pass an assessment"
              unlocked={progress.completedAssessments.length >= 1}
            />
            <AchievementTile
              icon={TrendingUp}
              title="Quarter way"
              description="Complete 25% of all lessons"
              unlocked={overallPct >= 25}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 bg-muted/30 shadow-soft">
        <CardContent className="flex items-center justify-between gap-3 p-5">
          <div>
            <div className="font-semibold">Keep going</div>
            <div className="text-sm text-muted-foreground">Open your next lesson to maintain momentum.</div>
          </div>
          <Button asChild className="press-scale">
            <Link href="/curriculum">
              Browse curriculum
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function StatTile({
  icon: Icon,
  value,
  label,
  tone,
}: {
  icon: React.ComponentType<{ className?: string }>
  value: number | string
  label: string
  tone: "primary" | "accent"
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-muted/30 px-3 py-2">
      <div
        className={cn(
          "grid h-9 w-9 place-items-center rounded-lg",
          tone === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent",
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="leading-tight">
        <div className="text-base font-bold">{value}</div>
        <div className="text-[10px] text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}

function AchievementTile({
  icon: Icon,
  title,
  description,
  unlocked,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  unlocked: boolean
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-3 text-center transition-colors",
        unlocked
          ? "border-primary/30 bg-primary/5"
          : "border-border/40 bg-muted/20 opacity-60",
      )}
    >
      <div className={cn("mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full", unlocked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-xs font-semibold">{title}</div>
      <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">{description}</div>
    </div>
  )
}

function ReviewStatTile({
  label,
  value,
  tone,
}: {
  label: string
  value: number
  tone: "amber" | "sky" | "emerald" | "purple"
}) {
  const toneClasses = {
    amber: "text-amber-600",
    sky: "text-sky-600",
    emerald: "text-emerald-600",
    purple: "text-purple-600",
  }
  return (
    <div className="rounded-lg border border-border/40 bg-muted/30 p-3 text-center">
      <div className={cn("text-2xl font-bold", toneClasses[tone])}>{value}</div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">{label}</div>
    </div>
  )
}
