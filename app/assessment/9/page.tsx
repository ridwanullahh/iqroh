"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module9AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 9 Assessment completed: ${finalScore}/${total}`)
  }

  if (isCompleted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
            <CardDescription>
              You scored {score} out of {totalQuestions} questions correctly.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg">
              {score >= totalQuestions * 0.8 
                ? "Excellent work! You have mastered Sentence Construction. Ready for advanced Tajweed!" 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Sentence Construction lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/10/1")}>
                Continue to Advanced Phase
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Button onClick={() => router.push("/curriculum")} variant="outline" className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Curriculum
        </Button>
      </div>

      <ModuleAssessment
        title="Sentence Construction Assessment"
        description="Test your knowledge of reading Arabic sentences"
        moduleId={9}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What is important when reading Arabic sentences?",
            options: ["Speed only", "Proper breath control", "Memorization", "Skipping difficult words"],
            correctAnswer: "1",
            explanation: "Proper breath control is essential for smooth, flowing sentence reading.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "How should you approach sentence flow?",
            options: ["Read word by word", "Connect words smoothly", "Pause after each word", "Rush through"],
            correctAnswer: "1",
            explanation: "Sentences should flow smoothly with proper connections between words.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "When should you take breaths while reading?",
            options: ["After every word", "At natural pause points", "Never", "Randomly"],
            correctAnswer: "1",
            explanation: "Breaths should be taken at natural pause points that don't break the meaning.",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "What helps with sentence reading fluency?",
            options: ["Reading faster", "Understanding word relationships", "Ignoring vowels", "Skipping practice"],
            correctAnswer: "1",
            explanation: "Understanding how words relate to each other in sentences improves reading fluency.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "Simple sentences are good for:",
            options: ["Advanced students only", "Building confidence", "Memorization only", "Speed reading"],
            correctAnswer: "1",
            explanation: "Simple sentences help build confidence and establish good reading habits.",
          },
        ]}
      />
    </div>
  )
}
