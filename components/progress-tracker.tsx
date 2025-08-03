"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Trophy, 
  Star, 
  Target, 
  Calendar, 
  Clock, 
  TrendingUp,
  Award,
  Zap,
  CheckCircle,
  BookOpen,
  Flame
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgressData {
  totalModules: number
  completedModules: number
  currentModule: number
  currentLesson: number
  totalLessons: number
  completedLessons: number
  streakDays: number
  totalStudyTime: number // in minutes
  averageScore: number
  achievements: Achievement[]
  weeklyGoal: number
  weeklyProgress: number
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  unlockedAt?: Date
  progress?: number
  maxProgress?: number
}

interface ProgressTrackerProps {
  data?: ProgressData
  variant?: "default" | "compact" | "detailed"
  className?: string
}

export default function ProgressTracker({ 
  data, 
  variant = "default",
  className 
}: ProgressTrackerProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)
  
  // Mock data for demonstration
  const mockData: ProgressData = {
    totalModules: 15,
    completedModules: 4,
    currentModule: 5,
    currentLesson: 2,
    totalLessons: 75,
    completedLessons: 28,
    streakDays: 7,
    totalStudyTime: 420, // 7 hours
    averageScore: 87,
    weeklyGoal: 5, // 5 lessons per week
    weeklyProgress: 3,
    achievements: [
      {
        id: "first_lesson",
        title: "First Steps",
        description: "Complete your first lesson",
        icon: "🎯",
        unlockedAt: new Date()
      },
      {
        id: "week_streak",
        title: "Week Warrior",
        description: "Study for 7 days in a row",
        icon: "🔥",
        unlockedAt: new Date()
      },
      {
        id: "module_master",
        title: "Module Master",
        description: "Complete 5 modules",
        icon: "📚",
        progress: 4,
        maxProgress: 5
      }
    ]
  }

  const progressData = data || mockData
  const overallProgress = (progressData.completedLessons / progressData.totalLessons) * 100

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(overallProgress)
    }, 500)
    return () => clearTimeout(timer)
  }, [overallProgress])

  if (variant === "compact") {
    return (
      <Card className={cn("card-modern", className)}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sm">Overall Progress</div>
                <div className="text-xs text-muted-foreground">
                  {progressData.completedLessons}/{progressData.totalLessons} lessons
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-gradient-primary text-white border-0">
              {Math.round(overallProgress)}%
            </Badge>
          </div>
          <Progress value={animatedProgress} className="h-2" />
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Overall Progress Card */}
      <Card className="card-elevated">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Learning Progress</CardTitle>
              <CardDescription>Your Qur'anic reading journey</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{Math.round(overallProgress)}%</div>
              <div className="text-sm text-muted-foreground">Complete</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Lessons Completed</span>
              <span className="text-muted-foreground">
                {progressData.completedLessons}/{progressData.totalLessons}
              </span>
            </div>
            <Progress value={animatedProgress} className="h-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
            <div className="text-center space-y-1">
              <div className="w-10 h-10 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="text-lg font-bold text-primary">{progressData.completedModules}</div>
              <div className="text-xs text-muted-foreground">Modules Done</div>
            </div>
            
            <div className="text-center space-y-1">
              <div className="w-10 h-10 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <div className="text-lg font-bold text-primary">{progressData.streakDays}</div>
              <div className="text-xs text-muted-foreground">Day Streak</div>
            </div>
            
            <div className="text-center space-y-1">
              <div className="w-10 h-10 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div className="text-lg font-bold text-primary">{Math.round(progressData.totalStudyTime / 60)}h</div>
              <div className="text-xs text-muted-foreground">Study Time</div>
            </div>
            
            <div className="text-center space-y-1">
              <div className="w-10 h-10 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Star className="h-5 w-5 text-white" />
              </div>
              <div className="text-lg font-bold text-primary">{progressData.averageScore}%</div>
              <div className="text-xs text-muted-foreground">Avg Score</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Module Progress */}
      <Card className="card-modern">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Current Module</CardTitle>
          <CardDescription>Module {progressData.currentModule} Progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="font-semibold">Lesson {progressData.currentLesson}</div>
              <div className="text-sm text-muted-foreground">In progress</div>
            </div>
            <Button size="sm" className="btn-gradient">
              Continue
            </Button>
          </div>
          <Progress value={((progressData.currentLesson - 1) / 5) * 100} className="h-2" />
        </CardContent>
      </Card>

      {/* Weekly Goal */}
      <Card className="card-modern">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Weekly Goal</CardTitle>
              <CardDescription>Stay consistent with your learning</CardDescription>
            </div>
            <Target className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Lessons this week</span>
              <span className="text-muted-foreground">
                {progressData.weeklyProgress}/{progressData.weeklyGoal}
              </span>
            </div>
            <Progress 
              value={(progressData.weeklyProgress / progressData.weeklyGoal) * 100} 
              className="h-2" 
            />
            <div className="text-xs text-muted-foreground">
              {progressData.weeklyGoal - progressData.weeklyProgress} lessons to reach your weekly goal
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card className="card-modern">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Achievements</CardTitle>
              <CardDescription>Your learning milestones</CardDescription>
            </div>
            <Trophy className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {progressData.achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{achievement.title}</div>
                  <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  {achievement.progress && achievement.maxProgress && (
                    <div className="mt-1">
                      <Progress 
                        value={(achievement.progress / achievement.maxProgress) * 100} 
                        className="h-1" 
                      />
                    </div>
                  )}
                </div>
                {achievement.unlockedAt && (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
