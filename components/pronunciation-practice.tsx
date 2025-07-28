"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Play, Square, Volume2 } from "lucide-react"
import { analyzeAudio, speakArabicText } from "@/lib/audio-utils"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

interface PronunciationPracticeProps {
  text: string
  audioSrc: string
  arabicText: string
}

export default function PronunciationPractice({ text, audioSrc, arabicText }: PronunciationPracticeProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [recordingBlob, setRecordingBlob] = useState<Blob | null>(null)
  const [accuracy, setAccuracy] = useState<number | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const { toast } = useToast()

  // Play reference audio
  const handlePlayReference = async () => {
    try {
      setIsPlaying(true)
      // Use the Arabic text directly for speech
      await speakArabicText(arabicText)
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

  // Start recording
  const handleStartRecording = async () => {
    try {
      // Reset previous recording
      audioChunksRef.current = []
      setRecordingBlob(null)
      setAccuracy(null)
      setFeedback(null)

      // Request microphone access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

      // Create media recorder
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      // Set up event handlers
      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" })
        setRecordingBlob(audioBlob)

        // Analyze the recording
        handleAnalyzeRecording(audioBlob)

        // Stop all tracks to release the microphone
        stream.getTracks().forEach((track) => track.stop())
      }

      // Start recording
      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error("Error starting recording:", error)
      toast({
        title: "Microphone Access Denied",
        description: "Please allow microphone access to use this feature.",
        variant: "destructive",
      })
    }
  }

  // Stop recording
  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  // Analyze recording
  const handleAnalyzeRecording = async (blob: Blob) => {
    try {
      setIsAnalyzing(true)

      // Analyze the audio
      const result = await analyzeAudio(blob, audioSrc)

      setAccuracy(result.accuracy)
      setFeedback(result.feedback)
    } catch (error) {
      console.error("Error analyzing recording:", error)
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze your pronunciation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  // Play recorded audio
  const handlePlayRecording = async () => {
    if (!recordingBlob) return

    try {
      setIsPlaying(true)
      const url = URL.createObjectURL(recordingBlob)

      // Create an audio element to play the recording
      const audio = new Audio(url)

      // Play the audio
      await new Promise<void>((resolve, reject) => {
        audio.onended = () => resolve()
        audio.onerror = () => reject(new Error("Failed to play recording"))
        audio.play()
      })

      URL.revokeObjectURL(url)
      setIsPlaying(false)
    } catch (error) {
      console.error("Error playing recording:", error)
      toast({
        title: "Error",
        description: "Failed to play your recording. Please try again.",
        variant: "destructive",
      })
      setIsPlaying(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Pronunciation Practice</h3>
          <p className="text-muted-foreground mb-4">{text}</p>

          <div className="arabic-large mb-6">{arabicText}</div>

          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 w-full justify-start"
              onClick={handlePlayReference}
              disabled={isPlaying || isRecording}
            >
              <Volume2 className="h-4 w-4" />
              Listen to correct pronunciation
            </Button>

            {!isRecording ? (
              <Button
                variant="default"
                className="flex items-center gap-2 w-full justify-start"
                onClick={handleStartRecording}
                disabled={isPlaying}
              >
                <Mic className="h-4 w-4" />
                Record your pronunciation
              </Button>
            ) : (
              <Button
                variant="destructive"
                className="flex items-center gap-2 w-full justify-start"
                onClick={handleStopRecording}
              >
                <Square className="h-4 w-4" />
                Stop recording
              </Button>
            )}

            {recordingBlob && (
              <Button
                variant="outline"
                className="flex items-center gap-2 w-full justify-start"
                onClick={handlePlayRecording}
                disabled={isPlaying || isRecording}
              >
                <Play className="h-4 w-4" />
                Play your recording
              </Button>
            )}
          </div>
        </div>

        {isAnalyzing && (
          <div className="mt-4">
            <p className="text-sm mb-2">Analyzing your pronunciation...</p>
            <Progress value={50} className="h-2" />
          </div>
        )}

        {accuracy !== null && feedback && (
          <Alert className={accuracy > 0.8 ? "bg-green-50 dark:bg-green-950" : "bg-amber-50 dark:bg-amber-950"}>
            <AlertDescription>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Accuracy:</span>
                  <span>{Math.round(accuracy * 100)}%</span>
                </div>
                <Progress
                  value={accuracy * 100}
                  className="h-2"
                  indicatorClassName={accuracy > 0.8 ? "bg-green-500" : "bg-amber-500"}
                />
                <p className="mt-2">{feedback}</p>
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}

