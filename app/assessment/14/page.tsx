"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module14AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 14 Assessment completed: ${finalScore}/${total}`)
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
                ? "Excellent work! You have mastered the rules of Raa." 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Rules of Raa lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/15/1")}>
                Continue to Final Module
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
        title="Rules of Raa Assessment"
        description="Test your knowledge of Tafkheem and Tarqeeq rules for Raa"
        moduleId={14}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What are the two ways to pronounce Raa?",
            options: ["Fast and slow", "Heavy (Tafkheem) and light (Tarqeeq)", "Loud and soft", "Long and short"],
            correctAnswer: "1",
            explanation: "Raa can be pronounced heavy (Tafkheem) with a thick sound or light (Tarqeeq) with a thin sound.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "When is Raa pronounced heavy (Tafkheem)?",
            options: ["Always", "With Kasrah", "With Fathah or Dammah", "Never"],
            correctAnswer: "2",
            explanation: "Raa is pronounced heavy (Tafkheem) when it has Fathah or Dammah, or when preceded by these vowels.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "When is Raa pronounced light (Tarqeeq)?",
            options: ["With Fathah", "With Dammah", "With Kasrah", "With Sukuun"],
            correctAnswer: "2",
            explanation: "Raa is pronounced light (Tarqeeq) when it has Kasrah or when preceded by Kasrah.",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "What determines Raa pronunciation with Sukuun?",
            options: ["The following letter", "The preceding vowel", "The word meaning", "Nothing specific"],
            correctAnswer: "1",
            explanation: "When Raa has Sukuun, its pronunciation depends on the vowel of the preceding letter.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "In mixed cases, what should you do?",
            options: ["Always heavy", "Always light", "Follow your teacher's guidance", "Guess"],
            correctAnswer: "2",
            explanation: "In complex or mixed cases, it's best to follow your teacher's guidance and established recitation traditions.",
          },
        ]}
      />
    </div>
  )
}
