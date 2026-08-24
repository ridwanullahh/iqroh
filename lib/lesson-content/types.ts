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

export interface LessonWordBreakdown {
  arabic: string
  transliteration: string
  translation: string
  grammar: string
  tajweed: string
}

export interface LessonAyahBreakdown {
  ayahNumber: number
  arabic: string
  transliteration: string
  translation: string
  words: LessonWordBreakdown[]
}

export interface LessonSurahBreakdown {
  surahNumber: number
  surahName: string
  surahNameArabic: string
  surahNameTranslation: string
  totalAyahs: number
  reciter: string
  ayahs: LessonAyahBreakdown[]
}

export interface LessonContent {
  intro: string[]
  keyPoints: LessonKeyPoint[]
  examples: LessonExample[]
  practice: string
  surahBreakdown?: LessonSurahBreakdown
}
