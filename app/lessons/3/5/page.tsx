import LessonLayout from "@/components/lesson-layout"
import { Card, CardContent } from "@/components/ui/card"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"

export default function IsolatedFormLesson() {
  return (
    <LessonLayout moduleId={3} lessonId={5}>
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h2>Isolated Form</h2>

          <p>
            In this lesson, we&apos;ll focus on the isolated form of Arabic letters. The isolated form is used when a
            letter stands alone, not connected to any other letter.
          </p>

          <h3>Understanding the Isolated Form</h3>

          <p>
            The isolated form is the basic form of an Arabic letter that you see when it&apos;s written by itself. This
            is the form you learned when you first studied the Arabic alphabet. In actual writing, the isolated form
            appears in these situations:
          </p>

          <ul>
            <li>When writing a single letter by itself</li>
            <li>When a non-connecting letter (ا د ذ ر ز و) appears at the beginning of a word</li>
            <li>When a letter appears after a non-connecting letter in a word</li>
          </ul>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Isolated Forms of All Arabic Letters</h3>

            <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ا</div>
                <div className="text-xs text-muted-foreground mt-1">Alif</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ب</div>
                <div className="text-xs text-muted-foreground mt-1">Baa</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ت</div>
                <div className="text-xs text-muted-foreground mt-1">Taa</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ث</div>
                <div className="text-xs text-muted-foreground mt-1">Thaa</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ج</div>
                <div className="text-xs text-muted-foreground mt-1">Jeem</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ح</div>
                <div className="text-xs text-muted-foreground mt-1">Haa</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">خ</div>
                <div className="text-xs text-muted-foreground mt-1">Khaa</div>
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
                <div className="letter-form">س</div>
                <div className="text-xs text-muted-foreground mt-1">Seen</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ش</div>
                <div className="text-xs text-muted-foreground mt-1">Sheen</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ص</div>
                <div className="text-xs text-muted-foreground mt-1">Saad</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ض</div>
                <div className="text-xs text-muted-foreground mt-1">Daad</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ط</div>
                <div className="text-xs text-muted-foreground mt-1">Taa</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ظ</div>
                <div className="text-xs text-muted-foreground mt-1">Zaa</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ع</div>
                <div className="text-xs text-muted-foreground mt-1">Ayn</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">غ</div>
                <div className="text-xs text-muted-foreground mt-1">Ghayn</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ف</div>
                <div className="text-xs text-muted-foreground mt-1">Faa</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ق</div>
                <div className="text-xs text-muted-foreground mt-1">Qaaf</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ك</div>
                <div className="text-xs text-muted-foreground mt-1">Kaaf</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ل</div>
                <div className="text-xs text-muted-foreground mt-1">Laam</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">م</div>
                <div className="text-xs text-muted-foreground mt-1">Meem</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ن</div>
                <div className="text-xs text-muted-foreground mt-1">Noon</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ه</div>
                <div className="text-xs text-muted-foreground mt-1">Haa</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">و</div>
                <div className="text-xs text-muted-foreground mt-1">Waaw</div>
              </div>

              <div className="bg-muted p-3 rounded text-center">
                <div className="letter-form">ي</div>
                <div className="text-xs text-muted-foreground mt-1">Yaa</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>When to Use the Isolated Form</h3>

          <p>Let&apos;s look at some examples of when the isolated form is used in Arabic writing:</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Examples of Isolated Forms in Words</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-4 rounded">
                <h4 className="font-medium mb-2 text-center">Non-Connecting Letters at the Beginning</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="letter-form mb-1">أَحَد</div>
                    <div className="text-sm text-muted-foreground">aḥad (one)</div>
                    <div className="text-xs mt-1">Alif in isolated form: ا</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">دَرْس</div>
                    <div className="text-sm text-muted-foreground">dars (lesson)</div>
                    <div className="text-xs mt-1">Daal in isolated form: د</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">وَلَد</div>
                    <div className="text-sm text-muted-foreground">walad (boy)</div>
                    <div className="text-xs mt-1">Waaw in isolated form: و</div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded">
                <h4 className="font-medium mb-2 text-center">Letters After Non-Connecting Letters</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="letter-form mb-1">مَدْرَسَة</div>
                    <div className="text-sm text-muted-foreground">madrasah (school)</div>
                    <div className="text-xs mt-1">Raa in isolated form after Daal: د ر</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">قُرْآن</div>
                    <div className="text-sm text-muted-foreground">qur'ān (Quran)</div>
                    <div className="text-xs mt-1">Alif in isolated form after Raa: ر ا</div>
                  </div>

                  <div className="text-center">
                    <div className="letter-form mb-1">مَوْعِد</div>
                    <div className="text-sm text-muted-foreground">mawʿid (appointment)</div>
                    <div className="text-xs mt-1">Ayn in isolated form after Waaw: و ع</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose dark:prose-invert max-w-none">
          <h3>Pronunciation Practice</h3>

          <p>
            Let&apos;s practice pronouncing some words with letters in their isolated form. Pay attention to how the
            isolated form appears in these words.
          </p>
        </div>

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/ahad.mp3" arabicText="أَحَد" />

        <PronunciationPractice
          text="Practice pronouncing this word"
          audioSrc="/audio/madrasah.mp3"
          arabicText="مَدْرَسَة"
        />

        <PronunciationPractice text="Practice pronouncing this word" audioSrc="/audio/quran.mp3" arabicText="قُرْآن" />

        <div className="prose dark:prose-invert max-w-none">
          <h3>Writing Practice</h3>

          <p>
            Now, let&apos;s practice writing some words with letters in their isolated form. Pay attention to how the
            isolated form appears in these words.
          </p>
        </div>

        <WritingPractice
          letter="أَحَد"
          strokeData={[
            {
              points: [
                { x: 180, y: 150 },
                { x: 180, y: 200 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 180, y: 120 },
                { x: 180, y: 130 },
              ],
              width: 3,
            },
            {
              points: [
                { x: 160, y: 150 },
                { x: 140, y: 150 },
                { x: 140, y: 180 },
                { x: 160, y: 180 },
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
                { x: 120, y: 130 },
                { x: 120, y: 170 },
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
              The isolated form of Arabic letters is used when a letter stands alone, not connected to any other letter
            </li>
            <li>
              The isolated form appears in three situations:
              <ul>
                <li>When writing a single letter by itself</li>
                <li>When a non-connecting letter appears at the beginning of a word</li>
                <li>When a letter appears after a non-connecting letter in a word</li>
              </ul>
            </li>
            <li>How to recognize and write the isolated form of all Arabic letters</li>
          </ul>

          <p>In the next lesson, we&apos;ll learn about the connection rules for Arabic letters.</p>
        </div>
      </div>
    </LessonLayout>
  )
}

