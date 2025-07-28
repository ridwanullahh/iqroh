"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LetterDisplay from "@/components/letter-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"

interface LetterPosition {
  form: string
  name: string
  example?: string
}

interface LetterLessonProps {
  letter: string
  name: string
  transliteration: string
  description: string
  positions: {
    isolated: LetterPosition
    initial: LetterPosition
    medial: LetterPosition
    final: LetterPosition
  }
  strokeData: {
    points: { x: number; y: number }[]
    width: number
  }[]
}

export default function LetterLesson({
  letter,
  name,
  transliteration,
  description,
  positions,
  strokeData,
}: LetterLessonProps) {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>
          {name} ({letter})
        </h2>
        <p>{description}</p>
      </div>

      <Tabs defaultValue="learn" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="write">Write</TabsTrigger>
        </TabsList>

        <TabsContent value="learn" className="space-y-6 mt-6">
          <LetterDisplay
            letter={letter}
            name={name}
            audioSrc={`/audio/${transliteration}.mp3`}
            transliteration={transliteration}
            description={description}
          />

          <div className="prose dark:prose-invert max-w-none">
            <h3>Letter Forms</h3>
            <p>
              Arabic letters change their shape depending on their position in a word. Here are the different forms of
              the letter {name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Isolated Form</h4>
                  <div className="letter-form mb-2">{positions.isolated.form}</div>
                  <p className="text-sm text-muted-foreground">
                    {positions.isolated.name}
                    {positions.isolated.example && <span> - Example: {positions.isolated.example}</span>}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Initial Form</h4>
                  <div className="letter-form mb-2">{positions.initial.form}</div>
                  <p className="text-sm text-muted-foreground">
                    {positions.initial.name}
                    {positions.initial.example && <span> - Example: {positions.initial.example}</span>}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Medial Form</h4>
                  <div className="letter-form mb-2">{positions.medial.form}</div>
                  <p className="text-sm text-muted-foreground">
                    {positions.medial.name}
                    {positions.medial.example && <span> - Example: {positions.medial.example}</span>}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Final Form</h4>
                  <div className="letter-form mb-2">{positions.final.form}</div>
                  <p className="text-sm text-muted-foreground">
                    {positions.final.name}
                    {positions.final.example && <span> - Example: {positions.final.example}</span>}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setActiveTab("practice")}>Practice Pronunciation</Button>
          </div>
        </TabsContent>

        <TabsContent value="practice" className="space-y-6 mt-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3>Pronunciation Practice</h3>
            <p>
              Practice pronouncing the letter {name} in its different forms. Listen to the correct pronunciation and
              then record yourself.
            </p>
          </div>

          <PronunciationPractice text={`Practice pronouncing the letter ${name} (${letter})`} arabicText={letter} />

          <PronunciationPractice
            text={`Practice pronouncing ${name} with Fathah (${letter}َ)`}
            arabicText={`${letter}َ`}
          />

          <PronunciationPractice
            text={`Practice pronouncing ${name} with Kasrah (${letter}ِ)`}
            arabicText={`${letter}ِ`}
          />

          <PronunciationPractice
            text={`Practice pronouncing ${name} with Dammah (${letter}ُ)`}
            arabicText={`${letter}ُ`}
          />

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setActiveTab("learn")}>
              Back to Learn
            </Button>
            <Button onClick={() => setActiveTab("write")}>Practice Writing</Button>
          </div>
        </TabsContent>

        <TabsContent value="write" className="space-y-6 mt-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3>Writing Practice</h3>
            <p>Practice writing the letter {name}. Follow the guide and try to match the correct stroke order.</p>
          </div>

          <WritingPractice letter={letter} strokeData={strokeData} width={400} height={300} />

          <div className="flex justify-start">
            <Button variant="outline" onClick={() => setActiveTab("practice")}>
              Back to Practice
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

