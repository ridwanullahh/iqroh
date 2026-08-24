"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Repeat,
  TrendingUp,
  Flame,
  Sparkles,
  Play,
  Volume2,
  Calendar,
  Award,
  Target,
  ListChecks,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  getStreak,
  getNextIncompleteLesson,
  getContinueLesson,
  getRecentActivity,
  getModuleById,
  getTotalLessonCount,
  loadProgress,
  isLessonCompleted,
  type ActivityEntry,
} from "@/lib/progress-service"
import { speakArabicText } from "@/lib/audio-utils"
import { useToast } from "@/hooks/use-toast"

const FEATURED_LETTERS = [
  { ar: "ب", en: "Baa", tr: "ba" },
  { ar: "ت", en: "Taa", tr: "ta" },
  { ar: "ث", en: "Thaa", tr: "tha" },
  { ar: "ج", en: "Jeem", tr: "ja" },
  { ar: "ح", en: "Haa", tr: "ḥa" },
  { ar: "خ", en: "Khaa", tr: "kha" },
  { ar: "د", en: "Daal", tr: "da" },
  { ar: "ذ", en: "Dhaal", tr: "dha" },
  { ar: "ر", en: "Raa", tr: "ra" },
  { ar: "ز", en: "Zaay", tr: "za" },
  { ar: "س", en: "Seen", tr: "sa" },
  { ar: "ش", en: "Sheen", tr: "sha" },
  { ar: "ص", en: "Saad", tr: "ṣa" },
  { ar: "ض", en: "Daad", tr: "ḍa" },
  { ar: "ط", en: "Taa", tr: "ṭa" },
  { ar: "ظ", en: "Zaa", tr: "ẓa" },
  { ar: "ع", en: "Ayn", tr: "ʿa" },
  { ar: "غ", en: "Ghayn", tr: "gha" },
  { ar: "ف", en: "Faa", tr: "fa" },
  { ar: "ق", en: "Qaaf", tr: "qa" },
  { ar: "ك", en: "Kaaf", tr: "ka" },
  { ar: "ل", en: "Laam", tr: "la" },
  { ar: "م", en: "Meem", tr: "ma" },
  { ar: "ن", en: "Noon", tr: "na" },
  { ar: "ه", en: "Haa", tr: "ha" },
  { ar: "و", en: "Waaw", tr: "wa" },
  { ar: "ي", en: "Yaa", tr: "ya" },
  { ar: "ا", en: "Alif", tr: "a" },
  { ar: "ء", en: "Hamza", tr: "'" },
]

