"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module12AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 12 Assessment completed: ${finalScore}/${total}`)
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
                ? "Excellent work! You have mastered the rules of Meem Sakin." 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Meem Sakin lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/13/1")}>
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
        title="Meem Sakin Rules Assessment"
        description="Test your knowledge of the three rules of Meem Sakin"
        moduleId={12}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "How many rules apply to Meem Sakin?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "1",
            explanation: "There are three rules for Meem Sakin: Idgham Shafawi, Ikhfa Shafawi, and Izhar Shafawi.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "What is Idgham Shafawi?",
            options: ["Clear pronunciation", "Merging with Meem", "Hiding with Baa", "Conversion"],
            correctAnswer: "1",
            explanation: "Idgham Shafawi is merging Meem Sakin into another Meem that follows it.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "Which letter causes Ikhfa Shafawi?",
            arabicText: "ب",
            options: ["م", "ب", "ف", "و"],
            correctAnswer: "1",
            explanation: "The letter ب (Baa) causes Ikhfa Shafawi when it follows Meem Sakin.",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "What happens in Izhar Shafawi?",
            options: ["Meem is hidden", "Meem is merged", "Meem is pronounced clearly", "Meem is converted"],
            correctAnswer: "2",
            explanation: "In Izhar Shafawi, the Meem Sakin is pronounced clearly with all other letters except Meem and Baa.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "Why are these rules called 'Shafawi'?",
            options: ["They're easy", "They involve lip letters", "They're advanced", "They're optional"],
            correctAnswer: "1",
            explanation: "They're called 'Shafawi' (labial) because they involve letters pronounced with the lips (Meem and Baa).",
          },
        ]}
      />
    </div>
  )
}
