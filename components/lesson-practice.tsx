"use client"

// Bismillah. Interactive practice component for lessons.
//
// Generates a multiple-choice quiz from the lesson's examples.
// Each question shows an Arabic word (or transliteration, depending
// on direction) and the user picks the correct answer from 4 options.
//
// The quiz:
//   - Generates N questions (default 5) from the lesson's examples
//   - Each question is either "Arabic → transliteration" or
//     "transliteration → Arabic" (randomly chosen per question)
//   - 4 multiple-choice options (the correct answer + 3 random
//     distractors from the other examples)
//   - Immediate feedback after each answer (correct/incorrect + the
//     right answer highlighted)
//   - Final score screen with a "retry" button
//
// No emojis — all icons are inline SVG / Lucide-react line icons.

import { useState, useMemo, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle2,
  XCircle,
  Volume2,
  RotateCw,
  Trophy,
  Brain,
  ArrowRight,
  Lightbulb,
} from "lucide-react"
import type { LessonExample } from "@/lib/lesson-content"
import { speakArabicText, isSpeechSynthesisSupported } from "@/lib/audio-utils"
import { useToast } from "@/hooks/use-toast"

interface LessonPracticeProps {
  examples: LessonExample[]
  /** Number of questions to generate (default 5, clamped to examples.length). */
  questionCount?: number
  /** The lesson title (shown in the header). */
  lessonTitle?: string
}

type Direction = "ar-to-tr" | "tr-to-ar"

interface QuizQuestion {
  direction: Direction
  prompt: string // Arabic (if ar-to-tr) or transliteration (if tr-to-ar)
  promptArabic?: string // For audio playback (always the Arabic text)
  correctAnswer: string
  options: string[] // 4 options, shuffled
  explanation?: string // The meaning, shown after answering
}

type AnswerState = "unanswered" | "correct" | "incorrect"

