import LessonLayout from "@/components/lesson-layout"
import LetterGroupDisplay from "@/components/letter-group-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"
import { Card, CardContent } from "@/components/ui/card"

export default function SeventhLetterGroupLesson() {
  return (
    <LessonLayout moduleId={2} lessonId={7}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Seventh Group of Letters: Meem, Noon, Haa, Waaw, Yaa</h2>

          <p>
            In this lesson, we&apos;ll learn the seventh and final group of Arabic letters: Meem (م), Noon (ن), Haa (ه),
            Waaw (و), and Yaa (ي).
          </p>

          <p>
            These letters complete our journey through the Arabic alphabet. Some of these letters also function as long
            vowels in certain contexts, which we&apos;ll explore in future lessons.
          </p>
        </div>

        <LetterGroupDisplay
          letters={[
            {
              letter: "م",
              name: "Meem",
              transliteration: "m",
              description: "Meem makes an 'm' sound similar to the English 'm' in 'moon'. It has no dots.",
            },
            {
              letter: "ن",
              name: "Noon",
              transliteration: "n",
              description:
                "Noon makes an 'n' sound similar to the English 'n' in 'noon'. It has one dot above the main body of the letter.",
            },
            {
              letter: "ه",
              name: "Haa",
              transliteration: "h",
              description:
                "Haa makes a soft 'h' sound similar to the English 'h' in 'hat'. It has no dots. Note that this is different from the heavy Haa (ح) we learned earlier.",
            },
            {
              letter: "و",
              name: "Waaw",
              transliteration: "w/ū",
              description:
                "Waaw makes a 'w' sound similar to the English 'w' in 'water'. It can also function as the long vowel 'ū'. It has no dots.",
            },
            {
              letter: "ي",
              name: "Yaa",
              transliteration: "y/ī",
              description:
                "Yaa makes a 'y' sound similar to the English 'y' in 'yellow'. It can also function as the long vowel 'ī'. It has two dots below the main body of the letter.",
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
              <h4 className="font-medium mb-2 text-center">Meem (م) and Noon (ن)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">م ن</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">مـ نـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـمـ ـنـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـم ـن</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: مُسْلِم (muslim - Muslim)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Haa (ه)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ه</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">هـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـهـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـه</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: هُدَى (hudā - guidance)</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Waaw (و)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">و</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـو</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Note: Waaw is a non-connecting letter from the left, so it only has isolated and final forms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Yaa (ي)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ي</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Initial</div>
                  <div className="letter-form">يـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Medial</div>
                  <div className="letter-form">ـيـ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـي</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: يَوْم (yawm - day)</p>
            </CardContent>
          </Card>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Special Characteristics</h3>

          <p>Three letters in this group have special functions:</p>

          <ol>
            <li>
              <strong>Waaw (و):</strong> Besides being a consonant ('w' sound), it can also function as a long vowel
              ('ū' sound) when preceded by a letter with dammah.
            </li>
            <li>
              <strong>Yaa (ي):</strong> Besides being a consonant ('y' sound), it can also function as a long vowel ('ī'
              sound) when preceded by a letter with kasrah.
            </li>
            <li>
              <strong>Haa (ه):</strong> When it appears at the end of a word, it often indicates feminine gender in
              nouns and adjectives.
            </li>
          </ol>

          <p>We&apos;ll explore these functions in more detail in future lessons on long vowels and word structure.</p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>Let&apos;s practice pronouncing each of these letters. Listen to the audio and repeat after it.</p>
        </div>

        <PronunciationPractice text="Practice pronouncing Meem" audioSrc="/audio/meem.mp3" arabicText="م" />

        <PronunciationPractice text="Practice pronouncing Noon" audioSrc="/audio/noon.mp3" arabicText="ن" />

        <PronunciationPractice text="Practice pronouncing Haa" audioSrc="/audio/haa-soft.mp3" arabicText="ه" />

        <PronunciationPractice text="Practice pronouncing Waaw" audioSrc="/audio/waaw.mp3" arabicText="و" />

        <PronunciationPractice text="Practice pronouncing Yaa" audioSrc="/audio/yaa.mp3" arabicText="ي" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>Now, let&apos;s practice writing these letters. Follow the guide to write each letter correctly.</p>
        </div>

        <WritingPractice
          letter="م"
          strokeData={[
            {
              points: [
                { x: 150, y: 120 },
                { x: 150, y: 180 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 150, y: 150 },
                { x: 180, y: 150 },
                { x: 180, y: 180 },
                { x: 150, y: 180 },
              ],
              width: 3,
            },
          ]}
        />

        <WritingPractice
          letter="ي"
          strokeData={[
            {
              points: [
                { x: 180, y: 150 },
                { x: 150, y: 150 },
                { x: 120, y: 150 },
                { x: 120, y: 180 },
                { x: 150, y: 200 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 130, y: 220 },
                { x: 140, y: 220 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 150, y: 220 },
                { x: 160, y: 220 },
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
              <div className="letter-form mb-2">مَ نَ هَ وَ يَ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: ma, na, ha, wa, ya</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Kasrah</h4>
              <div className="letter-form mb-2">مِ نِ هِ وِ يِ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: mi, ni, hi, wi, yi</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Dammah</h4>
              <div className="letter-form mb-2">مُ نُ هُ وُ يُ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: mu, nu, hu, wu, yu</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing Meem with harakat"
          audioSrc="/audio/meem-harakat.mp3"
          arabicText="مَ مِ مُ"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Word Formation</h3>

          <p>Let&apos;s practice forming and reading some words with the letters we&apos;ve learned so far:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">مُسْلِم</div>
              <p className="text-sm text-muted-foreground">muslim (Muslim)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">نُور</div>
              <p className="text-sm text-muted-foreground">nūr (light)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">يَوْم</div>
              <p className="text-sm text-muted-foreground">yawm (day)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">هُدَى</div>
              <p className="text-sm text-muted-foreground">hudā (guidance)</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing these words"
          audioSrc="/audio/seventh-group-words.mp3"
          arabicText="مُسْلِم نُور يَوْم هُدَى"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Congratulations!</h3>

          <p>
            You have now learned all 28 letters of the Arabic alphabet! This is a significant achievement on your
            journey to reading the Qur&apos;an.
          </p>

          <p>Let&apos;s review all the letters we&apos;ve learned:</p>

          <div className="bg-muted p-4 rounded-md my-4">
            <div className="arabic-large text-center">ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي</div>
          </div>

          <p>
            In the next module, we&apos;ll learn about the different forms of letters and how they connect to form
            words.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}

