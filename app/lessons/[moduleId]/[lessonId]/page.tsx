import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Volume2, PenLine, Sparkles, ListChecks, Lightbulb } from "lucide-react"
import { curriculumData } from "@/lib/curriculum-data"
import { getLessonContentByPosition, type LessonContent } from "@/lib/lesson-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArabicText, ArabicPronunciation, ExampleAudio, KeyPointCard } from "@/components/lesson-content-display"

// Bismillah. Dynamic catch-all lesson page that renders the rich
// lesson content from lib/lesson-content/. Removes the old
// "coming soon" placeholder. Every lesson in the curriculum (74
// lessons across 16 modules in 3 phases) now displays its full
// content: intro paragraphs, key concept cards, Arabic examples
// with transliteration and meaning, audio pronunciation, writing
// practice hints, and prev/next navigation.

interface LessonRef {
  title: string
  slug: string
  isCompleted: boolean
}

interface ModuleRef {
  title: string
  description: string
  isAvailable: boolean
  lessons: LessonRef[]
}

type CurriculumData = {
  phases: Array<{
    title: string
    description: string
    modules: ModuleRef[]
  }>
}

const CURRICULUM: CurriculumData = curriculumData as unknown as CurriculumData

export function generateStaticParams() {
  const params: { moduleId: string; lessonId: string }[] = []
  let moduleCounter = 0
  for (const phase of CURRICULUM.phases) {
    for (const module of phase.modules) {
      moduleCounter += 1
      for (let i = 0; i < module.lessons.length; i++) {
        params.push({ moduleId: String(moduleCounter), lessonId: String(i + 1) })
      }
    }
  }
  return params
}

export function generateMetadata({ params }: { params: { moduleId: string; lessonId: string } }) {
  const moduleId = Number.parseInt(params.moduleId, 10)
  const lessonId = Number.parseInt(params.lessonId, 10)
  const found = getLessonContentByPosition(CURRICULUM, moduleId, lessonId)
  if (!found) return { title: "Lesson not found" }
  return {
    title: found.lesson.title,
    description: `Iqroh lesson: ${found.lesson.title}. ${found.module.description}`,
  }
}

function findAdjacentLessons(moduleId: number, lessonId: number) {
  const flat: { moduleId: number; lessonId: number; lesson: LessonRef; module: ModuleRef }[] = []
  let counter = 0
  for (const phase of CURRICULUM.phases) {
    for (const module of phase.modules) {
      counter += 1
      module.lessons.forEach((lesson, i) => {
        flat.push({ moduleId: counter, lessonId: i + 1, lesson, module })
      })
    }
  }
  const idx = flat.findIndex((f) => f.moduleId === moduleId && f.lessonId === lessonId)
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null,
    total: flat.length,
    position: idx + 1,
  }
}

