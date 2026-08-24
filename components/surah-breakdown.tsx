"use client"

// Bismillah. SurahBreakdown component — renders the word-by-word
// analysis of a surah (used by the Capstone Phase lessons).
//
// For each ayah, the component shows:
//   - The full Arabic text (with a play button that fetches real
//     recitation audio from the EveryAyah CDN via playAyahAudio)
//   - The transliteration
//   - The translation
//   - A word-by-word breakdown: each word is a card showing the
//     Arabic, transliteration, translation, grammar notes, and
//     tajweed callouts
//
// No emojis — all icons are inline SVG / Lucide-react line icons.

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Volume2, Loader2, AlertCircle, ChevronDown, ChevronUp, BookOpen, Sparkles, ScrollText } from "lucide-react"
import { playAyahAudio, type QuranReciter } from "@/lib/audio-utils"
import type { LessonSurahBreakdown, LessonAyahBreakdown, LessonWordBreakdown } from "@/lib/lesson-content"
import { useToast } from "@/hooks/use-toast"

interface SurahBreakdownProps {
  breakdown: LessonSurahBreakdown
}

export function SurahBreakdown({ breakdown }: SurahBreakdownProps) {
  const { surahName, surahNameArabic, surahNameTranslation, surahNumber, totalAyahs, reciter, ayahs } = breakdown

  return (
    <div className="space-y-6">
      {/* Surah header */}
      <Card className="border-emerald-600/30 bg-gradient-to-br from-emerald-50 via-card to-amber-50/30 dark:from-emerald-950/40 dark:via-card dark:to-amber-950/20">
        <CardHeader>
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <ScrollText className="w-6 h-6 text-emerald-600" />
                Surah {surahName}
              </CardTitle>
              <CardDescription className="mt-1">
                {surahNameTranslation} · Surah {surahNumber} · {totalAyahs} ayahs
              </CardDescription>
            </div>
            <div className="text-left">
              <div className="text-4xl font-arabic text-foreground leading-none" style={{ fontFamily: "var(--font-naskh), 'Noto Naskh Arabic', 'Amiri', serif" }} dir="rtl" lang="ar">
                {surahNameArabic}
              </div>
              <div className="text-xs text-muted-foreground mt-1">Reciter: {reciter.replace(/_/g, " ").replace(/128kbps|192kbps/g, "").trim()}</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Ayahs */}
      <div className="space-y-6">
        {ayahs.map((ayah) => (
          <AyahBreakdownCard key={ayah.ayahNumber} ayah={ayah} surahNumber={surahNumber} reciter={reciter as QuranReciter} />
        ))}
      </div>
    </div>
  )
}

interface AyahBreakdownCardProps {
  ayah: LessonAyahBreakdown
  surahNumber: number
  reciter: QuranReciter
}

function AyahBreakdownCard({ ayah, surahNumber, reciter }: AyahBreakdownCardProps) {
  const [expanded, setExpanded] = useState(false)
  const [audioState, setAudioState] = useState<"idle" | "loading" | "playing" | "error">("idle")
  const { toast } = useToast()

  const handlePlayAudio = async () => {
    if (audioState === "loading" || audioState === "playing") return
    setAudioState("loading")
    try {
      await playAyahAudio(surahNumber, ayah.ayahNumber, reciter)
      setAudioState("playing")
      // Reset after a delay (the audio has finished playing by now)
      setTimeout(() => setAudioState("idle"), 1500)
    } catch (err) {
      console.error("Ayah audio playback failed:", err)
      setAudioState("error")
      toast({
        title: "Audio unavailable",
        description: "Could not load the recitation audio. Please check your internet connection and try again.",
        variant: "destructive",
      })
      setTimeout(() => setAudioState("idle"), 3000)
    }
  }

  return (
    <Card className="overflow-hidden border-border/60">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                Ayah {ayah.ayahNumber}
              </Badge>
            </div>
            {/* Arabic text — large, with proper Arabic font */}
            <div
              className="text-3xl md:text-4xl leading-loose text-foreground mb-3"
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "var(--font-naskh), 'Noto Naskh Arabic', 'Amiri', serif" }}
            >
              {ayah.arabic}
            </div>
            {/* Transliteration */}
            <p className="text-sm font-mono text-muted-foreground italic mb-1" dir="ltr">
              {ayah.transliteration}
            </p>
            {/* Translation */}
            <p className="text-base text-foreground/90 leading-relaxed">{ayah.translation}</p>
          </div>
          {/* Audio button */}
          <button
            type="button"
            onClick={handlePlayAudio}
            disabled={audioState === "loading"}
            className="shrink-0 w-12 h-12 rounded-full bg-emerald-600/10 hover:bg-emerald-600/20 flex items-center justify-center transition-colors disabled:opacity-50"
            aria-label={`Play recitation of ayah ${ayah.ayahNumber}`}
            title="Play recitation (from EveryAyah CDN)"
          >
            {audioState === "loading" ? (
              <Loader2 className="w-5 h-5 text-emerald-600 animate-spin" />
            ) : audioState === "error" ? (
              <AlertCircle className="w-5 h-5 text-amber-600" />
            ) : audioState === "playing" ? (
              <Volume2 className="w-5 h-5 text-emerald-600 fill-emerald-600/30" />
            ) : (
              <Volume2 className="w-5 h-5 text-emerald-600" />
            )}
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {/* Toggle for word-by-word breakdown */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors mb-3"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? "Hide word-by-word breakdown" : `Show word-by-word breakdown (${ayah.words.length} words)`}
        </button>

        {expanded && (
          <div className="space-y-3 pt-2 border-t border-border/40">
            {ayah.words.map((word, idx) => (
              <WordBreakdownCard key={idx} word={word} index={idx + 1} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

interface WordBreakdownCardProps {
  word: LessonWordBreakdown
  index: number
}

function WordBreakdownCard({ word, index }: WordBreakdownCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card/50 p-4 hover:border-emerald-600/30 transition-colors">
      <div className="flex items-start gap-4">
        {/* Word number */}
        <div className="shrink-0 w-7 h-7 rounded-full bg-emerald-600/10 text-emerald-600 font-semibold text-xs flex items-center justify-center">
          {index}
        </div>
        {/* Word content */}
        <div className="flex-1 min-w-0">
          {/* Arabic word + transliteration */}
          <div className="flex items-baseline gap-3 mb-2 flex-wrap">
            <span
              className="text-3xl font-arabic text-foreground leading-none"
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "var(--font-naskh), 'Noto Naskh Arabic', 'Amiri', serif" }}
            >
              {word.arabic}
            </span>
            <span className="text-sm font-mono text-muted-foreground italic">{word.transliteration}</span>
          </div>
          {/* Translation */}
          <p className="text-sm font-medium text-foreground mb-2">{word.translation}</p>
          {/* Grammar notes */}
          <div className="text-xs text-muted-foreground leading-relaxed mb-2">
            <span className="font-semibold text-foreground/70">Grammar: </span>
            {word.grammar}
          </div>
          {/* Tajweed notes */}
          <div className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
            <span className="font-semibold">Tajweed: </span>
            {word.tajweed}
          </div>
        </div>
      </div>
    </div>
  )
}
