// Types for the spaced repetition system
export interface ReviewItem {
  id: string
  type: "harakat" | "letter" | "rule" | "word"
  content: string
  audioUrl?: string
  interval: number // Days until next review
  easeFactor: number // Multiplier for interval
  repetitions: number // Number of successful reviews
  dueDate: Date
  lastReviewDate?: Date
}

export interface ReviewGrade {
  grade: 0 | 1 | 2 | 3 | 4 | 5 // 0: Complete blackout, 5: Perfect recall
  itemId: string
}

// Constants for the SM-2 algorithm
const MIN_EASE_FACTOR = 1.3
const EASE_FACTOR_MODIFIER = 0.15
const FIRST_INTERVAL = 1 // 1 day
const SECOND_INTERVAL = 6 // 6 days

// Initialize a new review item
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
    easeFactor: 2.5, // Initial ease factor
    repetitions: 0,
    dueDate: new Date(), // Due immediately
  }
}

// Update a review item based on performance (SM-2 algorithm)
export function updateReviewItem(item: ReviewItem, grade: number): ReviewItem {
  // Clone the item to avoid mutating the original
  const updatedItem = { ...item }

  // Update last review date
  updatedItem.lastReviewDate = new Date()

  // If grade is less than 3, reset repetitions
  if (grade < 3) {
    updatedItem.repetitions = 0
    updatedItem.interval = 0
  } else {
    // Calculate new interval based on repetitions
    if (updatedItem.repetitions === 0) {
      updatedItem.interval = FIRST_INTERVAL
    } else if (updatedItem.repetitions === 1) {
      updatedItem.interval = SECOND_INTERVAL
    } else {
      updatedItem.interval = Math.round(updatedItem.interval * updatedItem.easeFactor)
    }

    // Increment repetitions
    updatedItem.repetitions += 1
  }

  // Update ease factor
  updatedItem.easeFactor = Math.max(
    MIN_EASE_FACTOR,
    updatedItem.easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)),
  )

  // Calculate new due date
  const dueDate = new Date()
  dueDate.setDate(dueDate.getDate() + updatedItem.interval)
  updatedItem.dueDate = dueDate

  return updatedItem
}

// Get due review items
export function getDueReviewItems(items: ReviewItem[]): ReviewItem[] {
  const now = new Date()
  return items.filter((item) => item.dueDate <= now)
}

// Save review items to local storage
export function saveReviewItems(items: ReviewItem[]): void {
  if (typeof window !== "undefined") {
    localStorage.setItem("reviewItems", JSON.stringify(items))
  }
}

// Load review items from local storage
export function loadReviewItems(): ReviewItem[] {
  if (typeof window !== "undefined") {
    const storedItems = localStorage.getItem("reviewItems")
    if (storedItems) {
      const items = JSON.parse(storedItems) as ReviewItem[]

      // Convert string dates back to Date objects
      return items.map((item) => ({
        ...item,
        dueDate: new Date(item.dueDate),
        lastReviewDate: item.lastReviewDate ? new Date(item.lastReviewDate) : undefined,
      }))
    }
  }

  return []
}

// Add a new review item to the collection
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

