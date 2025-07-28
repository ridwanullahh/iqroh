import LessonLayout from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"

export default function MedialFormLesson() {
  return (
    <LessonLayout moduleId={3} lessonId={3}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Medial Form</h2>

          <p>
            In this lesson, we&apos;ll focus on the medial form of Arabic letters. The medial form is used when a letter
            appears in the middle of a word, connected from both sides.
          </p>

          <h3>Understanding the Medial Form</h3>

          <p>
            When a letter is in the medial position, it connects to both the letter before it (to its right) and the
            letter after it (to its left). The medial form often looks quite different from the isolated form, with
            connecting strokes extending on both sides.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Medial Forms of Common Letters</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ب</div>
                <div className="text-xs text-muted-foreground mt-2">Medial</div>
                <div className="letter-form">ـبـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ج</div>
                <div className="text-xs text-muted-foreground mt-2">Medial</div>
                <div className="letter-form">ـجـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">س</div>
                <div className="text-xs text-muted-foreground mt-2">Medial</div>
                <div className="letter-form">ـسـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ع</div>
                <div className="text-xs text-muted-foreground mt-2">Medial</div>
                <div className="letter-form">ـعـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ف</div>
                <div className="text-xs text-muted-foreground mt-2">Medial</div>
                <div className="letter-form">ـفـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ك</div>
                <div className="text-xs text-muted-foreground mt-2">Medial</div>
                <div className="letter-form">ـكـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">م</div>
                <div className="text-xs text-muted-foreground mt-2">Medial</div>
                <div className="letter-form">ـمـ</div>
              </div>

              <div className="bg-muted p-4 rounded text-center">
                <div className="text-xs text-muted-foreground mb-1">Isolated</div>
                <div className="letter-form">ي</div>
                <div className="text-xs text-muted-foreground mt-2">Medial</div>
                <div className="letter-form">ـيـ</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Effect of Non-Connecting Letters</h3>

          <p>
            When a non-connecting letter (ا د ذ ر ز و) appears in the middle of a word, it creates a break in the
            connection. The letter before it will be in its final form, and the letter after it will be in its initial
            form (or isolated form if it&apos;s also a non-connecting letter).
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Examples of Words with Medial Letters</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-4 rounded">
                <h4 className="font-medium mb-2 text-center">Words with Connecting Letters in the Middle</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="letter-form mb-1">كَتَبَ</div>
                    <div className="text-sm text-muted-foreground">kataba (he wrote)</div>
                    <div className="text-xs mt-1">Taa in medial form: ـتـ</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">مُسْلِم</div>
                    <div className="text-sm text-muted-foreground">muslim (Muslim)</div>
                    <div className="text-xs mt-1">Seen and Laam in medial form: ـسـ and ـلـ</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">يَكْتُبُ</div>
                    <div className="text-sm text-muted-foreground">yaktubu (he writes)</div>
                    <div className="text-xs mt-1">Kaaf and Taa in medial form: ـكـ and ـتـ</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded">
                <h4 className="font-medium mb-2 text-center">Words with Non-Connecting Letters in the Middle</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="letter-form mb-1">مَدْرَسَة</div>
                    <div className="text-sm text-muted-foreground">madrasah (school)</div>
                    <div className="text-xs mt-1">Daal breaks the connection: مَـدْ + رَسَة</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">قُرْآن</div>
                    <div className="text-sm text-muted-foreground">qur'ān (Quran)</div>
                    <div className="text-xs mt-1">Raa breaks the connection: قُـرْ + آن</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">مَوْعِد</div>
                    <div className="text-sm text-muted-foreground">mawʿid (appointment)</div>
                    <div className="text-xs mt-1">Waaw breaks the connection: مَـوْ + عِد</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Identifying Medial Forms</h3>

          <p>To identify the medial form of a letter, look for these characteristics:</p>

          <ul>
            <li>It has connecting strokes on both sides</li>
            <li>It appears between two other letters in a word</li>
            <li>The letter before it must be a connecting letter (not one of the six non-connecting letters)</li>
          </ul>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>
            Let&apos;s practice pronouncing some words with letters in their medial form. Pay attention to how the
            medial form of the letter connects to both the preceding and following letters.
          </p>
        </div>

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/kataba.mp3" arabicText="كَتَبَ" />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/muslim.mp3" arabicText="مُسْلِم" />

        <PronunciationPractice
          text="Practice pronouncing this word"
          audioSrc="/audio/madrasah.mp3"
          arabicText="مَدْرَسَة"
        />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>
            Now, let&apos;s practice writing some words with letters in their medial form. Pay attention to how the
            medial letters connect to both the preceding and following letters.
          </p>
        </div>

        <WritingPractice
          letter="مُسْلِم"
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
                { x: 160, y: 130 },
                { x: 160, y: 170 },
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
              ],
              width: 3,
            },
          ]}
        />

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

        <div className="prose dark:prose-invert max-w-none">
          <h3>Summary</h3>

          <p>In this lesson, you learned:</p>

          <ul>
            <li>
              The medial form of Arabic letters is used when a letter appears in the middle of a word, connected from
              both sides
            </li>
            <li>
              Most letters have a distinct medial form that connects to both the letter before it and the letter after
              it
            </li>
            <li>
              Non-connecting letters (ا د ذ ر ز و) create a break in the connection when they appear in the middle of a
              word
            </li>
            <li>How to recognize and write the medial form of common letters</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn about the final form of Arabic letters.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

