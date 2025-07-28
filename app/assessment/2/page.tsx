"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ModuleAssessment from "@/components/module-assessment"
import { useToast } from "@/hooks/use-toast"

export default function LettersAssessmentPage() {
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
        <h1 className="text-3xl font-bold mb-6">Arabic Letters Assessment</h1>

        <ModuleAssessment
          title="Arabic Letters Assessment"
          description="Test your knowledge of all 28 Arabic letters"
          moduleId={2}
          questions={[
            {
              id: "q1",
              type: "multiple-choice",
              prompt: "What is the name of this letter?",
              arabicText: "ج",
              options: ["Jeem", "Haa", "Khaa", "Daal"],
              correctAnswer: "0",
              explanation: "This is Jeem (ج), which makes a 'j' sound similar to the English 'j' in 'jam'.",
            },
            {
              id: "q2",
              type: "multiple-choice",
              prompt: "What is the name of this letter?",
              arabicText: "ص",
              options: ["Seen", "Sheen", "Saad", "Daad"],
              correctAnswer: "2",
              explanation: "This is Saad (ص), which makes an emphatic 's' sound.",
            },
            {
              id: "q3",
              type: "multiple-choice",
              prompt: "What is the name of this letter?",
              arabicText: "ع",
              options: ["Ayn", "Ghayn", "Haa", "Khaa"],
              correctAnswer: "0",
              explanation: "This is Ayn (ع), a guttural sound produced from the throat.",
            },
            {
              id: "q4",
              type: "multiple-choice",
              prompt: "What is the name of this letter?",
              arabicText: "ق",
              options: ["Faa", "Qaaf", "Kaaf", "Laam"],
              correctAnswer: "1",
              explanation: "This is Qaaf (ق), which makes a deep 'k' sound produced from the back of the throat.",
            },
            {
              id: "q5",
              type: "multiple-choice",
              prompt: "What is the name of this letter?",
              arabicText: "ي",
              options: ["Waaw", "Noon", "Yaa", "Haa"],
              correctAnswer: "2",
              explanation: "This is Yaa (ي), which makes a 'y' sound similar to the English 'y' in 'yellow'.",
            },
            {
              id: "q6",
              type: "multiple-choice",
              prompt: "Which of these letters is a non-connecting letter (only connects from the right)?",
              options: ["Baa (ب)", "Jeem (ج)", "Daal (د)", "Laam (ل)"],
              correctAnswer: "2",
              explanation: "Daal (د) is a non-connecting letter that only connects from the right side.",
            },
            {
              id: "q7",
              type: "multiple-choice",
              prompt: "Which of these letters is an emphatic letter?",
              options: ["Seen (س)", "Saad (ص)", "Kaaf (ك)", "Noon (ن)"],
              correctAnswer: "1",
              explanation:
                "Saad (ص) is an emphatic letter, pronounced with the back of the tongue raised against the roof of the mouth.",
            },
            {
              id: "q8",
              type: "multiple-choice",
              prompt: "Which of these letters can also function as a long vowel?",
              options: ["Meem (م)", "Noon (ن)", "Waaw (و)", "Haa (ه)"],
              correctAnswer: "2",
              explanation: "Waaw (و) can function as a long vowel 'ū' when preceded by a letter with dammah.",
            },
            {
              id: "q9",
              type: "audio-recognition",
              prompt: "Listen to the audio and select the correct letter",
              audioText: "ش",
              options: ["Seen (س)", "Sheen (ش)", "Saad (ص)", "Daad (ض)"],
              correctAnswer: "1",
              explanation:
                "The audio played the sound of Sheen (ش), which makes a 'sh' sound similar to the English 'sh' in 'ship'.",
            },
            {
              id: "q10",
              type: "audio-recognition",
              prompt: "Listen to the audio and select the correct letter",
              audioText: "غ",
              options: ["Ayn (ع)", "Ghayn (غ)", "Haa (ح)", "Khaa (خ)"],
              correctAnswer: "1",
              explanation:
                "The audio played the sound of Ghayn (غ), which makes a sound similar to the French 'r' or a gargled 'g'.",
            },
            {
              id: "q11",
              type: "multiple-choice",
              prompt: "What does this word mean?",
              arabicText: "كِتَاب",
              options: ["pen", "book", "school", "teacher"],
              correctAnswer: "1",
              explanation: "كِتَاب (kitāb) means 'book' in Arabic.",
            },
            {
              id: "q12",
              type: "multiple-choice",
              prompt: "What does this word mean?",
              arabicText: "قَلَم",
              options: ["pen", "book", "school", "teacher"],
              correctAnswer: "0",
              explanation: "قَلَم (qalam) means 'pen' in Arabic.",
            },
            {
              id: "q13",
              type: "multiple-choice",
              prompt: "How many letters are in the Arabic alphabet?",
              options: ["26", "28", "29", "31"],
              correctAnswer: "1",
              explanation: "There are 28 letters in the Arabic alphabet.",
            },
            {
              id: "q14",
              type: "multiple-choice",
              prompt: "Which direction is Arabic written?",
              options: ["Left to right", "Right to left", "Top to bottom", "Bottom to top"],
              correctAnswer: "1",
              explanation: "Arabic is written from right to left.",
            },
            {
              id: "q15",
              type: "multiple-choice",
              prompt: "Which of these is NOT a form that Arabic letters can take?",
              options: ["Initial form", "Medial form", "Final form", "Reverse form"],
              correctAnswer: "3",
              explanation: "Arabic letters can take initial, medial, and final forms, but there is no 'reverse form'.",
            },
          ]}
          onComplete={handleComplete}
        />
      </div>
    </div>
  )
}

