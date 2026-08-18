// Bismillah Ar-Rahman Ar-Roheem.
//
// Type definitions for the lesson content system.

export interface LessonExample {
  arabic: string
  transliteration: string
  meaning: string
}

export interface LessonKeyPoint {
  title: string
  description: string
}

export interface LessonContent {
  intro: string[]
  keyPoints: LessonKeyPoint[]
  examples: LessonExample[]
  practice: string
}
