import LessonLayout from "@/components/lesson-layout"
import LetterGroupDisplay from "@/components/letter-group-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"
import { Card, CardContent } from "@/components/ui/card"

export default function ThirdLetterGroupLesson() {
  return (
    <LessonLayout moduleId={2} lessonId={3}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Third Group of Letters: Daal, Dhaal, Raa, Zaay</h2>

          <p>
            In this lesson, we&apos;ll learn the third group of Arabic letters: Daal (د), Dhaal (ذ), Raa (ر), and Zaay
            (ز).
          </p>

          <p>
            These letters are grouped together because they share similar characteristics. Daal and Dhaal have the same
            shape, differing only in the dot. Similarly, Raa and Zaay have the same shape with a dot difference. All
            four of these letters only connect from the right side.
          </p>
        </div>

        <LetterGroupDisplay
          letters={[
            {
              letter: "د",
              name: "Daal",
              transliteration: "d",
              description: "Daal makes a 'd' sound similar to the English 'd' in 'door'. It has no dots.",
            },
            {
              letter: "ذ",
              name: "Dhaal",
              transliteration: "dh",
              description:
                "Dhaal makes a 'th' sound similar to the English 'th' in 'this'. It has one dot above the main body of the letter.",
            },
            {
              letter: "ر",
              name: "Raa",
              transliteration: "r",
              description: "Raa makes a rolled 'r' sound. It has no dots.",
            },
            {
              letter: "ز",
              name: "Zaay",
              transliteration: "z",
              description:
                "Zaay makes a 'z' sound similar to the English 'z' in 'zebra'. It has one dot above the main body of the letter.",
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Special Characteristic: Non-connecting Letters</h3>

          <p>
            All four letters in this group are <strong>non-connecting letters</strong>, which means they only connect
            from the right side and never connect from the left side. This means they only have two forms instead of
            four:
          </p>

          <ul>
            <li>
              <strong>Isolated form</strong> - when the letter stands alone
            </li>
            <li>
              <strong>Final form</strong> - when the letter is connected to a letter before it
            </li>
          </ul>

          <p>Let&apos;s look at the different forms of each letter:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Daal (د) and Dhaal (ذ)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">د ذ</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـد ـذ</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: مَدْرَسَة (madrasah - school)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2 text-center">Raa (ر) and Zaay (ز)</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">ر ز</div>
                </div>
                <div className="bg-muted p-2 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـر ـز</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">Example: رَزَقَ (razaqa - provided)</p>
            </CardContent>
          </Card>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>Let&apos;s practice pronouncing each of these letters. Listen to the audio and repeat after it.</p>
        </div>

        <PronunciationPractice text="Practice pronouncing Daal" audioSrc="/audio/daal.mp3" arabicText="د" />

        <PronunciationPractice text="Practice pronouncing Dhaal" audioSrc="/audio/dhaal.mp3" arabicText="ذ" />

        <PronunciationPractice text="Practice pronouncing Raa" audioSrc="/audio/raa.mp3" arabicText="ر" />

        <PronunciationPractice text="Practice pronouncing Zaay" audioSrc="/audio/zaay.mp3" arabicText="ز" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>Now, let&apos;s practice writing these letters. Follow the guide to write each letter correctly.</p>
        </div>

        <WritingPractice
          letter="د"
          strokeData={[
            {
              points: [
                { x: 180, y: 120 },
                { x: 150, y: 150 },
                { x: 180, y: 180 },
              ],
              width: 3,
            },
          ]}
        />

        <WritingPractice
          letter="ر"
          strokeData={[
            {
              points: [
                { x: 180, y: 150 },
                { x: 150, y: 150 },
                { x: 150, y: 180 },
                { x: 170, y: 200 },
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
              <div className="letter-form mb-2">دَ ذَ رَ زَ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: da, dha, ra, za</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Kasrah</h4>
              <div className="letter-form mb-2">دِ ذِ رِ زِ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: di, dhi, ri, zi</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <h4 className="font-medium mb-2">With Dammah</h4>
              <div className="letter-form mb-2">دُ ذُ رُ زُ</div>
              <p className="text-sm text-muted-foreground">Pronounced as: du, dhu, ru, zu</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing Raa with harakat"
          audioSrc="/audio/raa-harakat.mp3"
          arabicText="رَ رِ رُ"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Simple Word Formation</h3>

          <p>Now that we know several letters and vowels, let&apos;s try to form some simple words:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">بَرْ</div>
              <p className="text-sm text-muted-foreground">bar (land)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">دَرْ</div>
              <p className="text-sm text-muted-foreground">dar (house)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">بَدْر</div>
              <p className="text-sm text-muted-foreground">badr (full moon)</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <div className="letter-form mb-2">بَرَّ</div>
              <p className="text-sm text-muted-foreground">barra (was pious)</p>
            </CardContent>
          </Card>
        </div>

        <PronunciationPractice
          text="Practice pronouncing these simple words"
          audioSrc="/audio/simple-words.mp3"
          arabicText="بَرْ دَرْ بَدْر بَرَّ"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>Four new Arabic letters: Daal (د), Dhaal (ذ), Raa (ر), and Zaay (ز)</li>
            <li>That these letters only connect from the right side</li>
            <li>The different forms of each letter</li>
            <li>How to pronounce each letter</li>
            <li>How to write Daal and Raa</li>
            <li>How to combine these letters with harakat</li>
            <li>How to form simple words using the letters you&apos;ve learned</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn the fourth group of Arabic letters.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

