"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  BookOpen, 
  Clock, 
  CheckCircle, 
  Lock, 
  Play, 
  Star,
  Trophy,
  Target,
  Zap,
  Award,
  TrendingUp,
  Calendar,
  Users,
  Headphones,
  ArrowRight,
  Flame,
  Brain
} from "lucide-react"
import { cn } from "@/lib/utils"
import ProgressTracker from "@/components/progress-tracker"
import { curriculumData } from "@/lib/curriculum-data"
import {
  loadProgress,
  isModuleCompleted,
  isLessonCompleted,
  getLastAccessedLesson,
} from "@/lib/progress-service"

const phaseColors = {
  Foundation: "from-blue-500 to-cyan-500",
  Intermediate: "from-green-500 to-emerald-500", 
  Advanced: "from-purple-500 to-pink-500"
}

const phaseIcons = {
  Foundation: BookOpen,
  Intermediate: Target,
  Advanced: Trophy
}

export default function ModernCurriculumPage() {
  const [userProgress, setUserProgress] = useState<any>(null)
  const [lastLesson, setLastLesson] = useState<{ moduleId: number; lessonId: number } | null>(null)
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null)

  useEffect(() => {
    const progress = loadProgress()
    setUserProgress(progress)
    const last = getLastAccessedLesson()
    setLastLesson(last)
  }, [])

  if (!userProgress) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center animate-pulse">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Loading Your Curriculum</h2>
            <p className="text-muted-foreground">Preparing your personalized learning journey...</p>
          </div>
        </div>
      </div>
    )
  }

  const totalModules = curriculumData.phases.reduce((acc, phase) => acc + phase.modules.length, 0)
  const completedModules = curriculumData.phases.reduce((acc, phase) => {
    return acc + phase.modules.filter((_, index) => {
      const moduleNumber = acc + index + 1
      return isModuleCompleted(moduleNumber)
    }).length
  }, 0)

  const overallProgress = (completedModules / totalModules) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container-mobile md:container-tablet lg:container-desktop py-6 space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-gradient-primary text-white border-0 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              30-Day Learning Journey
            </Badge>
            <h1 className="text-display">Qur'anic Reading Curriculum</h1>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Master Qur'anic reading through our structured, interactive curriculum designed by Islamic scholars.
            </p>
          </div>

          {/* Continue Learning CTA */}
          {lastLesson && (
            <Card className="max-w-md mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Continue Your Journey</h3>
                  <p className="text-sm text-muted-foreground">
                    Module {lastLesson.moduleId}, Lesson {lastLesson.lessonId}
                  </p>
                </div>
                <Button asChild className="btn-gradient w-full">
                  <Link href={`/lessons/${lastLesson.moduleId}/${lastLesson.lessonId}`}>
                    <Zap className="mr-2 h-4 w-4" />
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-elevated">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{Math.round(overallProgress)}%</div>
                <div className="text-sm text-muted-foreground">Overall Progress</div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{completedModules}/{totalModules}</div>
                <div className="text-sm text-muted-foreground">Modules Completed</div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Phase Navigation */}
        <div className="flex flex-wrap justify-center gap-3">
          {curriculumData.phases.map((phase, index) => {
            const PhaseIcon = phaseIcons[phase.title as keyof typeof phaseIcons]
            const isSelected = selectedPhase === phase.title
            
            return (
              <Button
                key={index}
                variant={isSelected ? "default" : "outline"}
                onClick={() => setSelectedPhase(isSelected ? null : phase.title)}
                className={cn(
                  "rounded-xl transition-all duration-300",
                  isSelected && "bg-gradient-primary text-white shadow-medium"
                )}
              >
                <PhaseIcon className="h-4 w-4 mr-2" />
                {phase.title} Phase
              </Button>
            )
          })}
        </div>

        {/* Curriculum Phases */}
        <div className="space-y-12">
          {curriculumData.phases.map((phase, phaseIndex) => {
            if (selectedPhase && selectedPhase !== phase.title) return null
            
            const PhaseIcon = phaseIcons[phase.title as keyof typeof phaseIcons]
            
            return (
              <div key={phaseIndex} className="space-y-6 animate-fade-in">
                <div className="text-center space-y-4">
                  <div className={cn(
                    "w-20 h-20 mx-auto rounded-3xl flex items-center justify-center shadow-strong",
                    `bg-gradient-to-r ${phaseColors[phase.title as keyof typeof phaseColors]}`
                  )}>
                    <PhaseIcon className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Phase {phaseIndex + 1}
                    </Badge>
                    <h2 className="text-headline">{phase.title} Phase</h2>
                    <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                      {phase.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {phase.modules.map((module, moduleIndex) => {
                    const moduleNumber = phaseIndex * phase.modules.length + moduleIndex + 1
                    const isUnlocked = module.isAvailable
                    const isCompleted = isModuleCompleted(moduleNumber)
                    
                    const completedLessons = module.lessons.filter((_, lessonIndex) =>
                      isLessonCompleted(moduleNumber, lessonIndex + 1)
                    ).length
                    
                    const progressPercentage = Math.round((completedLessons / module.lessons.length) * 100)

                    return (
                      <Card key={moduleIndex} className={cn(
                        "group card-elevated hover:scale-105 transition-all duration-500 cursor-pointer",
                        !isUnlocked && "opacity-50 cursor-not-allowed",
                        "animate-scale-in"
                      )} style={{ animationDelay: `${moduleIndex * 0.1}s` }}>
                        <CardHeader className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className={cn(
                              "w-12 h-12 rounded-xl flex items-center justify-center shadow-medium",
                              isCompleted 
                                ? "bg-gradient-to-r from-green-500 to-emerald-500" 
                                : isUnlocked
                                ? `bg-gradient-to-r ${phaseColors[phase.title as keyof typeof phaseColors]}`
                                : "bg-muted"
                            )}>
                              {isCompleted ? (
                                <CheckCircle className="h-6 w-6 text-white" />
                              ) : isUnlocked ? (
                                <BookOpen className="h-6 w-6 text-white" />
                              ) : (
                                <Lock className="h-6 w-6 text-muted-foreground" />
                              )}
                            </div>
                            
                            <Badge variant={isCompleted ? "default" : "secondary"} className={cn(
                              isCompleted && "bg-green-500 hover:bg-green-600"
                            )}>
                              {isCompleted ? "Completed" : isUnlocked ? "Available" : "Locked"}
                            </Badge>
                          </div>
                          
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {moduleNumber}. {module.title}
                            </CardTitle>
                            <CardDescription className="text-sm mt-1">
                              {module.description}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                <span>{module.lessons.length} lessons</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>2-3 days</span>
                              </div>
                            </div>
                          </div>
                          
                          {isUnlocked && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span>Progress</span>
                                <span>{completedLessons}/{module.lessons.length}</span>
                              </div>
                              <Progress value={progressPercentage} className="h-2" />
                            </div>
                          )}
                          
                          <Button 
                            asChild={isUnlocked} 
                            disabled={!isUnlocked}
                            className="w-full touch-target"
                            variant={isCompleted ? "outline" : "default"}
                          >
                            {isUnlocked ? (
                              <Link href={`/lessons/${moduleNumber}/1`}>
                                {isCompleted ? (
                                  <>
                                    <Trophy className="mr-2 h-4 w-4" />
                                    Review Module
                                  </>
                                ) : (
                                  <>
                                    <Play className="mr-2 h-4 w-4" />
                                    Start Learning
                                  </>
                                )}
                              </Link>
                            ) : (
                              <>
                                <Lock className="mr-2 h-4 w-4" />
                                Complete Previous Module
                              </>
                            )}
                          </Button>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Progress Tracker */}
        <div className="mt-12">
          <ProgressTracker />
        </div>
      </div>
    </div>
  )
}
