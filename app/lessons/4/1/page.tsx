import LessonLayout from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"

export default function LettersWithFathahLesson() {
  return (
    <LessonLayout moduleId={4} lessonId={1}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Letters with Fathah</h2>

          <p>
            In this lesson, we&apos;ll focus on combining Arabic letters with the Fathah vowel sign. As you learned
            earlier, Fathah (َ) is a small diagonal line placed above a letter, giving it a short &apos;a&apos; sound.
          </p>

          <h3>Fathah with Different Letters</h3>

          <p>
            When Fathah is added to a letter, it changes the pronunciation of that letter by adding a short
            &apos;a&apos; sound after it. Let&apos;s see how Fathah combines with different Arabic letters:
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Fathah with Different Letter Groups</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">First Group: ا ب ت ث</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">أَ</div>
                    <div className="text-sm text-muted-foreground mt-1">a</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">بَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ba</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">تَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ta</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">ثَ</div>
                    <div className="text-sm text-muted-foreground mt-1">tha</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Second Group: ج ح خ</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">جَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ja</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">حَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ḥa</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">خَ</div>
                    <div className="text-sm text-muted-foreground mt-1">kha</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Third Group: د ذ ر ز</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">دَ</div>
                    <div className="text-sm text-muted-foreground mt-1">da</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">ذَ</div>
                    <div className="text-sm text-muted-foreground mt-1">dha</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">رَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ra</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">زَ</div>
                    <div className="text-sm text-muted-foreground mt-1">za</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Fourth Group: س ش ص ض</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">سَ</div>
                    <div className="text-sm text-muted-foreground mt-1">sa</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">شَ</div>
                    <div className="text-sm text-muted-foreground mt-1">sha</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">صَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ṣa</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">ضَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ḍa</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Fifth Group: ط ظ ع غ</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">طَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ṭa</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">ظَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ẓa</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">عَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ʿa</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">غَ</div>
                    <div className="text-sm text-muted-foreground mt-1">gha</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Sixth Group: ف ق ك ل</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">فَ</div>
                    <div className="text-sm text-muted-foreground mt-1">fa</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">قَ</div>
                    <div className="text-sm text-muted-foreground mt-1">qa</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">كَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ka</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">لَ</div>
                    <div className="text-sm text-muted-foreground mt-1">la</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Seventh Group: م ن ه و ي</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">مَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ma</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">نَ</div>
                    <div className="text-sm text-muted-foreground mt-1">na</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">هَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ha</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">وَ</div>
                    <div className="text-sm text-muted-foreground mt-1">wa</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="letter-form">يَ</div>
                    <div className="text-sm text-muted-foreground mt-1">ya</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Fathah with Different Letter Forms</h3>

          <p>
            Remember that Arabic letters can take different forms based on their position in a word. The Fathah is
            always placed above the letter, regardless of its form. Let&apos;s see some examples:
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Fathah with Different Letter Forms</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-center">Letter: ب (Baa)</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded text-center">
                    <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                    <div className="letter-form">بَ</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="text-xs text-muted-foreground mb-1">Initial</div>
                    <div className="letter-form">بَـ</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="text-xs text-muted-foreground mb-1">Medial</div>
                    <div className="letter-form">ـبَـ</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="text-xs text-muted-foreground mb-1">Final</div>
                    <div className="letter-form">ـبَ</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2 text-center">Letter: ع (Ayn)</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded text-center">
                    <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                    <div className="letter-form">عَ</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="text-xs text-muted-foreground mb-1">Initial</div>
                    <div className="letter-form">عَـ</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="text-xs text-muted-foreground mb-1">Medial</div>
                    <div className="letter-form">ـعَـ</div>
                  </div>

                  <div className="bg-muted p-3 rounded text-center">
                    <div className="text-xs text-muted-foreground mb-1">Final</div>
                    <div className="letter-form">ـعَ</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Words with Fathah</h3>

          <p>Now, let&apos;s look at some common Arabic words that use the Fathah vowel:</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Common Words with Fathah</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-4 rounded">
                <div className="text-center">
                  <div className="letter-form mb-2">كَتَبَ</div>
                  <div className="text-sm text-muted-foreground">kataba (he wrote)</div>
                  <div className="text-xs mt-2">All three letters have Fathah: كَ + تَ + بَ</div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded">
                <div className="text-center">
                  <div className="letter-form mb-2">قَلَم</div>
                  <div className="text-sm text-muted-foreground">qalam (pen)</div>
                  <div className="text-xs mt-2">First two letters have Fathah: قَ + لَ + م</div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded">
                <div className="text-center">
                  <div className="letter-form mb-2">فَتَحَ</div>
                  <div className="text-sm text-muted-foreground">fataḥa (he opened)</div>
                  <div className="text-xs mt-2">All three letters have Fathah: فَ + تَ + حَ</div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded">
                <div className="text-center">
                  <div className="letter-form mb-2">جَلَسَ</div>
                  <div className="text-sm text-muted-foreground">jalasa (he sat)</div>
                  <div className="text-xs mt-2">All three letters have Fathah: جَ + لَ + سَ</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>Let&apos;s practice pronouncing letters with Fathah and words that use the Fathah vowel:</p>
        </div>

        <PronunciationPractice
          text="Practice pronouncing these letters with Fathah"
          audioSrc="/audio/letters-with-fathah.mp3"
          arabicText="بَ تَ ثَ جَ حَ خَ"
        />

        <PronunciationPractice
          text="Practice pronouncing these letters with Fathah"
          audioSrc="/audio/more-letters-with-fathah.mp3"
          arabicText="سَ شَ صَ ضَ طَ ظَ"
        />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/kataba.mp3" arabicText="كَتَبَ" />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/qalam.mp3" arabicText="قَلَم" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>Now, let&apos;s practice writing some letters with Fathah and words that use the Fathah vowel:</p>
        </div>

        <WritingPractice
          letter="بَ"
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
            {
              points: [
                { x: 150, y: 80 },
                { x: 170, y: 90 },
              ],
              width: 3,
            },
          ]}
        />

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
                { x: 200, y: 120 },
                { x: 220, y: 130 },
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
                { x: 140, y: 120 },
                { x: 160, y: 130 },
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
                { x: 120, y: 120 },
                { x: 140, y: 130 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 120, y: 180 },
                { x: 100, y: 180 },
              ],
              width: 3,
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>How to combine the Fathah vowel sign with all 28 Arabic letters</li>
            <li>That Fathah is placed above the letter and gives it a short &apos;a&apos; sound</li>
            <li>How Fathah appears with different letter forms (isolated, initial, medial, and final)</li>
            <li>Common Arabic words that use the Fathah vowel</li>
            <li>How to pronounce and write letters with Fathah and words that use the Fathah vowel</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn about combining Arabic letters with the Kasrah vowel sign.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

