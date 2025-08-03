"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  ArrowRight, 
  Home, 
  BookOpen, 
  CheckCircle, 
  Clock,
  Target,
  Star,
  Menu,
  X,
  Volume2,
  Settings,
  Share2,
  Bookmark,
  Trophy,
  Zap
} from "lucide-react"
import { cn } from "@/lib/utils"
import ProgressTracker from "@/components/progress-tracker"

interface ModernLessonLayoutProps {
  children: React.ReactNode
  moduleId: number
  lessonId: number
  title?: string
  description?: string
  estimatedTime?: number
  difficulty?: "beginner" | "intermediate" | "advanced"
}

// Enhanced module data with more details
const moduleData = {
  1: { title: "Harakat (Vowel Signs)", totalLessons: 5, phase: "Foundation", color: "from-blue-500 to-cyan-500" },
  2: { title: "Arabic Letters", totalLessons: 7, phase: "Foundation", color: "from-green-500 to-emerald-500" },
  3: { title: "Letter Forms", totalLessons: 6, phase: "Foundation", color: "from-purple-500 to-pink-500" },
  4: { title: "Vowels Application", totalLessons: 5, phase: "Foundation", color: "from-orange-500 to-red-500" },
  5: { title: "Mudood (Elongations)", totalLessons: 5, phase: "Intermediate", color: "from-teal-500 to-cyan-500" },
  6: { title: "Sukuun and Non-Vowels", totalLessons: 4, phase: "Intermediate", color: "from-indigo-500 to-purple-500" },
  7: { title: "Sun and Moon Letters", totalLessons: 4, phase: "Intermediate", color: "from-yellow-500 to-orange-500" },
  8: { title: "Word Formation", totalLessons: 4, phase: "Intermediate", color: "from-pink-500 to-rose-500" },
  9: { title: "Sentence Construction", totalLessons: 4, phase: "Intermediate", color: "from-emerald-500 to-teal-500" },
  10: { title: "Tajweed Fundamentals", totalLessons: 4, phase: "Advanced", color: "from-violet-500 to-purple-500" },
  11: { title: "Nun Sakin and Tanween Rules", totalLessons: 5, phase: "Advanced", color: "from-blue-600 to-indigo-600" },
  12: { title: "Meem Sakin Rules", totalLessons: 4, phase: "Advanced", color: "from-green-600 to-emerald-600" },
  13: { title: "Qalqalah", totalLessons: 4, phase: "Advanced", color: "from-red-600 to-pink-600" },
  14: { title: "Rules of Raa", totalLessons: 4, phase: "Advanced", color: "from-purple-600 to-violet-600" },
  15: { title: "Special Rules and Integration", totalLessons: 8, phase: "Advanced", color: "from-amber-600 to-orange-600" },
}

export default function ModernLessonLayout({ 
  children, 
  moduleId, 
  lessonId, 
  title,
  description,
  estimatedTime = 15,
  difficulty = "beginner"
}: ModernLessonLayoutProps) {
  const [progress, setProgress] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [startTime] = useState(Date.now())
  const router = useRouter()

  const currentModule = moduleData[moduleId as keyof typeof moduleData]
  const moduleProgress = ((lessonId - 1) / currentModule.totalLessons) * 100

  useEffect(() => {
    // Simulate progress tracking
    const timer = setTimeout(() => {
      setProgress(moduleProgress)
    }, 500)
    return () => clearTimeout(timer)
  }, [moduleProgress])

  const handleComplete = () => {
    setIsCompleted(true)
    // Navigate to next lesson or assessment
    if (lessonId < currentModule.totalLessons) {
      router.push(`/lessons/${moduleId}/${lessonId + 1}`)
    } else {
      router.push(`/assessment/${moduleId}`)
    }
  }

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-16 z-40 bg-background/95 backdrop-blur-xl border-b shadow-medium">
        <div className="container-mobile py-3">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="touch-target">
              <Link href="/curriculum">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Link>
            </Button>
            
            <div className="flex-1 mx-4">
              <Progress value={progress} className="h-2" />
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowSidebar(true)}
              className="touch-target"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-80 border-r bg-muted/30 min-h-screen">
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                <Link href="/curriculum">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Curriculum
                </Link>
              </Button>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={getDifficultyColor(difficulty)}>
                    {difficulty}
                  </Badge>
                  <Badge variant="secondary">
                    <Clock className="h-3 w-3 mr-1" />
                    {estimatedTime}m
                  </Badge>
                </div>
                
                <h1 className="text-xl font-bold">{title || `Lesson ${lessonId}`}</h1>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>

            <ProgressTracker variant="compact" />

            <Card className="card-modern">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Module Progress</CardTitle>
                <CardDescription>
                  {currentModule.title} - {currentModule.phase} Phase
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Lesson {lessonId} of {currentModule.totalLessons}</span>
                    <span className="text-muted-foreground">{Math.round(moduleProgress)}%</span>
                  </div>
                  <Progress value={moduleProgress} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Button 
                onClick={handleComplete}
                className="w-full btn-gradient touch-target"
                disabled={isCompleted}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Completed
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Mark Complete
                  </>
                )}
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="touch-target">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm" className="touch-target">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="container-mobile md:container-tablet lg:max-w-4xl mx-auto py-6 lg:py-8">
            {/* Desktop Header */}
            <div className="hidden lg:block mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={getDifficultyColor(difficulty)}>
                      {difficulty}
                    </Badge>
                    <Badge variant="secondary">
                      <Clock className="h-3 w-3 mr-1" />
                      {estimatedTime}m
                    </Badge>
                    <Badge variant="outline">
                      Module {moduleId}
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold">{title || `Lesson ${lessonId}`}</h1>
                  {description && (
                    <p className="text-lg text-muted-foreground">{description}</p>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Progress value={moduleProgress} className="h-3" />
            </div>

            {/* Lesson Content */}
            <div className="animate-fade-in">
              {children}
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden mt-8 space-y-4">
              <Button 
                onClick={handleComplete}
                className="w-full btn-gradient touch-target-large"
                disabled={isCompleted}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Lesson Completed
                  </>
                ) : (
                  <>
                    <Zap className="h-5 w-5 mr-2" />
                    Complete Lesson
                  </>
                )}
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                {lessonId > 1 && (
                  <Button variant="outline" asChild className="touch-target">
                    <Link href={`/lessons/${moduleId}/${lessonId - 1}`}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Link>
                  </Button>
                )}
                
                {lessonId < currentModule.totalLessons && (
                  <Button variant="outline" asChild className="touch-target">
                    <Link href={`/lessons/${moduleId}/${lessonId + 1}`}>
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {showSidebar && (
        <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-80 bg-background border-l shadow-intense animate-slide-up">
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Lesson Details</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowSidebar(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <ProgressTracker variant="compact" />
              
              {/* Same content as desktop sidebar */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
