import LessonLayout from "@/components/lesson-layout"
import LetterGroupDisplay from "@/components/letter-group-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"
import { Card, CardContent } from "@/components/ui/card"

export default function SecondLetterGroupLesson() {
  return (
    <LessonLayout moduleId={2} lessonId={2}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Second Group of Letters: Jeem, Haa, Khaa</h2>

          <p>In this lesson, we&apos;ll learn the second group of Arabic letters: Jeem (ج), Haa (ح), and Khaa (خ).</p>

          <p>
            These letters are grouped together because they share the same basic shape, differing only in the number and
            position of dots.
          </p>
        </div>

        <LetterGroupDisplay
          letters={[
            {
              letter: "ج",
              name: "Jeem",
              transliteration: "j",
              description:
                "Jeem makes a 'j' sound similar to the English 'j' in 'jam'. It has one dot below the main body of the letter.",
            },
            {
              letter: "ح",
              name: "Haa",
              transliteration: "ḥ",
              description: "Haa makes a heavy 'h' sound produced from the throat. It has no dots.",
            },
            {
              letter: "خ",
              name: "Khaa",
              transliteration: "kh",
              description:
                "Khaa makes a sound similar to the 'ch' in the Scottish 'loch'. It has one dot above the main body of the letter.",
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Letter Forms</h3>

          <p>
            Like all Arabic letters, these letters change their form depending on their position in a word. Let&apos;s
            look at the different forms of each letter:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Jeem (ج)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ج</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">جـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـجـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـج</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Haa (ح)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ح</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">حـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـحـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـح</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Khaa (خ)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">خ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">خـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـخـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـخ</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>Let&apos;s practice pronouncing each of these letters. Listen to the audio and repeat after it.</p>
        </div>

        <PronunciationPractice text="Practice pronouncing Jeem" audioSrc="/audio/jeem.mp3" arabicText="ج" />

        <PronunciationPractice text="Practice pronouncing Haa" audioSrc="/audio/haa.mp3" arabicText="ح" />

        <PronunciationPractice text="Practice pronouncing Khaa" audioSrc="/audio/khaa.mp3" arabicText="خ" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>Now, let&apos;s practice writing these letters. Follow the guide to write each letter correctly.</p>
        </div>

        <WritingPractice
          letter="ج"
          strokeData={[
            {
              points: [
                { x: 180, y: 120 },
                { x: 150, y: 150 },
                { x: 180, y: 180 },
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
                { x: 150, y: 190 },
                { x: 150, y: 200 },
              ],
              width: 3,
            },
          ]}
        />

        <WritingPractice
          letter="ح"
          strokeData={[
            {
              points: [
                { x: 180, y: 120 },
                { x: 150, y: 150 },
                { x: 180, y: 180 },
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
              <div className="letter-form mb-2">جَ حَ خَ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: ja, ḥa, kha</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Kasrah</h4>
              <div className="letter-form mb-2">جِ حِ خِ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: ji, ḥi, khi</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Dammah</h4>
              <div className="letter-form mb-2">جُ حُ خُ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: ju, ḥu, khu</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing Jeem with harakat"
          audioSrc="/audio/jeem-harakat.mp3"
          arabicText="جَ جِ جُ"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>Three new Arabic letters: Jeem (ج), Haa (ح), and Khaa (خ)</li>
            <li>The different forms of each letter based on its position in a word</li>
            <li>How to pronounce each letter</li>
            <li>How to write Jeem and Haa</li>
            <li>How to combine these letters with harakat</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn the third group of Arabic letters.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

