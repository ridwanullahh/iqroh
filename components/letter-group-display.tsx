"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { speakArabicText } from "@/lib/audio-utils"
import { useToast } from "@/hooks/use-toast"

interface LetterGroupDisplayProps {
  letters: {
    letter: string
    name: string
    transliteration: string
    description?: string
  }[]
}

export default function LetterGroupDisplay({ letters }: LetterGroupDisplayProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { toast } = useToast()

  const handlePlayAudio = async (letter: string, index: number) => {
    try {
      setIsPlaying(true)
      setActiveIndex(index)
      await speakArabicText(letter)
      setIsPlaying(false)
      setActiveIndex(null)
    } catch (error) {
      console.error("Error playing audio:", error)
      toast({
        title: "Error",
        description: "Failed to play audio. Please try again.",
        variant: "destructive",
      })
      setIsPlaying(false)
      setActiveIndex(null)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Letter Group</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {letters.map((letterData, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 flex items-start gap-3 ${activeIndex === index ? "border-primary" : ""}`}
          >
            <div className="bg-muted p-4 rounded-md flex items-center justify-center min-w-[60px] min-h-[60px]">
              <span className="letter-form">{letterData.letter}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{letterData.name}</h3>
                  <p className="text-sm text-muted-foreground">Transliteration: {letterData.transliteration}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handlePlayAudio(letterData.letter, index)}
                  disabled={isPlaying}
                >
                  <Volume2 className="h-4 w-4" />
                </Button>
              </div>
              {letterData.description && <p className="text-sm mt-2">{letterData.description}</p>}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

