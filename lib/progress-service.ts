import { curriculumData } from "./curriculum-data"

// Types for progress tracking
export interface ActivityEntry {
  moduleId: number
  lessonId: number
  lessonTitle: string
  date: string // ISO date
}

export interface StreakState {
  count: number
  lastDay: string // YYYY-MM-DD
}

export interface UserProgress {
  completedLessons: string[] // Array of completed lesson IDs (moduleId_lessonId)
  completedModules: number[] // Array of completed module IDs
  completedAssessments: number[] // Array of completed assessment IDs
  lastModule: number // Last accessed module ID
  lastLesson: number // Last accessed lesson ID
  streak?: StreakState
  activityLog?: ActivityEntry[]
  totalStudyMinutes?: number
  reviewedCards?: number
}

// Default progress
const defaultProgress: UserProgress = {
  completedLessons: [],
  completedModules: [],
  completedAssessments: [],
  lastModule: 1,
  lastLesson: 1,
  streak: { count: 0, lastDay: "" },
  activityLog: [],
  totalStudyMinutes: 0,
  reviewedCards: 0,
}

const STORAGE_KEY = "userProgress"

// Save progress to localStorage
export const saveProgress = (progress: UserProgress): void => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch (err) {
      console.error("Failed to save progress:", err)
    }
  }
}

// Load progress from localStorage
export const loadProgress = (): UserProgress => {
  if (typeof window !== "undefined") {
    try {
      const savedProgress = localStorage.getItem(STORAGE_KEY)
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress) as UserProgress
        // Backfill optional fields for older saves
        return {
          ...defaultProgress,
          ...parsed,
          streak: { ...defaultProgress.streak, ...parsed.streak },
          activityLog: parsed.activityLog ?? [],
        }
      }
    } catch (err) {
      console.error("Failed to load progress:", err)
    }
  }
  return defaultProgress
}

// Mark a lesson as completed
export const completeLesson = (moduleId: number, lessonId: number): UserProgress => {
  const progress = loadProgress()
  const lessonKey = `${moduleId}_${lessonId}`

  const isFirstCompletion = !progress.completedLessons.includes(lessonKey)
  if (isFirstCompletion) {
    progress.completedLessons.push(lessonKey)
  }

  // Update last accessed lesson and module
  progress.lastModule = moduleId
  progress.lastLesson = lessonId

  // Log activity
  const module = getModuleById(moduleId)
  const lesson = module?.lessons?.[lessonId - 1]
  const lessonTitle = lesson?.title ?? `Lesson ${lessonId}`
  progress.activityLog = progress.activityLog ?? []
  // Avoid logging duplicates of the same lesson on the same day
  const today = new Date().toISOString().slice(0, 10)
  const alreadyToday = progress.activityLog.find(
    (e) => e.moduleId === moduleId && e.lessonId === lessonId && e.date.startsWith(today),
  )
  if (!alreadyToday) {
    progress.activityLog.unshift({
      moduleId,
      lessonId,
      lessonTitle,
      date: new Date().toISOString(),
    })
    if (progress.activityLog.length > 10) {
      progress.activityLog = progress.activityLog.slice(0, 10)
    }
  }

  // Bump streak for the day
  bumpStreak(progress)

  // Check if all lessons in the module are completed
  if (module) {
    const allLessonsCompleted = module.lessons.every((_, index) =>
      progress.completedLessons.includes(`${moduleId}_${index + 1}`),
    )

    if (allLessonsCompleted && !progress.completedModules.includes(moduleId)) {
      progress.completedModules.push(moduleId)
    }
  }

  saveProgress(progress)
  return progress
}

// Record that the user has ACCESSED (opened) a lesson, without
// marking it as completed. This is used by the "Continue Learning"
// feature on the home page — it returns the user to the lesson they
// were last viewing, even if they haven't completed it yet.
//
// Without this, the home page would always return to the FIRST
// incomplete lesson (typically lesson 1/1), which is the bug
// "Continue Learning just returns to the first lesson".
export const accessLesson = (moduleId: number, lessonId: number): UserProgress => {
  const progress = loadProgress()
  progress.lastModule = moduleId
  progress.lastLesson = lessonId
  saveProgress(progress)
  return progress
}

// Mark an assessment as completed
export const completeAssessment = (moduleId: number): UserProgress => {
  const progress = loadProgress()

  if (!progress.completedAssessments.includes(moduleId)) {
    progress.completedAssessments.push(moduleId)
  }

  bumpStreak(progress)
  saveProgress(progress)
  return progress
}

// Bump the streak for the current day (no-op if already bumped today)
function bumpStreak(progress: UserProgress): void {
  const today = new Date().toISOString().slice(0, 10)
  progress.streak = progress.streak ?? { count: 0, lastDay: "" }
  if (progress.streak.lastDay === today) return
  const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10)
  if (progress.streak.lastDay === yesterday) {
    progress.streak.count += 1
  } else {
    progress.streak.count = 1
  }
  progress.streak.lastDay = today
}

// Add study time
export const addStudyTime = (minutes: number): void => {
  const progress = loadProgress()
  progress.totalStudyMinutes = (progress.totalStudyMinutes ?? 0) + minutes
  saveProgress(progress)
}

