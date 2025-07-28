import LessonLayout from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"

export default function ConnectionRulesLesson() {
  return (
    <LessonLayout moduleId={3} lessonId={6}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Connection Rules</h2>

          <p>
            In this lesson, we&apos;ll learn the rules for connecting Arabic letters to form words. Understanding these
            rules is essential for reading and writing Arabic correctly.
          </p>

          <h3>Basic Connection Rules</h3>

          <p>
            Arabic is written from right to left, and most letters connect to each other. Here are the basic rules for
            connecting letters:
          </p>

          <ol>
            <li>Most Arabic letters connect to both the letter before them and the letter after them.</li>
            <li>
              Six letters (ا د ذ ر ز و) only connect to the letter before them and never connect to the letter after
              them.
            </li>
            <li>
              The first letter of a word will be in its initial form if it can connect from the left, or in its isolated
              form if it&apos;s a non-connecting letter.
            </li>
            <li>The last letter of a word will be in its final form.</li>
            <li>
              Letters in the middle of a word will be in their medial form if they connect from both sides, or in their
              final form if they come before a non-connecting letter.
            </li>
          </ol>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">The Six Non-Connecting Letters</h3>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ا</div>
                <div className="text-xs text-muted-foreground mt-1">Alif</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">د</div>
                <div className="text-xs text-muted-foreground mt-1">Daal</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ذ</div>
                <div className="text-xs text-muted-foreground mt-1">Dhaal</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ر</div>
                <div className="text-xs text-muted-foreground mt-1">Raa</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ز</div>
                <div className="text-xs text-muted-foreground mt-1">Zaay</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">و</div>
                <div className="text-xs text-muted-foreground mt-1">Waaw</div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4 text-center">
              Remember: These six letters only connect to the letter before them (to their right) and never connect to
              the letter after them (to their left).
            </p>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Connection Patterns</h3>

          <p>Let&apos;s look at some common connection patterns in Arabic words:</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Common Connection Patterns</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Pattern 1: All Connecting Letters</h4>
                <div className="bg-muted p-4 rounded">
                  <div className="text-center">
                    <div className="letter-form mb-2">كَتَبَ</div>
                    <div className="text-sm text-muted-foreground">kataba (he wrote)</div>
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
              </div>

              <div>
                <h4 className="font-medium mb-2">Pattern 2: Non-Connecting Letter at the Beginning</h4>
                <div className="bg-muted p-4 rounded">
                  <div className="text-center">
                    <div className="letter-form mb-2">دَخَلَ</div>
                    <div className="text-sm text-muted-foreground">dakhala (he entered)</div>
                    <div className="flex justify-center gap-8 mt-4">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Final</div>
                        <div className="letter-form">ـلَ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Medial</div>
                        <div className="letter-form">ـخَـ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Isolated</div>
                        <div className="letter-form">دَ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Pattern 3: Non-Connecting Letter in the Middle</h4>
                <div className="bg-muted p-4 rounded">
                  <div className="text-center">
                    <div className="letter-form mb-2">مَدْرَسَة</div>
                    <div className="text-sm text-muted-foreground">madrasah (school)</div>
                    <div className="flex justify-center gap-6 mt-4">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Final</div>
                        <div className="letter-form">ـة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Medial</div>
                        <div className="letter-form">ـسَـ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Isolated</div>
                        <div className="letter-form">رَ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Final</div>
                        <div className="letter-form">ـدْ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Initial</div>
                        <div className="letter-form">مَـ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Pattern 4: Multiple Non-Connecting Letters</h4>
                <div className="bg-muted p-4 rounded">
                  <div className="text-center">
                    <div className="letter-form mb-2">أَوْرَاق</div>
                    <div className="text-sm text-muted-foreground">awrāq (papers)</div>
                    <div className="flex justify-center gap-6 mt-4">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Final</div>
                        <div className="letter-form">ـق</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Isolated</div>
                        <div className="letter-form">ا</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Isolated</div>
                        <div className="letter-form">رَ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Isolated</div>
                        <div className="letter-form">وْ</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Isolated</div>
                        <div className="letter-form">أَ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Practical Tips for Connecting Letters</h3>

          <p>Here are some practical tips to help you connect Arabic letters correctly:</p>

          <ul>
            <li>Always write from right to left.</li>
            <li>Memorize the six non-connecting letters (ا د ذ ر ز و) as they create breaks in the connection.</li>
            <li>
              Practice writing words with different connection patterns to become familiar with how letters change form.
            </li>
            <li>
              When reading, look for the non-connecting letters as they help you identify word boundaries and letter
              groups.
            </li>
            <li>Remember that the shape of a letter can change significantly based on its position in a word.</li>
          </ul>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>
            Let&apos;s practice pronouncing some words with different connection patterns. Pay attention to how the
            letters connect to each other.
          </p>
        </div>

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/kitab.mp3" arabicText="كِتَاب" />

        <PronunciationPractice
          text="Practice pronouncing this word"
          audioSrc="/audio/madrasah.mp3"
          arabicText="مَدْرَسَة"
        />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/awraq.mp3" arabicText="أَوْرَاق" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>
            Now, let&apos;s practice writing some words with different connection patterns. Pay attention to how the
            letters connect to each other.
          </p>
        </div>

        <WritingPractice
          letter="مَدْرَسَة"
          strokeData={[
            {
              points: [
                { x: 200, y: 150 },
                { x: 200, y: 180 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 200, y: 150 },
                { x: 180, y: 150 },
                { x: 180, y: 180 },
                { x: 200, y: 180 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 180, y: 150 },
                { x: 160, y: 150 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 160, y: 150 },
                { x: 160, y: 180 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 140, y: 150 },
                { x: 140, y: 180 },
                { x: 160, y: 200 },
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
                { x: 120, y: 130 },
                { x: 120, y: 170 },
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
          ]}
        />

        <WritingPractice
          letter="أَوْرَاق"
          strokeData={[
            {
              points: [
                { x: 200, y: 150 },
                { x: 200, y: 180 },
                { x: 180, y: 200 },
                { x: 160, y: 180 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 190, y: 140 },
                { x: 180, y: 140 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 170, y: 140 },
                { x: 160, y: 140 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 150, y: 150 },
                { x: 150, y: 180 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 130, y: 150 },
                { x: 130, y: 180 },
                { x: 150, y: 200 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 110, y: 150 },
                { x: 110, y: 200 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 90, y: 150 },
                { x: 90, y: 200 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 90, y: 120 },
                { x: 90, y: 130 },
              ],
              width: 3,
            },
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>The basic rules for connecting Arabic letters to form words</li>
            <li>The six non-connecting letters (ا د ذ ر ز و) that only connect from the right side</li>
            <li>Common connection patterns in Arabic words</li>
            <li>Practical tips for connecting letters correctly</li>
            <li>How to recognize and write words with different connection patterns</li>
          </ul>

          <p>
            Congratulations! You have completed the Huruuf Forms module. You now understand how Arabic letters change
            form based on their position in a word and how they connect to each other. This knowledge is essential for
            reading and writing Arabic correctly.
          </p>

          <p>
            In the next module, we&apos;ll learn about applying vowels to letters and pronouncing letter-vowel
            combinations.
          </p>
        </div>
      </div>
    </LessonLayout>
  )
}

