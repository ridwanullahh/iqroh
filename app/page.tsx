"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Repeat,
  TrendingUp,
  User,
  Flame,
  Sparkles,
  Play,
  Volume2,
  Calendar,
  Award,
  Target,
  ListChecks,
  Clock,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  getStreak,
  getNextIncompleteLesson,
  getRecentActivity,
  getModuleById,
  getTotalLessonCount,
  loadProgress,
  isLessonCompleted,
  type ActivityEntry,
} from "@/lib/progress-service"
import { speakArabicText } from "@/lib/audio-utils"
import { useToast } from "@/hooks/use-toast"
import { curriculumData } from "@/lib/curriculum-data"

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
      // Fallback to Gregorian
      setHijri(new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(new Date()))
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
  const [continueLesson, setContinueLesson] = useState<{ moduleId: number; lessonId: number } | null>(null)
  const [activity, setActivity] = useState<ActivityEntry[]>([])
  const [completedCount, setCompletedCount] = useState(0)
  const [totalLessons, setTotalLessons] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setStreak(getStreak().count)
    setContinueLesson(getNextIncompleteLesson())
    setActivity(getRecentActivity(5))
    setTotalLessons(getTotalLessonCount())
    setCompletedCount(loadProgress().completedLessons.length)
  }, [])

  const handlePlayFeatured = async () => {
    try {
      setIsPlaying(true)
      await speakArabicText(featured.ar)
      setIsPlaying(false)
    } catch (err) {
      console.error(err)
      toast({
        title: "Audio unavailable",
        description: "Speech synthesis failed. Please try again.",
        variant: "destructive",
      })
      setIsPlaying(false)
    }
  }

  const moduleOf = continueLesson ? getModuleById(continueLesson.moduleId) : null
  const continueTitle = moduleOf?.lessons?.[continueLesson ? continueLesson.lessonId - 1 : 0]?.title ?? "Lesson"

  const overallPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 md:px-6 md:py-8 space-y-6">
      {/* Greeting */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-soft"
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>{hijriDate}</span>
              <span aria-hidden>·</span>
              <span>Today</span>
            </div>
            <h1 className="font-arabic text-3xl text-foreground md:text-4xl">السلام عليكم</h1>
            <p className="text-sm text-muted-foreground">
              Assalamu alaikum. Welcome back to Iqroh. Let&apos;s continue your Qur&apos;anic reading journey.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="rounded-full bg-primary/10 text-primary">
              <Sparkles className="mr-1 h-3 w-3" />
              {overallPct}% complete
            </Badge>
          </div>
        </div>
      </motion.section>

      {/* Continue learning + Streak */}
      <section className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2 border-border/60 shadow-soft">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Continue learning</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="text-xs">
              Pick up where you left off.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {continueLesson ? (
              <>
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">
                      Module {continueLesson.moduleId} · Lesson {continueLesson.lessonId}
                    </div>
                    <div className="truncate font-medium">{continueTitle}</div>
                  </div>
                  <Button asChild className="press-scale shrink-0">
                    <Link href={`/lessons/${continueLesson.moduleId}/${continueLesson.lessonId}`}>
                      <Play className="mr-1.5 h-4 w-4" />
                      Resume
                    </Link>
                  </Button>
                </div>
                <Progress value={overallPct} className="h-1.5" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{completedCount} of {totalLessons} lessons</span>
                  <span>{overallPct}%</span>
                </div>
              </>
            ) : (
              <div className="text-sm text-muted-foreground">No incomplete lessons found.</div>
            )}
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-soft">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Streak</CardTitle>
              <Flame className="h-4 w-4 text-accent" />
            </div>
            <CardDescription className="text-xs">Consecutive days studied</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-5xl font-bold leading-none text-primary">{streak}</div>
              <div className="pb-1 text-sm text-muted-foreground">days</div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Open the app daily to keep your streak alive.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Quick actions */}
      <section>
        <h2 className="mb-3 text-sm font-semibold text-muted-foreground">Quick actions</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <QuickActionCard
            href={`/lessons/${continueLesson?.moduleId ?? 1}/${continueLesson?.lessonId ?? 1}`}
            icon={BookOpen}
            title="Start New Lesson"
            description="Jump to your next lesson"
            tone="primary"
          />
          <QuickActionCard
            href="/review"
            icon={Repeat}
            title="Review Due Cards"
            description="Spaced-repetition review"
            tone="accent"
          />
          <QuickActionCard
            href="/assessment/1"
            icon={Target}
            title="Take Assessment"
            description="Test your mastery"
            tone="primary"
          />
          <QuickActionCard
            href="/progress"
            icon={TrendingUp}
            title="View Progress"
            description="Streaks, achievements"
            tone="accent"
          />
        </div>
      </section>

      {/* Today's letter */}
      <section className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2 overflow-hidden border-border/60 shadow-soft">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Today&apos;s letter</CardTitle>
              <Sparkles className="h-4 w-4 text-accent" />
            </div>
            <CardDescription className="text-xs">Letter of the day to focus on</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-medium">
                <span className="font-arabic text-7xl leading-none">{featured.ar}</span>
              </div>
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <div className="text-2xl font-bold">{featured.en}</div>
                <div className="text-sm text-muted-foreground">Transliteration: <span className="font-mono">{featured.tr}</span></div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Tap play to hear the letter pronounced. Repeat aloud several times to lock it into memory.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePlayFeatured}
                  disabled={isPlaying}
                  className="press-scale mt-2"
                >
                  <Volume2 className="mr-1.5 h-4 w-4" />
                  {isPlaying ? "Playing..." : "Play pronunciation"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-soft">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Recent activity</CardTitle>
              <ListChecks className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="text-xs">Your last few lessons</CardDescription>
          </CardHeader>
          <CardContent>
            {activity.length === 0 ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                No lessons yet. Complete a lesson to see it here.
              </div>
            ) : (
              <ul className="space-y-2">
                {activity.map((entry) => {
                  const done = isLessonCompleted(entry.moduleId, entry.lessonId)
                  return (
                    <li key={`${entry.moduleId}_${entry.lessonId}_${entry.date}`}>
                      <Link
                        href={`/lessons/${entry.moduleId}/${entry.lessonId}`}
                        className="flex items-center justify-between gap-2 rounded-lg border border-border/40 bg-muted/30 px-3 py-2 text-sm press-scale"
                      >
                        <div className="min-w-0">
                          <div className="truncate font-medium">{entry.lessonTitle}</div>
                          <div className="text-xs text-muted-foreground">
                            M{entry.moduleId} · L{entry.lessonId} · {new Date(entry.date).toLocaleDateString()}
                          </div>
                        </div>
                        {done ? (
                          <Badge variant="secondary" className="shrink-0 bg-primary/10 text-primary">Done</Badge>
                        ) : (
                          <Badge variant="outline" className="shrink-0">In progress</Badge>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Curriculum snapshot */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-muted-foreground">Curriculum snapshot</h2>
          <Button asChild variant="ghost" size="sm" className="press-scale">
            <Link href="/curriculum">
              View all
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {curriculumData.phases[0].modules.slice(0, 3).map((m, i) => {
            const moduleId = i + 1
            const done = loadProgress().completedLessons.filter((k) => k.startsWith(`${moduleId}_`)).length
            const pct = Math.round((done / m.lessons.length) * 100)
            return (
              <Card key={moduleId} className="border-border/60 shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Module {moduleId}</span>
                    <span className="text-xs font-semibold text-primary">{pct}%</span>
                  </div>
                  <div className="mt-1 line-clamp-1 font-medium">{m.title}</div>
                  <Progress value={pct} className="mt-2 h-1" />
                  <div className="mt-1 text-xs text-muted-foreground">{done}/{m.lessons.length} lessons</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Inspirational footer */}
      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 text-center">
        <Award className="mx-auto mb-2 h-5 w-5 text-accent" />
        <p className="text-sm text-muted-foreground">
          &ldquo;And We have certainly made the Qur&apos;an easy for remembrance, so is there any who will remember?&rdquo;
        </p>
        <p className="mt-1 text-xs text-muted-foreground/80">Qur&apos;an 54:17</p>
      </section>
    </div>
  )
}

function QuickActionCard({
  href,
  icon: Icon,
  title,
  description,
  tone,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  tone: "primary" | "accent"
}) {
  return (
    <Link href={href} className="block">
      <Card className="h-full border-border/60 shadow-soft transition-all hover:shadow-medium press-scale">
        <CardContent className="p-4">
          <div
            className={cn(
              "mb-3 grid h-10 w-10 place-items-center rounded-xl",
              tone === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent",
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
