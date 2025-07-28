import LessonLayout from "@/components/lesson-layout"
import LetterGroupDisplay from "@/components/letter-group-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"

export default function IntroToArabicLettersLesson() {
  return (
    <LessonLayout moduleId={2} lessonId={1}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Introduction to Arabic Letters</h2>

          <p>
            Welcome to the Arabic Letters module! In this module, you&apos;ll learn all 28 letters of the Arabic
            alphabet, their sounds, and how to write them.
          </p>

          <p>
            The Arabic alphabet is written from right to left, unlike English which is written from left to right. Each
            letter can have up to four different forms, depending on its position in a word:
          </p>

          <ul>
            <li>
              <strong>Isolated form</strong> - when the letter stands alone
            </li>
            <li>
              <strong>Initial form</strong> - when the letter is at the beginning of a word
            </li>
            <li>
              <strong>Medial form</strong> - when the letter is in the middle of a word
            </li>
            <li>
              <strong>Final form</strong> - when the letter is at the end of a word
            </li>
          </ul>

          <p>In this lesson, we&apos;ll focus on the isolated forms of the first group of Arabic letters.</p>

          <h3>The First Group of Letters</h3>

          <p>
            We&apos;ll start with the first four letters of the Arabic alphabet: Alif (ا), Baa (ب), Taa (ت), and Thaa
            (ث).
          </p>
        </div>

        <LetterGroupDisplay
          letters={[
            {
              letter: "ا",
              name: "Alif",
              transliteration: "a",
              description:
                "Alif is the first letter of the Arabic alphabet. It makes a long 'a' sound when used as a vowel.",
            },
            {
              letter: "ب",
              name: "Baa",
              transliteration: "b",
              description:
                "Baa is the second letter of the Arabic alphabet. It makes a 'b' sound similar to the English 'b'.",
            },
            {
              letter: "ت",
              name: "Taa",
              transliteration: "t",
              description:
                "Taa is the third letter of the Arabic alphabet. It makes a 't' sound similar to the English 't'.",
            },
            {
              letter: "ث",
              name: "Thaa",
              transliteration: "th",
              description:
                "Thaa is the fourth letter of the Arabic alphabet. It makes a 'th' sound similar to the English 'th' in 'think'.",
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>Let&apos;s practice pronouncing each of these letters. Listen to the audio and repeat after it.</p>
        </div>

        <PronunciationPractice text="Practice pronouncing Alif" audioSrc="/audio/alif.mp3" arabicText="ا" />

        <PronunciationPractice text="Practice pronouncing Baa" audioSrc="/audio/baa.mp3" arabicText="ب" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>Now, let&apos;s practice writing these letters. Follow the guide to write each letter correctly.</p>
        </div>

        <WritingPractice
          letter="ا"
          strokeData={[
            {
              points: [
                { x: 150, y: 100 },
                { x: 150, y: 200 },
              ],
              width: 3,
            },
          ]}
        />

        <WritingPractice
          letter="ب"
          strokeData={[
            {
              points: [
                { x: 150, y: 100 },
                { x: 150, y: 200 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 120, y: 200 },
                { x: 180, y: 200 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 150, y: 220 },
                { x: 150, y: 230 },
              ],
              width: 3,
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>The first four letters of the Arabic alphabet: Alif (ا), Baa (ب), Taa (ت), and Thaa (ث)</li>
            <li>How to pronounce each letter</li>
            <li>How to write Alif and Baa</li>
          </ul>

          <p>
            In the next lesson, we&apos;ll continue with more letters and practice combining them with the harakat you
            learned in the previous module.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}

