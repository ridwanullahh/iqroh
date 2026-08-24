// Audio context singleton to ensure we only create one instance
let audioContextInstance: AudioContext | null = null

export const getAudioContext = (): AudioContext => {
  if (!audioContextInstance) {
    // Create AudioContext with fallback for older browsers
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext
    audioContextInstance = new AudioContext()
  }
  return audioContextInstance
}

// Function to play audio using text-to-speech
export const playAudio = async (textOrUrl: string): Promise<void> => {
  try {
    // Check if the input is a URL or text
    const isUrl = textOrUrl.startsWith("/") || textOrUrl.startsWith("http")

    if (isUrl) {
      // For demo purposes, we'll use text-to-speech instead of loading audio files
      // Extract the filename from the URL to determine what to speak
      const filename = textOrUrl.split("/").pop() || ""

      // Parse the filename to determine what to speak
      let textToSpeak = ""

      if (filename.includes("fathah")) {
        textToSpeak = filename.includes("alif")
          ? "a"
          : filename.includes("ba")
            ? "ba"
            : filename.includes("sa")
              ? "sa"
              : filename.includes("meem")
                ? "ma"
                : filename.includes("lam")
                  ? "la"
                  : filename.includes("ra")
                    ? "ra"
                    : filename.includes("noon")
                      ? "na"
                      : filename.includes("ha")
                        ? "ha"
                        : filename.includes("kaf")
                          ? "ka"
                          : "a"
      } else if (filename.includes("kasrah")) {
        textToSpeak = filename.includes("alif")
          ? "i"
          : filename.includes("ba")
            ? "bi"
            : filename.includes("sa")
              ? "si"
              : filename.includes("meem")
                ? "mi"
                : filename.includes("lam")
                  ? "li"
                  : filename.includes("ra")
                    ? "ri"
                    : filename.includes("noon")
                      ? "ni"
                      : filename.includes("ha")
                        ? "hi"
                        : filename.includes("kaf")
                          ? "ki"
                          : "i"
      } else if (filename.includes("dammah")) {
        textToSpeak = filename.includes("alif")
          ? "u"
          : filename.includes("ba")
            ? "bu"
            : filename.includes("sa")
              ? "su"
              : filename.includes("meem")
                ? "mu"
                : filename.includes("lam")
                  ? "lu"
                  : filename.includes("ra")
                    ? "ru"
                    : filename.includes("noon")
                      ? "nu"
                      : filename.includes("ha")
                        ? "hu"
                        : filename.includes("kaf")
                          ? "ku"
                          : "u"
      } else if (filename.includes("harakat")) {
        if (filename.includes("noon")) {
          textToSpeak = "na ni nu"
        } else if (filename.includes("ha")) {
          textToSpeak = "ha hi hu"
        } else {
          textToSpeak = "a i u"
        }
      } else {
        // Default to the filename without extension
        textToSpeak = filename.split(".")[0]
      }

      return speakText(textToSpeak)
    } else {
      // If it's not a URL, assume it's text to speak
      return speakText(textOrUrl)
    }
  } catch (error) {
    console.error("Error playing audio:", error)
    throw error
  }
}

// Function to speak text using the Web Speech API.
//
// This implementation fixes several common issues with Arabic speech
// synthesis on the web:
//   1. Voice loading is ASYNC on Chrome — `getVoices()` returns an
//      empty array on first call and populates later via the
//      `voiceschanged` event. We wait for voices to be available
//      before speaking.
//   2. We explicitly select an Arabic voice (lang starts with "ar")
//      so the browser does not fall back to English TTS for Arabic
//      text.
//   3. We cancel any in-progress speech before starting a new
//      utterance, so rapid taps on different examples do not queue
//      up a long chain of audio.
//   4. We set a slower rate (0.85) for clearer pronunciation, and
//      we set the lang attribute on the utterance as a fallback
//      hint when no Arabic voice is installed.
//   5. We resolve the promise on `onend` OR after a safety timeout
//      (some browsers do not fire `onend` reliably when speech is
//      cancelled or when the page loses focus).

