"use client"

// Bismillah. Rich review session component.
//
// Renders a spaced-repetition review session with:
//   - A flip-card UI (front shows the prompt, tap to reveal the answer)
//   - Audio playback for each card (uses the Web Speech API via
//     speakArabicText when the card has arabicText)
//   - A hint button (shows the hint without revealing the full answer)
//   - The 4-grade SM-2 rating buttons: Again (red), Hard (amber),
//     Good (emerald), Easy (sky) — these map to grades 1, 3, 4, 5
//   - A progress bar showing position in the session
//   - A session summary at the end (cards reviewed, time spent,
//     accuracy)
//
// No emojis — all icons are inline SVG / Lucide-react line icons.

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Volume2,
  Loader2,
  AlertCircle,
  Eye,
  EyeOff,
  RotateCw,
  Check,
  X,
  Zap,
  ThumbsUp,
  Sparkles,
  ArrowRight,
  Clock,
  TrendingUp,
} from "lucide-react"
import {
  type ReviewCard,
  type ReviewGrade,
  updateCard,
  getDueCards,
  saveReviewCards,
  incrementReviewedCards,
} from "@/lib/spaced-repetition"
import { speakArabicText, isSpeechSynthesisSupported } from "@/lib/audio-utils"
import { useToast } from "@/hooks/use-toast"

interface ReviewSessionProps {
  cards: ReviewCard[]
  onComplete: (updatedCards: ReviewCard[], stats: ReviewStats) => void
  onCancel?: () => void
}

export interface ReviewStats {
  totalReviewed: number
  correctCount: number // grades 3, 4, 5
  againCount: number // grade 1
  hardCount: number // grade 3
  goodCount: number // grade 4
  easyCount: number // grade 5
  durationSeconds: number
}

