"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle, XCircle, Trophy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { speakArabicText } from "@/lib/audio-utils"
import { addReviewItem, loadReviewItems, saveReviewItems } from "@/lib/spaced-repetition"

interface Question {
  id: string
  type: "multiple-choice" | "true-false" | "matching" | "audio-recognition"
  prompt: string
  options: string[]
  correctAnswer: string | number
  arabicText?: string
  audioText?: string
  explanation?: string
}

interface ModuleAssessmentProps {
  title: string
  description: string
  questions: Question[]
  moduleId: number
  onComplete: (score: number, totalQuestions: number) => void
}

export default function ModuleAssessment({
  title,
  description,
  questions,
  moduleId,
  onComplete,
}: ModuleAssessmentProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(string | number | null)[]>(Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const { toast } = useToast()

  const currentQuestion = questions[currentIndex]
  const progress = (currentIndex / questions.length) * 100

  // Handle answer selection
  const handleSelectAnswer = (value: string) => {
    const newAnswers = [...answers]
    newAnswers[currentIndex] = value
    setAnswers(newAnswers)
    setShowExplanation(false)
  }

  // Move to next question
  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowExplanation(false)
    } else {
      // Last question, show results
      handleSubmitAssessment()
    }
  }

  // Move to previous question
  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setShowExplanation(false)
    }
  }

  // Play audio for audio recognition questions
  const handlePlayAudio = async () => {
    if (isPlaying || !currentQuestion.audioText) return

    try {
      setIsPlaying(true)
      await speakArabicText(currentQuestion.audioText)
      setIsPlaying(false)
    } catch (error) {
      console.error("Error playing audio:", error)
      toast({
        title: "Error",
        description: "Failed to play audio. Please try again.",
        variant: "destructive",
      })
      setIsPlaying(false)
    }
  }

  // Show explanation for current question
  const handleShowExplanation = () => {
    setShowExplanation(true)
  }

  // Submit assessment
  const handleSubmitAssessment = async () => {
    setIsSubmitting(true)

    try {
      // Calculate score
      const score = answers.reduce((total, answer, index) => {
        if (answer === questions[index].correctAnswer) {
          return total + 1
        }
        return total
      }, 0)

      // Add items to spaced repetition system
      const existingItems = loadReviewItems()
      let updatedItems = [...existingItems]

      // Add items that were answered incorrectly
      questions.forEach((question, index) => {
        if (answers[index] !== question.correctAnswer && question.arabicText) {
          // Check if this item already exists
          const exists = updatedItems.some(
            (item) => item.content === question.arabicText && (item.type === "letter" || item.type === "harakat"),
          )

          if (!exists) {
            const type = question.arabicText.length === 1 ? "letter" : "harakat"
            updatedItems = addReviewItem(updatedItems, type, question.arabicText)
          }
        }
      })

      // Save updated items
      saveReviewItems(updatedItems)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setShowResults(true)
      onComplete(score, questions.length)
    } catch (error) {
      console.error("Error submitting assessment:", error)
      toast({
        title: "Error",
        description: "Failed to submit assessment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Check if current question is answered
  const isCurrentQuestionAnswered = answers[currentIndex] !== null

  // Calculate final score
  const calculateScore = () => {
    return answers.reduce((total, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return total + 1
      }
      return total
    }, 0)
  }

  // Render results
  if (showResults) {
    const score = calculateScore()
    const percentage = Math.round((score / questions.length) * 100)
    const passed = percentage >= 70

    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className={`h-5 w-5 ${passed ? "text-yellow-500" : "text-gray-400"}`} />
            Assessment Results
          </CardTitle>
        </CardHeader>

        <CardContent className="text-center">
          <div className="mb-6">
            <div className="text-5xl font-bold mb-2">
              {score}/{questions.length}
            </div>
            <div className="text-xl text-muted-foreground">{percentage}%</div>
            <div
              className={`mt-2 font-medium ${passed ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}
            >
              {passed
                ? "Congratulations! You passed the assessment."
                : "You need to score at least 70% to pass. Try again!"}
            </div>
          </div>

          <Progress
            value={percentage}
            className="h-3 mb-6"
            indicatorClassName={percentage >= 70 ? "bg-green-500" : "bg-amber-500"}
          />

          <div className="text-left space-y-4">
            {questions.map((question, index) => {
              const isCorrect = answers[index] === question.correctAnswer

              return (
                <div key={question.id} className="border rounded-md p-4">
                  <div className="flex items-start gap-2">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    )}
                    <div>
                      <div className="font-medium">{question.prompt}</div>
                      {question.arabicText && <div className="arabic-large my-2">{question.arabicText}</div>}
                      <div className="text-sm mt-1">
                        <span className="text-muted-foreground">Your answer: </span>
                        {typeof answers[index] === "string" &&
                          question.options[Number.parseInt(answers[index] as string)]}
                      </div>
                      {!isCorrect && (
                        <div className="text-sm mt-1 text-green-600 dark:text-green-400">
                          <span className="text-muted-foreground">Correct answer: </span>
                          {typeof question.correctAnswer === "string" &&
                            question.options[Number.parseInt(question.correctAnswer)]}
                        </div>
                      )}
                      {question.explanation && (
                        <div className="text-sm mt-2 p-2 bg-muted rounded">
                          <span className="font-medium">Explanation: </span>
                          {question.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
          <Button variant="default" onClick={() => (window.location.href = `/curriculum`)}>
            Continue Learning
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{title}</span>
          <span className="text-sm font-normal text-muted-foreground">
            {currentIndex + 1} of {questions.length}
          </span>
        </CardTitle>
        <Progress value={progress} className="h-2" />
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="font-medium text-lg">{currentQuestion.prompt}</div>

          {currentQuestion.arabicText && (
            <div className="arabic-large text-center my-4">{currentQuestion.arabicText}</div>
          )}

          {currentQuestion.type === "audio-recognition" && (
            <div className="flex justify-center my-4">
              <Button
                variant="outline"
                onClick={handlePlayAudio}
                disabled={isPlaying}
                className="flex items-center gap-2"
              >
                <span className="sr-only">Play Audio</span>
                {isPlaying ? "Playing..." : "Play Audio"}
              </Button>
            </div>
          )}

          <RadioGroup value={answers[currentIndex]?.toString() || ""} onValueChange={handleSelectAnswer}>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {showExplanation && currentQuestion.explanation && (
            <div className="mt-4 p-3 bg-muted rounded-md">
              <h4 className="font-medium mb-1">Explanation:</h4>
              <p className="text-sm">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <div>
          <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentIndex === 0}>
            Previous
          </Button>
          {currentQuestion.explanation && !showExplanation && (
            <Button variant="ghost" onClick={handleShowExplanation} className="ml-2">
              Show Explanation
            </Button>
          )}
        </div>

        <Button variant="default" onClick={handleNextQuestion} disabled={!isCurrentQuestionAnswered || isSubmitting}>
          {currentIndex < questions.length - 1 ? "Next" : "Submit"}
          {isSubmitting ? "..." : <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  )
}

