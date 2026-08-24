// Bismillah Ar-Rahman Ar-Roheem.
//
// Spaced repetition system for the Iqroh app.
//
// This module manages a deck of review cards drawn from the
// curriculum's lesson content. Each card has a front (the prompt —
// Arabic text, or a transliteration) and a back (the answer — the
// transliteration, or the Arabic text). The SM-2 algorithm schedules
// when each card should next be reviewed.
//
// Card types:
//   - "letter-recall"  : Front = Arabic letter, Back = transliteration
//   - "letter-recognise" : Front = transliteration, Back = Arabic letter
//   - "harakat-recall" : Front = letter+harakah, Back = pronunciation
//   - "word-recall"    : Front = Arabic word, Back = transliteration+meaning
//   - "ayah-recall"    : Front = Arabic ayah, Back = translation
//
// Storage: localStorage key "iqroh_review_v2". The v2 suffix lets us
// migrate from the old format without corrupting existing data.

export type ReviewCardType =
  | "letter-recall"
  | "letter-recognise"
  | "harakat-recall"
  | "word-recall"
  | "ayah-recall"

export interface ReviewCard {
  id: string
  type: ReviewCardType
  front: string // The prompt (Arabic or transliteration)
  back: string // The answer (transliteration or Arabic)
  hint?: string // Optional hint (e.g., the meaning of a word)
  arabicText?: string // The Arabic text (for audio playback)
  // SM-2 scheduling fields
  interval: number // Days until next review
  easeFactor: number // Multiplier for interval (min 1.3)
  repetitions: number // Number of successful reviews
  dueDate: string // ISO date when the card is next due
  lastReviewDate?: string // ISO date of last review
  // Source tracking (so the user can navigate to the lesson)
  moduleId?: number
  lessonId?: number
}

export type ReviewGrade = 0 | 1 | 2 | 3 | 4 | 5
// 0 = complete blackout, 1 = wrong but familiar, 2 = wrong but easy to recall
// 3 = correct with serious difficulty, 4 = correct with some hesitation, 5 = perfect

// SM-2 constants
const MIN_EASE_FACTOR = 1.3
const FIRST_INTERVAL_DAYS = 1
const SECOND_INTERVAL_DAYS = 6

const STORAGE_KEY = "iqroh_review_v2"

// ---------------------------------------------------------------------
// Persistence
// ---------------------------------------------------------------------

export function loadReviewCards(): ReviewCard[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as ReviewCard[]
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

export function saveReviewCards(cards: ReviewCard[]): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cards))
  } catch (err) {
    console.error("Failed to save review cards:", err)
  }
}

// ---------------------------------------------------------------------
// Card creation
// ---------------------------------------------------------------------

function makeId(type: ReviewCardType, front: string): string {
  // Simple deterministic ID: type + front (sanitised). This makes
  // the idempotent initialise function safe to re-run.
  const safe = front.replace(/\s+/g, "_").replace(/[^\w-]/g, "").slice(0, 40)
  return `${type}__${safe}`
}

function makeCard(
  type: ReviewCardType,
  front: string,
  back: string,
  opts: { hint?: string; arabicText?: string; moduleId?: number; lessonId?: number } = {},
): ReviewCard {
  return {
    id: makeId(type, front),
    type,
    front,
    back,
    hint: opts.hint,
    arabicText: opts.arabicText,
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0,
    dueDate: new Date().toISOString(), // due immediately
    moduleId: opts.moduleId,
    lessonId: opts.lessonId,
  }
}

// ---------------------------------------------------------------------
// SM-2 algorithm — update a card based on the grade
// ---------------------------------------------------------------------