export default function DynamicLessonPage({ params }: { params: { moduleId: string; lessonId: string } }) {
  const moduleId = Number.parseInt(params.moduleId, 10)
  const lessonId = Number.parseInt(params.lessonId, 10)
  const found = getLessonContentByPosition(CURRICULUM, moduleId, lessonId)
  if (!found) return notFound()
  const { content, lesson, module, phaseTitle } = found
  const { prev, next, total, position } = findAdjacentLessons(moduleId, lessonId)

  return (
    <div className="min-h-screen bg-background pb-24 pt-4">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/curriculum" className="hover:text-foreground transition-colors">
            Curriculum
          </Link>
          <span>/</span>
          <span className="text-foreground">{module.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge variant="outline" className="text-xs">
              Lesson {lessonId} of {module.lessons.length}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {phaseTitle.split(" ")[0]}
            </Badge>
            {lesson.isCompleted && (
              <Badge className="text-xs bg-emerald-600 hover:bg-emerald-600">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Completed
              </Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{lesson.title}</h1>
          <p className="text-muted-foreground text-base leading-relaxed">{module.description}</p>
        </header>

        {/* Lesson content (when available) */}
        {content ? (
          <LessonContentRenderer content={content} position={position} total={total} />
        ) : (
          // Fallback for any lesson without rich content (should not happen with the current data)
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                About this lesson
              </CardTitle>
              <CardDescription>
                You are on lesson {position} of {total} in the Iqroh curriculum. This lesson is part of the
                &ldquo;{module.title}&rdquo; module in the {phaseTitle}.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Continue your practice with the core skills: pronunciation, writing, and review. Use the navigation
                below to move to the next lesson.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <QuickActionCard href="/review" icon={<ArrowLeft className="w-4 h-4" />} title="Review" description="Spaced-repetition cards" />
                <QuickActionCard href="/curriculum" icon={<ListChecks className="w-4 h-4" />} title="All lessons" description="Browse the curriculum" />
                <QuickActionCard href="/progress" icon={<ArrowLeft className="w-4 h-4" />} title="Progress" description="Streaks and achievements" />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <nav className="flex items-center justify-between gap-4 pt-4 mt-8 border-t">
          {prev ? (
            <Button asChild variant="outline" size="sm">
              <Link href={`/lessons/${prev.moduleId}/${prev.lessonId}`}>
                <ArrowLeft className="w-4 h-4 mr-1" />
                Previous
              </Link>
            </Button>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground">
            {position} / {total}
          </span>
          {next ? (
            <Button asChild size="sm">
              <Link href={`/lessons/${next.moduleId}/${next.lessonId}`}>
                Next
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="default" size="sm">
              <Link href="/curriculum">
                <BookOpen className="w-4 h-4 mr-1" />
                Finish
              </Link>
            </Button>
          )}
        </nav>
      </div>
    </div>
  )
}

function LessonContentRenderer({ content, position, total }: { content: LessonContent; position: number; total: number }) {
  return (
    <div className="space-y-8">
      {/* Intro paragraphs */}
      {content.intro.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Introduction</h2>
          </div>
          {content.intro.map((paragraph, idx) => (
            <p key={idx} className="text-base leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {/* Key points */}
      {content.keyPoints.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Concepts</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {content.keyPoints.map((point, idx) => (
              <KeyPointCard key={idx} point={point} index={idx + 1} />
            ))}
          </div>
        </section>
      )}

      {/* Examples */}
      {content.examples.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Examples</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {content.examples.map((example, idx) => (
              <Card key={idx} className="overflow-hidden border-emerald-600/20 hover:border-emerald-600/40 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <ArabicText text={example.arabic} />
                      <ArabicPronunciation text={example.transliteration} />
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{example.meaning}</p>
                    </div>
                    <ExampleAudio arabicText={example.arabic} transliteration={example.transliteration} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Audio pronunciation hint */}
      <Card className="border-emerald-600/30 bg-emerald-600/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600/15 flex items-center justify-center shrink-0">
              <Volume2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Audio pronunciation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tap the speaker icon on any example above to hear native Arabic pronunciation. The audio is generated
                on-device via the Web Speech API — no internet connection required. Repeat each example after the audio
                until your pronunciation matches.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Writing practice hint */}
      <Card className="border-sky-600/30 bg-sky-600/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-sky-600/15 flex items-center justify-center shrink-0">
              <PenLine className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Writing practice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                On a piece of paper, write each Arabic letter and word from this lesson multiple times. The physical
                act of writing helps cement the shapes in your memory. Aim for 5-10 repetitions per letter.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice instructions */}
      {content.practice && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <ListChecks className="w-4 h-4 text-purple-500" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Practice</h2>
          </div>
          <Card className="border-purple-500/30 bg-purple-500/5">
            <CardContent className="pt-6">
              <p className="text-base leading-relaxed text-foreground/90">{content.practice}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium">Lesson {position} of {total}</span>
                <span>•</span>
                <span>Take your time — mastery over speed</span>
              </div>
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  )
}

function QuickActionCard({ href, icon, title, description }: { href: string; icon: React.ReactNode; title: string; description: string }) {
  return (
    <Link href={href} className="block">
      <Card className="h-full hover:border-emerald-600/40 hover:shadow-sm transition-all">
        <CardContent className="pt-4 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-emerald-600">{icon}</div>
            <span className="font-medium text-sm">{title}</span>
          </div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
