"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ModuleAssessment from "@/components/module-assessment"
import { useToast } from "@/hooks/use-toast"

export default function HarakatAssessmentPage() {
  const [isCompleted, setIsCompleted] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleComplete = (score: number, total: number) => {
    setIsCompleted(true)

    // In a real app, we would save the score to a database
    const percentage = Math.round((score / total) * 100)

    if (percentage >= 70) {
      toast({
        title: "Assessment Completed",
        description: `Congratulations! You scored ${percentage}% and passed the assessment.`,
      })
    } else {
      toast({
        title: "Assessment Completed",
        description: `You scored ${percentage}%. You need at least 70% to pass.`,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Harakat Module Assessment</h1>

        <ModuleAssessment
          title="Harakat Assessment"
          description="Test your knowledge of Arabic vowel signs (Harakat)"
          moduleId={1}
          questions={[
            {
              id: "q1",
              type: "multiple-choice",
              prompt: "What is the name of this vowel sign?",
              arabicText: "َ",
              options: ["Fathah", "Kasrah", "Dammah", "Sukoon"],
              correctAnswer: "0",
              explanation: "Fathah (َ) is a small diagonal line placed above a letter, giving it a short 'a' sound.",
            },
            {
              id: "q2",
              type: "multiple-choice",
              prompt: "What is the name of this vowel sign?",
              arabicText: "ِ",
              options: ["Fathah", "Kasrah", "Dammah", "Sukoon"],
              correctAnswer: "1",
              explanation: "Kasrah (ِ) is a small diagonal line placed below a letter, giving it a short 'i' sound.",
            },
            {
              id: "q3",
              type: "multiple-choice",
              prompt: "What is the name of this vowel sign?",
              arabicText: "ُ",
              options: ["Fathah", "Kasrah", "Dammah", "Sukoon"],
              correctAnswer: "2",
              explanation: "Dammah (ُ) is a small curl-like symbol placed above a letter, giving it a short 'u' sound.",
            },
            {
              id: "q4",
              type: "multiple-choice",
              prompt: "Which vowel sign is placed below the letter?",
              options: ["Fathah", "Kasrah", "Dammah", "All of them"],
              correctAnswer: "1",
              explanation: "Kasrah is the only vowel sign among these that is placed below the letter.",
            },
            {
              id: "q5",
              type: "multiple-choice",
              prompt: "What sound does the letter Baa make with a Fathah?",
              arabicText: "بَ",
              options: ["ba", "bi", "bu", "b"],
              correctAnswer: "0",
              explanation: "Baa with Fathah (بَ) makes a 'ba' sound, similar to the 'ba' in 'bat'.",
            },
            {
              id: "q6",
              type: "multiple-choice",
              prompt: "What sound does the letter Seen make with a Kasrah?",
              arabicText: "سِ",
              options: ["sa", "si", "su", "s"],
              correctAnswer: "1",
              explanation: "Seen with Kasrah (سِ) makes a 'si' sound, similar to the 'si' in 'sit'.",
            },
            {
              id: "q7",
              type: "multiple-choice",
              prompt: "What sound does the letter Meem make with a Dammah?",
              arabicText: "مُ",
              options: ["ma", "mi", "mu", "m"],
              correctAnswer: "2",
              explanation: "Meem with Dammah (مُ) makes a 'mu' sound, similar to the 'mu' in 'music'.",
            },
            {
              id: "q8",
              type: "audio-recognition",
              prompt: "Listen to the audio and select the correct vowel sign",
              audioText: "َ",
              options: ["Fathah", "Kasrah", "Dammah", "Sukoon"],
              correctAnswer: "0",
              explanation: "The audio played the sound of Fathah, which is a short 'a' sound.",
            },
            {
              id: "q9",
              type: "audio-recognition",
              prompt: "Listen to the audio and select the correct vowel sign",
              audioText: "ِ",
              options: ["Fathah", "Kasrah", "Dammah", "Sukoon"],
              correctAnswer: "1",
              explanation: "The audio played the sound of Kasrah, which is a short 'i' sound.",
            },
            {
              id: "q10",
              type: "audio-recognition",
              prompt: "Listen to the audio and select the correct vowel sign",
              audioText: "ُ",
              options: ["Fathah", "Kasrah", "Dammah", "Sukoon"],
              correctAnswer: "2",
              explanation: "The audio played the sound of Dammah, which is a short 'u' sound.",
            },
          ]}
          onComplete={handleComplete}
        />
      </div>
    </div>
  )
}

