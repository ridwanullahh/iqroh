import LessonLayout from "@/components/lesson-layout"
import LetterGroupDisplay from "@/components/letter-group-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"
import { Card, CardContent } from "@/components/ui/card"

export default function FifthLetterGroupLesson() {
  return (
    <LessonLayout moduleId={2} lessonId={5}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Fifth Group of Letters: Taa, Zaa, Ayn, Ghayn</h2>

          <p>
            In this lesson, we&apos;ll learn the fifth group of Arabic letters: Taa (ط), Zaa (ظ), Ayn (ع), and Ghayn
            (غ).
          </p>

          <p>
            These letters are grouped together because Taa and Zaa share the same basic shape, as do Ayn and Ghayn. Taa
            and Zaa are emphatic versions of Taa (ت) and Dhaal (ذ) respectively, while Ayn and Ghayn are guttural sounds
            produced from the throat.
          </p>
        </div>

        <LetterGroupDisplay
          letters={[
            {
              letter: "ط",
              name: "Taa",
              transliteration: "ṭ",
              description:
                "Taa makes an emphatic 't' sound. It is pronounced with the back of the tongue raised against the roof of the mouth. It has no dots.",
            },
            {
              letter: "ظ",
              name: "Zaa",
              transliteration: "ẓ",
              description:
                "Zaa makes an emphatic 'th' sound (like the 'th' in 'this'). It is pronounced with the back of the tongue raised against the roof of the mouth. It has one dot above the main body of the letter.",
            },
            {
              letter: "ع",
              name: "Ayn",
              transliteration: "ʿ",
              description:
                "Ayn is a unique Arabic letter with no direct equivalent in English. It is a guttural sound produced from the throat. It has no dots.",
            },
            {
              letter: "غ",
              name: "Ghayn",
              transliteration: "gh",
              description:
                "Ghayn makes a sound similar to the French 'r' or a gargled 'g'. It is a guttural sound produced from the throat. It has one dot above the main body of the letter.",
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
              <h4 className="font-medium mb-2 text-center">Taa (ط) and Zaa (ظ)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ط ظ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">طـ ظـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـطـ ـظـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـط ـظ</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: طَرِيق (ṭarīq - road)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Ayn (ع) and Ghayn (غ)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ع غ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">عـ غـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـعـ ـغـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـع ـغ</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: عَيْن (ʿayn - eye)</p>
            </CardContent>
          </Card>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Special Characteristics</h3>

          <p>This group contains two types of special letters:</p>

          <ol>
            <li>
              <strong>Emphatic Letters:</strong> Taa (ط) and Zaa (ظ) are emphatic letters, pronounced with the back of
              the tongue raised against the roof of the mouth, giving them a deeper, fuller sound compared to their
              non-emphatic counterparts.
            </li>
            <li>
              <strong>Guttural Letters:</strong> Ayn (ع) and Ghayn (غ) are guttural letters, produced from the throat.
              These sounds are unique to Arabic and require practice to pronounce correctly.
            </li>
          </ol>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>Let&apos;s practice pronouncing each of these letters. Listen to the audio and repeat after it.</p>
        </div>

        <PronunciationPractice text="Practice pronouncing Taa" audioSrc="/audio/taa-emphatic.mp3" arabicText="ط" />

        <PronunciationPractice text="Practice pronouncing Zaa" audioSrc="/audio/zaa-emphatic.mp3" arabicText="ظ" />

        <PronunciationPractice text="Practice pronouncing Ayn" audioSrc="/audio/ayn.mp3" arabicText="ع" />

        <PronunciationPractice text="Practice pronouncing Ghayn" audioSrc="/audio/ghayn.mp3" arabicText="غ" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>Now, let&apos;s practice writing these letters. Follow the guide to write each letter correctly.</p>
        </div>

        <WritingPractice
          letter="ط"
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
                { x: 150, y: 100 },
                { x: 150, y: 200 },
              ],
              width: 3,
            },
          ]}
        />

        <WritingPractice
          letter="ع"
          strokeData={[
            {
              points: [
                { x: 180, y: 120 },
                { x: 150, y: 100 },
                { x: 120, y: 120 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 120, y: 120 },
                { x: 120, y: 150 },
                { x: 150, y: 180 },
                { x: 180, y: 150 },
                { x: 180, y: 120 },
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
              <div className="letter-form mb-2">طَ ظَ عَ غَ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: ṭa, ẓa, ʿa, gha</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Kasrah</h4>
              <div className="letter-form mb-2">طِ ظِ عِ غِ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: ṭi, ẓi, ʿi, ghi</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Dammah</h4>
              <div className="letter-form mb-2">طُ ظُ عُ غُ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: ṭu, ẓu, ʿu, ghu</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing Ayn with harakat"
          audioSrc="/audio/ayn-harakat.mp3"
          arabicText="عَ عِ عُ"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Word Formation</h3>

          <p>Let&apos;s practice forming and reading some words with the letters we&apos;ve learned so far:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">طَرِيق</div>
              <p className="text-sm text-muted-foreground">ṭarīq (road)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">عَيْن</div>
              <p className="text-sm text-muted-foreground">ʿayn (eye)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">ظَلَام</div>
              <p className="text-sm text-muted-foreground">ẓalām (darkness)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">غَرِيب</div>
              <p className="text-sm text-muted-foreground">gharīb (strange)</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing these words"
          audioSrc="/audio/fifth-group-words.mp3"
          arabicText="طَرِيق عَيْن ظَلَام غَرِيب"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>Four new Arabic letters: Taa (ط), Zaa (ظ), Ayn (ع), and Ghayn (غ)</li>
            <li>The different forms of each letter based on its position in a word</li>
            <li>That Taa and Zaa are emphatic letters with a deeper sound</li>
            <li>That Ayn and Ghayn are guttural letters produced from the throat</li>
            <li>How to pronounce each letter</li>
            <li>How to write Taa and Ayn</li>
            <li>How to combine these letters with harakat</li>
            <li>How to form and read words using these letters</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn the sixth group of Arabic letters.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