let cachedVoices: SpeechSynthesisVoice[] | null = null

function waitForVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      resolve([])
      return
    }
    // If we already have voices cached, return them.
    if (cachedVoices && cachedVoices.length > 0) {
      resolve(cachedVoices)
      return
    }
    // Try synchronous getVoices() first.
    const immediate = window.speechSynthesis.getVoices()
    if (immediate && immediate.length > 0) {
      cachedVoices = immediate
      resolve(immediate)
      return
    }
    // Otherwise, wait for the voiceschanged event.
    let resolved = false
    const handler = () => {
      if (resolved) return
      const voices = window.speechSynthesis.getVoices()
      if (voices && voices.length > 0) {
        resolved = true
        cachedVoices = voices
        window.speechSynthesis.removeEventListener("voiceschanged", handler)
        resolve(voices)
      }
    }
    window.speechSynthesis.addEventListener("voiceschanged", handler)
    // Safety timeout: if no voices load within 2 seconds, resolve
    // with whatever we have (possibly empty).
    setTimeout(() => {
      if (resolved) return
      resolved = true
      const voices = window.speechSynthesis.getVoices()
      cachedVoices = voices || []
      window.speechSynthesis.removeEventListener("voiceschanged", handler)
      resolve(cachedVoices)
    }, 2000)
  })
}

function pickArabicVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!voices || voices.length === 0) return null
  // Prefer Arabic voices. Try common dialects in order of preference.
  const preferredDialects = ["ar-SA", "ar-EG", "ar", "ar-AE", "ar-MA", "ar-IQ"]
  for (const dialect of preferredDialects) {
    const match = voices.find((v) => v.lang === dialect)
    if (match) return match
  }
  // Fallback: any voice whose lang starts with "ar".
  const anyArabic = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("ar"))
  return anyArabic || null
}

// Function to speak text using the Web Speech API
const speakText = (text: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    // Check if the browser supports speech synthesis
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      reject(new Error("Your browser does not support speech synthesis"))
      return
    }

    try {
      // Cancel any in-progress speech so rapid taps don't queue up.
      window.speechSynthesis.cancel()

      // Wait for voices to be available (async on Chrome).
      const voices = await waitForVoices()
      const arabicVoice = pickArabicVoice(voices)

      // Create a new speech synthesis utterance
      const utterance = new SpeechSynthesisUtterance(text)

      // Set properties
      utterance.lang = "ar-SA" // Arabic language hint
      utterance.rate = 0.85 // Slightly slower rate for clarity
      utterance.pitch = 1
      utterance.volume = 1

      // If we found an Arabic voice, use it explicitly. Otherwise,
      // we leave the lang hint and let the browser pick the best
      // available voice (which may be English if no Arabic voice
      // is installed — that's the best we can do without bundling
      // audio files).
      if (arabicVoice) {
        utterance.voice = arabicVoice
      }

      // Set event handlers
      let resolved = false
      const finish = () => {
        if (resolved) return
        resolved = true
        clearTimeout(safetyTimer)
        resolve()
      }
      utterance.onend = finish
      utterance.onerror = (event) => {
        if (resolved) return
        resolved = true
        clearTimeout(safetyTimer)
        // `interrupted` and `canceled` are common when we cancel
        // speech to start a new one — don't reject in those cases,
        // just resolve silently.
        if (event.error === "interrupted" || event.error === "canceled") {
          resolve()
        } else {
          reject(new Error(`Speech synthesis error: ${event.error}`))
        }
      }

      // Safety timer: if onend/onerror never fires (happens on some
      // browsers when speech is empty or very short), resolve after
      // a reasonable timeout based on text length.
      const estimatedMs = Math.max(1500, text.length * 200)
      const safetyTimer = setTimeout(finish, estimatedMs + 2000)

      // Speak the text
      window.speechSynthesis.speak(utterance)
    } catch (err) {
      reject(err instanceof Error ? err : new Error(String(err)))
    }
  })
}

