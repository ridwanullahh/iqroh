"use client"

// Bismillah. Client-side lesson tracker. This component:
//   1. Calls accessLesson(moduleId, lessonId) on mount to record
//      that the user has viewed this lesson — so the home page's
//      "Continue Learning" tile can resume where the user left off.
//   2. Renders a "Mark as Complete" / "Completed" button that calls
//      completeLesson(moduleId, lessonId) when clicked, and a
//      "Mark as Incomplete" option in the dropdown for users who
//      want to redo a lesson.
//
// This component is necessary because the dynamic lesson page is a
// server component (it uses generateStaticParams), so it cannot
// directly call browser-only APIs like localStorage. The tracker
// component is the bridge.

import { useEffect, useState } from "react"
import { CheckCircle2, Circle, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { accessLesson, completeLesson, isLessonCompleted } from "@/lib/progress-service"
import { useToast } from "@/hooks/use-toast"

interface LessonTrackerProps {
  moduleId: number
  lessonId: number
}

export function LessonTracker({ moduleId, lessonId }: LessonTrackerProps) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const { toast } = useToast()

  // On mount, record that the user accessed this lesson. This is
  // the key fix for "Continue Learning just returns to the first
  // lesson" — without this call, the home page has no way to know
  // which lesson the user is currently viewing.
  useEffect(() => {
    accessLesson(moduleId, lessonId)
    setIsCompleted(isLessonCompleted(moduleId, lessonId))
    setIsHydrated(true)
  }, [moduleId, lessonId])

  const handleComplete = () => {
    completeLesson(moduleId, lessonId)
    setIsCompleted(true)
    toast({
      title: "Lesson completed",
      description: "Your progress has been saved. Keep going!",
    })
  }

  const handleReset = () => {
    // Mark as incomplete by removing from completedLessons
    const progress = JSON.parse(localStorage.getItem("userProgress") || "{}")
    if (progress.completedLessons) {
      const key = `${moduleId}_${lessonId}`
      progress.completedLessons = progress.completedLessons.filter((k: string) => k !== key)
      localStorage.setItem("userProgress", JSON.stringify(progress))
    }
    setIsCompleted(false)
    toast({
      title: "Lesson marked as incomplete",
      description: "You can complete it again whenever you're ready.",
    })
  }

  // Avoid hydration mismatch: render nothing until hydrated.
  if (!isHydrated) {
    return (
      <Button variant="outline" size="sm" disabled>
        <Circle className="w-4 h-4 mr-1" />
        Mark as complete
      </Button>
    )
  }

  if (isCompleted) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled className="text-emerald-600 border-emerald-600/40 bg-emerald-600/5">
          <CheckCircle2 className="w-4 h-4 mr-1" />
          Completed
        </Button>
        <Button variant="ghost" size="sm" onClick={handleReset} title="Mark as incomplete">
          <RotateCcw className="w-3 h-3" />
        </Button>
      </div>
    )
  }

  return (
    <Button size="sm" onClick={handleComplete} className="bg-emerald-600 hover:bg-emerald-700">
      <Circle className="w-4 h-4 mr-1" />
      Mark as complete
    </Button>
  )
}
