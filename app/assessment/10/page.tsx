"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module10AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 10 Assessment completed: ${finalScore}/${total}`)
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
                ? "Excellent work! You understand the fundamentals of Tajweed." 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Tajweed Fundamentals lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/11/1")}>
                Continue to Next Module
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
        title="Tajweed Fundamentals Assessment"
        description="Test your knowledge of basic Tajweed principles"
        moduleId={10}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What is Tajweed?",
            options: ["Fast reading", "The art of Qur'anic recitation", "Memorization", "Translation"],
            correctAnswer: "1",
            explanation: "Tajweed is the art of reciting the Qur'an with proper pronunciation, rhythm, and rules.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "Why is Tajweed important?",
            options: ["To read faster", "To preserve the Qur'an's beauty and meaning", "To show off", "It's not important"],
            correctAnswer: "1",
            explanation: "Tajweed preserves the beauty, meaning, and traditional recitation of the Qur'an.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "What does proper Tajweed prevent?",
            options: ["Fast reading", "Mistakes in pronunciation", "Memorization", "Understanding"],
            correctAnswer: "1",
            explanation: "Proper Tajweed prevents pronunciation mistakes that could change meanings.",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "Tajweed rules help with:",
            options: ["Speed only", "Proper pronunciation and beauty", "Memorization only", "Translation"],
            correctAnswer: "1",
            explanation: "Tajweed rules ensure proper pronunciation and maintain the beauty of Qur'anic recitation.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "Learning Tajweed is:",
            options: ["Optional", "Recommended for proper recitation", "Only for scholars", "Unnecessary"],
            correctAnswer: "1",
            explanation: "Learning Tajweed is highly recommended for anyone who wants to recite the Qur'an properly.",
          },
        ]}
      />
    </div>
  )
}
