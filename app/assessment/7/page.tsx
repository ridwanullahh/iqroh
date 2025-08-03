"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module7AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 7 Assessment completed: ${finalScore}/${total}`)
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
                ? "Excellent work! You have mastered Sun and Moon Letters." 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Sun and Moon Letters lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/8/1")}>
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
        title="Sun and Moon Letters Assessment"
        description="Test your knowledge of the definite article rules"
        moduleId={7}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What is the definite article in Arabic?",
            arabicText: "ال",
            options: ["ال", "من", "في", "على"],
            correctAnswer: "0",
            explanation: "The definite article in Arabic is ال (Al), equivalent to 'the' in English.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "What happens with Sun Letters?",
            options: ["Laam is pronounced clearly", "Laam is assimilated", "Alif is dropped", "Nothing special"],
            correctAnswer: "1",
            explanation: "With Sun Letters, the Laam of ال is assimilated (merged) into the following letter.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "Which is a Sun Letter?",
            arabicText: "ت ش ر",
            options: ["ت", "ب", "ج", "ح"],
            correctAnswer: "0",
            explanation: "ت (Taa) is a Sun Letter. Sun Letters cause assimilation of the Laam in ال.",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "How do you pronounce الشَّمْس?",
            options: ["Al-shams", "Ash-shams", "Al-shamsh", "As-shams"],
            correctAnswer: "1",
            explanation: "الشَّمْس is pronounced 'Ash-shams' because ش is a Sun Letter, so the Laam assimilates.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "Which is a Moon Letter?",
            arabicText: "ق م ب",
            options: ["ت", "ش", "ق", "ر"],
            correctAnswer: "2",
            explanation: "ق (Qaaf) is a Moon Letter. With Moon Letters, the Laam is pronounced clearly.",
          },
          {
            id: "q6",
            type: "multiple-choice",
            prompt: "How do you pronounce الْقَمَر?",
            options: ["Aq-qamar", "Al-qamar", "Aq-qamr", "As-qamar"],
            correctAnswer: "1",
            explanation: "الْقَمَر is pronounced 'Al-qamar' because ق is a Moon Letter, so the Laam is pronounced clearly.",
          },
        ]}
      />
    </div>
  )
}