export function updateCard(card: ReviewCard, grade: ReviewGrade): ReviewCard {
  const updated: ReviewCard = { ...card }
  updated.lastReviewDate = new Date().toISOString()

  if (grade < 3) {
    // Failed recall — reset repetitions and interval
    updated.repetitions = 0
    updated.interval = 0
    // Due again soon (1 minute in practice, but we store as today
    // so the card shows up again in the same session if the user
    // keeps reviewing).
    updated.dueDate = new Date().toISOString()
  } else {
    // Successful recall — advance the interval
    if (updated.repetitions === 0) {
      updated.interval = FIRST_INTERVAL_DAYS
    } else if (updated.repetitions === 1) {
      updated.interval = SECOND_INTERVAL_DAYS
    } else {
      updated.interval = Math.round(updated.interval * updated.easeFactor)
    }
    updated.repetitions += 1
    const due = new Date()
    due.setDate(due.getDate() + updated.interval)
    updated.dueDate = due.toISOString()
  }

  // Update ease factor (only when grade >= 3, per SM-2)
  if (grade >= 3) {
    updated.easeFactor = Math.max(
      MIN_EASE_FACTOR,
      updated.easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)),
    )
  }

  return updated
}

// ---------------------------------------------------------------------
// Querying
// ---------------------------------------------------------------------

export function getDueCards(cards: ReviewCard[]): ReviewCard[] {
  const now = Date.now()
  return cards.filter((c) => new Date(c.dueDate).getTime() <= now)
}

export function getDueCount(cards: ReviewCard[]): number {
  return getDueCards(cards).length
}

export function getLearnedCount(cards: ReviewCard[]): number {
  // A card is "learned" once it has at least 2 successful reviews
  return cards.filter((c) => c.repetitions >= 2).length
}

export function getMasteredCount(cards: ReviewCard[]): number {
  // A card is "mastered" once it has at least 5 successful reviews
  // and an ease factor >= 2.5 (stable in long-term memory)
  return cards.filter((c) => c.repetitions >= 5 && c.easeFactor >= 2.5).length
}

// ---------------------------------------------------------------------
// Initialisation — generate cards from the lesson content
// ---------------------------------------------------------------------

/**
 * Initialise the review deck with cards drawn from the curriculum.
 *
 * This function is IDEMPOTENT: it only adds cards whose IDs don't
 * already exist in the deck. Safe to call on every app load.
 *
 * The cards are generated from:
 *   - The 28 Arabic letters (letter-recall + letter-recognise = 56 cards)
 *   - The 3 harakat on a few representative letters (harakat-recall)
 *   - Key vocabulary words from the lesson examples (word-recall)
 *
 * We keep the deck small enough to be reviewable in a single session
 * (around 80-100 cards total) so the user doesn't feel overwhelmed.
 */
export function initialiseReviewDeck(
  letters: Array<{ ar: string; en: string; tr: string }> = DEFAULT_LETTERS,
  harakatExamples: Array<{ ar: string; tr: string }> = DEFAULT_HARAKAT_EXAMPLES,
  words: Array<{ ar: string; tr: string; meaning: string }> = DEFAULT_WORDS,
): ReviewCard[] {
  const existing = loadReviewCards()
  const existingIds = new Set(existing.map((c) => c.id))
  const newCards: ReviewCard[] = []

  // Letter recall cards: front = Arabic, back = transliteration
  for (const letter of letters) {
    const card = makeCard("letter-recall", letter.ar, letter.tr, {
      hint: letter.en,
      arabicText: letter.ar,
    })
    if (!existingIds.has(card.id)) newCards.push(card)
  }

  // Letter recognise cards: front = transliteration, back = Arabic
  for (const letter of letters) {
    const card = makeCard("letter-recognise", letter.tr, letter.ar, {
      hint: letter.en,
      arabicText: letter.ar,
    })
    if (!existingIds.has(card.id)) newCards.push(card)
  }

  // Harakat recall cards: front = letter+harakah, back = pronunciation
  for (const ex of harakatExamples) {
    const card = makeCard("harakat-recall", ex.ar, ex.tr, {
      arabicText: ex.ar,
    })
    if (!existingIds.has(card.id)) newCards.push(card)
  }

  // Word recall cards: front = Arabic word, back = transliteration + meaning
  for (const word of words) {
    const card = makeCard("word-recall", word.ar, `${word.tr} — ${word.meaning}`, {
      hint: word.meaning,
      arabicText: word.ar,
    })
    if (!existingIds.has(card.id)) newCards.push(card)
  }

  const combined = [...existing, ...newCards]
  if (newCards.length > 0) {
    saveReviewCards(combined)
  }
  return combined
}

