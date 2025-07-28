"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { playAudio } from "@/lib/audio-utils"
import { useToast } from "@/hooks/use-toast"

interface LetterDisplayProps {
  letter: string
  name: string
  audioSrc: string
  transliteration: string
  description?: string
}

export default function LetterDisplay({ letter, name, audioSrc, transliteration, description }: LetterDisplayProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const { toast } = useToast()

  const handlePlayAudio = async () => {
    try {
      setIsPlaying(true)
      await playAudio(audioSrc)
      setIsPlaying(false)
    } catch (error) {
      console.error("Error playing audio:", error)
      toast({
        title: "Error",
        description: "Failed to play audio. Please try again.",
        variant: "destructive",
      })
      setIsPlaying(false)
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex items-center justify-center p-6 bg-muted">
            <span className="letter">{letter}</span>
          </div>

          <div className="md:col-span-2 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-muted-foreground">Transliteration: {transliteration}</p>
              </div>

              <Button variant="outline" size="icon" onClick={handlePlayAudio} disabled={isPlaying}>
                <Volume2 className="h-4 w-4" />
              </Button>
            </div>

            {description && <p className="text-sm">{description}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

