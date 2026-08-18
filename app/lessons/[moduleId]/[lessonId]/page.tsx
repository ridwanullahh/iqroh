import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Volume2, PenLine, Repeat, ListChecks, TrendingUp } from "lucide-react"
import { curriculumData } from "@/lib/curriculum-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Bismillah.
// Dynamic catch-all for lessons that do not have a specific page.tsx
// file under app/lessons/<moduleId>/<lessonId>/. Renders a structured
// "lesson preview" view with the lesson's title, description, the
// module context, and quick actions (audio, writing practice,
// review). Users can still mark the lesson complete from here so
// progress tracking is uninterrupted.

export function generateStaticParams() {
  const params: { moduleId: string; lessonId: string }[] = []
  let moduleCounter = 0
  for (const phase of curriculumData.phases) {
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
  const lesson = findLesson(moduleId, lessonId)
  if (!lesson) return { title: "Lesson not found" }
  return {
    title: lesson.title,
    description: `Iqroh lesson: ${lesson.title}. Continue your Quranic reading journey.`,
  }
}

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

function findLesson(moduleId: number, lessonId: number): { lesson: LessonRef; module: ModuleRef; phaseTitle: string } | null {
  let counter = 0
  for (const phase of curriculumData.phases) {
    for (const module of phase.modules) {
      counter += 1
      if (counter === moduleId) {
        if (lessonId < 1 || lessonId > module.lessons.length) return null
        return { lesson: module.lessons[lessonId - 1], module, phaseTitle: phase.title }
      }
    }
  }
  return null
}

function findAdjacentLessons(moduleId: number, lessonId: number) {
  // Flatten all (moduleId, lessonId, lesson) tuples
  const flat: { moduleId: number; lessonId: number; lesson: LessonRef; module: ModuleRef }[] = []
  let counter = 0
  for (const phase of curriculumData.phases) {
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
  const found = findLesson(moduleId, lessonId)
  if (!found) return notFound()
  const { lesson, module, phaseTitle } = found
  const { prev, next, total, position } = findAdjacentLessons(moduleId, lessonId)

  // The lesson content for this dynamic catch-all is intentionally
  // a structured preview rather than a rich custom layout. Specific
  // lessons (e.g. /lessons/2/1) have their own page.tsx with the
  // full rich content. This catch-all ensures every lesson in the
  // curriculum is reachable.
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
          <div className="flex items-center gap-2 mb-3">
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

        {/* Lesson preview card */}
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
              This lesson&rsquo;s dedicated interactive content is being prepared. In the meantime, you can still
              practice the core skills below &mdash; pronunciation, writing, and review &mdash; to keep your streak
              alive and your progress moving forward.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <ActionCard
                href="/review"
                icon={<Repeat className="w-4 h-4" />}
                title="Review"
                description="Spaced-repetition cards"
              />
              <ActionCard
                href="/curriculum"
                icon={<ListChecks className="w-4 h-4" />}
                title="All lessons"
                description="Browse the curriculum"
              />
              <ActionCard
                href="/progress"
                icon={<TrendingUp className="w-4 h-4" />}
                title="Progress"
                description="Streaks and achievements"
              />
            </div>
          </CardContent>
        </Card>

        {/* Audio practice hint */}
        <Card className="mb-8 border-emerald-600/30 bg-emerald-600/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600/15 flex items-center justify-center shrink-0">
                <Volume2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Audio pronunciation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tap the speaker icon on any letter card throughout the app to hear native Arabic pronunciation.
                  The audio is generated on-device via the Web Speech API &mdash; no internet connection required.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Writing practice hint */}
        <Card className="mb-8 border-sky-600/30 bg-sky-600/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-600/15 flex items-center justify-center shrink-0">
                <PenLine className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Writing practice</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each letter lesson includes an interactive writing canvas where you can trace the letter&rsquo;s
                  isolated, initial, medial, and final forms with stroke-order guidance. Look for the
                  &ldquo;Writing Practice&rdquo; section in lessons that have it enabled.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <nav className="flex items-center justify-between gap-4 pt-4 border-t">
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

function ActionCard({ href, icon, title, description }: { href: string; icon: React.ReactNode; title: string; description: string }) {
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
