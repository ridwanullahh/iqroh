import { notFound } from "next/navigation"
import LessonLayout from "@/components/lesson-layout"
import { curriculumData } from "@/lib/curriculum-data"
import HarakatDisplay from "@/components/harakat-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"
import Assessment from "@/components/assessment"

interface LessonPageProps {
  params: {
    moduleId: string
    lessonId: string
  }
}

export default function LessonPage({ params }: LessonPageProps) {
  const moduleId = Number.parseInt(params.moduleId)
  const lessonId = Number.parseInt(params.lessonId)

  // Find the module and lesson
  let currentModule: any = null
  let currentLesson: any = null

  for (const phase of curriculumData.phases) {
    for (let i = 0; i < phase.modules.length; i++) {
      const moduleIndex = curriculumData.phases.indexOf(phase) * phase.modules.length + i + 1

      if (moduleIndex === moduleId) {
        currentModule = phase.modules[i]

        if (lessonId <= currentModule.lessons.length) {
          currentLesson = currentModule.lessons[lessonId - 1]
        }

        break
      }
    }

    if (currentModule) break
  }

  if (!currentModule || !currentLesson) {
    return notFound()
  }

  // Render the appropriate lesson content based on module and lesson ID
  if (moduleId === 1) {
    // Harakat module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IntroToHarakatLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <FathahLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <KasrahLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <DammahLesson />
          </LessonLayout>
        )
      case 5:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <HarakatPracticeLesson />
          </LessonLayout>
        )
      default:
        // For other lessons, show a placeholder
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else {
    // For other modules, show a placeholder
    return (
      <LessonLayout moduleId={moduleId} lessonId={lessonId}>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Lesson Content Coming Soon</h2>
          <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
        </div>
      </LessonLayout>
    )
  }
}

// Lesson content components
function IntroToHarakatLesson() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h2>Introduction to Harakat</h2>

      <p>
        Welcome to your first lesson in learning to read the Qur&apos;an! We&apos;ll start with the fundamental building
        blocks of Arabic reading: the <strong>Harakat</strong> (حَرَكَات).
      </p>

      <p>
        Harakat are vowel signs that are placed above or below Arabic letters to indicate how they should be pronounced.
        Without these signs, many Arabic words would be difficult to distinguish from one another.
      </p>

      <h3>The Three Basic Harakat</h3>

      <p>There are three basic harakat that we&apos;ll learn in the next few lessons:</p>

      <ol>
        <li>
          <strong>Fathah (فَتْحَة)</strong> - A small diagonal line placed above a letter, pronounced as a short
          &apos;a&apos; sound.
        </li>
        <li>
          <strong>Kasrah (كَسْرَة)</strong> - A small diagonal line placed below a letter, pronounced as a short
          &apos;i&apos; sound.
        </li>
        <li>
          <strong>Dammah (ضَمَّة)</strong> - A small curl-like symbol placed above a letter, pronounced as a short
          &apos;u&apos; sound.
        </li>
      </ol>

      <div className="bg-muted p-4 rounded-md my-6">
        <h4 className="font-medium mb-2">Key Points</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Harakat are essential for correct pronunciation</li>
          <li>They indicate the short vowel sounds in Arabic</li>
          <li>They appear as small marks above or below letters</li>
          <li>The Qur&apos;an is fully marked with harakat to ensure proper recitation</li>
        </ul>
      </div>

      <p>
        In the next lesson, we&apos;ll learn about the first harakat: <strong>Fathah</strong>. You&apos;ll learn how it
        affects pronunciation and practice recognizing and using it.
      </p>

      <p>
        Remember, consistent practice is key to mastering Qur&apos;anic reading. Spend time reviewing each lesson before
        moving on to the next.
      </p>
    </div>
  )
}

function FathahLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Fathah (فَتْحَة)</h2>

        <p>
          The Fathah is the first harakat we&apos;ll learn. It is represented by a small diagonal line placed
          <strong> above</strong> a letter, and it gives the letter a short &apos;a&apos; sound, similar to the
          &apos;a&apos; in &apos;cat&apos;.
        </p>

        <p>
          In Arabic, the Fathah looks like this: <span className="arabic-large">َ</span>
        </p>

        <p>
          When a Fathah is placed above a letter, it changes how that letter is pronounced. Let&apos;s see some
          examples:
        </p>
      </div>

      <HarakatDisplay
        symbol="بَ"
        name="Baa with Fathah"
        audioSrc="/audio/ba-fathah.mp3"
        example="بَ"
        exampleAudioSrc="/audio/ba-fathah.mp3"
        description="When the letter Baa (ب) has a Fathah above it, it is pronounced as 'ba' (like the 'ba' in 'bat')."
      />

      <HarakatDisplay
        symbol="سَ"
        name="Seen with Fathah"
        audioSrc="/audio/sa-fathah.mp3"
        example="سَ"
        exampleAudioSrc="/audio/sa-fathah.mp3"
        description="When the letter Seen (س) has a Fathah above it, it is pronounced as 'sa' (like the 'sa' in 'sat')."
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Practice Pronouncing Fathah</h3>

        <p>Now, let&apos;s practice pronouncing some letters with Fathah. Listen to the audio and repeat after it.</p>
      </div>

      <PronunciationPractice
        text="Practice pronouncing the letter Alif with Fathah"
        audioSrc="/audio/alif-fathah.mp3"
        arabicText="أَ"
      />

      <PronunciationPractice
        text="Practice pronouncing the letter Meem with Fathah"
        audioSrc="/audio/meem-fathah.mp3"
        arabicText="مَ"
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Summary</h3>

        <p>In this lesson, you learned:</p>

        <ul>
          <li>The Fathah is represented by a small diagonal line above a letter</li>
          <li>It gives the letter a short 'a' sound</li>
          <li>You practiced pronouncing letters with Fathah</li>
        </ul>

        <p>
          In the next lesson, we&apos;ll learn about the second harakat: <strong>Kasrah</strong>.
        </p>
      </div>
    </div>
  )
}

function KasrahLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Kasrah (كَسْرَة)</h2>

        <p>
          The Kasrah is the second harakat we&apos;ll learn. It is represented by a small diagonal line placed
          <strong> below</strong> a letter, and it gives the letter a short &apos;i&apos; sound, similar to the
          &apos;i&apos; in &apos;sit&apos;.
        </p>

        <p>
          In Arabic, the Kasrah looks like this: <span className="arabic-large">ِ</span>
        </p>

        <p>
          When a Kasrah is placed below a letter, it changes how that letter is pronounced. Let&apos;s see some
          examples:
        </p>
      </div>

      <HarakatDisplay
        symbol="بِ"
        name="Baa with Kasrah"
        audioSrc="/audio/ba-kasrah.mp3"
        example="بِ"
        exampleAudioSrc="/audio/ba-kasrah.mp3"
        description="When the letter Baa (ب) has a Kasrah below it, it is pronounced as 'bi' (like the 'bi' in 'bit')."
      />

      <HarakatDisplay
        symbol="سِ"
        name="Seen with Kasrah"
        audioSrc="/audio/sa-kasrah.mp3"
        example="سِ"
        exampleAudioSrc="/audio/sa-kasrah.mp3"
        description="When the letter Seen (س) has a Kasrah below it, it is pronounced as 'si' (like the 'si' in 'sit')."
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Practice Pronouncing Kasrah</h3>

        <p>Now, let&apos;s practice pronouncing some letters with Kasrah. Listen to the audio and repeat after it.</p>
      </div>

      <PronunciationPractice
        text="Practice pronouncing the letter Laam with Kasrah"
        audioSrc="/audio/lam-kasrah.mp3"
        arabicText="لِ"
      />

      <PronunciationPractice
        text="Practice pronouncing the letter Raa with Kasrah"
        audioSrc="/audio/ra-kasrah.mp3"
        arabicText="رِ"
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Writing Practice</h3>

        <p>Let&apos;s practice writing a letter with Kasrah. Follow the guide to write the letter correctly.</p>
      </div>

      <WritingPractice
        letter="بِ"
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
              { x: 150, y: 230 },
              { x: 130, y: 250 },
            ],
            width: 3,
          },
        ]}
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Summary</h3>

        <p>In this lesson, you learned:</p>

        <ul>
          <li>The Kasrah is represented by a small diagonal line below a letter</li>
          <li>It gives the letter a short 'i' sound</li>
          <li>You practiced pronouncing and writing letters with Kasrah</li>
        </ul>

        <p>
          In the next lesson, we&apos;ll learn about the third harakat: <strong>Dammah</strong>.
        </p>
      </div>
    </div>
  )
}

function DammahLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Dammah (ضَمَّة)</h2>

        <p>
          The Dammah is the third harakat we&apos;ll learn. It is represented by a small curl-like symbol placed
          <strong> above</strong> a letter, and it gives the letter a short &apos;u&apos; sound, similar to the
          &apos;u&apos; in &apos;put&apos;.
        </p>

        <p>
          In Arabic, the Dammah looks like this: <span className="arabic-large">ُ</span>
        </p>

        <p>
          When a Dammah is placed above a letter, it changes how that letter is pronounced. Let&apos;s see some
          examples:
        </p>
      </div>

      <HarakatDisplay
        symbol="بُ"
        name="Baa with Dammah"
        audioSrc="/audio/ba-dammah.mp3"
        example="بُ"
        exampleAudioSrc="/audio/ba-dammah.mp3"
        description="When the letter Baa (ب) has a Dammah above it, it is pronounced as 'bu' (like the 'bu' in 'put')."
      />

      <HarakatDisplay
        symbol="سُ"
        name="Seen with Dammah"
        audioSrc="/audio/sa-dammah.mp3"
        example="سُ"
        exampleAudioSrc="/audio/sa-dammah.mp3"
        description="When the letter Seen (س) has a Dammah above it, it is pronounced as 'su' (like the 'su' in 'super')."
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Practice Pronouncing Dammah</h3>

        <p>Now, let&apos;s practice pronouncing some letters with Dammah. Listen to the audio and repeat after it.</p>
      </div>

      <PronunciationPractice
        text="Practice pronouncing the letter Meem with Dammah"
        audioSrc="/audio/meem-dammah.mp3"
        arabicText="مُ"
      />

      <PronunciationPractice
        text="Practice pronouncing the letter Kaaf with Dammah"
        audioSrc="/audio/kaf-dammah.mp3"
        arabicText="كُ"
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Writing Practice</h3>

        <p>Let&apos;s practice writing a letter with Dammah. Follow the guide to write the letter correctly.</p>
      </div>

      <WritingPractice
        letter="مُ"
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
              { x: 150, y: 200 },
              { x: 200, y: 200 },
              { x: 200, y: 150 },
              { x: 150, y: 150 },
            ],
            width: 3,
          },
          {
            points: [
              { x: 150, y: 80 },
              { x: 170, y: 70 },
              { x: 160, y: 60 },
            ],
            width: 3,
          },
        ]}
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Summary</h3>

        <p>In this lesson, you learned:</p>

        <ul>
          <li>The Dammah is represented by a small curl-like symbol above a letter</li>
          <li>It gives the letter a short 'u' sound</li>
          <li>You practiced pronouncing and writing letters with Dammah</li>
        </ul>

        <p>In the next lesson, we&apos;ll practice all three harakat together to reinforce your learning.</p>
      </div>
    </div>
  )
}

function HarakatPracticeLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Practice with Harakat</h2>

        <p>
          Now that you&apos;ve learned all three basic harakat (Fathah, Kasrah, and Dammah), let&apos;s practice them
          together to reinforce your understanding and improve your recognition and pronunciation skills.
        </p>

        <h3>Review of Harakat</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-muted p-4 rounded-md text-center">
            <div className="arabic-large">َ</div>
            <div className="font-medium">Fathah</div>
            <div className="text-sm text-muted-foreground">Short 'a' sound</div>
          </div>

          <div className="bg-muted p-4 rounded-md text-center">
            <div className="arabic-large">ِ</div>
            <div className="font-medium">Kasrah</div>
            <div className="text-sm text-muted-foreground">Short 'i' sound</div>
          </div>

          <div className="bg-muted p-4 rounded-md text-center">
            <div className="arabic-large">ُ</div>
            <div className="font-medium">Dammah</div>
            <div className="text-sm text-muted-foreground">Short 'u' sound</div>
          </div>
        </div>

        <p>Let&apos;s practice identifying and pronouncing these harakat with different letters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded-md text-center">
          <div className="arabic-large">دَ</div>
          <div className="font-medium">Daal with Fathah</div>
          <div className="text-sm text-muted-foreground">Pronounced as 'da'</div>
        </div>

        <div className="bg-muted p-4 rounded-md text-center">
          <div className="arabic-large">دِ</div>
          <div className="font-medium">Daal with Kasrah</div>
          <div className="text-sm text-muted-foreground">Pronounced as 'di'</div>
        </div>

        <div className="bg-muted p-4 rounded-md text-center">
          <div className="arabic-large">دُ</div>
          <div className="font-medium">Daal with Dammah</div>
          <div className="text-sm text-muted-foreground">Pronounced as 'du'</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Pronunciation Practice</h3>

        <p>Practice pronouncing these combinations of letters and harakat.</p>
      </div>

      <PronunciationPractice
        text="Practice pronouncing the letter Noon with all three harakat"
        audioSrc="/audio/noon-harakat.mp3"
        arabicText="نَ نِ نُ"
      />

      <PronunciationPractice
        text="Practice pronouncing the letter Haa with all three harakat"
        audioSrc="/audio/ha-harakat.mp3"
        arabicText="هَ هِ هُ"
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Assessment</h3>

        <p>Let&apos;s test your understanding of the harakat with a short assessment.</p>
      </div>

      <Assessment
        title="Harakat Assessment"
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "Which harakat gives a short 'a' sound?",
            options: ["Fathah", "Kasrah", "Dammah", "Sukoon"],
            correctAnswer: "0",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "Which harakat is placed below the letter?",
            options: ["Fathah", "Kasrah", "Dammah", "All of them"],
            correctAnswer: "1",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "What is the correct pronunciation of بُ?",
            options: ["ba", "bi", "bu", "b"],
            correctAnswer: "2",
          },
          {
            id: "q4",
            type: "multiple-choice",
            prompt: "Which harakat is represented by a small curl-like symbol?",
            options: ["Fathah", "Kasrah", "Dammah", "None of them"],
            correctAnswer: "2",
          },
          {
            id: "q5",
            type: "multiple-choice",
            prompt: "What is the correct pronunciation of سِ?",
            options: ["sa", "si", "su", "s"],
            correctAnswer: "1",
          },
        ]}
        onComplete={(score, total) => {
          console.log(`Score: ${score}/${total}`)
          // In a real implementation, this would update the user's progress
        }}
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Summary</h3>

        <p>In this lesson, you:</p>

        <ul>
          <li>Reviewed all three basic harakat: Fathah, Kasrah, and Dammah</li>
          <li>Practiced recognizing and pronouncing letters with different harakat</li>
          <li>Tested your understanding with an assessment</li>
        </ul>

        <p>
          Congratulations on completing the first module on Harakat! In the next module, we&apos;ll learn about Arabic
          letters (Huruuful-Hijah) and their pronunciation.
        </p>
      </div>
    </div>
  )
}