// Increment reviewed-cards counter
export const incrementReviewedCards = (count = 1): void => {
  const progress = loadProgress()
  progress.reviewedCards = (progress.reviewedCards ?? 0) + count
  bumpStreak(progress)
  saveProgress(progress)
}

// Get streak state (always returns a value, even on first load)
export const getStreak = (): StreakState => {
  const progress = loadProgress()
  return progress.streak ?? { count: 0, lastDay: "" }
}

// Get recent activity entries
export const getRecentActivity = (limit = 5): ActivityEntry[] => {
  const progress = loadProgress()
  return (progress.activityLog ?? []).slice(0, limit)
}

// Check if a lesson is completed
export const isLessonCompleted = (moduleId: number, lessonId: number): boolean => {
  const progress = loadProgress()
  return progress.completedLessons.includes(`${moduleId}_${lessonId}`)
}

// Check if a module is completed
export const isModuleCompleted = (moduleId: number): boolean => {
  const progress = loadProgress()
  return progress.completedModules.includes(moduleId)
}

// Check if an assessment is completed
export const isAssessmentCompleted = (moduleId: number): boolean => {
  const progress = loadProgress()
  return progress.completedAssessments.includes(moduleId)
}

// Get the module index by ID
export const getModuleIndexById = (moduleId: number): number => {
  let moduleCount = 0

  for (const phase of curriculumData.phases) {
    for (let i = 0; i < phase.modules.length; i++) {
      moduleCount++
      if (moduleCount === moduleId) {
        return i
      }
    }
  }

  return -1
}

// Get the module by ID
export const getModuleById = (moduleId: number): any => {
  let moduleCount = 0

  for (const phase of curriculumData.phases) {
    for (const module of phase.modules) {
      moduleCount++
      if (moduleCount === moduleId) {
        return module
      }
    }
  }

  return null
}

// Get total lesson count across the curriculum
export const getTotalLessonCount = (): number => {
  let count = 0
  for (const phase of curriculumData.phases) {
    for (const module of phase.modules) {
      count += module.lessons.length
    }
  }
  return count
}

// Get the next lesson after the current one
export const getNextLesson = (moduleId: number, lessonId: number): { moduleId: number; lessonId: number } | null => {
  const module = getModuleById(moduleId)

  if (!module) return null

  // If there's another lesson in the current module
  if (lessonId < module.lessons.length) {
    return { moduleId, lessonId: lessonId + 1 }
  }

  // If this is the last lesson in the module, go to the next module
  const nextModuleId = moduleId + 1
  const nextModule = getModuleById(nextModuleId)

  if (nextModule && nextModule.isAvailable) {
    return { moduleId: nextModuleId, lessonId: 1 }
  }

  return null
}

// Get the user's last accessed lesson
export const getLastAccessedLesson = (): { moduleId: number; lessonId: number } => {
  const progress = loadProgress()
  return { moduleId: progress.lastModule, lessonId: progress.lastLesson }
}

// Get the first incomplete lesson, walking forward from a given
// starting position. Used by getNextIncompleteLesson() and by
// getContinueLesson() below.
export const getNextIncompleteLesson = (): { moduleId: number; lessonId: number } => {
  const progress = loadProgress()
  // Start from last accessed, walk forward looking for an incomplete lesson
  let moduleId = progress.lastModule || 1
  let lessonId = progress.lastLesson || 1

  let safety = 0
  while (safety < 200) {
    safety++
    const module = getModuleById(moduleId)
    if (!module) {
      // Wrap around to first module
      moduleId = 1
      lessonId = 1
      break
    }
    if (lessonId > module.lessons.length) {
      // Move to next module
      moduleId += 1
      lessonId = 1
      continue
    }
    if (!progress.completedLessons.includes(`${moduleId}_${lessonId}`)) {
      return { moduleId, lessonId }
    }
    lessonId += 1
  }
  return { moduleId, lessonId }
}

// Get the lesson the user should "Continue Learning" — this is the
// primary entry point for the home page's Continue Learning tile.
//
// Logic:
//   1. If the user has a last-accessed lesson that is NOT complete,
//      return that lesson (resume where they left off).
//   2. Otherwise, return the next incomplete lesson (walk forward).
//   3. Otherwise (all lessons complete), return the first lesson of
//      the first module so they can review from the start.
export const getContinueLesson = (): { moduleId: number; lessonId: number } => {
  const progress = loadProgress()
  const lastModule = progress.lastModule || 1
  const lastLesson = progress.lastLesson || 1
  const lastKey = `${lastModule}_${lastLesson}`

  // Case 1: last-accessed lesson exists and is NOT complete → resume it.
  // We also verify the lesson actually exists in the curriculum
  // (in case the user's localStorage is stale).
  const module = getModuleById(lastModule)
  if (module && lastLesson >= 1 && lastLesson <= module.lessons.length) {
    if (!progress.completedLessons.includes(lastKey)) {
      return { moduleId: lastModule, lessonId: lastLesson }
    }
  }

  // Case 2: walk forward to the next incomplete lesson.
  const next = getNextIncompleteLesson()
  if (next.moduleId !== 1 || next.lessonId !== 1) {
    return next
  }

  // Case 3: everything complete, or curriculum is empty — return 1/1.
  return { moduleId: 1, lessonId: 1 }
}

// Reset all progress (for testing)
export const resetProgress = (): void => {
  saveProgress(defaultProgress)
}
