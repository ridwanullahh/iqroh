"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module11AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 11 Assessment completed: ${finalScore}/${total}`)
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
                ? "Excellent work! You have mastered the rules of Nun Sakin and Tanween." 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Nun Sakin and Tanween lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/12/1")}>
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
        title="Nun Sakin and Tanween Rules Assessment"
        description="Test your knowledge of the four rules of Nun Sakin and Tanween"
        moduleId={11}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "How many rules apply to Nun Sakin and Tanween?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "1",
            explanation: "There are four rules that apply to Nun Sakin and Tanween: Izhar, Idgham, Iqlab, and Ikhfa.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "What is Izhar?",
            options: ["Merging", "Clear pronunciation", "Conversion", "Hiding"],
            correctAnswer: "1",
            explanation: "Izhar means clear pronunciation of Nun Sakin or Tanween without any change.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "Which letters cause Izhar?",
            arabicText: "ء ه ع ح غ خ",
            options: ["ء ه ع ح غ خ", "ي ر م ل و ن", "ب م", "ق ك"],
            correctAnswer: "0",
            explanation: "The six throat letters (ء ه ع ح غ خ) cause Izhar (clear pronunciation).",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "What is Idgham?",
            options: ["Clear pronunciation", "Merging", "Conversion", "Hiding"],
            correctAnswer: "1",
            explanation: "Idgham means merging the Nun Sakin or Tanween into the following letter.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "Which letter causes Iqlab?",
            arabicText: "ب",
            options: ["ب", "م", "ف", "و"],
            correctAnswer: "0",
            explanation: "The letter ب (Baa) causes Iqlab, converting Nun Sakin or Tanween to Meem.",
          },
          {
            id: "q6",
            type: "multiple-choice",
            prompt: "What is Ikhfa?",
            options: ["Clear pronunciation", "Merging", "Conversion", "Hiding"],
            correctAnswer: "3",
            explanation: "Ikhfa means hiding or concealing the Nun Sakin or Tanween with a nasal sound.",
          },
          {
            id: "q7",
            type: "multiple-choice",
            prompt: "How many letters cause Ikhfa?",
            options: ["13", "14", "15", "16"],
            correctAnswer: "2",
            explanation: "Fifteen letters cause Ikhfa (all remaining letters after Izhar, Idgham, and Iqlab letters).",
          },
        ]}
      />
    </div>
  )
}
