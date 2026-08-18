// Bismillah Ar-Rahman Ar-Roheem.
//
// Index for the lesson content system. Combines all phase content
// into a single lookup map by lesson slug.
//
// The lesson slug (e.g., "fathah", "intro-to-tajweed") is the
// unique key used by the curriculum data and the lesson pages.

import type { LessonContent } from "./types"
import { foundationContent } from "./foundation"
import { intermediateContent } from "./intermediate"
import { advancedContent, advancedContentPart2 } from "./advanced"

export type { LessonContent, LessonExample, LessonKeyPoint } from "./types"

export const lessonContent: Record<string, LessonContent> = {
  ...foundationContent,
  ...intermediateContent,
  ...advancedContent,
  ...advancedContentPart2,
}

/**
 * Get the content for a lesson by its slug. Returns null if the
 * slug is not found (the lesson page should render a fallback).
 */
export function getLessonContent(slug: string): LessonContent | null {
  return lessonContent[slug] || null
}

/**
 * Get the content for a lesson by its (moduleId, lessonId) tuple.
 * The moduleId and lessonId are 1-indexed positions in the
 * flattened curriculum data (matching the URL structure
 * /lessons/<moduleId>/<lessonId>).
 */
export function getLessonContentByPosition(
  curriculumData: { phases: Array<{ title: string; description: string; modules: Array<{ title: string; description: string; isAvailable: boolean; lessons: Array<{ title: string; slug: string; isCompleted: boolean }> }> }> },
  moduleId: number,
  lessonId: number,
): { content: LessonContent | null; lesson: { title: string; slug: string; isCompleted: boolean }; module: { title: string; description: string; isAvailable: boolean; lessons: Array<{ title: string; slug: string; isCompleted: boolean }> }; phaseTitle: string } | null {
  let counter = 0
  for (const phase of curriculumData.phases) {
    for (const module of phase.modules) {
      counter += 1
      if (counter === moduleId) {
        if (lessonId < 1 || lessonId > module.lessons.length) return null
        const lesson = module.lessons[lessonId - 1]
        return {
          content: getLessonContent(lesson.slug),
          lesson,
          module,
          phaseTitle: phase.title,
        }
      }
    }
  }
  return null
}
