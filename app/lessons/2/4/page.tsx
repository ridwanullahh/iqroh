import LessonLayout from "@/components/lesson-layout"
import LetterGroupDisplay from "@/components/letter-group-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"
import { Card, CardContent } from "@/components/ui/card"

export default function FourthLetterGroupLesson() {
  return (
    <LessonLayout moduleId={2} lessonId={4}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Fourth Group of Letters: Seen, Sheen, Saad, Daad</h2>

          <p>
            In this lesson, we&apos;ll learn the fourth group of Arabic letters: Seen (س), Sheen (ش), Saad (ص), and Daad
            (ض).
          </p>

          <p>
            These letters are grouped together because Seen and Sheen share the same basic shape, as do Saad and Daad.
            They differ in the number and position of dots, and Saad and Daad are emphatic versions of Seen and Daal
            respectively.
          </p>
        </div>

        <LetterGroupDisplay
          letters={[
            {
              letter: "س",
              name: "Seen",
              transliteration: "s",
              description: "Seen makes an 's' sound similar to the English 's' in 'sun'. It has no dots.",
            },
            {
              letter: "ش",
              name: "Sheen",
              transliteration: "sh",
              description:
                "Sheen makes a 'sh' sound similar to the English 'sh' in 'ship'. It has three dots above the main body of the letter.",
            },
            {
              letter: "ص",
              name: "Saad",
              transliteration: "ṣ",
              description:
                "Saad makes an emphatic 's' sound. It is pronounced with the back of the tongue raised against the roof of the mouth. It has no dots.",
            },
            {
              letter: "ض",
              name: "Daad",
              transliteration: "ḍ",
              description:
                "Daad makes an emphatic 'd' sound. It is pronounced with the back of the tongue raised against the roof of the mouth. It has one dot above the main body of the letter.",
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
              <h4 className="font-medium mb-2 text-center">Seen (س) and Sheen (ش)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">س ش</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">سـ شـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـسـ ـشـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـس ـش</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: شَمْس (shams - sun)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Saad (ص) and Daad (ض)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ص ض</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">صـ ضـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـصـ ـضـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـص ـض</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: صَبْر (ṣabr - patience)</p>
            </CardContent>
          </Card>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Emphatic Letters</h3>

          <p>
            Saad (ص) and Daad (ض) are known as <strong>emphatic letters</strong>. They are pronounced with the back of
            the tongue raised against the roof of the mouth, giving them a deeper, fuller sound compared to their
            non-emphatic counterparts Seen (س) and Daal (د).
          </p>

          <p>
            Proper pronunciation of emphatic letters is important in Qur&apos;anic recitation, as it can change the
            meaning of words.
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>Let&apos;s practice pronouncing each of these letters. Listen to the audio and repeat after it.</p>
        </div>

        <PronunciationPractice text="Practice pronouncing Seen" audioSrc="/audio/seen.mp3" arabicText="س" />

        <PronunciationPractice text="Practice pronouncing Sheen" audioSrc="/audio/sheen.mp3" arabicText="ش" />

        <PronunciationPractice text="Practice pronouncing Saad" audioSrc="/audio/saad.mp3" arabicText="ص" />

        <PronunciationPractice text="Practice pronouncing Daad" audioSrc="/audio/daad.mp3" arabicText="ض" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>Now, let&apos;s practice writing these letters. Follow the guide to write each letter correctly.</p>
        </div>

        <WritingPractice
          letter="س"
          strokeData={[
            {
              points: [
                { x: 200, y: 150 },
                { x: 150, y: 150 },
                { x: 100, y: 150 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 180, y: 130 },
                { x: 180, y: 170 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 150, y: 130 },
                { x: 150, y: 170 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 120, y: 130 },
                { x: 120, y: 170 },
              ],
              width: 3,
            },
          ]}
        />

        <WritingPractice
          letter="ص"
          strokeData={[
            {
              points: [
                { x: 200, y: 150 },
                { x: 150, y: 150 },
                { x: 100, y: 150 },
                { x: 100, y: 180 },
                { x: 130, y: 200 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 180, y: 130 },
                { x: 180, y: 170 },
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
              <div className="letter-form mb-2">سَ شَ صَ ضَ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: sa, sha, ṣa, ḍa</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Kasrah</h4>
              <div className="letter-form mb-2">سِ شِ صِ ضِ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: si, shi, ṣi, ḍi</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Dammah</h4>
              <div className="letter-form mb-2">سُ شُ صُ ضُ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: su, shu, ṣu, ḍu</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing Seen with harakat"
          audioSrc="/audio/seen-harakat.mp3"
          arabicText="سَ سِ سُ"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Word Formation</h3>

          <p>Let&apos;s practice forming and reading some words with the letters we&apos;ve learned so far:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">شَمْس</div>
              <p className="text-sm text-muted-foreground">shams (sun)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">دَرْس</div>
              <p className="text-sm text-muted-foreground">dars (lesson)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">صَبْر</div>
              <p className="text-sm text-muted-foreground">ṣabr (patience)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">ضَرَبَ</div>
              <p className="text-sm text-muted-foreground">ḍaraba (he hit)</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing these words"
          audioSrc="/audio/fourth-group-words.mp3"
          arabicText="شَمْس دَرْس صَبْر ضَرَبَ"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>Four new Arabic letters: Seen (س), Sheen (ش), Saad (ص), and Daad (ض)</li>
            <li>The different forms of each letter based on its position in a word</li>
            <li>That Saad and Daad are emphatic letters with a deeper sound</li>
            <li>How to pronounce each letter</li>
            <li>How to write Seen and Saad</li>
            <li>How to combine these letters with harakat</li>
            <li>How to form and read words using these letters</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn the fifth group of Arabic letters.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

