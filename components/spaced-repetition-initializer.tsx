"use client"

// Bismillah. Spaced repetition initializer.
//
// On app mount, calls initialiseReviewDeck() to populate the user's
// review deck with cards drawn from the curriculum (28 letters × 2
// directions + 12 harakat examples + 20 vocabulary words = ~88 cards
// total). This is IDEMPOTENT — it only adds cards whose IDs don't
// already exist, so it's safe to call on every page load.
//
// The component renders nothing visible — it's a side-effect-only
// component mounted in the root layout.

import { useEffect } from "react"
import { initialiseReviewDeck } from "@/lib/spaced-repetition"

export default function SpacedRepetitionInitializer() {
  useEffect(() => {
    try {
      initialiseReviewDeck()
    } catch (err) {
      console.error("Failed to initialise review deck:", err)
    }
  }, [])

  return null
}