// Function to record audio
export const startRecording = async (): Promise<MediaRecorder> => {
  try {
    // Request microphone access
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })

    // Create media recorder
    const mediaRecorder = new MediaRecorder(stream)
    const audioChunks: Blob[] = []

    // Set up event handlers
    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data)
    }

    // Start recording
    mediaRecorder.start()

    // Add stop method that returns the recorded audio as a blob
    const originalStop = mediaRecorder.stop
    mediaRecorder.stop = () => {
      return new Promise<Blob>((resolve) => {
        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/webm" })
          resolve(audioBlob)
        }
        originalStop.call(mediaRecorder)
      })
    }

    return mediaRecorder
  } catch (error) {
    console.error("Error starting recording:", error)
    throw error
  }
}

// Function to analyze audio for pronunciation feedback
export const analyzeAudio = async (
  userAudioBlob: Blob,
  referenceAudioUrl: string,
): Promise<{
  accuracy: number
  feedback: string
}> => {
  try {
    const audioContext = getAudioContext()

    // For now, we'll return a simulated analysis
    // In a real implementation, this would compare spectral features

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return simulated results
    const accuracy = Math.random() * 0.3 + 0.7 // Random accuracy between 70-100%

    let feedback
    if (accuracy > 0.9) {
      feedback = "Excellent pronunciation!"
    } else if (accuracy > 0.8) {
      feedback = "Good pronunciation with minor issues."
    } else {
      feedback = "Your pronunciation needs more practice."
    }

    return { accuracy, feedback }
  } catch (error) {
    console.error("Error analyzing audio:", error)
    throw error
  }
}

// Function to directly speak Arabic text
export const speakArabicText = async (text: string): Promise<void> => {
  return speakText(text)
}

// Check if the browser supports the Web Speech API for on-device
// pronunciation. Used by the lesson example audio buttons to
// gracefully degrade when speech synthesis is unavailable.
export const isSpeechSynthesisSupported = (): boolean => {
  if (typeof window === "undefined") return false
  return "speechSynthesis" in window && typeof window.speechSynthesis.speak === "function"
}

// ===========================================================================
// Quran audio CDN integration
//
// The Iqroh app uses two free, public Quran audio CDNs for real
// tajweed recitation audio (used in the capstone Surah breakdown
// module and as an alternative to the on-device Web Speech API for
// ayah-level audio):
//
//   1. EveryAyah (https://everyayah.com/data/) — hosts per-ayah MP3s
//      from 50+ reciters. URL pattern:
//        https://everyayah.com/data/<reciter>/<surah>_<ayah>.mp3
//      where surah and ayah are zero-padded to 3 digits.
//      Example: https://everyayah.com/data/Alafasy_128kbps/001_001.mp3
//
//   2. Quran.com CDN (https://audio.qurancdn.com/) — hosts per-ayah
//      audio for several reciters, used as a fallback if EveryAyah
//      is unreachable.
//
// We default to Mishary Alafasy (the most widely recognised reciter
// for learners) at 128kbps. Other reciters can be chosen by passing
// the reciter slug to the helper.
// ===========================================================================

export type QuranReciter =
  | "Alafasy_128kbps" // Mishary Alafasy — default
  | "Husary_128kbps" // Mahmoud Khalil Al-Husary — slow, clear, great for learners
  | "Minshawy_Murattal_128kbps" // Al-Minshawi — tajweed-focused
  | "Abdul_Basit_Murattal_192kbps" // Abdul Basit — classic
  | "Sudais_128kbps" // Abdurrahman As-Sudais

export const DEFAULT_RECITER: QuranReciter = "Alafasy_128kbps"

/**
 * Build the EveryAyah CDN URL for a specific ayah.
 *
 * @param surah - Surah number (1-114). Will be zero-padded to 3 digits.
 * @param ayah - Ayah number within the surah (1-N). Will be zero-padded to 3 digits.
 * @param reciter - Reciter slug (defaults to Alafasy 128kbps).
 * @returns The full HTTPS URL to the MP3 file.
 *
 * @example
 *   getAyahAudioUrl(1, 1) // Surah Al-Fatihah, ayah 1
 *   // → "https://everyayah.com/data/Alafasy_128kbps/001_001.mp3"
 */