// ---------------------------------------------------------------------
// Default card sources
// ---------------------------------------------------------------------

const DEFAULT_LETTERS: Array<{ ar: string; en: string; tr: string }> = [
  { ar: "ا", en: "Alif", tr: "a" },
  { ar: "ب", en: "Baa", tr: "ba" },
  { ar: "ت", en: "Taa", tr: "ta" },
  { ar: "ث", en: "Thaa", tr: "tha" },
  { ar: "ج", en: "Jeem", tr: "ja" },
  { ar: "ح", en: "Haa", tr: "ḥa" },
  { ar: "خ", en: "Khaa", tr: "kha" },
  { ar: "د", en: "Daal", tr: "da" },
  { ar: "ذ", en: "Dhaal", tr: "dha" },
  { ar: "ر", en: "Raa", tr: "ra" },
  { ar: "ز", en: "Zaay", tr: "za" },
  { ar: "س", en: "Seen", tr: "sa" },
  { ar: "ش", en: "Sheen", tr: "sha" },
  { ar: "ص", en: "Saad", tr: "ṣa" },
  { ar: "ض", en: "Daad", tr: "ḍa" },
  { ar: "ط", en: "Taa (emphatic)", tr: "ṭa" },
  { ar: "ظ", en: "Zhaa", tr: "ẓa" },
  { ar: "ع", en: "Ayn", tr: "ʿa" },
  { ar: "غ", en: "Ghayn", tr: "gha" },
  { ar: "ف", en: "Faa", tr: "fa" },
  { ar: "ق", en: "Qaaf", tr: "qa" },
  { ar: "ك", en: "Kaaf", tr: "ka" },
  { ar: "ل", en: "Laam", tr: "la" },
  { ar: "م", en: "Meem", tr: "ma" },
  { ar: "ن", en: "Noon", tr: "na" },
  { ar: "ه", en: "Haa (soft)", tr: "ha" },
  { ar: "و", en: "Waaw", tr: "wa" },
  { ar: "ي", en: "Yaa", tr: "ya" },
]

const DEFAULT_HARAKAT_EXAMPLES: Array<{ ar: string; tr: string }> = [
  { ar: "بَ", tr: "ba (fathah)" },
  { ar: "بِ", tr: "bi (kasrah)" },
  { ar: "بُ", tr: "bu (dammah)" },
  { ar: "تَ", tr: "ta (fathah)" },
  { ar: "تِ", tr: "ti (kasrah)" },
  { ar: "تُ", tr: "tu (dammah)" },
  { ar: "مَ", tr: "ma (fathah)" },
  { ar: "مِ", tr: "mi (kasrah)" },
  { ar: "مُ", tr: "mu (dammah)" },
  { ar: "سَ", tr: "sa (fathah)" },
  { ar: "سِ", tr: "si (kasrah)" },
  { ar: "سُ", tr: "su (dammah)" },
]

