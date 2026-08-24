"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Circle,
  Layers,
  Lock,
  Play,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { curriculumData } from "@/lib/curriculum-data"
import {
  getLastAccessedLesson,
  getNextIncompleteLesson,
  getContinueLesson,
  isAssessmentCompleted,
  isLessonCompleted,
  isModuleCompleted,
} from "@/lib/progress-service"

type Module = (typeof curriculumData.phases)[number]["modules"][number]
type Lesson = Module["lessons"][number]

/* -------------------------------------------------------------------------- */
/*  Per-phase color accents                                                    */
/* -------------------------------------------------------------------------- */

interface PhaseAccent {
  /** Subtle gradient overlay on the featured tile (used with bg-gradient-to-br). */
  featuredGradient: string
  /** Top color band on every tile in the phase. */
  borderBand: string
  /** Background tint behind the module number badge. */
  iconBg: string
  /** Foreground color of the module number badge. */
  iconText: string
  /** Stroke color for the circular SVG progress ring (literal HSL). */
  ringStroke: string
  /** Tailwind background utility for the linear progress indicator. */
  progressIndicator: string
  /** Small badge style for phase-related chips. */
  badgeClass: string
  /** Small label color for the phase title on the featured tile. */
  phaseLabel: string
}

const FOUNDATION_ACCENT: PhaseAccent = {
  featuredGradient:
    "from-emerald-50 via-card to-amber-50/30 dark:from-emerald-950/40 dark:via-card dark:to-amber-950/20",
  borderBand: "bg-emerald-500",
  iconBg: "bg-emerald-500/10",
  iconText: "text-emerald-700 dark:text-emerald-400",
  ringStroke: "hsl(158 64% 32%)",
  progressIndicator: "!bg-emerald-500",
  badgeClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  phaseLabel: "text-emerald-700 dark:text-emerald-400",
}

const INTERMEDIATE_ACCENT: PhaseAccent = {
  featuredGradient:
    "from-amber-50 via-card to-rose-50/30 dark:from-amber-950/40 dark:via-card dark:to-rose-950/20",
  borderBand: "bg-amber-500",
  iconBg: "bg-amber-500/10",
  iconText: "text-amber-700 dark:text-amber-400",
  ringStroke: "hsl(26 90% 37%)",
  progressIndicator: "!bg-amber-500",
  badgeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  phaseLabel: "text-amber-700 dark:text-amber-400",
}

const ADVANCED_ACCENT: PhaseAccent = {
  featuredGradient:
    "from-purple-50 via-card to-indigo-50/30 dark:from-purple-950/40 dark:via-card dark:to-indigo-950/20",
  borderBand: "bg-purple-500",
  iconBg: "bg-purple-500/10",
  iconText: "text-purple-700 dark:text-purple-400",
  ringStroke: "hsl(263 70% 50%)",
  progressIndicator: "!bg-purple-500",
  badgeClass: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  phaseLabel: "text-purple-700 dark:text-purple-400",
}

const PHASE_ACCENTS: PhaseAccent[] = [
  FOUNDATION_ACCENT,
  INTERMEDIATE_ACCENT,
  ADVANCED_ACCENT,
]

/* -------------------------------------------------------------------------- */
/*  Tile span map per the spec                                                */
/* -------------------------------------------------------------------------- */

function tileSpanForIndex(index: number): string {
  switch (index) {
    case 0:
      // Featured tile — large, spans two rows on desktop
      return "col-span-12 md:col-span-8 md:row-span-2"
    case 1:
    case 2:
    case 3:
      return "col-span-12 md:col-span-4"
    case 4:
    case 5:
      return "col-span-12 md:col-span-6"
    case 6:
      return "col-span-12 md:col-span-4"
    default:
      return "col-span-12 md:col-span-4"
  }
}

/* -------------------------------------------------------------------------- */
/*  Circular progress ring (SVG)                                              */
/* -------------------------------------------------------------------------- */

