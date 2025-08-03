"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module5AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    // In a real implementation, this would save progress to a backend
    console.log(`Module 5 Assessment completed: ${finalScore}/${total}`)
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
                ? "Excellent work! You have a strong understanding of Mudood (Elongations)." 
                : score >= totalQuestions * 0.6
                ? "Good job! Consider reviewing the lessons to strengthen your understanding."
                : "Keep practicing! Review the Mudood lessons and try again."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Curriculum
              </Button>
              <Button onClick={() => router.push("/lessons/6/1")}>
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
        title="Mudood (Elongations) Assessment"
        description="Test your knowledge of Arabic elongation rules"
        moduleId={5}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What is the duration of Madd Tabee'ee (Natural Elongation)?",
            options: ["1 count", "2 counts", "4-5 counts", "6 counts"],
            correctAnswer: "1",
            explanation: "Madd Tabee'ee (Natural Elongation) is held for exactly 2 counts.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "Which letters can create natural elongation?",
            arabicText: "ا و ي",
            options: ["Alif, Waaw, Yaa", "Baa, Taa, Thaa", "Jeem, Haa, Khaa", "Daal, Dhaal, Raa"],
            correctAnswer: "0",
            explanation: "The three letters of Mudood are Alif (after Fathah), Waaw (after Dammah), and Yaa (after Kasrah).",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "What is Madd Muttasil?",
            options: ["Natural elongation", "Connected elongation", "Separated elongation", "Necessary elongation"],
            correctAnswer: "1",
            explanation: "Madd Muttasil is connected elongation that occurs when elongation and Hamzah are in the same word.",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "How long is Madd Muttasil held?",
            options: ["2 counts", "4-5 counts", "6 counts", "Variable"],
            correctAnswer: "1",
            explanation: "Madd Muttasil is held for 4-5 counts, longer than natural elongation.",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "What is the longest type of elongation?",
            options: ["Madd Tabee'ee", "Madd Muttasil", "Madd Munfasil", "Madd Lazim"],
            correctAnswer: "3",
            explanation: "Madd Lazim (Necessary Elongation) is the longest, held for exactly 6 counts.",
          },
          {
            id: "q6",
            type: "multiple-choice",
            prompt: "In which word do you find Madd Lazim?",
            arabicText: "الضَّالِّين",
            options: ["الضَّالِّين", "قَالَ", "جَاءَ", "فِي"],
            correctAnswer: "0",
            explanation: "الضَّالِّين contains Madd Lazim because the Alif is followed by a doubled letter (Shaddah on Laam).",
          },
          {
            id: "q7",
            type: "multiple-choice",
            prompt: "What creates Madd Munfasil?",
            options: ["Elongation + Hamzah in same word", "Elongation + Hamzah in different words", "Elongation + Sukuun", "Elongation + Shaddah"],
            correctAnswer: "1",
            explanation: "Madd Munfasil occurs when elongation at the end of one word meets Hamzah at the start of the next word.",
          },
          {
            id: "q8",
            type: "multiple-choice",
            prompt: "Which example shows natural elongation?",
            arabicText: "نُور",
            options: ["نُور", "جَاءَ", "يَا أَيُّهَا", "الضَّالِّين"],
            correctAnswer: "0",
            explanation: "نُور shows natural elongation (Madd Tabee'ee) with Dammah + Waaw creating a long 'oo' sound.",
          },
        ]}
      />
    </div>
  )
}
