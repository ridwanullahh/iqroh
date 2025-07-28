"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Lock, ArrowRight } from "lucide-react"
import { curriculumData } from "@/lib/curriculum-data"
import { isLessonCompleted, isModuleCompleted, loadProgress } from "@/lib/progress-service"

interface CurriculumDrawerProps {
  isOpen: boolean
  onClose: () => void
  currentModuleId: number
  currentLessonId: number
}

export default function CurriculumDrawer({ isOpen, onClose, currentModuleId, currentLessonId }: CurriculumDrawerProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>([])
  const [userProgress, setUserProgress] = useState<any>(null)
  const router = useRouter()

  // Load user progress
  useEffect(() => {
    const progress = loadProgress()
    setUserProgress(progress)
  }, [])

  // Expand the current module by default
  useEffect(() => {
    if (currentModuleId) {
      setExpandedModules([`module-${currentModuleId}`])
    }
  }, [currentModuleId])

  // Handle accordion state
  const handleAccordionChange = (value: string) => {
    setExpandedModules((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  // If progress is not loaded yet, show loading
  if (!userProgress) {
    return (
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Loading curriculum...</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-4">
          <SheetTitle>Curriculum Navigator</SheetTitle>
        </SheetHeader>

        <div className="space-y-4">
          {curriculumData.phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  Phase {phaseIndex + 1}
                </Badge>
                <h3 className="text-sm font-medium">{phase.title}</h3>
              </div>

              <Accordion
                type="multiple"
                value={expandedModules}
                onValueChange={(value) => setExpandedModules(value)}
                className="space-y-2"
              >
                {phase.modules.map((module, moduleIndex) => {
                  const moduleNumber = phaseIndex * phase.modules.length + moduleIndex + 1
                  const isUnlocked = module.isAvailable
                  const isCompleted = isModuleCompleted(moduleNumber)

                  // Count completed lessons in this module
                  const completedLessons = module.lessons.filter((_, lessonIndex) =>
                    isLessonCompleted(moduleNumber, lessonIndex + 1),
                  ).length

                  const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100)
                  const isCurrentModule = moduleNumber === currentModuleId

                  return (
                    <AccordionItem
                      key={moduleIndex}
                      value={`module-${moduleNumber}`}
                      className={`border rounded-md ${isCurrentModule ? "border-primary" : "border-border"} ${!isUnlocked ? "opacity-70" : ""}`}
                    >
                      <AccordionTrigger className="px-4 py-2 hover:no-underline">
                        <div className="flex items-center justify-between w-full text-left">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              {moduleNumber}. {module.title}
                            </span>
                            {isCompleted && <CheckCircle className="h-4 w-4 text-green-500" />}
                            {!isUnlocked && <Lock className="h-4 w-4 text-muted-foreground" />}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {completedLessons}/{module.lessons.length}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-2">
                        <div className="mb-2">
                          <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                            <div
                              className="bg-primary h-full rounded-full"
                              style={{ width: `${progressPercentage}%` }}
                            ></div>
                          </div>
                        </div>

                        <ul className="space-y-1 mt-3">
                          {module.lessons.map((lesson, lessonIndex) => {
                            const lessonNumber = lessonIndex + 1
                            const lessonCompleted = isLessonCompleted(moduleNumber, lessonNumber)
                            const isCurrentLesson = isCurrentModule && lessonNumber === currentLessonId

                            return (
                              <li key={lessonIndex}>
                                <Link
                                  href={`/lessons/${moduleNumber}/${lessonNumber}`}
                                  className={`
                                    flex items-center gap-2 py-1 px-2 rounded-md text-sm
                                    ${isCurrentLesson ? "bg-primary/10 text-primary font-medium" : "hover:bg-secondary"}
                                    ${!isUnlocked ? "pointer-events-none" : ""}
                                  `}
                                  onClick={() => {
                                    if (isUnlocked) {
                                      onClose()
                                    }
                                  }}
                                >
                                  {lessonCompleted ? (
                                    <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                                  ) : (
                                    <div className="h-3.5 w-3.5 rounded-full border border-muted-foreground flex-shrink-0" />
                                  )}
                                  <span className="truncate">{lesson.title}</span>
                                  {isCurrentLesson && <ArrowRight className="h-3.5 w-3.5 ml-auto text-primary" />}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <SheetClose asChild>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

