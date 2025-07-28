import LessonLayout from "@/components/lesson-layout"
import LetterGroupDisplay from "@/components/letter-group-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"
import { Card, CardContent } from "@/components/ui/card"

export default function SixthLetterGroupLesson() {
  return (
    <LessonLayout moduleId={2} lessonId={6}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Sixth Group of Letters: Faa, Qaaf, Kaaf, Laam</h2>

          <p>
            In this lesson, we&apos;ll learn the sixth group of Arabic letters: Faa (ف), Qaaf (ق), Kaaf (ك), and Laam
            (ل).
          </p>

          <p>
            These letters are grouped together as they represent common consonants that are frequently used in Arabic
            words. They have distinct shapes and are relatively easy to recognize.
          </p>
        </div>

        <LetterGroupDisplay
          letters={[
            {
              letter: "ف",
              name: "Faa",
              transliteration: "f",
              description:
                "Faa makes an 'f' sound similar to the English 'f' in 'fish'. It has one dot above the main body of the letter.",
            },
            {
              letter: "ق",
              name: "Qaaf",
              transliteration: "q",
              description:
                "Qaaf makes a deep 'k' sound produced from the back of the throat. It has two dots above the main body of the letter.",
            },
            {
              letter: "ك",
              name: "Kaaf",
              transliteration: "k",
              description: "Kaaf makes a 'k' sound similar to the English 'k' in 'kite'. It has no dots.",
            },
            {
              letter: "ل",
              name: "Laam",
              transliteration: "l",
              description: "Laam makes an 'l' sound similar to the English 'l' in 'lamp'. It has no dots.",
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Letter Forms</h3>

          <p>Let&apos;s look at the different forms of each letter based on its position in a word:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Faa (ف) and Qaaf (ق)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ف ق</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">فـ قـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـفـ ـقـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـف ـق</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: فَقِير (faqīr - poor)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Kaaf (ك) and Laam (ل)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ك ل</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">كـ لـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـكـ ـلـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـك ـل</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: كَلِمَة (kalimah - word)</p>
            </CardContent>
          </Card>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Special Characteristics</h3>

          <p>
            Laam (ل) is one of the most frequently used letters in Arabic. It has special significance because it forms
            part of the definite article "al" (الـ), which is equivalent to "the" in English.
          </p>

          <p>
            Qaaf (ق) is a distinctive Arabic letter that produces a sound from the back of the throat. It's important to
            practice this sound as it doesn't have a direct equivalent in English.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>Let&apos;s practice pronouncing each of these letters. Listen to the audio and repeat after it.</p>
        </div>

        <PronunciationPractice text="Practice pronouncing Faa" audioSrc="/audio/faa.mp3" arabicText="ف" />

        <PronunciationPractice text="Practice pronouncing Qaaf" audioSrc="/audio/qaaf.mp3" arabicText="ق" />

        <PronunciationPractice text="Practice pronouncing Kaaf" audioSrc="/audio/kaaf.mp3" arabicText="ك" />

        <PronunciationPractice text="Practice pronouncing Laam" audioSrc="/audio/laam.mp3" arabicText="ل" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>Now, let&apos;s practice writing these letters. Follow the guide to write each letter correctly.</p>
        </div>

        <WritingPractice
          letter="ف"
          strokeData={[
            {
              points: [
                { x: 150, y: 120 },
                { x: 150, y: 180 },
                { x: 180, y: 200 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 150, y: 150 },
                { x: 120, y: 150 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 150, y: 100 },
                { x: 150, y: 110 },
              ],
              width: 3,
            },
          ]}
        />

        <WritingPractice
          letter="ل"
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
                { x: 150, y: 200 },
                { x: 180, y: 200 },
              ],
              width: 3,
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Combining with Harakat</h3>

          <p>
            Now, let&apos;s practice combining these letters with the harakat (vowel signs) you learned in the previous
            module.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Fathah</h4>
              <div className="letter-form mb-2">فَ قَ كَ لَ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: fa, qa, ka, la</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Kasrah</h4>
              <div className="letter-form mb-2">فِ قِ كِ لِ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: fi, qi, ki, li</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Dammah</h4>
              <div className="letter-form mb-2">فُ قُ كُ لُ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: fu, qu, ku, lu</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing Laam with harakat"
          audioSrc="/audio/laam-harakat.mp3"
          arabicText="لَ لِ لُ"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Word Formation</h3>

          <p>Let&apos;s practice forming and reading some words with the letters we&apos;ve learned so far:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">قَلَم</div>
              <p className="text-sm text-muted-foreground">qalam (pen)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">كِتَاب</div>
              <p className="text-sm text-muted-foreground">kitāb (book)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">فِكْر</div>
              <p className="text-sm text-muted-foreground">fikr (thought)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">لَيْل</div>
              <p className="text-sm text-muted-foreground">layl (night)</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing these words"
          audioSrc="/audio/sixth-group-words.mp3"
          arabicText="قَلَم كِتَاب فِكْر لَيْل"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>Four new Arabic letters: Faa (ف), Qaaf (ق), Kaaf (ك), and Laam (ل)</li>
            <li>The different forms of each letter based on its position in a word</li>
            <li>The special significance of Laam in forming the definite article</li>
            <li>How to pronounce each letter</li>
            <li>How to write Faa and Laam</li>
            <li>How to combine these letters with harakat</li>
            <li>How to form and read words using these letters</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn the seventh and final group of Arabic letters.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

