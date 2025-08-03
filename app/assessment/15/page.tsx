"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Trophy } from "lucide-react"
import ModuleAssessment from "@/components/module-assessment"

export default function Module15AssessmentPage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const handleAssessmentComplete = (finalScore: number, total: number) => {
    setScore(finalScore)
    setTotalQuestions(total)
    setIsCompleted(true)
    
    console.log(`Module 15 Assessment completed: ${finalScore}/${total}`)
  }

  if (isCompleted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader className="text-center">
            <Trophy className="h-20 w-20 text-yellow-500 mx-auto mb-4" />
            <CardTitle className="text-3xl">🎉 Congratulations! 🎉</CardTitle>
            <CardDescription className="text-lg">
              You have completed the entire Iqroh curriculum!
            </CardDescription>
            <CardDescription>
              Final Assessment Score: {score} out of {totalQuestions} questions correct.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">🌟 Achievement Unlocked! 🌟</h3>
              <p className="text-lg mb-4">
                {score >= totalQuestions * 0.9 
                  ? "Outstanding! You have mastered all aspects of Qur'anic reading and Tajweed. You are ready for advanced recitation!" 
                  : score >= totalQuestions * 0.8
                  ? "Excellent work! You have a strong foundation in Qur'anic reading. Continue practicing to perfect your skills."
                  : score >= totalQuestions * 0.7
                  ? "Great job! You have completed the curriculum. Review the advanced topics to strengthen your understanding."
                  : "Well done on completing the curriculum! Consider reviewing the lessons to strengthen your foundation."}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="font-semibold">15 Modules</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-semibold">75+ Lessons</div>
                  <div className="text-sm text-muted-foreground">Mastered</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-semibold">Tajweed Expert</div>
                  <div className="text-sm text-muted-foreground">Level Achieved</div>
                </div>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h3>What You've Accomplished:</h3>
              <ul className="text-left">
                <li>✅ Mastered all 28 Arabic letters and their forms</li>
                <li>✅ Learned vowel signs and their applications</li>
                <li>✅ Understood elongation rules (Mudood)</li>
                <li>✅ Applied Sun and Moon letter rules</li>
                <li>✅ Mastered advanced Tajweed principles</li>
                <li>✅ Learned Nun Sakin and Tanween rules</li>
                <li>✅ Applied Meem Sakin rules</li>
                <li>✅ Understood Qalqalah (echoing)</li>
                <li>✅ Mastered rules of Raa pronunciation</li>
                <li>✅ Integrated all rules for fluent recitation</li>
              </ul>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button onClick={() => router.push("/curriculum")} variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Review Curriculum
              </Button>
              <Button onClick={() => router.push("/")} className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                <Trophy className="h-4 w-4 mr-2" />
                Continue Your Journey
              </Button>
            </div>

            <div className="text-sm text-muted-foreground mt-6">
              <p>May Allah accept your efforts and grant you success in your Qur'anic journey. 🤲</p>
              <p className="mt-2 font-arabic text-lg">بَارَكَ اللهُ فِيكُمْ</p>
              <p>(May Allah bless you)</p>
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
        title="Final Comprehensive Assessment"
        description="Test your complete knowledge of Qur'anic reading and Tajweed"
        moduleId={15}
        onComplete={handleAssessmentComplete}
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What is the primary goal of learning Tajweed?",
            options: ["To read faster", "To preserve proper Qur'anic recitation", "To impress others", "To memorize better"],
            correctAnswer: "1",
            explanation: "The primary goal of Tajweed is to preserve the proper, traditional recitation of the Qur'an.",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "Which is the longest type of elongation?",
            options: ["Madd Tabee'ee", "Madd Muttasil", "Madd Munfasil", "Madd Lazim"],
            correctAnswer: "3",
            explanation: "Madd Lazim (Necessary Elongation) is the longest, held for 6 counts.",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "How many rules apply to Nun Sakin and Tanween?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "1",
            explanation: "Four rules apply: Izhar, Idgham, Iqlab, and Ikhfa.",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "Which letters cause Qalqalah?",
            arabicText: "ق ط ب ج د",
            options: ["ق ط ب ج د", "ا و ي", "ء ه ع ح غ خ", "ي ر م ل و ن"],
            correctAnswer: "0",
            explanation: "The five Qalqalah letters are ق ط ب ج د (Qutb Jad).",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "When is Raa pronounced heavy (Tafkheem)?",
            options: ["With Kasrah", "With Fathah or Dammah", "Never", "Always"],
            correctAnswer: "1",
            explanation: "Raa is heavy (Tafkheem) with Fathah or Dammah, and light (Tarqeeq) with Kasrah.",
          },
          {
            id: "q6",
            type: "multiple-choice",
            prompt: "What happens with Sun Letters and the definite article?",
            options: ["Nothing special", "Laam is assimilated", "Alif is dropped", "Extra elongation"],
            correctAnswer: "1",
            explanation: "With Sun Letters, the Laam of ال is assimilated into the following letter.",
          },
          {
            id: "q7",
            type: "multiple-choice",
            prompt: "How many Arabic letters are there?",
            options: ["26", "27", "28", "29"],
            correctAnswer: "2",
            explanation: "There are 28 letters in the Arabic alphabet.",
          },
          {
            id: "q8",
            type: "multiple-choice",
            prompt: "What is the most important aspect of Qur'anic recitation?",
            options: ["Speed", "Accuracy and reverence", "Volume", "Memorization"],
            correctAnswer: "1",
            explanation: "Accuracy in pronunciation and reverence for the sacred text are most important.",
          },
        ]}
      />
    </div>
  )
}
