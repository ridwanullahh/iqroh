"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module13AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 13 Assessment completed: ${finalScore}/${total}`)
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
                ? "Excellent work! You have mastered Qalqalah rules." 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Qalqalah lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/14/1")}>
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
        title="Qalqalah Assessment"
        description="Test your knowledge of Qalqalah (echoing) rules"
        moduleId={13}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What does Qalqalah mean?",
            options: ["Elongation", "Echoing or bouncing", "Hiding", "Merging"],
            correctAnswer: "1",
            explanation: "Qalqalah means echoing or bouncing sound produced when certain letters have Sukuun.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "Which letters have Qalqalah?",
            arabicText: "ق ط ب ج د",
            options: ["ق ط ب ج د", "ا و ي", "ء ه ع ح غ خ", "ي ر م ل و ن"],
            correctAnswer: "0",
            explanation: "The five Qalqalah letters are ق ط ب ج د, remembered by the phrase 'Qutb Jad'.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "When does Qalqalah occur?",
            options: ["With any vowel", "With Sukuun only", "With Shaddah only", "With Tanween only"],
            correctAnswer: "1",
            explanation: "Qalqalah occurs when the Qalqalah letters have Sukuun (no vowel).",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "What is Major Qalqalah?",
            options: ["In the middle of words", "At the end of verses", "With vowels", "With Shaddah"],
            correctAnswer: "1",
            explanation: "Major Qalqalah occurs when a Qalqalah letter with Sukuun is at the end of a verse (stronger echo).",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "What is Minor Qalqalah?",
            options: ["At the end of verses", "In the middle of words", "With vowels", "With elongation"],
            correctAnswer: "1",
            explanation: "Minor Qalqalah occurs when a Qalqalah letter with Sukuun is in the middle of words (lighter echo).",
          },
        ]}
      />
    </div>
  )
}