const DEFAULT_WORDS: Array<{ ar: string; tr: string; meaning: string }> = [
  { ar: "كَتَبَ", tr: "kataba", meaning: "he wrote" },
  { ar: "عَلِمَ", tr: "ʿalima", meaning: "he knew" },
  { ar: "دَخَلَ", tr: "dakhala", meaning: "he entered" },
  { ar: "خَرَجَ", tr: "kharaja", meaning: "he went out" },
  { ar: "شَرِبَ", tr: "shariba", meaning: "he drank" },
  { ar: "فَتَحَ", tr: "fataha", meaning: "he opened" },
  { ar: "كِتَابٌ", tr: "kitaabun", meaning: "a book" },
  { ar: "بَيْتٌ", tr: "baytun", meaning: "a house" },
  { ar: "نُورٌ", tr: "nurun", meaning: "light" },
  { ar: "سَلَامٌ", tr: "salaamun", meaning: "peace" },
  { ar: "رَحْمَةٌ", tr: "raḥmatun", meaning: "mercy" },
  { ar: "عِلْمٌ", tr: "ʿilmun", meaning: "knowledge" },
  { ar: "حَقٌّ", tr: "ḥaqqun", meaning: "truth" },
  { ar: "صِدْقٌ", tr: "ṣidqun", meaning: "honesty" },
  { ar: "خَلْقٌ", tr: "khulqun", meaning: "creation" },
  { ar: "رَزْقٌ", tr: "rizqun", meaning: "provision" },
  { ar: "ذِكْرٌ", tr: "dhikrun", meaning: "remembrance" },
  { ar: "شُكْرٌ", tr: "shukrun", meaning: "gratitude" },
  { ar: "صَبْرٌ", tr: "ṣabrun", meaning: "patience" },
  { ar: "حِلْمٌ", tr: "ḥilmun", meaning: "forbearance" },
]

// ---------------------------------------------------------------------
// Backwards-compat shims for the old spaced-repetition.ts API.
// The existing review-session.tsx and spaced-repetition-initializer.tsx
// import these names; we keep them working while the new system
// takes over.
// ---------------------------------------------------------------------

export interface ReviewItem {
  id: string
  type: "harakat" | "letter" | "rule" | "word"
  content: string
  audioUrl?: string
  interval: number
  easeFactor: number
  repetitions: number
  dueDate: Date
  lastReviewDate?: Date
}

export type { ReviewGrade as ReviewGradeLegacy }

export function createReviewItem(
  id: string,
  type: "harakat" | "letter" | "rule" | "word",
  content: string,
  audioUrl?: string,
): ReviewItem {
  return {
    id,
    type,
    content,
    audioUrl,
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0,
    dueDate: new Date(),
  }
}

export function updateReviewItem(item: ReviewItem, grade: number): ReviewItem {
  const updated: ReviewItem = { ...item }
  updated.lastReviewDate = new Date()
  if (grade < 3) {
    updated.repetitions = 0
    updated.interval = 0
  } else {
    if (updated.repetitions === 0) updated.interval = FIRST_INTERVAL_DAYS
    else if (updated.repetitions === 1) updated.interval = SECOND_INTERVAL_DAYS
    else updated.interval = Math.round(updated.interval * updated.easeFactor)
    updated.repetitions += 1
  }
  updated.easeFactor = Math.max(
    MIN_EASE_FACTOR,
    updated.easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)),
  )
  const due = new Date()
  due.setDate(due.getDate() + updated.interval)
  updated.dueDate = due
  return updated
}

export function getDueReviewItems(items: ReviewItem[]): ReviewItem[] {
  const now = new Date()
  return items.filter((item) => new Date(item.dueDate) <= now)
}

export function saveReviewItems(items: ReviewItem[]): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem("reviewItems", JSON.stringify(items))
  } catch {}
}

export function loadReviewItems(): ReviewItem[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem("reviewItems")
    if (!raw) return []
    const items = JSON.parse(raw) as ReviewItem[]
    return items.map((item) => ({
      ...item,
      dueDate: new Date(item.dueDate),
      lastReviewDate: item.lastReviewDate ? new Date(item.lastReviewDate) : undefined,
    }))
  } catch {
    return []
  }
}

export function addReviewItem(
  items: ReviewItem[],
  type: "harakat" | "letter" | "rule" | "word",
  content: string,
  audioUrl?: string,
): ReviewItem[] {
  const id = `${type}_${content}_${Date.now()}`
  const newItem = createReviewItem(id, type, content, audioUrl)
  return [...items, newItem]
}