function CircularProgress({
  value,
  size = 56,
  stroke = 5,
  color,
}: {
  value: number
  size?: number
  stroke?: number
  color: string
}) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const dash = (value / 100) * circumference
  return (
    <div
      className="relative grid place-items-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${value}% complete`}
    >
      <svg
        className="absolute inset-0 -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
        />
      </svg>
      <span className="text-xs font-semibold">{value}%</span>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Status badge (Completed / Locked / Available)                             */
/* -------------------------------------------------------------------------- */

function StatusBadge({
  isCompleted,
  isLocked,
  compact = false,
}: {
  isCompleted: boolean
  isLocked: boolean
  compact?: boolean
}) {
  if (isCompleted) {
    return (
      <Badge
        variant="secondary"
        className="shrink-0 rounded-full bg-primary/10 text-primary"
      >
        <CheckCircle2 className="mr-1 h-3 w-3" />
        {!compact && "Completed"}
      </Badge>
    )
  }
  if (isLocked) {
    return (
      <Badge variant="outline" className="shrink-0 rounded-full">
        <Lock className="mr-1 h-3 w-3" />
        {!compact && "Locked"}
      </Badge>
    )
  }
  return (
    <Badge variant="secondary" className="shrink-0 rounded-full">
      <Circle className="mr-1 h-3 w-3" />
      {!compact && "Available"}
    </Badge>
  )
}

/* -------------------------------------------------------------------------- */
/*  Module tile — featured (large) or small                                   */
/* -------------------------------------------------------------------------- */

interface ModuleTileProps {
  id: number
  module: Module
  isFeatured: boolean
  span: string
  accent: PhaseAccent
  isOpen: boolean
  onToggle: () => void
  phaseTitle: string
  totalModulesInPhase: number
  totalLessonsInPhase: number
  phasePct: number
}

function ModuleTile({
  id,
  module: m,
  isFeatured,
  span,
  accent,
  isOpen,
  onToggle,
  phaseTitle,
  totalModulesInPhase,
  totalLessonsInPhase,
  phasePct,
}: ModuleTileProps) {
  const isLocked = !m.isAvailable
  const isCompleted = isModuleCompleted(id)
  const hasAssessment = isAssessmentCompleted(id)
  const lessonsCount = m.lessons.length
  const completedLessons = m.lessons.filter((_, i) =>
    isLessonCompleted(id, i + 1),
  ).length
  const pct =
    lessonsCount > 0
      ? Math.round((completedLessons / lessonsCount) * 100)
      : 0
  const last = getLastAccessedLesson()

  /* --------------------- Featured (1st module in phase) -------------------- */
  if (isFeatured) {
    return (
      <Card
        className={cn(
          "mosaic-tile relative overflow-hidden border-border/60 shadow-soft",
          "bg-gradient-to-br",
          accent.featuredGradient,
          span,
        )}
      >
        <div className={cn("absolute inset-x-0 top-0 h-1", accent.borderBand)} />
        <CardContent className="relative flex h-full flex-col p-5 md:p-6">
          {/* Top row: phase title + status */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={cn(
                "truncate text-[10px] font-semibold uppercase tracking-wider",
                accent.phaseLabel,
              )}
            >
              {phaseTitle}
            </span>
            <StatusBadge isCompleted={isCompleted} isLocked={isLocked} />
          </div>

          {/* Module number + ring + title + description */}
          <div className="mt-3 flex items-start gap-4">
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "grid h-14 w-14 place-items-center rounded-2xl text-2xl font-bold",
                  accent.iconBg,
                  accent.iconText,
                )}
              >
                {id}
              </div>
              <CircularProgress
                value={pct}
                size={56}
                stroke={5}
                color={accent.ringStroke}
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs text-muted-foreground">Module {id}</div>
              <h3 className="text-lg font-bold leading-tight md:text-xl">
                {m.title}
              </h3>
              <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">
                {m.description}
              </p>
            </div>
          </div>

          {/* Phase summary chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="rounded-full">
              <Layers className="mr-1 h-3 w-3" />
              {totalModulesInPhase} modules
            </Badge>
            <Badge variant="outline" className="rounded-full">
              <BookOpen className="mr-1 h-3 w-3" />
              {totalLessonsInPhase} lessons
            </Badge>
            <Badge
              variant="secondary"
              className={cn("rounded-full", accent.badgeClass)}
            >
              {completedLessons}/{lessonsCount} done
            </Badge>
            <Badge
              variant="secondary"
              className={cn("rounded-full", accent.badgeClass)}
            >
              {phasePct}% phase
            </Badge>
          </div>

          {/* Accordion toggle */}
          <button
            type="button"
            onClick={onToggle}
            disabled={isLocked}
            className={cn(
              "press-scale mt-3 flex w-full items-center justify-between rounded-xl border border-border/60 bg-card/60 px-3 py-2 text-sm font-medium",
              isLocked && "cursor-not-allowed opacity-60",
            )}
            aria-expanded={isOpen}
            aria-controls={`lessons-${id}`}
          >
            <span className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              {isOpen ? "Hide lessons" : `Show ${lessonsCount} lessons`}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "rotate-180",
              )}
            />
          </button>

          {/* Accordion content */}
          {isOpen && !isLocked && (
            <ul
              id={`lessons-${id}`}
              className="mt-2 divide-y divide-border/40 border-t border-border/40"
            >
              {m.lessons.map((lesson: Lesson, i: number) => {
                const lessonNumber = i + 1
                const done = isLessonCompleted(id, lessonNumber)
                const inProgress =
                  !done &&
                  lessonNumber === last.lessonId &&
                  id === last.moduleId
                return (
                  <li key={`${id}-${lessonNumber}`}>
                    <Link
                      href={`/lessons/${id}/${lessonNumber}`}
                      className="press-scale flex items-center gap-3 px-2 py-2.5 text-sm transition-colors hover:bg-muted/40"
                    >
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-muted/60 text-xs font-semibold">
                        {done ? (
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        ) : inProgress ? (
                          <Circle className="h-4 w-4 text-accent" />
                        ) : (
                          <span>{lessonNumber}</span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-medium">
                          {lesson.title}
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          Lesson {lessonNumber}
                        </div>
                      </div>
                      {done ? (
                        <Badge
                          variant="secondary"
                          className="shrink-0 bg-primary/10 text-primary"
                        >
                          Done
                        </Badge>
                      ) : inProgress ? (
                        <Badge
                          variant="secondary"
                          className="shrink-0 bg-accent/10 text-accent"
                        >
                          In progress
                        </Badge>
                      ) : (
                        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}

          {/* Footer actions */}
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            <Button
              asChild
              size="sm"
              disabled={isLocked}
              className="press-scale"
            >
              <Link href={isLocked ? "#" : `/lessons/${id}/1`}>
                <Play className="mr-1.5 h-4 w-4" />
                {isCompleted ? "Review module" : "Start module"}
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              disabled={isLocked}
              className="press-scale"
            >
              <Link href={isLocked ? "#" : `/assessment/${id}`}>
                <CheckCircle2 className="mr-1.5 h-4 w-4" />
                {hasAssessment ? "Review assessment" : "Take assessment"}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  /* --------------------------- Smaller module tile ------------------------- */
  return (
    <Card
      className={cn(
        "mosaic-tile relative overflow-hidden border-border/60 bg-card shadow-soft",
        span,
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1", accent.borderBand)} />
      <CardContent className="relative flex h-full flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div
            className={cn(
              "grid h-10 w-10 place-items-center rounded-xl text-lg font-bold",
              accent.iconBg,
              accent.iconText,
            )}
          >
            {id}
          </div>
          <StatusBadge isCompleted={isCompleted} isLocked={isLocked} compact />
        </div>
        <Link
          href={isLocked ? "#" : `/lessons/${id}/1`}
          className="press-scale mt-2 flex flex-1 flex-col text-left"
          onClick={(e) => {
            if (isLocked) e.preventDefault()
          }}
          aria-disabled={isLocked}
        >
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Module {id}
          </div>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug">
            {m.title}
          </h3>
          <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>
              {completedLessons}/{lessonsCount} lessons
            </span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
          <Progress
            value={pct}
            className="mt-2 h-1.5"
            indicatorClassName={accent.progressIndicator}
          />
        </Link>
      </CardContent>
    </Card>
  )
}

/* -------------------------------------------------------------------------- */
/*  Continue-learning button (top-right of page header)                       */
/* -------------------------------------------------------------------------- */

function ContinueLearningButton() {
  const [next, setNext] = useState<{
    moduleId: number
    lessonId: number
  } | null>(null)

  useEffect(() => {
    setNext(getContinueLesson())
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

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function CurriculumPage() {
  const [hydrated, setHydrated] = useState(false)
  const [expandedModules, setExpandedModules] = useState<Set<number>>(
    new Set(),
  )

  useEffect(() => {
    // Pre-expand the module containing the user's continue-learning lesson
    const next = getContinueLesson()
    setExpandedModules(new Set([next.moduleId]))
    setHydrated(true)
  }, [])

  // Static phase structure (no localStorage reads, safe to memoize once)
  const phasesWithModules = useMemo(() => {
    return curriculumData.phases.map((phase, phaseIndex) => {
      const phaseModules: Array<{
        id: number
        module: Module
        indexInPhase: number
      }> = []
      let id = 0
      for (let p = 0; p <= phaseIndex; p++) {
        const ph = curriculumData.phases[p]
        for (let m = 0; m < ph.modules.length; m++) {
          id += 1
          if (p === phaseIndex) {
            phaseModules.push({
              id,
              module: ph.modules[m],
              indexInPhase: m,
            })
          }
        }
      }
      const totalModules = phase.modules.length
      const totalLessons = phase.modules.reduce(
        (s, mod) => s + mod.lessons.length,
        0,
      )
      return {
        phase,
        phaseIndex,
        modules: phaseModules,
        totalModules,
        totalLessons,
      }
    })
  }, [])

  const totalModulesAllPhases = phasesWithModules.reduce(
    (s, p) => s + p.totalModules,
    0,
  )
  const totalLessonsAllPhases = phasesWithModules.reduce(
    (s, p) => s + p.totalLessons,
    0,
  )

  const toggleModule = (id: number) => {
    setExpandedModules((prev) => {
      const nextSet = new Set(prev)
      if (nextSet.has(id)) {
        nextSet.delete(id)
      } else {
        nextSet.add(id)
      }
      return nextSet
    })
  }

  if (!hydrated) {
    return (
      <div className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
        <div className="h-10 w-1/3 rounded skeleton-shimmer" />
        <div className="mt-6 space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-40 rounded-xl skeleton-shimmer" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      {/* Page header */}
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Curriculum
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {totalModulesAllPhases} modules · {totalLessonsAllPhases} lessons ·
            30-day plan
          </p>
        </div>
        <ContinueLearningButton />
      </div>

      {/* Phase sections */}
      <div className="space-y-10">
        {phasesWithModules.map((phaseData) => {
          const accent =
            PHASE_ACCENTS[phaseData.phaseIndex] ?? FOUNDATION_ACCENT
          // Compute progress live — reads localStorage on the client only.
          const completedLessonsInPhase = phaseData.modules.reduce(
            (s, entry) =>
              s +
              entry.module.lessons.filter((_, i) =>
                isLessonCompleted(entry.id, i + 1),
              ).length,
            0,
          )
          const phasePct =
            phaseData.totalLessons > 0
              ? Math.round(
                  (completedLessonsInPhase / phaseData.totalLessons) * 100,
                )
              : 0

          return (
            <section
              key={phaseData.phase.title}
              className="space-y-4"
              aria-labelledby={`phase-${phaseData.phaseIndex}-title`}
            >
              {/* Phase header */}
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
                <div className={cn("h-1.5 w-full", accent.borderBand)} />
                <div className="p-5 md:p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                            accent.badgeClass,
                          )}
                        >
                          Phase {phaseData.phaseIndex + 1}
                        </span>
                        <h2
                          id={`phase-${phaseData.phaseIndex}-title`}
                          className="text-lg font-bold tracking-tight md:text-xl"
                        >
                          {phaseData.phase.title}
                        </h2>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {phaseData.phase.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-2 md:items-end">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Layers className="h-3.5 w-3.5" />
                        <span>
                          {phaseData.totalModules} modules ·{" "}
                          {phaseData.totalLessons} lessons
                        </span>
                      </div>
                      <Badge
                        variant="secondary"
                        className={cn("rounded-full", accent.badgeClass)}
                      >
                        {phasePct}% complete
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Progress
                      value={phasePct}
                      className="h-2"
                      indicatorClassName={accent.progressIndicator}
                    />
                  </div>
                </div>
              </div>

              {/* Mosaic grid of module tiles */}
              <div className="grid grid-cols-12 gap-4 [grid-auto-rows:minmax(140px,auto)]">
                {phaseData.modules.map((entry) => {
                  const isFeatured = entry.indexInPhase === 0
                  const span = tileSpanForIndex(entry.indexInPhase)
                  const isOpen = expandedModules.has(entry.id)
                  return (
                    <ModuleTile
                      key={entry.id}
                      id={entry.id}
                      module={entry.module}
                      isFeatured={isFeatured}
                      span={span}
                      accent={accent}
                      isOpen={isOpen}
                      onToggle={() => toggleModule(entry.id)}
                      phaseTitle={phaseData.phase.title}
                      totalModulesInPhase={phaseData.totalModules}
                      totalLessonsInPhase={phaseData.totalLessons}
                      phasePct={phasePct}
                    />
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
