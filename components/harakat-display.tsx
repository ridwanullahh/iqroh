"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { playAudio, speakArabicText } from "@/lib/audio-utils"
import { useToast } from "@/hooks/use-toast"

interface HarakatDisplayProps {
  symbol: string
  name: string
  audioSrc: string
  example: string
  exampleAudioSrc: string
  description: string
}

export default function HarakatDisplay({
  symbol,
  name,
  audioSrc,
  example,
  exampleAudioSrc,
  description,
}: HarakatDisplayProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const { toast } = useToast()

  const handlePlayAudio = async (src: string, textToSpeak?: string) => {
    try {
      setIsPlaying(true)

      if (textToSpeak) {
        // If text is provided, use it directly
        await speakArabicText(textToSpeak)
      } else {
        // Otherwise use the URL-based approach
        await playAudio(src)
      }

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
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-md min-w-[120px]">
            <span className="harakat mb-2">{symbol}</span>
            <h3 className="font-semibold text-lg">{name}</h3>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2"
              onClick={() => handlePlayAudio(audioSrc, symbol)}
              disabled={isPlaying}
            >
              <Volume2 className="h-4 w-4 mr-1" />
              Listen
            </Button>
          </div>

          <div className="flex-1">
            <p className="mb-4">{description}</p>

            <div className="bg-muted p-4 rounded-md">
              <h4 className="font-medium mb-2">Example</h4>
              <div className="flex items-center justify-between">
                <span className="arabic-large">{example}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handlePlayAudio(exampleAudioSrc, example)}
                  disabled={isPlaying}
                >
                  <Volume2 className="h-4 w-4 mr-1" />
                  Listen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

