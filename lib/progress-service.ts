import { curriculumData } from "./curriculum-data"

// Types for progress tracking
export interface UserProgress {
  completedLessons: string[] // Array of completed lesson IDs (moduleId_lessonId)
  completedModules: number[] // Array of completed module IDs
  completedAssessments: number[] // Array of completed assessment IDs
  lastModule: number // Last accessed module ID
  lastLesson: number // Last accessed lesson ID
}

// Default progress
const defaultProgress: UserProgress = {
  completedLessons: [],
  completedModules: [],
  completedAssessments: [],
  lastModule: 1,
  lastLesson: 1,
}

// Save progress to localStorage
export const saveProgress = (progress: UserProgress): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("userProgress", JSON.stringify(progress))
  }
}

// Load progress from localStorage
export const loadProgress = (): UserProgress => {
  if (typeof window !== "undefined") {
    const savedProgress = localStorage.getItem("userProgress")
    if (savedProgress) {
      return JSON.parse(savedProgress)
    }
  }
  return defaultProgress
}

// Mark a lesson as completed
export const completeLesson = (moduleId: number, lessonId: number): UserProgress => {
  const progress = loadProgress()
  const lessonKey = `${moduleId}_${lessonId}`

  if (!progress.completedLessons.includes(lessonKey)) {
    progress.completedLessons.push(lessonKey)
  }

  // Update last accessed lesson and module
  progress.lastModule = moduleId
  progress.lastLesson = lessonId

  // Check if all lessons in the module are completed
  const moduleIndex = getModuleIndexById(moduleId)
  if (moduleIndex !== -1) {
    const module = getModuleById(moduleId)
    if (module) {
      const allLessonsCompleted = module.lessons.every((_, index) =>
        progress.completedLessons.includes(`${moduleId}_${index + 1}`),
      )

      if (allLessonsCompleted && !progress.completedModules.includes(moduleId)) {
        progress.completedModules.push(moduleId)
      }
    }
  }

  saveProgress(progress)
  return progress
}

// Mark an assessment as completed
export const completeAssessment = (moduleId: number): UserProgress => {
  const progress = loadProgress()

  if (!progress.completedAssessments.includes(moduleId)) {
    progress.completedAssessments.push(moduleId)
  }

  saveProgress(progress)
  return progress
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

// Reset all progress (for testing)
export const resetProgress = (): void => {
  saveProgress(defaultProgress)
}

