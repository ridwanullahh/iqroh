"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { 
  Play, 
  Pause, 
  Square, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Settings,
  Headphones,
  Mic,
  Download
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

interface ModernTTSProps {
  text: string
  arabicText?: string
  language?: string
  className?: string
  showControls?: boolean
  autoPlay?: boolean
  onPlayStart?: () => void
  onPlayEnd?: () => void
  variant?: "default" | "compact" | "minimal"
}

export default function ModernTTS({
  text,
  arabicText,
  language = "ar-SA",
  className,
  showControls = true,
  autoPlay = false,
  onPlayStart,
  onPlayEnd,
  variant = "default"
}: ModernTTSProps) {
  const { toast } = useToast()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [volume, setVolume] = useState([0.8])
  const [rate, setRate] = useState([1])
  const [pitch, setPitch] = useState([1])
  const [isMuted, setIsMuted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Check if speech synthesis is supported
  const isSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  useEffect(() => {
    if (autoPlay && isSupported) {
      handlePlay()
    }
    
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      if (utteranceRef.current) {
        speechSynthesis.cancel()
      }
    }
  }, [autoPlay, isSupported])

  const createUtterance = () => {
    if (!isSupported) return null

    const textToSpeak = arabicText || text
    const utterance = new SpeechSynthesisUtterance(textToSpeak)
    
    utterance.lang = language
    utterance.volume = isMuted ? 0 : volume[0]
    utterance.rate = rate[0]
    utterance.pitch = pitch[0]

    utterance.onstart = () => {
      setIsPlaying(true)
      setIsPaused(false)
      setIsLoading(false)
      onPlayStart?.()
      
      // Start progress tracking
      const words = textToSpeak.split(' ')
      setDuration(words.length * (1 / rate[0]) * 1000) // Rough estimation
      
      progressIntervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current)
            }
            return 100
          }
          return prev + (100 / (words.length * (1 / rate[0])))
        })
      }, 100)
    }

    utterance.onend = () => {
      setIsPlaying(false)
      setIsPaused(false)
      setProgress(0)
      onPlayEnd?.()
      
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }

    utterance.onerror = (event) => {
      setIsPlaying(false)
      setIsPaused(false)
      setIsLoading(false)
      setProgress(0)
      toast({
        title: "Speech Error",
        description: "Speech synthesis error occurred",
        variant: "destructive"
      })
      console.error("Speech synthesis error:", event)
    }

    return utterance
  }

  const handlePlay = () => {
    if (!isSupported) {
      toast({
        title: "Not Supported",
        description: "Speech synthesis is not supported in this browser",
        variant: "destructive"
      })
      return
    }

    if (isPaused) {
      speechSynthesis.resume()
      setIsPaused(false)
      setIsPlaying(true)
      return
    }

    setIsLoading(true)
    speechSynthesis.cancel() // Cancel any ongoing speech
    
    const utterance = createUtterance()
    if (utterance) {
      utteranceRef.current = utterance
      speechSynthesis.speak(utterance)
    }
  }

  const handlePause = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause()
      setIsPaused(true)
      setIsPlaying(false)
    }
  }

  const handleStop = () => {
    speechSynthesis.cancel()
    setIsPlaying(false)
    setIsPaused(false)
    setProgress(0)
    
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current)
    }
  }

  const handleRestart = () => {
    handleStop()
    setTimeout(() => handlePlay(), 100)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (utteranceRef.current) {
      utteranceRef.current.volume = isMuted ? volume[0] : 0
    }
  }

  const downloadAudio = async () => {
    toast({
      title: "Coming Soon",
      description: "Audio download feature coming soon!"
    })
  }

  if (!isSupported) {
    return (
      <Card className="p-4 bg-muted/50">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <VolumeX className="h-4 w-4" />
          <span className="text-sm">Speech synthesis not supported</span>
        </div>
      </Card>
    )
  }

  if (variant === "minimal") {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={isPlaying ? handlePause : handlePlay}
        disabled={isLoading}
        className={cn("touch-target", className)}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>
    )
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <Button
          variant="outline"
          size="sm"
          onClick={isPlaying ? handlePause : handlePlay}
          disabled={isLoading}
          className="touch-target rounded-xl"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        
        {progress > 0 && (
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <Card className={cn("p-4 space-y-4", className)}>
      {/* Main Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={isPlaying ? handlePause : handlePlay}
            disabled={isLoading}
            className="touch-target rounded-xl bg-gradient-primary text-white border-0 hover:scale-105"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleStop}
            disabled={!isPlaying && !isPaused}
            className="touch-target"
          >
            <Square className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRestart}
            className="touch-target"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="touch-target"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={downloadAudio}
            className="touch-target"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      {(isPlaying || isPaused || progress > 0) && (
        <div className="space-y-2">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{Math.round(progress)}%</span>
            <span>{isPlaying ? "Playing" : isPaused ? "Paused" : "Ready"}</span>
          </div>
        </div>
      )}

      {/* Advanced Controls */}
      {showControls && (
        <div className="space-y-3 pt-2 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Volume</label>
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={1}
                min={0}
                step={0.1}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Speed</label>
              <Slider
                value={rate}
                onValueChange={setRate}
                max={2}
                min={0.5}
                step={0.1}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium text-muted-foreground">Pitch</label>
              <Slider
                value={pitch}
                onValueChange={setPitch}
                max={2}
                min={0.5}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
