"use client"

// Bismillah. Review page — the entry point for spaced-repetition
// review sessions.
//
// Shows:
//   - A summary header (cards due today, total cards, learned,
//     mastered)
//   - A "Start review session" button
//   - The ReviewSession component (when active)
//   - A session summary (when complete)

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  type ReviewCard,
  loadReviewCards,
  getDueCards,
  getDueCount,
  getLearnedCount,
  getMasteredCount,
  saveReviewCards,
  initialiseReviewDeck,
} from "@/lib/spaced-repetition"
import ReviewSession, { type ReviewStats } from "@/components/review-session"
import { Calendar, Clock, Brain, CheckCircle2, Flame, TrendingUp, BookOpen, Sparkles, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function ReviewPage() {
  const [cards, setCards] = useState<ReviewCard[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isReviewing, setIsReviewing] = useState(false)
  const [sessionStats, setSessionStats] = useState<ReviewStats | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    try {
      // Initialise the deck (idempotent — only adds new cards if
      // they don't already exist). This populates the deck on the
      // user's first visit.
      const deck = initialiseReviewDeck()
      setCards(deck)
    } catch (error) {
      console.error("Error initialising review deck:", error)
      toast({
        title: "Error",
        description: "Failed to load review cards. Please refresh the page.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [toast])

  const handleStartReview = () => {
    const due = getDueCards(cards)
    if (due.length === 0) {
      toast({
        title: "No cards due",
        description: "You're all caught up! Come back later for more reviews.",
      })
      return
    }
    setSessionStats(null)
    setIsReviewing(true)
  }

  const handleReviewComplete = (updatedCards: ReviewCard[], stats: ReviewStats) => {
    // Merge the updated cards back into the full deck
    const updatedIds = new Set(updatedCards.map((c) => c.id))
    const merged = [...cards.filter((c) => !updatedIds.has(c.id)), ...updatedCards]
    setCards(merged)
    saveReviewCards(merged)
    setSessionStats(stats)
    setIsReviewing(false)
    toast({
      title: "Session complete!",
      description: `You reviewed ${stats.totalReviewed} cards with ${Math.round((stats.correctCount / Math.max(stats.totalReviewed, 1)) * 100)}% accuracy.`,
    })
  }

  const handleCancelReview = () => {
    setIsReviewing(false)
  }

  const handleResetDeck = () => {
    if (typeof window === "undefined") return
    if (!confirm("Reset your entire review deck? This will erase all your progress and re-create the deck from scratch.")) {
      return
    }
    localStorage.removeItem("iqroh_review_v2")
    const fresh = initialiseReviewDeck()
    setCards(fresh)
    setSessionStats(null)
    toast({
      title: "Deck reset",
      description: "Your review deck has been reset to the default set of cards.",
    })
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading review deck...</p>
        </div>
      </div>
    )
  }

  // Review session active
  if (isReviewing) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <ReviewSession cards={cards} onComplete={handleReviewComplete} onCancel={handleCancelReview} />
      </div>
    )
  }

  // Session summary
  if (sessionStats) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Session Complete
            </CardTitle>
            <CardDescription>Great job! Here's how your session went.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <SummaryStat
                icon={<Brain className="w-4 h-4" />}
                label="Reviewed"
                value={String(sessionStats.totalReviewed)}
                color="emerald"
              />
              <SummaryStat
                icon={<TrendingUp className="w-4 h-4" />}
                label="Accuracy"
                value={`${Math.round((sessionStats.correctCount / Math.max(sessionStats.totalReviewed, 1)) * 100)}%`}
                color="sky"
              />
              <SummaryStat
                icon={<Check className="w-4 h-4" />}
                label="Correct"
                value={String(sessionStats.correctCount)}
                color="emerald"
              />
              <SummaryStat
                icon={<Clock className="w-4 h-4" />}
                label="Duration"
                value={`${sessionStats.durationSeconds}s`}
                color="amber"
              />
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button onClick={handleStartReview}>
                Review again
              </Button>
              <Button variant="outline" asChild>
                <Link href="/curriculum">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Back to curriculum
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Main review page (no active session)
  const dueCount = getDueCount(cards)
  const learnedCount = getLearnedCount(cards)
  const masteredCount = getMasteredCount(cards)
  const totalCount = cards.length

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Spaced Repetition Review</h1>
        <p className="text-muted-foreground">
          Review the letters, harakat, and words you've learned. Spaced repetition strengthens your long-term memory by
          scheduling each card to be reviewed just before you'd forget it.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<Clock className="h-5 w-5" />}
            label="Due now"
            value={String(dueCount)}
            color="emerald"
          />
          <StatCard
            icon={<Brain className="h-5 w-5" />}
            label="Learning"
            value={String(learnedCount)}
            color="amber"
          />
          <StatCard
            icon={<Sparkles className="h-5 w-5" />}
            label="Mastered"
            value={String(masteredCount)}
            color="sky"
          />
          <StatCard
            icon={<BookOpen className="h-5 w-5" />}
            label="Total cards"
            value={String(totalCount)}
            color="purple"
          />
        </div>

        {/* Main action card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-amber-500" />
              Review Session
            </CardTitle>
            <CardDescription>
              {dueCount > 0
                ? `You have ${dueCount} card${dueCount === 1 ? "" : "s"} due for review. A session takes about 5 minutes.`
                : "You're all caught up! Come back later or study new lessons to add more cards."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Today: {formatDate(new Date())}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button onClick={handleStartReview} disabled={dueCount === 0} size="lg">
                  Start review session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How it works */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">How spaced repetition works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-600/10 text-emerald-600 font-semibold text-xs flex items-center justify-center mt-0.5">
                1
              </div>
              <p>
                Each card has a front (the prompt) and a back (the answer). When you see the front, try to recall the
                answer from memory.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-600/10 text-emerald-600 font-semibold text-xs flex items-center justify-center mt-0.5">
                2
              </div>
              <p>
                Tap "Show answer" to reveal the back. Then grade yourself: Again (red, forgot), Hard (amber, recalled
                with difficulty), Good (emerald, recalled comfortably), or Easy (sky, recalled instantly).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-600/10 text-emerald-600 font-semibold text-xs flex items-center justify-center mt-0.5">
                3
              </div>
              <p>
                The SM-2 algorithm schedules each card's next review based on your grade. Cards you find easy are shown
                less frequently; cards you struggle with are shown more often.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-600/10 text-emerald-600 font-semibold text-xs flex items-center justify-center mt-0.5">
                4
              </div>
              <p>
                With consistent daily review, you'll move cards from "Learning" to "Mastered" — building a solid
                long-term memory of the Arabic letters, harakat, and vocabulary.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Reset (for testing) */}
        <div className="text-center">
          <Button variant="ghost" size="sm" onClick={handleResetDeck} className="text-xs text-muted-foreground">
            Reset review deck (for testing)
          </Button>
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------
// Small presentational components
// ---------------------------------------------------------------------

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: "emerald" | "amber" | "sky" | "purple"
}) {
  const colorClasses = {
    emerald: "bg-emerald-600/10 text-emerald-700 dark:text-emerald-400",
    amber: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
    sky: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
    purple: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  }
  return (
    <Card>
      <CardContent className="pt-5 pb-4">
        <div className={`w-9 h-9 rounded-full ${colorClasses[color]} flex items-center justify-center mb-2`}>
          {icon}
        </div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  )
}

function SummaryStat({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: "emerald" | "amber" | "sky"
}) {
  const colorClasses = {
    emerald: "text-emerald-600",
    amber: "text-amber-600",
    sky: "text-sky-600",
  }
  return (
    <div className="text-center p-3 rounded-lg bg-muted/50">
      <div className={`flex items-center justify-center w-7 h-7 rounded-full mx-auto mb-1 ${colorClasses[color]}`}>
        {icon}
      </div>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  )
}

function Check({ className }: { className?: string }) {
  // Inline check icon (to avoid importing yet another lucide icon)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
