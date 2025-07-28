"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import ModuleAssessment from "@/components/module-assessment"
import { useToast } from "@/hooks/use-toast"

export default function LetterFormsAssessmentPage() {
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
        <h1 className="text-3xl font-bold mb-6">Arabic Letter Forms Assessment</h1>

        <ModuleAssessment
          title="Letter Forms Assessment"
          description="Test your knowledge of Arabic letter forms and connection rules"
          moduleId={3}
          questions={[
            {
              id: "q1",
              type: "multiple-choice",
              prompt: "How many forms can most Arabic letters take?",
              options: ["1", "2", "3", "4"],
              correctAnswer: "3",
              explanation: "Most Arabic letters can take four forms: isolated, initial, medial, and final.",
            },
            {
              id: "q2",
              type: "multiple-choice",
              prompt: "Which of these is NOT one of the six non-connecting letters?",
              options: ["Alif (ا)", "Daal (د)", "Baa (ب)", "Raa (ر)"],
              correctAnswer: "2",
              explanation:
                "Baa (ب) is a connecting letter. The six non-connecting letters are Alif (ا), Daal (د), Dhaal (ذ), Raa (ر), Zaay (ز), and Waaw (و).",
            },
            {
              id: "q3",
              type: "multiple-choice",
              prompt: "Which form is used when a letter appears at the beginning of a word?",
              options: ["Isolated form", "Initial form", "Medial form", "Final form"],
              correctAnswer: "1",
              explanation:
                "The initial form is used when a letter appears at the beginning of a word, unless it's a non-connecting letter.",
            },
            {
              id: "q4",
              type: "multiple-choice",
              prompt: "Which form is used when a letter appears in the middle of a word, connected from both sides?",
              options: ["Isolated form", "Initial form", "Medial form", "Final form"],
              correctAnswer: "2",
              explanation:
                "The medial form is used when a letter appears in the middle of a word, connected from both sides.",
            },
            {
              id: "q5",
              type: "multiple-choice",
              prompt: "Which form is used when a letter appears at the end of a word?",
              options: ["Isolated form", "Initial form", "Medial form", "Final form"],
              correctAnswer: "3",
              explanation: "The final form is used when a letter appears at the end of a word.",
            },
            {
              id: "q6",
              type: "multiple-choice",
              prompt: "What happens when a non-connecting letter appears in the middle of a word?",
              options: [
                "It connects to both the letter before it and the letter after it",
                "It creates a break in the connection",
                "It changes to its medial form",
                "It is written in reverse",
              ],
              correctAnswer: "1",
              explanation:
                "When a non-connecting letter appears in the middle of a word, it creates a break in the connection. The letter before it will be in its final form, and the letter after it will be in its initial form (or isolated form if it's also a non-connecting letter).",
            },
            {
              id: "q7",
              type: "multiple-choice",
              prompt: "In the word كَتَبَ (kataba), what form is the letter ت (Taa)?",
              options: ["Isolated form", "Initial form", "Medial form", "Final form"],
              correctAnswer: "2",
              explanation:
                "In the word كَتَبَ (kataba), the letter ت (Taa) is in the middle, connected from both sides, so it's in its medial form (ـتـ).",
            },
            {
              id: "q8",
              type: "multiple-choice",
              prompt: "In the word مَدْرَسَة (madrasah), what form is the letter ر (Raa)?",
              options: ["Isolated form", "Initial form", "Medial form", "Final form"],
              correctAnswer: "0",
              explanation:
                "In the word مَدْرَسَة (madrasah), the letter ر (Raa) is a non-connecting letter that appears after another non-connecting letter (د), so it's in its isolated form.",
            },
            {
              id: "q9",
              type: "multiple-choice",
              prompt: "Which direction is Arabic written?",
              options: ["Left to right", "Right to left", "Top to bottom", "Bottom to top"],
              correctAnswer: "1",
              explanation: "Arabic is written from right to left.",
            },
            {
              id: "q10",
              type: "multiple-choice",
              prompt: "What is the correct order of letters in the word كِتَاب (kitāb)?",
              options: [
                "ك (Kaaf), ت (Taa), ا (Alif), ب (Baa)",
                "ب (Baa), ا (Alif), ت (Taa), ك (Kaaf)",
                "ك (Kaaf), ا (Alif), ت (Taa), ب (Baa)",
                "ب (Baa), ت (Taa), ا (Alif), ك (Kaaf)",
              ],
              correctAnswer: "0",
              explanation:
                "The correct order of letters in the word كِتَاب (kitāb) from right to left is: ك (Kaaf), ت (Taa), ا (Alif), ب (Baa).",
            },
            {
              id: "q11",
              type: "multiple-choice",
              prompt: "In the word أَوْرَاق (awrāq), how many letters are in their isolated form?",
              options: ["1", "2", "3", "4"],
              correctAnswer: "3",
              explanation:
                "In the word أَوْرَاق (awrāq), three letters are in their isolated form: أ (Alif), و (Waaw), and ر (Raa). The letter ق (Qaaf) is in its final form.",
            },
            {
              id: "q12",
              type: "multiple-choice",
              prompt: "Which of these words has a letter in its medial form?",
              options: ["وَلَد (walad)", "دَرْس (dars)", "كَتَبَ (kataba)", "أَرْض (arḍ)"],
              correctAnswer: "2",
              explanation:
                "The word كَتَبَ (kataba) has the letter ت (Taa) in its medial form (ـتـ). The other words don't have any letters in their medial form because they either contain non-connecting letters or don't have letters in the middle position.",
            },
            {
              id: "q13",
              type: "multiple-choice",
              prompt: "What is the isolated form of the letter ب (Baa)?",
              options: ["ب", "بـ", "ـبـ", "ـب"],
              correctAnswer: "0",
              explanation: "The isolated form of the letter ب (Baa) is ب.",
            },
            {
              id: "q14",
              type: "multiple-choice",
              prompt: "What is the initial form of the letter م (Meem)?",
              options: ["م", "مـ", "ـمـ", "ـم"],
              correctAnswer: "1",
              explanation: "The initial form of the letter م (Meem) is مـ.",
            },
            {
              id: "q15",
              type: "multiple-choice",
              prompt: "What is the final form of the letter ن (Noon)?",
              options: ["ن", "نـ", "ـنـ", "ـن"],
              correctAnswer: "3",
              explanation: "The final form of the letter ن (Noon) is ـن.",
            },
          ]}
          onComplete={handleComplete}
        />
      </div>
    </div>
  )
}

