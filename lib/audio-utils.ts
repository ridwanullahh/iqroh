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

// Function to speak text using the Web Speech API
const speakText = (text: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if the browser supports speech synthesis
    if (!("speechSynthesis" in window)) {
      reject(new Error("Your browser does not support speech synthesis"))
      return
    }

    // Create a new speech synthesis utterance
    const utterance = new SpeechSynthesisUtterance(text)

    // Set properties
    utterance.lang = "ar-SA" // Arabic language
    utterance.rate = 0.8 // Slightly slower rate
    utterance.pitch = 1

    // Set event handlers
    utterance.onend = () => resolve()
    utterance.onerror = (event) => reject(new Error(`Speech synthesis error: ${event.error}`))

    // Speak the text
    window.speechSynthesis.speak(utterance)
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

