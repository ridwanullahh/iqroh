"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Home, BookOpen } from "lucide-react"
import { curriculumData } from "@/lib/curriculum-data"
import { completeLesson, getNextLesson, isLessonCompleted } from "@/lib/progress-service"
import CurriculumDrawer from "./curriculum-drawer"

interface LessonLayoutProps {
  children: React.ReactNode
  moduleId: number
  lessonId: number
}

export default function LessonLayout({ children, moduleId, lessonId }: LessonLayoutProps) {
  const [progress, setProgress] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Find current module and lesson
  let currentModule: any = null
  let currentLesson: any = null
  let totalLessonsInModule = 0

  // Find the module and lesson from the curriculum data
  for (const phase of curriculumData.phases) {
    for (let i = 0; i < phase.modules.length; i++) {
      const moduleIndex = curriculumData.phases.indexOf(phase) * phase.modules.length + i + 1

      if (moduleIndex === moduleId) {
        currentModule = phase.modules[i]
        totalLessonsInModule = currentModule.lessons.length

        if (lessonId <= totalLessonsInModule) {
          currentLesson = currentModule.lessons[lessonId - 1]
        }

        break
      }
    }

    if (currentModule) break
  }

  // Calculate next and previous lesson/module links
  const prevLessonLink =
    lessonId > 1
      ? `/lessons/${moduleId}/${lessonId - 1}`
      : moduleId > 1
        ? `/lessons/${moduleId - 1}/1` // Go to first lesson of previous module
        : "/curriculum"

  // Get the next lesson dynamically
  const nextLesson = getNextLesson(moduleId, lessonId)
  const nextLessonLink = nextLesson ? `/lessons/${nextLesson.moduleId}/${nextLesson.lessonId}` : `/curriculum`

  // Mark lesson as completed when user clicks "Next Lesson" or "Complete Module"
  const handleCompleteLesson = () => {
    completeLesson(moduleId, lessonId)
    setIsCompleted(true)

    // Navigate to the next lesson
    router.push(nextLessonLink)
  }

  // Update progress when lesson changes
  useEffect(() => {
    setProgress((lessonId / totalLessonsInModule) * 100)

    // Check if this lesson is already completed
    const completed = isLessonCompleted(moduleId, lessonId)
    setIsCompleted(completed)
  }, [lessonId, totalLessonsInModule, moduleId])

  if (!currentModule || !currentLesson) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
        <p className="mb-6">The lesson you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/curriculum">
            <Home className="mr-2 h-4 w-4" /> Return to Curriculum
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Link href="/curriculum" className="text-muted-foreground hover:text-foreground">
              Curriculum
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>{currentModule.title}</span>
            <span className="text-muted-foreground">/</span>
            <span>Lesson {lessonId}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">
              {lessonId} of {totalLessonsInModule}
            </div>
            <Button variant="outline" size="icon" onClick={() => setIsDrawerOpen(true)} title="Open Curriculum">
              <BookOpen className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="mb-8">
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{currentLesson.title}</h1>

          <div className="lesson-content">{children}</div>
        </div>
      </Card>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href={prevLessonLink}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {lessonId > 1 ? "Previous Lesson" : "Back to Curriculum"}
          </Link>
        </Button>

        <Button onClick={handleCompleteLesson} disabled={isCompleted}>
          {lessonId < totalLessonsInModule ? "Next Lesson" : "Complete Module"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Curriculum Drawer */}
      <CurriculumDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentModuleId={moduleId}
        currentLessonId={lessonId}
      />
    </div>
  )
}

