"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Lock, FileCheck } from "lucide-react"
import { curriculumData } from "@/lib/curriculum-data"
import {
  loadProgress,
  isModuleCompleted,
  isLessonCompleted,
  isAssessmentCompleted,
  getLastAccessedLesson,
} from "@/lib/progress-service"

export default function CurriculumPage() {
  const [userProgress, setUserProgress] = useState<any>(null)
  const [lastLesson, setLastLesson] = useState<{ moduleId: number; lessonId: number } | null>(null)

  useEffect(() => {
    // Load user progress
    const progress = loadProgress()
    setUserProgress(progress)

    // Get last accessed lesson
    const last = getLastAccessedLesson()
    setLastLesson(last)
  }, [])

  // If progress is not loaded yet, show loading
  if (!userProgress) {
    return (
      <div className="container mx-auto py-8 px-4 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Loading curriculum...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">30-Day Qur&apos;an Reading Curriculum</h1>

          {lastLesson && (
            <Button asChild>
              <Link href={`/lessons/${lastLesson.moduleId}/${lastLesson.lessonId}`}>
                Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>

        <p className="text-lg text-muted-foreground mb-8">
          Follow this structured curriculum to master Qur&apos;anic reading in 30 days. Each phase builds upon the
          previous one, taking you from the basics to advanced tajweed rules.
        </p>

        <div className="space-y-12">
          {curriculumData.phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-sm py-1 px-3">
                  Phase {phaseIndex + 1}
                </Badge>
                <h2 className="text-2xl font-bold">{phase.title}</h2>
              </div>
              <p className="text-muted-foreground">{phase.description}</p>

              <div className="grid gap-4">
                {phase.modules.map((module, moduleIndex) => {
                  const moduleNumber = phaseIndex * phase.modules.length + moduleIndex + 1
                  const isUnlocked = module.isAvailable
                  const isCompleted = isModuleCompleted(moduleNumber)
                  const hasAssessment = isAssessmentCompleted(moduleNumber)

                  // Count completed lessons in this module
                  const completedLessons = module.lessons.filter((_, lessonIndex) =>
                    isLessonCompleted(moduleNumber, lessonIndex + 1),
                  ).length

                  const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100)

                  return (
                    <Card key={moduleIndex} className={!isUnlocked ? "opacity-70" : ""}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">
                              {moduleNumber}. {module.title}
                            </CardTitle>
                            <CardDescription>{module.description}</CardDescription>
                          </div>
                          {isCompleted ? (
                            <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
                          ) : isUnlocked ? (
                            <Badge className="bg-blue-500 hover:bg-blue-600">Available</Badge>
                          ) : (
                            <Badge variant="outline">
                              <Lock className="h-3 w-3 mr-1" /> Locked
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{progressPercentage}%</span>
                          </div>
                          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-primary h-full rounded-full"
                              style={{ width: `${progressPercentage}%` }}
                            ></div>
                          </div>
                        </div>

                        <ul className="space-y-1">
                          {module.lessons.map((lesson, lessonIndex) => {
                            const lessonCompleted = isLessonCompleted(moduleNumber, lessonIndex + 1)

                            return (
                              <li key={lessonIndex} className="flex items-center gap-2">
                                {lessonCompleted ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span>{lesson.title}</span>
                              </li>
                            )
                          })}
                        </ul>
                      </CardContent>
                      <CardFooter className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant={isUnlocked ? "default" : "outline"}
                          className="w-full sm:flex-1"
                          disabled={!isUnlocked}
                          asChild={isUnlocked}
                        >
                          {isUnlocked ? (
                            <Link href={`/lessons/${moduleNumber}/1`}>
                              {isCompleted ? "Review Module" : "Start Module"} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          ) : (
                            <span>Complete Previous Modules</span>
                          )}
                        </Button>

                        {isUnlocked && (
                          <Button variant={hasAssessment ? "outline" : "default"} className="w-full sm:w-auto" asChild>
                            <Link href={`/assessment/${moduleNumber}`}>
                              <FileCheck className="mr-2 h-4 w-4" />
                              {hasAssessment ? "Review Assessment" : "Take Assessment"}
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