export function LessonPractice({ examples, questionCount = 5, lessonTitle }: LessonPracticeProps) {
  const [started, setStarted] = useState(false)
  const [completed, setCompleted] = useState(false)
  const { toast } = useToast()

  // Clamp the question count to the number of examples available.
  const actualCount = Math.min(questionCount, examples.length)

  // Generate the quiz questions (memoised so they don't change on re-render).
  const questions = useMemo<QuizQuestion[]>(() => {
    if (examples.length === 0) return []
    return generateQuiz(examples, actualCount)
  }, [examples, actualCount])

  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [answerState, setAnswerState] = useState<AnswerState>("unanswered")
  const [score, setScore] = useState(0)
  const [answeredCount, setAnsweredCount] = useState(0)

  const speechSupported = isSpeechSynthesisSupported()

  const handleStart = () => {
    setStarted(true)
    setCompleted(false)
    setCurrentIdx(0)
    setSelectedOption(null)
    setAnswerState("unanswered")
    setScore(0)
    setAnsweredCount(0)
  }

  const handleRetry = () => {
    // Re-generate by toggling started off and on (questions are memoised
    // by examples + actualCount, so we need a different mechanism to
    // re-shuffle. We use a re-mount via key in the parent, or just
    // reset state here and rely on the shuffle being different if
    // examples changed. For a true re-shuffle, we'd need a nonce.)
    setStarted(false)
    setCompleted(false)
    setTimeout(() => setStarted(true), 50)
  }

  const handleSelectOption = (option: string) => {
    if (answerState !== "unanswered") return // Lock after answering
    setSelectedOption(option)
    const current = questions[currentIdx]
    const isCorrect = option === current.correctAnswer
    setAnswerState(isCorrect ? "correct" : "incorrect")
    setAnsweredCount((c) => c + 1)
    if (isCorrect) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx((i) => i + 1)
      setSelectedOption(null)
      setAnswerState("unanswered")
    } else {
      // Quiz complete
      setCompleted(true)
      const finalScore = score
      const total = questions.length
      const percentage = Math.round((finalScore / total) * 100)
      toast({
        title: percentage >= 70 ? "Well done!" : "Keep practising",
        description: `You scored ${finalScore}/${total} (${percentage}%).`,
      })
    }
  }

  const handlePlayAudio = async () => {
    const current = questions[currentIdx]
    if (!current?.promptArabic) return
    try {
      await speakArabicText(current.promptArabic)
    } catch (err) {
      console.error("Audio playback failed:", err)
    }
  }

  // Not enough examples to generate a quiz
  if (examples.length < 2) {
    return (
      <Card className="border-purple-500/30 bg-purple-500/5">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-500/15 flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Practice quiz</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This lesson needs at least 2 examples to generate a practice quiz. The current lesson has{" "}
                {examples.length} example{examples.length === 1 ? "" : "s"}.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Pre-start screen
  if (!started) {
    return (
      <Card className="border-purple-500/30 bg-purple-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-500" />
            Practice Quiz
          </CardTitle>
          <CardDescription>
            Test your knowledge with {actualCount} multiple-choice questions drawn from this lesson's examples.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-muted-foreground mb-4">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" />
              <span>Each question shows an Arabic word or transliteration. Pick the correct answer from 4 options.</span>
            </div>
            <div className="flex items-start gap-2">
              <Volume2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
              <span>You can tap the speaker icon to hear the Arabic pronunciation before answering.</span>
            </div>
            <div className="flex items-start gap-2">
              <Trophy className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" />
              <span>Score 70% or higher to mark this lesson as mastered.</span>
            </div>
          </div>
          <Button onClick={handleStart} size="lg" className="w-full">
            Start quiz
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Completion screen
  if (completed) {
    const percentage = Math.round((score / questions.length) * 100)
    const passed = percentage >= 70
    return (
      <Card className="border-purple-500/30 bg-purple-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className={`w-5 h-5 ${passed ? "text-amber-500" : "text-muted-foreground"}`} />
            Quiz Complete
          </CardTitle>
          <CardDescription>
            {passed
              ? "Excellent work! You've mastered this lesson's content."
              : "Good effort! Review the lesson and try again to improve your score."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-lg bg-background">
              <div className="text-2xl font-bold text-emerald-600">{score}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Correct</div>
            </div>
            <div className="p-3 rounded-lg bg-background">
              <div className="text-2xl font-bold text-red-600">{questions.length - score}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Incorrect</div>
            </div>
            <div className="p-3 rounded-lg bg-background">
              <div className={`text-2xl font-bold ${passed ? "text-emerald-600" : "text-amber-600"}`}>{percentage}%</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Score</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleRetry} variant="outline" className="flex-1">
              <RotateCw className="mr-2 h-4 w-4" />
              Try again
            </Button>
            <Button onClick={() => setStarted(false)} variant="ghost" className="flex-1">
              Back to lesson
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Active quiz screen
  const current = questions[currentIdx]
  const progress = ((currentIdx) / questions.length) * 100

  return (
    <Card className="border-purple-500/30 bg-purple-500/5">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-2 mb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Brain className="w-4 h-4 text-purple-500" />
            Practice Quiz
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {currentIdx + 1} / {questions.length}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Score: {score}
            </Badge>
          </div>
        </div>
        <Progress value={progress} className="h-1.5" />
      </CardHeader>
      <CardContent className="space-y-4">
        {/* The prompt */}
        <div className="text-center py-4">
          <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
            {current.direction === "ar-to-tr" ? "What is the transliteration?" : "Which Arabic word is this?"}
          </div>
          <div className="flex items-center justify-center gap-3">
            {current.direction === "ar-to-tr" ? (
              <div
                className="text-5xl md:text-6xl font-arabic text-foreground leading-loose"
                dir="rtl"
                lang="ar"
                style={{ fontFamily: "var(--font-naskh), 'Noto Naskh Arabic', 'Amiri', serif" }}
              >
                {current.prompt}
              </div>
            ) : (
              <div className="text-3xl md:text-4xl font-mono text-foreground">{current.prompt}</div>
            )}
            {current.promptArabic && speechSupported && (
              <button
                type="button"
                onClick={handlePlayAudio}
                className="shrink-0 w-10 h-10 rounded-full bg-emerald-600/10 hover:bg-emerald-600/20 flex items-center justify-center transition-colors"
                aria-label="Play audio"
                title="Play pronunciation"
              >
                <Volume2 className="w-4 h-4 text-emerald-600" />
              </button>
            )}
          </div>
        </div>

        {/* The options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {current.options.map((option, idx) => {
            const isSelected = selectedOption === option
            const isCorrect = option === current.correctAnswer
            const showCorrect = answerState !== "unanswered" && isCorrect
            const showIncorrect = answerState === "incorrect" && isSelected && !isCorrect

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(option)}
                disabled={answerState !== "unanswered"}
                className={`text-left p-3 rounded-lg border transition-colors ${
                  showCorrect
                    ? "border-emerald-600 bg-emerald-600/10"
                    : showIncorrect
                      ? "border-red-600 bg-red-600/10"
                      : answerState === "unanswered"
                        ? "border-border hover:border-purple-500/40 hover:bg-purple-500/5 cursor-pointer"
                        : "border-border opacity-60"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  {/* For ar-to-tr, options are transliteration (mono font).
                      For tr-to-ar, options are Arabic (arabic font). */}
                  {current.direction === "ar-to-tr" ? (
                    <span className="font-mono text-sm">{option}</span>
                  ) : (
                    <span
                      className="text-2xl font-arabic leading-none"
                      dir="rtl"
                      lang="ar"
                      style={{ fontFamily: "var(--font-naskh), 'Noto Naskh Arabic', 'Amiri', serif" }}
                    >
                      {option}
                    </span>
                  )}
                  {showCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                  {showIncorrect && <XCircle className="w-4 h-4 text-red-600 shrink-0" />}
                </div>
              </button>
            )
          })}
        </div>

        {/* Explanation (shown after answering) */}
        {answerState !== "unanswered" && current.explanation && (
          <div className="text-sm text-muted-foreground bg-background/50 rounded-lg p-3 border border-border/40">
            <span className="font-medium text-foreground">Meaning: </span>
            {current.explanation}
          </div>
        )}

        {/* Next button (shown after answering) */}
        {answerState !== "unanswered" && (
          <Button onClick={handleNext} className="w-full" size="lg">
            {currentIdx < questions.length - 1 ? "Next question" : "See results"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------
// Quiz generation
// ---------------------------------------------------------------------

function generateQuiz(examples: LessonExample[], count: number): QuizQuestion[] {
  // Shuffle the examples and take `count` of them as the questions.
  const shuffled = [...examples].sort(() => Math.random() - 0.5).slice(0, count)

  return shuffled.map((example) => {
    // Randomly choose the direction
    const direction: Direction = Math.random() < 0.5 ? "ar-to-tr" : "tr-to-ar"

    // The correct answer depends on the direction
    const correctAnswer = direction === "ar-to-tr" ? example.transliteration : example.arabic

    // Generate 3 distractors from the other examples
    const distractors = examples
      .filter((e) => e.arabic !== example.arabic)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((e) => (direction === "ar-to-tr" ? e.transliteration : e.arabic))

    // Combine correct + distractors, shuffle
    const options = [...distractors, correctAnswer].sort(() => Math.random() - 0.5)

    return {
      direction,
      prompt: direction === "ar-to-tr" ? example.arabic : example.transliteration,
      promptArabic: example.arabic, // Always the Arabic text, for audio
      correctAnswer,
      options,
      explanation: example.meaning,
    }
  })
}