export default function ReviewSession({ cards, onComplete, onCancel }: ReviewSessionProps) {
  // Filter to only due cards, then take a reasonable session size.
  const sessionCards = useMemo(() => {
    const due = getDueCards(cards)
    // Shuffle so the order varies between sessions
    const shuffled = [...due].sort(() => Math.random() - 0.5)
    // Cap at 30 cards per session to keep it manageable
    return shuffled.slice(0, 30)
  }, [cards])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [updatedCards, setUpdatedCards] = useState<ReviewCard[]>([...sessionCards])
  const [audioState, setAudioState] = useState<"idle" | "loading" | "playing" | "error">("idle")
  const [sessionStart] = useState(() => Date.now())
  const [stats, setStats] = useState<ReviewStats>({
    totalReviewed: 0,
    correctCount: 0,
    againCount: 0,
    hardCount: 0,
    goodCount: 0,
    easyCount: 0,
    durationSeconds: 0,
  })
  const { toast } = useToast()

  const currentCard = sessionCards[currentIndex]
  const progress = sessionCards.length > 0 ? (currentIndex / sessionCards.length) * 100 : 0
  const speechSupported = isSpeechSynthesisSupported()

  // Auto-play the card's audio when a new card is shown (if the card
  // has arabicText and speech is supported). This helps the user
  // hear the pronunciation before they try to recall.
  useEffect(() => {
    if (!currentCard || !currentCard.arabicText || !speechSupported) return
    // Don't auto-play on the very first card — wait for the user to
    // interact (autoplay policy). Just reset state.
    setAudioState("idle")
  }, [currentIndex, currentCard, speechSupported])

  if (sessionCards.length === 0) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>No cards due</CardTitle>
          <CardDescription>You're all caught up! Come back later for more reviews.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => onComplete([], { ...stats, durationSeconds: Math.round((Date.now() - sessionStart) / 1000) })} className="w-full">
            Back to Review
          </Button>
        </CardContent>
      </Card>
    )
  }

  // If we've gone through all the cards, complete the session
  if (currentIndex >= sessionCards.length) {
    const finalStats: ReviewStats = {
      ...stats,
      durationSeconds: Math.round((Date.now() - sessionStart) / 1000),
    }
    // Persist the updated cards
    saveReviewCards(updatedCards)
    // Bump the reviewed-cards counter in the user's progress
    incrementReviewedCards(finalStats.totalReviewed)
    // Call the onComplete callback
    onComplete(updatedCards, finalStats)
    // Return null (the parent will switch to the summary view)
    return null
  }

  const handlePlayAudio = async () => {
    if (!currentCard?.arabicText || audioState === "loading") return
    setAudioState("loading")
    try {
      await speakArabicText(currentCard.arabicText)
      setAudioState("playing")
      setTimeout(() => setAudioState("idle"), 1500)
    } catch (err) {
      console.error("Audio playback failed:", err)
      setAudioState("error")
      setTimeout(() => setAudioState("idle"), 3000)
    }
  }

  const handleGrade = (grade: ReviewGrade) => {
    if (!currentCard) return
    const updated = updateCard(currentCard, grade)
    const newUpdated = [...updatedCards]
    newUpdated[currentIndex] = updated
    setUpdatedCards(newUpdated)

    // Update stats
    setStats((prev) => ({
      ...prev,
      totalReviewed: prev.totalReviewed + 1,
      correctCount: grade >= 3 ? prev.correctCount + 1 : prev.correctCount,
      againCount: grade === 1 ? prev.againCount + 1 : prev.againCount,
      hardCount: grade === 3 ? prev.hardCount + 1 : prev.hardCount,
      goodCount: grade === 4 ? prev.goodCount + 1 : prev.goodCount,
      easyCount: grade === 5 ? prev.easyCount + 1 : prev.easyCount,
    }))

    // Move to next card
    setShowAnswer(false)
    setShowHint(false)
    setCurrentIndex((i) => i + 1)
  }

  const cardTypeLabel = getCardTypeLabel(currentCard.type)
  const accuracy = stats.totalReviewed > 0 ? Math.round((stats.correctCount / stats.totalReviewed) * 100) : 0

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* Session header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            Card {currentIndex + 1} of {sessionCards.length}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {cardTypeLabel}
          </Badge>
        </div>
        {onCancel && (
          <Button variant="ghost" size="sm" onClick={onCancel}>
            End session
          </Button>
        )}
      </div>

      {/* Progress bar */}
      <Progress value={progress} className="h-2" />

      {/* The card */}
      <Card className="min-h-[280px] flex flex-col">
        <CardHeader className="pb-3">
          <CardDescription className="flex items-center justify-between">
            <span>{getCardPrompt(currentCard.type)}</span>
            {currentCard.hint && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(!showHint)}
                className="h-7 text-xs"
              >
                {showHint ? <EyeOff className="w-3 h-3 mr-1" /> : <Eye className="w-3 h-3 mr-1" />}
                {showHint ? "Hide hint" : "Hint"}
              </Button>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
          {/* Front of card — the prompt */}
          <div className="space-y-2">
            {isArabicFront(currentCard.type) ? (
              <div
                className="text-5xl md:text-6xl font-arabic text-foreground leading-loose"
                dir="rtl"
                lang="ar"
                style={{ fontFamily: "var(--font-naskh), 'Noto Naskh Arabic', 'Amiri', serif" }}
              >
                {currentCard.front}
              </div>
            ) : (
              <div className="text-3xl md:text-4xl font-mono text-foreground">{currentCard.front}</div>
            )}
          </div>

          {/* Hint (if requested) */}
          {showHint && currentCard.hint && (
            <div className="text-sm text-amber-600 dark:text-amber-400 italic">
              Hint: {currentCard.hint}
            </div>
          )}

          {/* Audio button (if the card has arabicText) */}
          {currentCard.arabicText && (
            <Button
              variant="outline"
              size="sm"
              onClick={handlePlayAudio}
              disabled={audioState === "loading" || !speechSupported}
              className="mt-2"
            >
              {audioState === "loading" ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : audioState === "error" ? (
                <AlertCircle className="w-4 h-4 mr-2" />
              ) : (
                <Volume2 className="w-4 h-4 mr-2" />
              )}
              {audioState === "error" ? "Audio unavailable" : "Play audio"}
            </Button>
          )}

          {/* Back of card — the answer (revealed on tap) */}
          {showAnswer ? (
            <div className="pt-4 border-t w-full space-y-2">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Answer</div>
              {isArabicFront(currentCard.type) ? (
                <div className="text-2xl font-mono text-foreground">{currentCard.back}</div>
              ) : (
                <div
                  className="text-4xl font-arabic text-foreground leading-loose"
                  dir="rtl"
                  lang="ar"
                  style={{ fontFamily: "var(--font-naskh), 'Noto Naskh Arabic', 'Amiri', serif" }}
                >
                  {currentCard.back}
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="default"
              size="lg"
              onClick={() => setShowAnswer(true)}
              className="mt-4"
            >
              <Eye className="w-4 h-4 mr-2" />
              Show answer
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Grade buttons — only shown after the answer is revealed */}
      {showAnswer && (
        <div className="grid grid-cols-4 gap-2">
          <GradeButton
            label="Again"
            sublabel="< 1m"
            color="red"
            icon={<RotateCw className="w-4 h-4" />}
            onClick={() => handleGrade(1)}
          />
          <GradeButton
            label="Hard"
            sublabel="1d"
            color="amber"
            icon={<Zap className="w-4 h-4" />}
            onClick={() => handleGrade(3)}
          />
          <GradeButton
            label="Good"
            sublabel="3d"
            color="emerald"
            icon={<ThumbsUp className="w-4 h-4" />}
            onClick={() => handleGrade(4)}
          />
          <GradeButton
            label="Easy"
            sublabel="6d"
            color="sky"
            icon={<Sparkles className="w-4 h-4" />}
            onClick={() => handleGrade(5)}
          />
        </div>
      )}

      {/* Live stats */}
      {stats.totalReviewed > 0 && (
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3 text-emerald-600" />
            {stats.correctCount} correct
          </span>
          <span className="flex items-center gap-1">
            <X className="w-3 h-3 text-red-600" />
            {stats.againCount} again
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            {accuracy}% accuracy
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {Math.round((Date.now() - sessionStart) / 1000)}s
          </span>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------

function getCardTypeLabel(type: ReviewCard["type"]): string {
  switch (type) {
    case "letter-recall":
      return "Letter → Sound"
    case "letter-recognise":
      return "Sound → Letter"
    case "harakat-recall":
      return "Harakat → Sound"
    case "word-recall":
      return "Word → Meaning"
    case "ayah-recall":
      return "Ayah → Translation"
    default:
      return "Review"
  }
}

function getCardPrompt(type: ReviewCard["type"]): string {
  switch (type) {
    case "letter-recall":
      return "What sound does this letter make?"
    case "letter-recognise":
      return "Which letter makes this sound?"
    case "harakat-recall":
      return "What sound does this combination make?"
    case "word-recall":
      return "What does this word mean?"
    case "ayah-recall":
      return "What is the translation of this ayah?"
    default:
      return "Recall the answer"
  }
}

function isArabicFront(type: ReviewCard["type"]): boolean {
  // For letter-recall, harakat-recall, word-recall, ayah-recall:
  //   the front is Arabic, the back is transliteration/translation.
  // For letter-recognise:
  //   the front is transliteration, the back is Arabic.
  return type !== "letter-recognise"
}

interface GradeButtonProps {
  label: string
  sublabel: string
  color: "red" | "amber" | "emerald" | "sky"
  icon: React.ReactNode
  onClick: () => void
}

function GradeButton({ label, sublabel, color, icon, onClick }: GradeButtonProps) {
  const colorClasses = {
    red: "border-red-500/40 text-red-700 hover:bg-red-500/10 dark:text-red-400",
    amber: "border-amber-500/40 text-amber-700 hover:bg-amber-500/10 dark:text-amber-400",
    emerald: "border-emerald-500/40 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-400",
    sky: "border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:text-sky-400",
  }
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className={`h-auto py-3 flex-col gap-0.5 ${colorClasses[color]}`}
    >
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="font-semibold">{label}</span>
      </div>
      <span className="text-[10px] opacity-70">{sublabel}</span>
    </Button>
  )
}
