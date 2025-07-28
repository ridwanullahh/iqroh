"use client"

import { useEffect } from "react"
import { addReviewItem, loadReviewItems, saveReviewItems } from "@/lib/spaced-repetition"

// This component initializes the spaced repetition system with items from completed lessons
export default function SpacedRepetitionInitializer() {
  useEffect(() => {
    // Load existing review items
    const existingItems = loadReviewItems()

    // Check if we need to initialize (only do this if there are no items yet)
    if (existingItems.length === 0) {
      // Add initial harakat items
      let items = existingItems

      // Fathah
      items = addReviewItem(items, "harakat", "َ", "/audio/fathah.mp3")
      items = addReviewItem(items, "harakat", "بَ", "/audio/ba-fathah.mp3")
      items = addReviewItem(items, "harakat", "سَ", "/audio/sa-fathah.mp3")

      // Kasrah
      items = addReviewItem(items, "harakat", "ِ", "/audio/kasrah.mp3")
      items = addReviewItem(items, "harakat", "بِ", "/audio/ba-kasrah.mp3")
      items = addReviewItem(items, "harakat", "سِ", "/audio/sa-kasrah.mp3")

      // Dammah
      items = addReviewItem(items, "harakat", "ُ", "/audio/dammah.mp3")
      items = addReviewItem(items, "harakat", "بُ", "/audio/ba-dammah.mp3")
      items = addReviewItem(items, "harakat", "سُ", "/audio/sa-dammah.mp3")

      // First group of letters
      items = addReviewItem(items, "letter", "ا", "/audio/alif.mp3")
      items = addReviewItem(items, "letter", "ب", "/audio/baa.mp3")
      items = addReviewItem(items, "letter", "ت", "/audio/taa.mp3")
      items = addReviewItem(items, "letter", "ث", "/audio/thaa.mp3")

      // Second group of letters
      items = addReviewItem(items, "letter", "ج", "/audio/jeem.mp3")
      items = addReviewItem(items, "letter", "ح", "/audio/haa.mp3")
      items = addReviewItem(items, "letter", "خ", "/audio/khaa.mp3")

      // Third group of letters
      items = addReviewItem(items, "letter", "د", "/audio/daal.mp3")
      items = addReviewItem(items, "letter", "ذ", "/audio/dhaal.mp3")
      items = addReviewItem(items, "letter", "ر", "/audio/raa.mp3")
      items = addReviewItem(items, "letter", "ز", "/audio/zaay.mp3")

      // Fourth group of letters
      items = addReviewItem(items, "letter", "س", "/audio/seen.mp3")
      items = addReviewItem(items, "letter", "ش", "/audio/sheen.mp3")
      items = addReviewItem(items, "letter", "ص", "/audio/saad.mp3")
      items = addReviewItem(items, "letter", "ض", "/audio/daad.mp3")

      // Fifth group of letters
      items = addReviewItem(items, "letter", "ط", "/audio/taa-emphatic.mp3")
      items = addReviewItem(items, "letter", "ظ", "/audio/zaa-emphatic.mp3")
      items = addReviewItem(items, "letter", "ع", "/audio/ayn.mp3")
      items = addReviewItem(items, "letter", "غ", "/audio/ghayn.mp3")

      // Sixth group of letters
      items = addReviewItem(items, "letter", "ف", "/audio/faa.mp3")
      items = addReviewItem(items, "letter", "ق", "/audio/qaaf.mp3")
      items = addReviewItem(items, "letter", "ك", "/audio/kaaf.mp3")
      items = addReviewItem(items, "letter", "ل", "/audio/laam.mp3")

      // Seventh group of letters
      items = addReviewItem(items, "letter", "م", "/audio/meem.mp3")
      items = addReviewItem(items, "letter", "ن", "/audio/noon.mp3")
      items = addReviewItem(items, "letter", "ه", "/audio/haa-soft.mp3")
      items = addReviewItem(items, "letter", "و", "/audio/waaw.mp3")
      items = addReviewItem(items, "letter", "ي", "/audio/yaa.mp3")

      // Save the items
      saveReviewItems(items)
    }
  }, [])

  // This component doesn't render anything
  return null
}

