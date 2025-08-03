"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module6AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 6 Assessment completed: ${finalScore}/${total}`)
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
                ? "Excellent work! You have a strong understanding of Sukuun and Non-Vowels." 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Sukuun lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/7/1")}>
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
        title="Sukuun and Non-Vowels Assessment"
        description="Test your knowledge of Sukuun and consonant clusters"
        moduleId={6}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What does Sukuun indicate?",
            arabicText: "ْ",
            options: ["Short vowel", "Long vowel", "No vowel", "Double vowel"],
            correctAnswer: "2",
            explanation: "Sukuun (ْ) indicates the absence of a vowel on a letter.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "How is a letter with Sukuun pronounced?",
            options: ["With a short vowel", "With a long vowel", "Without any vowel sound", "With emphasis"],
            correctAnswer: "2",
            explanation: "A letter with Sukuun is pronounced without any vowel sound, creating a consonant sound only.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "What is a consonant cluster?",
            options: ["Two vowels together", "Two consonants with Sukuun", "A long vowel", "A doubled letter"],
            correctAnswer: "1",
            explanation: "A consonant cluster occurs when two or more consonants (letters with Sukuun) come together.",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "In which word do you find Sukuun?",
            arabicText: "مِنْ",
            options: ["مِنْ", "مِنَ", "مِنُ", "مِنِ"],
            correctAnswer: "0",
            explanation: "مِنْ contains Sukuun on the letter Noon, indicating no vowel sound after it.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "What happens when you read a letter with Sukuun?",
            options: ["You elongate it", "You emphasize it", "You stop the vowel sound", "You double it"],
            correctAnswer: "2",
            explanation: "When reading a letter with Sukuun, you stop the vowel sound and pronounce only the consonant.",
          },
        ]}
      />
    </div>
  )
}
