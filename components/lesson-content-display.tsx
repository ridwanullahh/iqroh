"use client"

// Bismillah. Components for displaying lesson content in the Iqroh app.
// No emojis — all icons are inline SVG / Lucide-react line icons.
// Arabic text uses the Noto Naskh Arabic font for proper shaping.
// Audio playback uses the Web Speech API for on-device pronunciation
// (no external audio files needed).

import { useState } from "react"
import { Volume2, Loader2, AlertCircle } from "lucide-react"
import { speakArabicText, isSpeechSynthesisSupported } from "@/lib/audio-utils"

interface ArabicTextProps {
  text: string
  className?: string
}

export function ArabicText({ text, className = "" }: ArabicTextProps) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className={`font-arabic text-3xl md:text-4xl leading-loose text-foreground ${className}`}
      style={{ fontFamily: "var(--font-naskh), 'Noto Naskh Arabic', 'Amiri', serif" }}
    >
      {text}
    </div>
  )
}

interface ArabicPronunciationProps {
  text: string
  className?: string
}

export function ArabicPronunciation({ text, className = "" }: ArabicPronunciationProps) {
  return (
    <p
      dir="ltr"
      lang="en"
      className={`text-sm font-mono text-muted-foreground mt-1 italic ${className}`}
    >
      {text}
    </p>
  )
}

interface ExampleAudioProps {
  arabicText: string
  transliteration: string
}

export function ExampleAudio({ arabicText, transliteration }: ExampleAudioProps) {
  const [state, setState] = useState<"idle" | "loading" | "playing" | "error">("idle")
  const supported = isSpeechSynthesisSupported()

  const handleClick = async () => {
    if (!supported) {
      setState("error")
      // Reset after 3 seconds
      setTimeout(() => setState("idle"), 3000)
      return
    }
    setState("loading")
    try {
      await speakArabicText(arabicText)
      setState("playing")
      // Reset after a delay (assuming speech took ~2 seconds)
      setTimeout(() => setState("idle"), 2500)
    } catch (err) {
      console.error("Audio playback failed:", err)
      // Fallback: try speaking the transliteration
      try {
        await speakArabicText(transliteration)
        setState("playing")
        setTimeout(() => setState("idle"), 2500)
      } catch {
        setState("error")
        setTimeout(() => setState("idle"), 3000)
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!supported && state !== "error"}
      className="shrink-0 w-10 h-10 rounded-full bg-emerald-600/10 hover:bg-emerald-600/20 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={`Play audio for ${transliteration}`}
      title={supported ? "Play pronunciation" : "Audio not supported on this device"}
    >
      {state === "loading" ? (
        <Loader2 className="w-4 h-4 text-emerald-600 animate-spin" />
      ) : state === "error" ? (
        <AlertCircle className="w-4 h-4 text-amber-600" />
      ) : (
        <Volume2 className="w-4 h-4 text-emerald-600" />
      )}
    </button>
  )
}

interface KeyPoint {
  title: string
  description: string
}

interface KeyPointCardProps {
  point: KeyPoint
  index: number
}

export function KeyPointCard({ point, index }: KeyPointCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 hover:border-emerald-600/30 transition-colors">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-600/10 text-emerald-600 font-semibold text-sm flex items-center justify-center">
          {index}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-2 text-foreground">{point.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
        </div>
      </div>
    </div>
  )
}