function useHijriDate(): string {
  const [hijri, setHijri] = useState<string>("")

  useEffect(() => {
    try {
      const fmt = new Intl.DateTimeFormat("en-US", {
        calendar: "islamic-umalqura",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      setHijri(fmt.format(new Date()))
    } catch {
      // Fallback to Gregorian if the Islamic calendar is unavailable
      setHijri(
        new Intl.DateTimeFormat("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date()),
      )
    }
  }, [])

  return hijri
}

function useFeaturedLetter() {
  return useMemo(() => {
    const dayOfYear = Math.floor(Date.now() / 86_400_000)
    return FEATURED_LETTERS[dayOfYear % FEATURED_LETTERS.length]
  }, [])
}

export default function HomePage() {
  const hijriDate = useHijriDate()
  const featured = useFeaturedLetter()
  const [streak, setStreak] = useState(0)
  const [continueLesson, setContinueLesson] = useState<{
    moduleId: number
    lessonId: number
  } | null>(null)
  const [activity, setActivity] = useState<ActivityEntry[]>([])
  const [completedCount, setCompletedCount] = useState(0)
  const [totalLessons, setTotalLessons] = useState(0)
  const [isPlayingFeatured, setIsPlayingFeatured] = useState(false)
  const [playingLetter, setPlayingLetter] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    setStreak(getStreak().count)
    setContinueLesson(getContinueLesson())
    setActivity(getRecentActivity(5))
    setTotalLessons(getTotalLessonCount())
    setCompletedCount(loadProgress().completedLessons.length)
  }, [])

  const handlePlayFeatured = async () => {
    if (isPlayingFeatured) return
    try {
      setIsPlayingFeatured(true)
      await speakArabicText(featured.ar)
      setIsPlayingFeatured(false)
    } catch (err) {
      console.error(err)
      toast({
        title: "Audio unavailable",
        description: "Speech synthesis failed. Please try again.",
        variant: "destructive",
      })
      setIsPlayingFeatured(false)
    }
  }

  const handlePlayLetter = async (ar: string) => {
    if (playingLetter) return
    try {
      setPlayingLetter(ar)
      await speakArabicText(ar)
      setPlayingLetter(null)
    } catch (err) {
      console.error(err)
      toast({
        title: "Audio unavailable",
        description: "Speech synthesis failed. Please try again.",
        variant: "destructive",
      })
      setPlayingLetter(null)
    }
  }

  const moduleOf = continueLesson ? getModuleById(continueLesson.moduleId) : null
  const continueTitle =
    moduleOf?.lessons?.[continueLesson ? continueLesson.lessonId - 1 : 0]?.title ?? "Lesson"
  const continueHref = continueLesson
    ? `/lessons/${continueLesson.moduleId}/${continueLesson.lessonId}`
    : "/curriculum"

  const overallPct =
    totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <div
        className="grid grid-cols-12 gap-3 sm:gap-4 [grid-auto-rows:minmax(120px,auto)] sm:[grid-auto-rows:minmax(140px,auto)]"
      >
        {/* ───────────────────────── HERO TILE — span 8, span 2 ───────────────────────── */}
        <Card
          className={cn(
            "mosaic-tile col-span-12 sm:col-span-8 sm:row-span-2 relative overflow-hidden",
            "border-border/60 shadow-soft",
            "bg-gradient-to-br from-emerald-50 via-background to-amber-50/30",
            "dark:from-emerald-950/40 dark:to-amber-950/20",
          )}
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />
          <CardContent className="relative flex h-full flex-col justify-between gap-4 p-6 md:p-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                <span>{hijriDate || "Loading today's date..."}</span>
                <span aria-hidden>·</span>
                <span>Today</span>
              </div>
              <h1 className="font-arabic text-4xl text-foreground md:text-6xl">
                السلام عليكم
              </h1>
              <p className="max-w-prose text-sm text-muted-foreground md:text-base">
                Assalamu alaikum. Welcome back to Iqroh. Let us continue your
                Qur&apos;anic reading journey — one letter at a time, by the
                permission of ALLAH.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="secondary"
                className="rounded-full bg-primary/10 text-primary"
              >
                <Sparkles className="mr-1 h-3 w-3" />
                {overallPct}% complete
              </Badge>
              <Badge variant="outline" className="rounded-full">
                <BookOpen className="mr-1 h-3 w-3" />
                {completedCount} / {totalLessons} lessons
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* ───────────────────── FEATURED LETTER TILE — span 4, span 2 ───────────────────── */}
        <Card
          className={cn(
            "mosaic-tile col-span-12 sm:col-span-4 sm:row-span-2 relative overflow-hidden",
            "border-border/60 bg-gradient-primary text-primary-foreground",
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-black/10" />
          <CardContent className="relative flex h-full flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">
                Featured Letter
              </span>
              <Sparkles className="h-4 w-4 opacity-80" />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-1.5 py-3">
              <span className="font-arabic text-7xl leading-none drop-shadow-sm md:text-8xl">
                {featured.ar}
              </span>
              <span className="text-xs opacity-90">
                {featured.en} · <span className="font-mono">{featured.tr}</span>
              </span>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePlayFeatured}
              disabled={isPlayingFeatured}
              className="press-scale w-full border border-white/20 bg-white/15 text-primary-foreground backdrop-blur-sm hover:bg-white/25"
            >
              <Volume2 className="mr-1.5 h-4 w-4" />
              {isPlayingFeatured ? "Playing..." : "Play pronunciation"}
            </Button>
          </CardContent>
        </Card>

        {/* ───────────────────────── STREAK TILE — span 4, span 1 ───────────────────────── */}
        <Card className="mosaic-tile col-span-12 sm:col-span-4 border-border/60 shadow-soft">
          <CardContent className="flex h-full items-center gap-4 p-5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
              <Flame className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Daily Streak
              </div>
              <div className="flex items-end gap-1.5">
                <span className="text-3xl font-bold leading-none text-primary">
                  {streak}
                </span>
                <span className="pb-0.5 text-xs text-muted-foreground">days</span>
              </div>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                Open the app daily to keep it alive.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* ─────────────── CONTINUE LEARNING TILE — span 4, span 1 ─────────────── */}
        <Card className="mosaic-tile col-span-12 sm:col-span-4 border-border/60 shadow-soft">
          <CardContent className="flex h-full flex-col gap-2 p-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Continue Learning
              </span>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </div>
            {continueLesson ? (
              <>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{continueTitle}</div>
                  <div className="text-[11px] text-muted-foreground">
                    Module {continueLesson.moduleId} · Lesson {continueLesson.lessonId}
                  </div>
                </div>
                <Button asChild size="sm" className="press-scale mt-auto w-full">
                  <Link href={continueHref}>
                    <Play className="mr-1.5 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </>
            ) : (
              <div className="text-sm text-muted-foreground">
                No incomplete lessons found.
              </div>
            )}
          </CardContent>
        </Card>

        {/* ─────────────── INSPIRATIONAL QUOTE TILE — span 4, span 1 (fills row 3) ─────────────── */}
        <Card className="mosaic-tile col-span-12 sm:col-span-4 border-border/60 bg-muted/30 shadow-soft">
          <CardContent className="flex h-full flex-col justify-center gap-1.5 p-5 text-center">
            <Award className="mx-auto h-5 w-5 text-accent" />
            <p className="text-xs leading-snug text-muted-foreground">
              &ldquo;And We have certainly made the Qur&apos;an easy for
              remembrance, so is there any who will remember?&rdquo;
            </p>
            <p className="text-[10px] text-muted-foreground/80">Qur&apos;an 54:17</p>
          </CardContent>
        </Card>

        {/* ───────────────── 4 QUICK ACTION TILES — each span 3 ───────────────── */}
        <QuickActionCard
          className="col-span-12 sm:col-span-3"
          href={continueHref}
          icon={BookOpen}
          title="Start New Lesson"
          description="Jump to your next lesson"
          tone="primary"
        />
        <QuickActionCard
          className="col-span-12 sm:col-span-3"
          href="/review"
          icon={Repeat}
          title="Review Due Cards"
          description="Spaced-repetition review"
          tone="accent"
        />
        <QuickActionCard
          className="col-span-12 sm:col-span-3"
          href="/assessment/1"
          icon={Target}
          title="Take Assessment"
          description="Test your mastery"
          tone="primary"
        />
        <QuickActionCard
          className="col-span-12 sm:col-span-3"
          href="/progress"
          icon={TrendingUp}
          title="View Progress"
          description="Streaks, achievements"
          tone="accent"
        />

        {/* ─────────────── TODAY'S LETTER TILE — span 6, span 1 ─────────────── */}
        <Card className="mosaic-tile col-span-12 sm:col-span-6 border-border/60 shadow-soft">
          <CardContent className="flex h-full items-center gap-5 p-5">
            <button
              type="button"
              onClick={handlePlayFeatured}
              disabled={isPlayingFeatured}
              className="press-scale grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-medium disabled:opacity-70"
              aria-label={`Play pronunciation of ${featured.en}`}
            >
              <span className="font-arabic text-5xl leading-none">{featured.ar}</span>
            </button>
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Today&apos;s Letter
                </span>
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-xl font-bold">{featured.en}</div>
              <div className="text-xs text-muted-foreground">
                Transliteration:{" "}
                <span className="font-mono">{featured.tr}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handlePlayFeatured}
                disabled={isPlayingFeatured}
                className="press-scale mt-1 h-7"
              >
                <Volume2 className="mr-1.5 h-3.5 w-3.5" />
                {isPlayingFeatured ? "Playing..." : "Play"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* ─────────────── RECENT ACTIVITY TILE — span 6, span 1 ─────────────── */}
        <Card className="mosaic-tile col-span-12 sm:col-span-6 border-border/60 shadow-soft">
          <CardContent className="flex h-full flex-col gap-2 p-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Recent Activity
              </span>
              <ListChecks className="h-4 w-4 text-muted-foreground" />
            </div>
            {activity.length === 0 ? (
              <div className="grid flex-1 place-items-center text-center text-xs text-muted-foreground">
                No lessons yet. Complete a lesson to see it here.
              </div>
            ) : (
              <ul className="flex-1 space-y-1.5 overflow-hidden">
                {activity.slice(0, 3).map((entry) => {
                  const done = isLessonCompleted(entry.moduleId, entry.lessonId)
                  return (
                    <li
                      key={`${entry.moduleId}_${entry.lessonId}_${entry.date}`}
                    >
                      <Link
                        href={`/lessons/${entry.moduleId}/${entry.lessonId}`}
                        className="press-scale flex items-center justify-between gap-2 rounded-lg border border-border/40 bg-muted/30 px-2.5 py-1.5 text-xs"
                      >
                        <div className="min-w-0">
                          <div className="truncate font-medium">
                            {entry.lessonTitle}
                          </div>
                          <div className="text-[10px] text-muted-foreground">
                            M{entry.moduleId} · L{entry.lessonId} ·{" "}
                            {new Date(entry.date).toLocaleDateString()}
                          </div>
                        </div>
                        {done ? (
                          <Badge
                            variant="secondary"
                            className="shrink-0 bg-primary/10 px-1.5 py-0 text-[10px] text-primary"
                          >
                            Done
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="shrink-0 px-1.5 py-0 text-[10px]"
                          >
                            In progress
                          </Badge>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </CardContent>
        </Card>

        {/* ─────────────── ALL 28 LETTERS TILE — span 12, auto height ─────────────── */}
        <Card className="mosaic-tile col-span-12 border-border/60 shadow-soft">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">All 28 Arabic Letters</CardTitle>
              <Button asChild variant="ghost" size="sm" className="press-scale h-7">
                <Link href="/curriculum">
                  View curriculum
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
            <CardDescription className="text-xs">
              Tap any letter to hear its pronunciation. Practice daily for
              mastery, in sha ALLAH.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
              {FEATURED_LETTERS.map((letter) => {
                const isPlayingThis = playingLetter === letter.ar
                return (
                  <button
                    key={letter.en}
                    type="button"
                    onClick={() => handlePlayLetter(letter.ar)}
                    disabled={!!playingLetter}
                    className={cn(
                      "press-scale flex flex-col items-center justify-center gap-0.5 rounded-xl border border-border/40 bg-muted/30 p-2",
                      "transition-colors hover:border-primary/40 hover:bg-primary/5",
                      isPlayingThis && "border-primary bg-primary/10",
                    )}
                    aria-label={`Play pronunciation of ${letter.en}`}
                  >
                    <span className="font-arabic text-3xl leading-none text-foreground">
                      {letter.ar}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {letter.en}
                    </span>
                    {isPlayingThis ? (
                      <Volume2 className="h-3 w-3 text-primary" />
                    ) : null}
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function QuickActionCard({
  className,
  href,
  icon: Icon,
  title,
  description,
  tone,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  tone: "primary" | "accent"
}) {
  return (
    <Link href={href} className="block h-full">
      <Card
        className={cn(
          "mosaic-tile h-full border-border/60 shadow-soft",
          className,
        )}
      >
        <CardContent className="flex h-full flex-col p-4">
          <div
            className={cn(
              "mb-3 grid h-10 w-10 place-items-center rounded-xl",
              tone === "primary"
                ? "bg-primary/10 text-primary"
                : "bg-accent/10 text-accent",
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-sm font-semibold leading-tight">{title}</div>
          <div className="mt-0.5 text-xs text-muted-foreground">{description}</div>
        </CardContent>
      </Card>
    </Link>
  )
}