export function getAyahAudioUrl(
  surah: number,
  ayah: number,
  reciter: QuranReciter = DEFAULT_RECITER,
): string {
  const surahStr = String(surah).padStart(3, "0")
  const ayahStr = String(ayah).padStart(3, "0")
  return `https://everyayah.com/data/${reciter}/${surahStr}_${ayahStr}.mp3`
}

/**
 * Build the Quran.com CDN URL for a specific ayah (fallback CDN).
 *
 * @param surah - Surah number (1-114).
 * @param ayah - Ayah number within the surah.
 * @returns The full HTTPS URL to the MP3 file on Quran.com's CDN.
 */
export function getQuranComAudioUrl(surah: number, ayah: number): string {
  // Quran.com uses a different URL structure. The reciter ID 2 is
  // Mishary Alafasy. The pattern is:
  //   https://audio.qurancdn.com/MisharyRashidAlafasy/192kbps/SURAH_AYAH.mp3
  // We use 192kbps for higher quality on the fallback CDN.
  const surahStr = String(surah).padStart(3, "0")
  const ayahStr = String(ayah).padStart(3, "0")
  return `https://audio.qurancdn.com/MisharyRashidAlafasy/192kbps/${surahStr}${ayahStr}.mp3`
}

/**
 * Play an ayah audio file from the EveryAyah CDN, with automatic
 * fallback to the Quran.com CDN if EveryAyah is unreachable.
 *
 * Resolves when the audio finishes playing. Rejects if both CDNs
 * fail (e.g. the user is offline).
 *
 * @param surah - Surah number (1-114).
 * @param ayah - Ayah number within the surah.
 * @param reciter - Reciter slug for EveryAyah (defaults to Alafasy).
 */
export function playAyahAudio(
  surah: number,
  ayah: number,
  reciter: QuranReciter = DEFAULT_RECITER,
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || typeof Audio === "undefined") {
      reject(new Error("Audio playback is not supported in this environment"))
      return
    }

    const primaryUrl = getAyahAudioUrl(surah, ayah, reciter)
    const fallbackUrl = getQuranComAudioUrl(surah, ayah)

    const audio = new Audio(primaryUrl)
    audio.crossOrigin = "anonymous"

    let resolved = false
    const finishOk = () => {
      if (resolved) return
      resolved = true
      resolve()
    }
    const finishErr = () => {
      if (resolved) return
      resolved = true
      // Try the fallback CDN.
      const fallback = new Audio(fallbackUrl)
      fallback.crossOrigin = "anonymous"
      fallback.onended = finishOk
      fallback.onerror = () => {
        reject(new Error(`Failed to load ayah audio from both CDNs (surah ${surah}, ayah ${ayah})`))
      }
      fallback.play().catch(() => {
        reject(new Error(`Failed to play ayah audio (surah ${surah}, ayah ${ayah})`))
      })
    }

    audio.onended = finishOk
    audio.onerror = finishErr
    audio.play().catch((err) => {
      // play() can reject if the user hasn't interacted with the
      // page yet (autoplay policy). In that case, surface the error.
      if (!resolved) {
        resolved = true
        reject(err)
      }
    })
  })
}

/**
 * Get the list of available reciters with human-readable names.
 * Used by the settings page to let the user pick a reciter.
 */
export function getAvailableReciters(): Array<{ slug: QuranReciter; name: string; description: string }> {
  return [
    { slug: "Alafasy_128kbps", name: "Mishary Alafasy", description: "Default — clear, melodious, widely loved" },
    { slug: "Husary_128kbps", name: "Mahmoud Khalil Al-Husary", description: "Slow, clear — excellent for learners" },
    { slug: "Minshawy_Murattal_128kbps", name: "Al-Minshawi (Murattal)", description: "Tajweed-focused, methodical" },
    { slug: "Abdul_Basit_Murattal_192kbps", name: "Abdul Basit (Murattal)", description: "Classic Egyptian recitation" },
    { slug: "Sudais_128kbps", name: "Abdurrahman As-Sudais", description: "Imam of the Grand Mosque, Makkah" },
  ]
}

