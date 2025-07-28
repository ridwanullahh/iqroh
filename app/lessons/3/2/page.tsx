import LessonLayout from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"

export default function InitialFormLesson() {
  return (
    <LessonLayout moduleId={3} lessonId={2}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Initial Form</h2>

          <p>
            In this lesson, we&apos;ll focus on the initial form of Arabic letters. The initial form is used when a
            letter appears at the beginning of a word or when it is connected only from the left side.
          </p>

          <h3>Understanding the Initial Form</h3>

          <p>
            When a letter is in the initial position, it connects to the letter that follows it (to its left). The
            initial form often looks different from the isolated form, with a small connecting stroke extending to the
            left.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Initial Forms of Common Letters</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ب</div>
                <div className="text-xs text-muted-foreground mt-2">Initial</div>
                <div className="letter-form">بـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ج</div>
                <div className="text-xs text-muted-foreground mt-2">Initial</div>
                <div className="letter-form">جـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">س</div>
                <div className="text-xs text-muted-foreground mt-2">Initial</div>
                <div className="letter-form">سـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ع</div>
                <div className="text-xs text-muted-foreground mt-2">Initial</div>
                <div className="letter-form">عـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ف</div>
                <div className="text-xs text-muted-foreground mt-2">Initial</div>
                <div className="letter-form">فـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ك</div>
                <div className="text-xs text-muted-foreground mt-2">Initial</div>
                <div className="letter-form">كـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">م</div>
                <div className="text-xs text-muted-foreground mt-2">Initial</div>
                <div className="letter-form">مـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ي</div>
                <div className="text-xs text-muted-foreground mt-2">Initial</div>
                <div className="letter-form">يـ</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Non-Connecting Letters</h3>

          <p>
            Remember that the six non-connecting letters (ا د ذ ر ز و) do not have an initial form because they
            don&apos;t connect to the letter after them. When these letters appear at the beginning of a word, they use
            their isolated form.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Examples of Words Beginning with Different Letters</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-4 rounded">
                <h4 className="font-medium mb-2 text-center">Words Beginning with Connecting Letters</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="letter-form mb-1">كَتَبَ</div>
                    <div className="text-sm text-muted-foreground">kataba (he wrote)</div>
                    <div className="text-xs mt-1">Kaaf in initial form: كـ</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">بَيْت</div>
                    <div className="text-sm text-muted-foreground">bayt (house)</div>
                    <div className="text-xs mt-1">Baa in initial form: بـ</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">مُسْلِم</div>
                    <div className="text-sm text-muted-foreground">muslim (Muslim)</div>
                    <div className="text-xs mt-1">Meem in initial form: مـ</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded">
                <h4 className="font-medium mb-2 text-center">Words Beginning with Non-Connecting Letters</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="letter-form mb-1">أَكَلَ</div>
                    <div className="text-sm text-muted-foreground">akala (he ate)</div>
                    <div className="text-xs mt-1">Alif in isolated form: ا</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">دَخَلَ</div>
                    <div className="text-sm text-muted-foreground">dakhala (he entered)</div>
                    <div className="text-xs mt-1">Daal in isolated form: د</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">وَلَد</div>
                    <div className="text-sm text-muted-foreground">walad (boy)</div>
                    <div className="text-xs mt-1">Waaw in isolated form: و</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>
            Let&apos;s practice pronouncing some words that begin with different letters. Pay attention to how the
            initial form of the letter connects to the following letter.
          </p>
        </div>

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/kitab.mp3" arabicText="كِتَاب" />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/muslim.mp3" arabicText="مُسْلِم" />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/qalam.mp3" arabicText="قَلَم" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>
            Now, let&apos;s practice writing some words that begin with different letters. Pay attention to the initial
            form of the first letter.
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
                { x: 100, y: 130 },
                { x: 100, y: 170 },
              ],
              width: 3,
            },
          ]}
        />

        <WritingPractice
          letter="بَيْت"
          strokeData={[
            {
              points: [
                { x: 200, y: 150 },
                { x: 180, y: 150 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 200, y: 170 },
                { x: 200, y: 180 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 180, y: 150 },
                { x: 160, y: 150 },
                { x: 160, y: 180 },
                { x: 180, y: 200 },
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
          ]}
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>
              The initial form of Arabic letters is used when a letter appears at the beginning of a word or when it is
              connected only from the left side
            </li>
            <li>Most letters have a distinct initial form that connects to the letter that follows it</li>
            <li>
              Non-connecting letters (ا د ذ ر ز و) do not have an initial form and use their isolated form at the
              beginning of a word
            </li>
            <li>How to recognize and write the initial form of common letters</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn about the medial form of Arabic letters.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

