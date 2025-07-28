import LessonLayout from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"

export default function FinalFormLesson() {
  return (
    <LessonLayout moduleId={3} lessonId={4}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Final Form</h2>

          <p>
            In this lesson, we&apos;ll focus on the final form of Arabic letters. The final form is used when a letter
            appears at the end of a word or when it is connected only from the right side.
          </p>

          <h3>Understanding the Final Form</h3>

          <p>
            When a letter is in the final position, it connects to the letter that precedes it (to its right). The final
            form often has distinctive features, such as extended curves or tails that drop below the baseline.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Final Forms of Common Letters</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ب</div>
                <div className="text-xs text-muted-foreground mt-2">Final</div>
                <div className="letter-form">ـب</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ج</div>
                <div className="text-xs text-muted-foreground mt-2">Final</div>
                <div className="letter-form">ـج</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">س</div>
                <div className="text-xs text-muted-foreground mt-2">Final</div>
                <div className="letter-form">ـس</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ع</div>
                <div className="text-xs text-muted-foreground mt-2">Final</div>
                <div className="letter-form">ـع</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ف</div>
                <div className="text-xs text-muted-foreground mt-2">Final</div>
                <div className="letter-form">ـف</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ك</div>
                <div className="text-xs text-muted-foreground mt-2">Final</div>
                <div className="letter-form">ـك</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">م</div>
                <div className="text-xs text-muted-foreground mt-2">Final</div>
                <div className="letter-form">ـم</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ي</div>
                <div className="text-xs text-muted-foreground mt-2">Final</div>
                <div className="letter-form">ـي</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Special Features of Final Forms</h3>

          <p>Many letters have distinctive final forms with special features:</p>

          <ul>
            <li>
              <strong>Extended tails</strong>: Letters like ن (noon), ي (yaa), and ر (raa) have tails that extend below
              the baseline in their final form.
            </li>
            <li>
              <strong>Curved endings</strong>: Letters like ع (ayn), ح (haa), and ص (saad) have distinctive curved
              endings in their final form.
            </li>
            <li>
              <strong>Vertical extensions</strong>: Letters like ل (laam) and ك (kaaf) often extend vertically in their
              final form.
            </li>
          </ul>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Examples of Words Ending with Different Letters</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-4 rounded">
                <h4 className="font-medium mb-2 text-center">Words Ending with Common Letters</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="letter-form mb-1">كِتَاب</div>
                    <div className="text-sm text-muted-foreground">kitāb (book)</div>
                    <div className="text-xs mt-1">Baa in final form: ـب</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">قَلَم</div>
                    <div className="text-sm text-muted-foreground">qalam (pen)</div>
                    <div className="text-xs mt-1">Meem in final form: ـم</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">عَرَبِي</div>
                    <div className="text-sm text-muted-foreground">ʿarabī (Arabic)</div>
                    <div className="text-xs mt-1">Yaa in final form: ـي</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded">
                <h4 className="font-medium mb-2 text-center">Words Ending with Non-Connecting Letters</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="letter-form mb-1">وَلَد</div>
                    <div className="text-sm text-muted-foreground">walad (boy)</div>
                    <div className="text-xs mt-1">Daal in final form: ـد</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">خُبْز</div>
                    <div className="text-sm text-muted-foreground">khubz (bread)</div>
                    <div className="text-xs mt-1">Zaay in final form: ـز</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">سَمَاء</div>
                    <div className="text-sm text-muted-foreground">samāʾ (sky)</div>
                    <div className="text-xs mt-1">Hamza on Alif in final form: ـاء</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>
            Let&apos;s practice pronouncing some words with letters in their final form. Pay attention to how the final
            form of the letter connects to the preceding letter.
          </p>
        </div>

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/kitab.mp3" arabicText="كِتَاب" />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/qalam.mp3" arabicText="قَلَم" />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/walad.mp3" arabicText="وَلَد" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>
            Now, let&apos;s practice writing some words with letters in their final form. Pay attention to how the final
            letter connects to the preceding letter.
          </p>
        </div>

        <WritingPractice
          letter="كِتَاب"
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
                { x: 100, y: 150 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 100, y: 150 },
                { x: 100, y: 180 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 100, y: 180 },
                { x: 120, y: 180 },
              ],
              width: 3,
            },
          ]}
        />

        <WritingPractice
          letter="قَلَم"
          strokeData={[
            {
              points: [
                { x: 180, y: 130 },
                { x: 180, y: 150 },
                { x: 160, y: 170 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 190, y: 120 },
                { x: 180, y: 120 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 170, y: 120 },
                { x: 160, y: 120 },
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
                { x: 140, y: 150 },
                { x: 140, y: 180 },
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
                { x: 120, y: 180 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 120, y: 150 },
                { x: 100, y: 150 },
                { x: 100, y: 180 },
                { x: 120, y: 180 },
              ],
              width: 3,
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>
              The final form of Arabic letters is used when a letter appears at the end of a word or when it is
              connected only from the right side
            </li>
            <li>Most letters have a distinct final form that connects to the letter that precedes it</li>
            <li>Many final forms have special features like extended tails, curved endings, or vertical extensions</li>
            <li>How to recognize and write the final form of common letters</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn about the isolated form of Arabic letters.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

