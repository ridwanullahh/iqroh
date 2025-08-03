"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module8AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 8 Assessment completed: ${finalScore}/${total}`)
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
                ? "Excellent work! You have mastered Word Formation." 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Word Formation lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/9/1")}>
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
        title="Word Formation Assessment"
        description="Test your knowledge of reading Arabic words"
        moduleId={8}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What makes a word 'simple' in Arabic reading?",
            options: ["Few letters", "No elongations or special rules", "Short vowels only", "Common vocabulary"],
            correctAnswer: "1",
            explanation: "Simple words are those without complex elongations, assimilations, or special Tajweed rules.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "What should you focus on when reading complex words?",
            options: ["Speed", "Applying all learned rules", "Memorization", "Guessing"],
            correctAnswer: "1",
            explanation: "Complex words require careful application of all the rules you've learned: vowels, elongations, connections, etc.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "How do you improve word recognition?",
            options: ["Read faster", "Practice frequently", "Skip difficult words", "Focus only on easy words"],
            correctAnswer: "1",
            explanation: "Regular practice with a variety of words improves recognition and reading fluency.",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "What helps with reading fluency?",
            options: ["Memorizing words", "Understanding letter patterns", "Reading slowly", "Avoiding practice"],
            correctAnswer: "1",
            explanation: "Understanding common letter patterns and combinations helps develop reading fluency.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "When reading Arabic words, you should:",
            options: ["Ignore vowel marks", "Apply all learned rules", "Read left to right", "Skip unknown letters"],
            correctAnswer: "1",
            explanation: "Proper Arabic reading requires applying all the rules you've learned about vowels, connections, and pronunciations.",
          },
        ]}
      />
    </div>
  )
}
