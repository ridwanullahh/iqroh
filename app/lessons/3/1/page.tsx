import LessonLayout from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"

export default function LetterPositionsOverviewLesson() {
  return (
    <LessonLayout moduleId={3} lessonId={1}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Letter Positions Overview</h2>

          <p>
            Now that you&apos;ve learned all 28 Arabic letters, it&apos;s time to understand how these letters connect
            to form words. In Arabic, most letters connect to each other when written in a word, changing their form
            based on their position.
          </p>

          <h3>The Four Positions of Arabic Letters</h3>

          <p>Most Arabic letters can take four different forms, depending on their position in a word:</p>

          <ol>
            <li>
              <strong>Isolated form</strong> - when the letter stands alone
            </li>
            <li>
              <strong>Initial form</strong> - when the letter is at the beginning of a word or connected only from the
              left
            </li>
            <li>
              <strong>Medial form</strong> - when the letter is in the middle of a word, connected from both sides
            </li>
            <li>
              <strong>Final form</strong> - when the letter is at the end of a word or connected only from the right
            </li>
          </ol>

          <p>Let&apos;s look at some examples to understand this better:</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Example: The Letter Baa (ب)</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ب</div>
                <div className="text-sm mt-2">When written alone</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Initial</div>
                <div className="letter-form">بـ</div>
                <div className="text-sm mt-2">At the beginning of a word</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Medial</div>
                <div className="letter-form">ـبـ</div>
                <div className="text-sm mt-2">In the middle of a word</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Final</div>
                <div className="letter-form">ـب</div>
                <div className="text-sm mt-2">At the end of a word</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Example Word: كَتَبَ (kataba - he wrote)</h4>
              <div className="bg-muted p-4 rounded text-center">
                <div className="letter-form">كَتَبَ</div>
                <div className="flex justify-center gap-8 mt-4">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Final</div>
                    <div className="letter-form">ـبَ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Medial</div>
                    <div className="letter-form">ـتَـ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Initial</div>
                    <div className="letter-form">كَـ</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Non-Connecting Letters</h3>

          <p>
            There are six letters in Arabic that only connect from the right side and never connect from the left side.
            These letters only have two forms: isolated and final.
          </p>

          <p>The six non-connecting letters are:</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded text-center">
                <div className="letter-form">ا</div>
                <div className="text-sm mt-2">Alif</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="letter-form">د</div>
                <div className="text-sm mt-2">Daal</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="letter-form">ذ</div>
                <div className="text-sm mt-2">Dhaal</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="letter-form">ر</div>
                <div className="text-sm mt-2">Raa</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="letter-form">ز</div>
                <div className="text-sm mt-2">Zaay</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="letter-form">و</div>
                <div className="text-sm mt-2">Waaw</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Example: The Letter Daal (د)</h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                  <div className="letter-form">د</div>
                  <div className="text-sm mt-2">When written alone</div>
                </div>

                <div className="bg-muted p-4 rounded text-center">
                  <div className="text-xs text-muted-foreground mb-1">Final</div>
                  <div className="letter-form">ـد</div>
                  <div className="text-sm mt-2">At the end of a word</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Example Word: وَلَد (walad - boy)</h4>
              <div className="bg-muted p-4 rounded text-center">
                <div className="letter-form">وَلَد</div>
                <div className="flex justify-center gap-8 mt-4">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Final</div>
                    <div className="letter-form">ـد</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Medial</div>
                    <div className="letter-form">ـلَـ</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground">Isolated</div>
                    <div className="letter-form">وَ</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>How Letters Connect</h3>

          <p>
            When writing Arabic words, letters connect from right to left. Here are the rules for connecting letters:
          </p>

          <ol>
            <li>If a letter can connect from both sides, it will connect to the letters before and after it.</li>
            <li>
              If a letter can only connect from the right side (non-connecting letters), it will not connect to the
              letter after it.
            </li>
            <li>The first letter of a word will always be in the initial form if it can connect from the left.</li>
            <li>The last letter of a word will always be in the final form if it can connect from the right.</li>
          </ol>
        </div>

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/kataba.mp3" arabicText="كَتَبَ" />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/walad.mp3" arabicText="وَلَد" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>
            Let&apos;s practice writing a word with connected letters. Follow the guide to write the word كَتَبَ (kataba -
            he wrote).
          </p>
        </div>

        <WritingPractice
          letter="كَتَبَ"
          strokeData={[
            {
              points: [
                { x: 200, y: 150 },
                { x: 180, y: 130 },
                { x: 160, y: 150 },
                { x: 180, y: 170 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 160, y: 150 },
                { x: 140, y: 150 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 140, y: 130 },
                { x: 140, y: 170 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 140, y: 150 },
                { x: 120, y: 150 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 120, y: 150 },
                { x: 120, y: 170 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 120, y: 170 },
                { x: 100, y: 170 },
              ],
              width: 3,
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>Arabic letters can take up to four different forms based on their position in a word</li>
            <li>The four forms are: isolated, initial, medial, and final</li>
            <li>Six letters in Arabic only connect from the right side and have only two forms</li>
            <li>How letters connect to form words</li>
          </ul>

          <p>
            In the next lessons, we&apos;ll explore each of these forms in more detail and practice writing words with
            connected letters.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}

