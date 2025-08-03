import { notFound } from "next/navigation"
import LessonLayout from "@/components/lesson-layout"
import { curriculumData } from "@/lib/curriculum-data"
import HarakatDisplay from "@/components/harakat-display"
import PronunciationPractice from "@/components/pronunciation-practice"
import WritingPractice from "@/components/writing-practice"
import Assessment from "@/components/assessment"
import ModernTTS from "@/components/modern-tts"

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
  } else if (moduleId === 2) {
    // Arabic Letters module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IntroToArabicLettersLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <FirstLetterGroupLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SecondLetterGroupLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <ThirdLetterGroupLesson />
          </LessonLayout>
        )
      case 5:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <FourthLetterGroupLesson />
          </LessonLayout>
        )
      case 6:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <FifthLetterGroupLesson />
          </LessonLayout>
        )
      case 7:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SixthLetterGroupLesson />
          </LessonLayout>
        )
      case 8:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SeventhLetterGroupLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 3) {
    // Letter Forms module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <LetterPositionsOverviewLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <InitialFormLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <MedialFormLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <FinalFormLesson />
          </LessonLayout>
        )
      case 5:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IsolatedFormLesson />
          </LessonLayout>
        )
      case 6:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <ConnectionRulesLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 4) {
    // Vowels Application module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <LettersWithFathahLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <LettersWithKasrahLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <LettersWithDammahLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <TanweenLesson />
          </LessonLayout>
        )
      case 5:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <MixedVowelPracticeLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 5) {
    // Mudood (Elongations) module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IntroToMudoodLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <NaturalElongationLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <ConnectedElongationLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SeparatedElongationLesson />
          </LessonLayout>
        )
      case 5:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <NecessaryElongationLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 6) {
    // Sukuun and Non-Vowels module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IntroToSukuunLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SukuunOnLettersLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <ConsonantClustersLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SpecialSukuunCasesLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 7) {
    // Sun and Moon Letters module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <DefiniteArticleLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SunLettersLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <MoonLettersLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SunMoonPracticeLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 8) {
    // Word Formation module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SimpleWordsLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <ComplexWordsLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <WordRecognitionLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <ReadingPracticeLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 9) {
    // Sentence Construction module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SimpleSentencesLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <BreathControlLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <SentenceFlowLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <FluentReadingLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 10) {
    // Tajweed Fundamentals module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IntroToTajweedLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <TajweedImportanceLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <BasicTajweedRulesLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <TajweedPracticeLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 11) {
    // Nun Sakin and Tanween Rules module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IntroToNunSakinLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IzharRuleLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IdghamRuleLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IqlabRuleLesson />
          </LessonLayout>
        )
      case 5:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IkhfaRuleLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 12) {
    // Meem Sakin Rules module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IntroToMeemSakinLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IdghamShafawiLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IkhfaShafawiLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IzharShafawiLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 13) {
    // Qalqalah module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IntroToQalqalahLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <QalqalahLettersLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <MinorQalqalahLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <MajorQalqalahLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 14) {
    // Rules of Raa module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <IntroToRaaRulesLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <TafkheemRaaLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <TarqeeqRaaLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <RaaPracticeLesson />
          </LessonLayout>
        )
      default:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <div className="prose dark:prose-invert max-w-none">
              <h2>Lesson Content Coming Soon</h2>
              <p>This lesson is under development. Please check back later or continue with the available lessons.</p>
            </div>
          </LessonLayout>
        )
    }
  } else if (moduleId === 15) {
    // Special Rules and Integration module
    switch (lessonId) {
      case 1:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <AdvancedTajweedLesson />
          </LessonLayout>
        )
      case 2:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <WaqfAndIbtidaLesson />
          </LessonLayout>
        )
      case 3:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <MaddRulesLesson />
          </LessonLayout>
        )
      case 4:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <TajweedIntegrationLesson />
          </LessonLayout>
        )
      case 5:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <BeautifulRecitationLesson />
          </LessonLayout>
        )
      case 6:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <RecitationStylesLesson />
          </LessonLayout>
        )
      case 7:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <PracticalApplicationLesson />
          </LessonLayout>
        )
      case 8:
        return (
          <LessonLayout moduleId={moduleId} lessonId={lessonId}>
            <MasteryAssessmentLesson />
          </LessonLayout>
        )
      default:
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
    // For any other modules, show a placeholder
    return (
      <LessonLayout moduleId={moduleId} lessonId={lessonId}>
        <div className="prose dark:prose-invert max-w-none">
          <h2>Module Not Found</h2>
          <p>This module does not exist. Please check the module number and try again.</p>
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

// Module 2: Arabic Letters Lesson Components
function IntroToArabicLettersLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Introduction to Arabic Letters</h2>

        <p>
          Welcome to the Arabic Letters module! In this module, you'll learn all 28 letters of the Arabic
          alphabet, their sounds, and how to write them.
        </p>

        <p>
          The Arabic alphabet is written from right to left, unlike English which is written from left to right. Each
          letter can have up to four different forms, depending on its position in a word:
        </p>

        <ul>
          <li><strong>Isolated form</strong> - when the letter stands alone</li>
          <li><strong>Initial form</strong> - when the letter is at the beginning of a word</li>
          <li><strong>Medial form</strong> - when the letter is in the middle of a word</li>
          <li><strong>Final form</strong> - when the letter is at the end of a word</li>
        </ul>

        <h3>The 28 Arabic Letters</h3>

        <p>
          The Arabic alphabet consists of 28 letters. We'll learn them in groups to make it easier to remember
          and understand their relationships.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ا</div>
          <div className="font-medium">Alif</div>
          <div className="text-sm text-muted-foreground">Long 'a' sound</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ب</div>
          <div className="font-medium">Baa</div>
          <div className="text-sm text-muted-foreground">'b' sound</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ت</div>
          <div className="font-medium">Taa</div>
          <div className="text-sm text-muted-foreground">'t' sound</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ث</div>
          <div className="font-medium">Thaa</div>
          <div className="text-sm text-muted-foreground">'th' sound</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Learning Strategy</h3>

        <p>
          We'll learn the letters in groups based on their similar shapes. This will help you:
        </p>

        <ul>
          <li>Remember the letters more easily</li>
          <li>Understand how dots and marks differentiate similar letters</li>
          <li>Build your recognition skills systematically</li>
        </ul>

        <p>
          In the following lessons, we'll explore each group of letters in detail, learning their pronunciation,
          writing, and usage.
        </p>
      </div>

      <PronunciationPractice
        text="Practice pronouncing the first four letters"
        audioSrc="/audio/first-four-letters.mp3"
        arabicText="ا ب ت ث"
      />
    </div>
  )
}

function FirstLetterGroupLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>First Group: Alif, Baa, Taa, Thaa</h2>

        <p>
          In this lesson, we'll learn the first group of Arabic letters: Alif (ا), Baa (ب), Taa (ت), and Thaa (ث).
        </p>

        <p>
          Notice how Baa, Taa, and Thaa have the same basic shape, differing only in the number and position of dots.
          This is a common pattern in Arabic - many letters share basic shapes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ا</div>
            <h3 className="font-bold">Alif</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as a long 'a' sound</li>
            <li>• Always connects from the right only</li>
            <li>• One of the six non-connecting letters</li>
            <li>• Often silent when preceded by a vowel</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ب</div>
            <h3 className="font-bold">Baa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'b' like in 'book'</li>
            <li>• Has one dot below the letter</li>
            <li>• Connects from both sides</li>
            <li>• Base shape for Taa and Thaa</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ت</div>
            <h3 className="font-bold">Taa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 't' like in 'top'</li>
            <li>• Has two dots above the letter</li>
            <li>• Same shape as Baa but with dots above</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ث</div>
            <h3 className="font-bold">Thaa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'th' like in 'think'</li>
            <li>• Has three dots above the letter</li>
            <li>• Same shape as Baa and Taa</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Pronunciation Practice</h3>
        <p>Let's practice pronouncing each of these letters. Listen to the audio and repeat after it.</p>
      </div>

      <PronunciationPractice text="Practice pronouncing Alif" audioSrc="/audio/alif.mp3" arabicText="ا" />
      <PronunciationPractice text="Practice pronouncing Baa" audioSrc="/audio/baa.mp3" arabicText="ب" />
      <PronunciationPractice text="Practice pronouncing Taa" audioSrc="/audio/taa.mp3" arabicText="ت" />
      <PronunciationPractice text="Practice pronouncing Thaa" audioSrc="/audio/thaa.mp3" arabicText="ث" />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Writing Practice</h3>
        <p>Now, let's practice writing these letters. Follow the guide to write each letter correctly.</p>
      </div>

      <WritingPractice
        letter="ا"
        strokeData={[
          {
            points: [
              { x: 150, y: 100 },
              { x: 150, y: 200 },
            ],
            width: 3,
          },
        ]}
      />

      <WritingPractice
        letter="ب"
        strokeData={[
          {
            points: [
              { x: 120, y: 180 },
              { x: 180, y: 180 },
              { x: 180, y: 160 },
              { x: 160, y: 140 },
              { x: 140, y: 140 },
              { x: 120, y: 160 },
            ],
            width: 3,
          },
          {
            points: [
              { x: 150, y: 200 },
              { x: 150, y: 210 },
            ],
            width: 3,
          },
        ]}
      />
    </div>
  )
}

function SecondLetterGroupLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Second Group: Jeem, Haa, Khaa</h2>

        <p>
          In this lesson, we'll learn the second group of Arabic letters: Jeem (ج), Haa (ح), and Khaa (خ).
        </p>

        <p>
          These letters are grouped together because they share the same basic shape, differing only in the number and
          position of dots.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ج</div>
            <h3 className="font-bold">Jeem</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'j' like in 'jam'</li>
            <li>• Has one dot below the letter</li>
            <li>• Connects from both sides</li>
            <li>• Has a distinctive hook shape</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ح</div>
            <h3 className="font-bold">Haa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'h' (breathy sound)</li>
            <li>• Has no dots</li>
            <li>• Same shape as Jeem and Khaa</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">خ</div>
            <h3 className="font-bold">Khaa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'kh' (like clearing throat)</li>
            <li>• Has one dot above the letter</li>
            <li>• Same shape as Jeem and Haa</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Pronunciation Practice</h3>
        <p>Let's practice pronouncing each of these letters. Pay attention to the different sounds.</p>
      </div>

      <PronunciationPractice text="Practice pronouncing Jeem" audioSrc="/audio/jeem.mp3" arabicText="ج" />
      <PronunciationPractice text="Practice pronouncing Haa" audioSrc="/audio/haa.mp3" arabicText="ح" />
      <PronunciationPractice text="Practice pronouncing Khaa" audioSrc="/audio/khaa.mp3" arabicText="خ" />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Letter Recognition</h3>
        <p>Practice identifying these letters in different contexts:</p>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-muted p-4 rounded">
          <div className="text-4xl mb-2">جَمِيل</div>
          <div className="text-sm">Beautiful (Jameel)</div>
        </div>
        <div className="bg-muted p-4 rounded">
          <div className="text-4xl mb-2">حَبِيب</div>
          <div className="text-sm">Beloved (Habeeb)</div>
        </div>
        <div className="bg-muted p-4 rounded">
          <div className="text-4xl mb-2">خَيْر</div>
          <div className="text-sm">Good (Khayr)</div>
        </div>
      </div>
    </div>
  )
}

function ThirdLetterGroupLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Third Group: Daal, Dhaal, Raa, Zaay</h2>

        <p>
          In this lesson, we'll learn the third group of Arabic letters: Daal (د), Dhaal (ذ), Raa (ر), and Zaay (ز).
        </p>

        <p>
          These letters are special because they are among the six non-connecting letters in Arabic. They only connect
          from the right side and never connect to the letter that follows them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">د</div>
            <h3 className="font-bold">Daal</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'd' like in 'door'</li>
            <li>• Has no dots</li>
            <li>• Non-connecting letter</li>
            <li>• Simple curved shape</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ذ</div>
            <h3 className="font-bold">Dhaal</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'th' like in 'that'</li>
            <li>• Has one dot above the letter</li>
            <li>• Same shape as Daal</li>
            <li>• Non-connecting letter</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ر</div>
            <h3 className="font-bold">Raa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'r' (rolled)</li>
            <li>• Has no dots</li>
            <li>• Non-connecting letter</li>
            <li>• Has a small hook</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ز</div>
            <h3 className="font-bold">Zaay</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'z' like in 'zoo'</li>
            <li>• Has one dot above the letter</li>
            <li>• Same shape as Raa</li>
            <li>• Non-connecting letter</li>
          </ul>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Pronunciation Practice</h3>
        <p>Practice pronouncing these non-connecting letters:</p>
      </div>

      <PronunciationPractice text="Practice pronouncing Daal" audioSrc="/audio/daal.mp3" arabicText="د" />
      <PronunciationPractice text="Practice pronouncing Dhaal" audioSrc="/audio/dhaal.mp3" arabicText="ذ" />
      <PronunciationPractice text="Practice pronouncing Raa" audioSrc="/audio/raa.mp3" arabicText="ر" />
      <PronunciationPractice text="Practice pronouncing Zaay" audioSrc="/audio/zaay.mp3" arabicText="ز" />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Non-Connecting Behavior</h3>
        <p>Notice how these letters create breaks in words:</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-muted p-4 rounded">
          <div className="text-4xl mb-2">مَدْرَسَة</div>
          <div className="text-sm">School (Madrasah)</div>
        </div>
        <div className="bg-muted p-4 rounded">
          <div className="text-4xl mb-2">زَهْرَة</div>
          <div className="text-sm">Flower (Zahrah)</div>
        </div>
      </div>
    </div>
  )
}

function FourthLetterGroupLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Fourth Group: Seen, Sheen, Saad, Daad</h2>

        <p>
          In this lesson, we'll learn the fourth group of Arabic letters: Seen (س), Sheen (ش), Saad (ص), and Daad (ض).
        </p>

        <p>
          Seen and Sheen share the same basic shape, while Saad and Daad have their own distinctive forms.
          Saad and Daad are emphatic letters, meaning they have a deeper, more resonant sound.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">س</div>
            <h3 className="font-bold">Seen</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 's' like in 'sun'</li>
            <li>• Has no dots</li>
            <li>• Three tooth-like projections</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ش</div>
            <h3 className="font-bold">Sheen</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'sh' like in 'ship'</li>
            <li>• Has three dots above</li>
            <li>• Same shape as Seen</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ص</div>
            <h3 className="font-bold">Saad</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as emphatic 's'</li>
            <li>• Has no dots</li>
            <li>• Deeper sound than regular Seen</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ض</div>
            <h3 className="font-bold">Daad</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as emphatic 'd'</li>
            <li>• Has one dot above</li>
            <li>• Same shape as Saad</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Emphatic Letters</h3>
        <p>
          Saad and Daad are called emphatic letters. When pronouncing them, the tongue is positioned differently,
          creating a deeper, more resonant sound compared to their non-emphatic counterparts.
        </p>
      </div>

      <PronunciationPractice text="Practice pronouncing Seen" audioSrc="/audio/seen.mp3" arabicText="س" />
      <PronunciationPractice text="Practice pronouncing Sheen" audioSrc="/audio/sheen.mp3" arabicText="ش" />
      <PronunciationPractice text="Practice pronouncing Saad" audioSrc="/audio/saad.mp3" arabicText="ص" />
      <PronunciationPractice text="Practice pronouncing Daad" audioSrc="/audio/daad.mp3" arabicText="ض" />
    </div>
  )
}

function FifthLetterGroupLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Fifth Group: Taa, Dhaa, Ayn, Ghayn</h2>

        <p>
          In this lesson, we'll learn the fifth group of Arabic letters: Taa (ط), Dhaa (ظ), Ayn (ع), and Ghayn (غ).
        </p>

        <p>
          Taa and Dhaa are emphatic letters, while Ayn and Ghayn have unique sounds that don't exist in English.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ط</div>
            <h3 className="font-bold">Taa (Emphatic)</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as emphatic 't'</li>
            <li>• Has no dots</li>
            <li>• Deeper sound than regular Taa</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ظ</div>
            <h3 className="font-bold">Dhaa (Emphatic)</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as emphatic 'th'</li>
            <li>• Has one dot above</li>
            <li>• Same shape as emphatic Taa</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ع</div>
            <h3 className="font-bold">Ayn</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Deep throat sound (no English equivalent)</li>
            <li>• Has no dots</li>
            <li>• Distinctive shape</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">غ</div>
            <h3 className="font-bold">Ghayn</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced like French 'r'</li>
            <li>• Has one dot above</li>
            <li>• Same shape as Ayn</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>
      </div>

      <PronunciationPractice text="Practice pronouncing emphatic Taa" audioSrc="/audio/taa-emphatic.mp3" arabicText="ط" />
      <PronunciationPractice text="Practice pronouncing emphatic Dhaa" audioSrc="/audio/dhaa-emphatic.mp3" arabicText="ظ" />
      <PronunciationPractice text="Practice pronouncing Ayn" audioSrc="/audio/ayn.mp3" arabicText="ع" />
      <PronunciationPractice text="Practice pronouncing Ghayn" audioSrc="/audio/ghayn.mp3" arabicText="غ" />
    </div>
  )
}

function SixthLetterGroupLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Sixth Group: Faa, Qaaf, Kaaf, Laam</h2>

        <p>
          In this lesson, we'll learn the sixth group of Arabic letters: Faa (ف), Qaaf (ق), Kaaf (ك), and Laam (ل).
        </p>

        <p>
          These letters each have distinctive shapes and sounds. Qaaf is pronounced from deep in the throat,
          while the others are more familiar to English speakers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ف</div>
            <h3 className="font-bold">Faa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'f' like in 'fire'</li>
            <li>• Has one dot above</li>
            <li>• Circular shape with a line</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ق</div>
            <h3 className="font-bold">Qaaf</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Deep 'q' sound from throat</li>
            <li>• Has two dots above</li>
            <li>• Similar to Faa but deeper</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ك</div>
            <h3 className="font-bold">Kaaf</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'k' like in 'key'</li>
            <li>• Has no dots</li>
            <li>• Distinctive angular shape</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ل</div>
            <h3 className="font-bold">Laam</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'l' like in 'love'</li>
            <li>• Has no dots</li>
            <li>• Tall vertical line</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>
      </div>

      <PronunciationPractice text="Practice pronouncing Faa" audioSrc="/audio/faa.mp3" arabicText="ف" />
      <PronunciationPractice text="Practice pronouncing Qaaf" audioSrc="/audio/qaaf.mp3" arabicText="ق" />
      <PronunciationPractice text="Practice pronouncing Kaaf" audioSrc="/audio/kaaf.mp3" arabicText="ك" />
      <PronunciationPractice text="Practice pronouncing Laam" audioSrc="/audio/laam.mp3" arabicText="ل" />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Common Words</h3>
        <p>Practice reading these common words using the letters you've learned:</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="bg-muted p-4 rounded">
          <div className="text-4xl mb-2">فِي</div>
          <div className="text-sm">In (Fee)</div>
        </div>
        <div className="bg-muted p-4 rounded">
          <div className="text-4xl mb-2">قَلْب</div>
          <div className="text-sm">Heart (Qalb)</div>
        </div>
      </div>
    </div>
  )
}

function SeventhLetterGroupLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Seventh Group: Meem, Noon, Haa, Waaw, Yaa</h2>

        <p>
          In this final lesson of the Arabic Letters module, we'll learn the last group: Meem (م), Noon (ن),
          Haa (ه), Waaw (و), and Yaa (ي).
        </p>

        <p>
          These letters complete the 28-letter Arabic alphabet. Waaw and Yaa can also function as long vowels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">م</div>
            <h3 className="font-bold">Meem</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'm' like in 'moon'</li>
            <li>• Has no dots</li>
            <li>• Circular shape</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ن</div>
            <h3 className="font-bold">Noon</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'n' like in 'noon'</li>
            <li>• Has one dot above</li>
            <li>• Bowl-like shape</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ه</div>
            <h3 className="font-bold">Haa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'h' (light breath)</li>
            <li>• Has no dots</li>
            <li>• Oval shape</li>
            <li>• Connects from both sides</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">و</div>
            <h3 className="font-bold">Waaw</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'w' or long 'oo'</li>
            <li>• Has no dots</li>
            <li>• Non-connecting letter</li>
            <li>• Can be a consonant or vowel</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">ي</div>
            <h3 className="font-bold">Yaa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'y' or long 'ee'</li>
            <li>• Has two dots below</li>
            <li>• Connects from both sides</li>
            <li>• Can be a consonant or vowel</li>
          </ul>
        </div>
      </div>

      <PronunciationPractice text="Practice pronouncing Meem" audioSrc="/audio/meem.mp3" arabicText="م" />
      <PronunciationPractice text="Practice pronouncing Noon" audioSrc="/audio/noon.mp3" arabicText="ن" />
      <PronunciationPractice text="Practice pronouncing Haa" audioSrc="/audio/haa-light.mp3" arabicText="ه" />
      <PronunciationPractice text="Practice pronouncing Waaw" audioSrc="/audio/waaw.mp3" arabicText="و" />
      <PronunciationPractice text="Practice pronouncing Yaa" audioSrc="/audio/yaa.mp3" arabicText="ي" />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Congratulations!</h3>
        <p>
          You have now learned all 28 letters of the Arabic alphabet! In the next module, we'll learn about
          how these letters change form depending on their position in words.
        </p>
      </div>

      <Assessment
        title="Arabic Letters Review"
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "How many letters are in the Arabic alphabet?",
            options: ["26", "27", "28", "29"],
            correctAnswer: "2",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "Which letters are non-connecting?",
            options: ["ا د ذ ر ز و", "ب ت ث ج ح خ", "س ش ص ض ط ظ", "ع غ ف ق ك ل"],
            correctAnswer: "0",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "What is the name of this letter: ج?",
            options: ["Haa", "Jeem", "Khaa", "Seen"],
            correctAnswer: "1",
          },
        ]}
        onComplete={(score, total) => {
          console.log(`Score: ${score}/${total}`)
        }}
      />
    </div>
  )
}

// Module 3: Letter Forms Lesson Components
function LetterPositionsOverviewLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Letter Positions Overview</h2>

        <p>
          In this module, you'll learn how Arabic letters change their form depending on their position in a word.
          Unlike English letters which always look the same, Arabic letters can take up to four different forms.
        </p>

        <h3>The Four Letter Forms</h3>

        <p>Arabic letters can appear in four different forms:</p>

        <ol>
          <li><strong>Isolated form</strong> - when the letter stands alone</li>
          <li><strong>Initial form</strong> - when the letter is at the beginning of a word</li>
          <li><strong>Medial form</strong> - when the letter is in the middle of a word</li>
          <li><strong>Final form</strong> - when the letter is at the end of a word</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ب</div>
          <div className="text-sm font-medium">Baa alone</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Initial</div>
          <div className="text-4xl mb-2">بـ</div>
          <div className="text-sm font-medium">Baa at start</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Medial</div>
          <div className="text-4xl mb-2">ـبـ</div>
          <div className="text-sm font-medium">Baa in middle</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Final</div>
          <div className="text-4xl mb-2">ـب</div>
          <div className="text-sm font-medium">Baa at end</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Connection Rules</h3>

        <p>
          Most Arabic letters connect to both the letter before and after them. However, there are six letters
          that never connect to the letter that follows them:
        </p>

        <div className="bg-muted p-4 rounded-md my-4">
          <h4 className="font-medium mb-2">Non-Connecting Letters</h4>
          <div className="text-2xl text-center">ا د ذ ر ز و</div>
          <div className="text-sm text-center mt-2">Alif, Daal, Dhaal, Raa, Zaay, Waaw</div>
        </div>

        <p>
          These letters only have two forms: isolated and final (when they connect from the right).
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Why Letter Forms Matter</h3>

        <p>Understanding letter forms is crucial because:</p>

        <ul>
          <li>It allows you to read connected Arabic text fluently</li>
          <li>It helps you recognize letters in different contexts</li>
          <li>It's essential for proper Arabic writing</li>
          <li>It improves your overall reading speed and comprehension</li>
        </ul>

        <p>
          In the following lessons, we'll examine each form in detail and practice recognizing and writing them.
        </p>
      </div>
    </div>
  )
}

function InitialFormLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Initial Form</h2>

        <p>
          In this lesson, we'll focus on the initial form of Arabic letters. The initial form is used when a letter
          appears at the beginning of a word and connects to the letter that follows it.
        </p>

        <h3>Characteristics of Initial Form</h3>

        <p>
          When a letter is in the initial position, it connects to the letter after it (to its left) but not to any
          letter before it (since it's at the beginning). The initial form often looks similar to the isolated form
          but with a connecting stroke extending to the left.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ب</div>
          <div className="text-xs text-muted-foreground mt-2">Initial</div>
          <div className="text-4xl">بـ</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ت</div>
          <div className="text-xs text-muted-foreground mt-2">Initial</div>
          <div className="text-4xl">تـ</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ج</div>
          <div className="text-xs text-muted-foreground mt-2">Initial</div>
          <div className="text-4xl">جـ</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">س</div>
          <div className="text-xs text-muted-foreground mt-2">Initial</div>
          <div className="text-4xl">سـ</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Examples in Words</h3>

        <p>
          Let's see how initial forms appear in actual words. Notice how the first letter of each word uses its
          initial form to connect to the following letter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">بَيْت</div>
          <div className="text-sm font-medium">House (Bayt)</div>
          <div className="text-xs text-muted-foreground">ب in initial form</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">تَمْر</div>
          <div className="text-sm font-medium">Dates (Tamr)</div>
          <div className="text-xs text-muted-foreground">ت in initial form</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">جَمِيل</div>
          <div className="text-sm font-medium">Beautiful (Jameel)</div>
          <div className="text-xs text-muted-foreground">ج in initial form</div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice reading words with initial forms"
        audioSrc="/audio/initial-forms.mp3"
        arabicText="بَيْت تَمْر جَمِيل"
      />
    </div>
  )
}

function MedialFormLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Medial Form</h2>

        <p>
          In this lesson, we'll focus on the medial form of Arabic letters. The medial form is used when a letter
          appears in the middle of a word, connected from both sides.
        </p>

        <h3>Understanding the Medial Form</h3>

        <p>
          When a letter is in the medial position, it connects to both the letter before it (to its right) and the
          letter after it (to its left). The medial form often looks quite different from the isolated form, with
          connecting strokes extending on both sides.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ب</div>
          <div className="text-xs text-muted-foreground mt-2">Medial</div>
          <div className="text-4xl">ـبـ</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ج</div>
          <div className="text-xs text-muted-foreground mt-2">Medial</div>
          <div className="text-4xl">ـجـ</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">س</div>
          <div className="text-xs text-muted-foreground mt-2">Medial</div>
          <div className="text-4xl">ـسـ</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ع</div>
          <div className="text-xs text-muted-foreground mt-2">Medial</div>
          <div className="text-4xl">ـعـ</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Examples in Words</h3>

        <p>
          Let's see how medial forms appear in actual words. Notice how the middle letters connect to both
          the letters before and after them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">كَتَبَ</div>
          <div className="text-sm font-medium">He wrote (Kataba)</div>
          <div className="text-xs text-muted-foreground">ت in medial form</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">مُسْلِم</div>
          <div className="text-sm font-medium">Muslim</div>
          <div className="text-xs text-muted-foreground">س and ل in medial form</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">مَدْرَسَة</div>
          <div className="text-sm font-medium">School (Madrasah)</div>
          <div className="text-xs text-muted-foreground">د breaks connection</div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice reading words with medial forms"
        audioSrc="/audio/medial-forms.mp3"
        arabicText="كَتَبَ مُسْلِم مَدْرَسَة"
      />
    </div>
  )
}

function FinalFormLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Final Form</h2>

        <p>
          In this lesson, we'll focus on the final form of Arabic letters. The final form is used when a letter
          appears at the end of a word and connects from the right side only.
        </p>

        <h3>Understanding the Final Form</h3>

        <p>
          When a letter is in the final position, it connects to the letter before it (to its right) but not to any
          letter after it (since it's at the end). The final form often has a more elaborate or extended appearance.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ب</div>
          <div className="text-xs text-muted-foreground mt-2">Final</div>
          <div className="text-4xl">ـب</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ت</div>
          <div className="text-xs text-muted-foreground mt-2">Final</div>
          <div className="text-4xl">ـت</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">س</div>
          <div className="text-xs text-muted-foreground mt-2">Final</div>
          <div className="text-4xl">ـس</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-xs text-muted-foreground mb-1">Isolated</div>
          <div className="text-4xl mb-2">ي</div>
          <div className="text-xs text-muted-foreground mt-2">Final</div>
          <div className="text-4xl">ـي</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Examples in Words</h3>

        <p>
          Let's see how final forms appear in actual words. Notice how the last letter of each word uses its
          final form to connect from the right.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">كِتَاب</div>
          <div className="text-sm font-medium">Book (Kitaab)</div>
          <div className="text-xs text-muted-foreground">ب in final form</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">بَيْت</div>
          <div className="text-sm font-medium">House (Bayt)</div>
          <div className="text-xs text-muted-foreground">ت in final form</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">مُدَرِّس</div>
          <div className="text-sm font-medium">Teacher (Mudarris)</div>
          <div className="text-xs text-muted-foreground">س in final form</div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice reading words with final forms"
        audioSrc="/audio/final-forms.mp3"
        arabicText="كِتَاب بَيْت مُدَرِّس"
      />
    </div>
  )
}

function IsolatedFormLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Isolated Form</h2>

        <p>
          In this lesson, we'll focus on the isolated form of Arabic letters. The isolated form is used when a letter
          stands alone or when it cannot connect to surrounding letters.
        </p>

        <h3>When Letters Appear in Isolated Form</h3>

        <p>Letters appear in isolated form in several situations:</p>

        <ul>
          <li>When the letter stands completely alone</li>
          <li>When the letter follows a non-connecting letter</li>
          <li>When the letter is at the beginning of a word and the previous word ends with a non-connecting letter</li>
          <li>In certain stylistic or decorative contexts</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ا</div>
          <div className="text-sm font-medium">Alif</div>
          <div className="text-xs text-muted-foreground">Always isolated</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">د</div>
          <div className="text-sm font-medium">Daal</div>
          <div className="text-xs text-muted-foreground">Non-connecting</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ر</div>
          <div className="text-sm font-medium">Raa</div>
          <div className="text-xs text-muted-foreground">Non-connecting</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">و</div>
          <div className="text-sm font-medium">Waaw</div>
          <div className="text-xs text-muted-foreground">Non-connecting</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Examples in Context</h3>

        <p>
          Let's see how isolated forms appear in actual words. Notice how some letters remain in their isolated
          form even within words due to connection rules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">دَار</div>
          <div className="text-sm font-medium">House (Daar)</div>
          <div className="text-xs text-muted-foreground">د and ا in isolated form</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">وَرَقَة</div>
          <div className="text-sm font-medium">Paper (Waraqah)</div>
          <div className="text-xs text-muted-foreground">و and ر in isolated form</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">زَهْرَة</div>
          <div className="text-sm font-medium">Flower (Zahrah)</div>
          <div className="text-xs text-muted-foreground">ز and ر in isolated form</div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice reading words with isolated forms"
        audioSrc="/audio/isolated-forms.mp3"
        arabicText="دَار وَرَقَة زَهْرَة"
      />
    </div>
  )
}

function ConnectionRulesLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Connection Rules</h2>

        <p>
          In this final lesson of the Letter Forms module, we'll learn the comprehensive rules that govern how
          Arabic letters connect to each other in words.
        </p>

        <h3>Basic Connection Principles</h3>

        <p>Arabic letter connection follows these fundamental rules:</p>

        <ol>
          <li>Arabic is written from right to left</li>
          <li>Most letters connect to both preceding and following letters</li>
          <li>Six letters never connect to the letter that follows them</li>
          <li>Connection affects the visual form of letters</li>
        </ol>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-bold mb-4">The Six Non-Connecting Letters</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
          <div>
            <div className="text-4xl mb-2">ا</div>
            <div className="text-sm">Alif</div>
          </div>
          <div>
            <div className="text-4xl mb-2">د</div>
            <div className="text-sm">Daal</div>
          </div>
          <div>
            <div className="text-4xl mb-2">ذ</div>
            <div className="text-sm">Dhaal</div>
          </div>
          <div>
            <div className="text-4xl mb-2">ر</div>
            <div className="text-sm">Raa</div>
          </div>
          <div>
            <div className="text-4xl mb-2">ز</div>
            <div className="text-sm">Zaay</div>
          </div>
          <div>
            <div className="text-4xl mb-2">و</div>
            <div className="text-sm">Waaw</div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Connection Examples</h3>

        <p>Let's see how these rules apply in practice:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-4 rounded">
          <h4 className="font-bold mb-3">Full Connection</h4>
          <div className="text-center">
            <div className="text-4xl mb-2">كَتَبَ</div>
            <div className="text-sm">All letters connect</div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded">
          <h4 className="font-bold mb-3">Broken Connection</h4>
          <div className="text-center">
            <div className="text-4xl mb-2">مَدْرَسَة</div>
            <div className="text-sm">د breaks the connection</div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Practice Recognition</h3>

        <p>
          Now that you understand all letter forms and connection rules, practice identifying different forms
          in these words:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">مُسْتَشْفَى</div>
          <div className="text-sm font-medium">Hospital</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">جَامِعَة</div>
          <div className="text-sm font-medium">University</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">مَكْتَبَة</div>
          <div className="text-sm font-medium">Library</div>
        </div>
      </div>

      <Assessment
        title="Letter Forms Assessment"
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "How many forms can most Arabic letters take?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "2",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "Which letters never connect to the letter that follows them?",
            options: ["ا د ذ ر ز و", "ب ت ث ج ح خ", "س ش ص ض ط ظ", "ع غ ف ق ك ل"],
            correctAnswer: "0",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "What form does a letter take when it's in the middle of a word?",
            options: ["Initial", "Medial", "Final", "Isolated"],
            correctAnswer: "1",
          },
        ]}
        onComplete={(score, total) => {
          console.log(`Score: ${score}/${total}`)
        }}
      />
    </div>
  )
}

// Module 4: Vowels Application Lesson Components
function LettersWithFathahLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Letters with Fathah</h2>

        <p>
          In this lesson, we'll focus on combining Arabic letters with the Fathah vowel sign. As you learned
          earlier, Fathah (َ) is a small diagonal line placed above a letter, giving it a short 'a' sound.
        </p>

        <h3>Fathah with Different Letters</h3>

        <p>
          When Fathah is added to a letter, it changes the pronunciation of that letter by adding a short
          'a' sound after it. Let's see how Fathah combines with different Arabic letters:
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">بَ</div>
          <div className="text-sm font-medium">ba</div>
          <div className="text-xs text-muted-foreground">Baa + Fathah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">تَ</div>
          <div className="text-sm font-medium">ta</div>
          <div className="text-xs text-muted-foreground">Taa + Fathah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">جَ</div>
          <div className="text-sm font-medium">ja</div>
          <div className="text-xs text-muted-foreground">Jeem + Fathah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">دَ</div>
          <div className="text-sm font-medium">da</div>
          <div className="text-xs text-muted-foreground">Daal + Fathah</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Reading Practice</h3>

        <p>Let's practice reading some simple words that use Fathah extensively:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">كَتَبَ</div>
          <div className="text-sm font-medium">He wrote (kataba)</div>
          <div className="text-xs text-muted-foreground">All vowels are Fathah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">قَلَم</div>
          <div className="text-sm font-medium">Pen (qalam)</div>
          <div className="text-xs text-muted-foreground">Both vowels are Fathah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">بَاب</div>
          <div className="text-sm font-medium">Door (baab)</div>
          <div className="text-xs text-muted-foreground">Fathah + long Alif</div>
        </div>
      </div>

      <PronunciationPractice text="Practice pronouncing letters with Fathah" audioSrc="/audio/fathah-letters.mp3" arabicText="بَ تَ جَ دَ" />
      <PronunciationPractice text="Practice pronouncing words with Fathah" audioSrc="/audio/fathah-words.mp3" arabicText="كَتَبَ قَلَم بَاب" />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Writing Practice</h3>

        <p>Now, let's practice writing some letters with Fathah and words that use the Fathah vowel:</p>
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
    </div>
  )
}

function LettersWithKasrahLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Letters with Kasrah</h2>

        <p>
          In this lesson, we'll focus on combining Arabic letters with the Kasrah vowel sign. Kasrah (ِ) is a small
          diagonal line placed below a letter, giving it a short 'i' sound.
        </p>

        <h3>Kasrah with Different Letters</h3>

        <p>
          When Kasrah is added to a letter, it changes the pronunciation by adding a short 'i' sound after it.
          Let's see how Kasrah combines with different Arabic letters:
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">بِ</div>
          <div className="text-sm font-medium">bi</div>
          <div className="text-xs text-muted-foreground">Baa + Kasrah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">تِ</div>
          <div className="text-sm font-medium">ti</div>
          <div className="text-xs text-muted-foreground">Taa + Kasrah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">جِ</div>
          <div className="text-sm font-medium">ji</div>
          <div className="text-xs text-muted-foreground">Jeem + Kasrah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">دِ</div>
          <div className="text-sm font-medium">di</div>
          <div className="text-xs text-muted-foreground">Daal + Kasrah</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Reading Practice</h3>

        <p>Let's practice reading some words that use Kasrah:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">كِتَاب</div>
          <div className="text-sm font-medium">Book (kitaab)</div>
          <div className="text-xs text-muted-foreground">Kasrah on first letter</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">بِنْت</div>
          <div className="text-sm font-medium">Girl (bint)</div>
          <div className="text-xs text-muted-foreground">Kasrah + Sukuun</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">فِي</div>
          <div className="text-sm font-medium">In (fee)</div>
          <div className="text-xs text-muted-foreground">Kasrah + long Yaa</div>
        </div>
      </div>

      <PronunciationPractice text="Practice pronouncing letters with Kasrah" audioSrc="/audio/kasrah-letters.mp3" arabicText="بِ تِ جِ دِ" />
      <PronunciationPractice text="Practice pronouncing words with Kasrah" audioSrc="/audio/kasrah-words.mp3" arabicText="كِتَاب بِنْت فِي" />
    </div>
  )
}

function LettersWithDammahLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Letters with Dammah</h2>

        <p>
          In this lesson, we'll focus on combining Arabic letters with the Dammah vowel sign. Dammah (ُ) is a small
          curl-like symbol placed above a letter, giving it a short 'u' sound.
        </p>

        <h3>Dammah with Different Letters</h3>

        <p>
          When Dammah is added to a letter, it changes the pronunciation by adding a short 'u' sound after it.
          Let's see how Dammah combines with different Arabic letters:
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">بُ</div>
          <div className="text-sm font-medium">bu</div>
          <div className="text-xs text-muted-foreground">Baa + Dammah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">تُ</div>
          <div className="text-sm font-medium">tu</div>
          <div className="text-xs text-muted-foreground">Taa + Dammah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">جُ</div>
          <div className="text-sm font-medium">ju</div>
          <div className="text-xs text-muted-foreground">Jeem + Dammah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">دُ</div>
          <div className="text-sm font-medium">du</div>
          <div className="text-xs text-muted-foreground">Daal + Dammah</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Reading Practice</h3>

        <p>Let's practice reading some words that use Dammah:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">كُتُب</div>
          <div className="text-sm font-medium">Books (kutub)</div>
          <div className="text-xs text-muted-foreground">Multiple Dammah vowels</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">نُور</div>
          <div className="text-sm font-medium">Light (noor)</div>
          <div className="text-xs text-muted-foreground">Dammah + long Waaw</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">سُؤَال</div>
          <div className="text-sm font-medium">Question (su'aal)</div>
          <div className="text-xs text-muted-foreground">Dammah + Hamzah</div>
        </div>
      </div>

      <PronunciationPractice text="Practice pronouncing letters with Dammah" audioSrc="/audio/dammah-letters.mp3" arabicText="بُ تُ جُ دُ" />
      <PronunciationPractice text="Practice pronouncing words with Dammah" audioSrc="/audio/dammah-words.mp3" arabicText="كُتُب نُور سُؤَال" />
    </div>
  )
}

function TanweenLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Tanween (Double Vowels)</h2>

        <p>
          In this lesson, we'll learn about Tanween, which are double vowel signs that add an 'n' sound to the end
          of words. Tanween are commonly found in Classical Arabic and the Qur'an.
        </p>

        <h3>The Three Types of Tanween</h3>

        <p>There are three types of Tanween, corresponding to the three basic vowels:</p>

        <ol>
          <li><strong>Tanween Fath (ً)</strong> - Double Fathah, pronounced as 'an'</li>
          <li><strong>Tanween Kasr (ٍ)</strong> - Double Kasrah, pronounced as 'in'</li>
          <li><strong>Tanween Damm (ٌ)</strong> - Double Dammah, pronounced as 'un'</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">كِتَابًا</div>
            <h3 className="font-bold">Tanween Fath</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'an'</li>
            <li>• Two Fathah marks</li>
            <li>• Often adds Alif at the end</li>
            <li>• Accusative case marker</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">كِتَابٍ</div>
            <h3 className="font-bold">Tanween Kasr</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'in'</li>
            <li>• Two Kasrah marks</li>
            <li>• No additional letter</li>
            <li>• Genitive case marker</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">كِتَابٌ</div>
            <h3 className="font-bold">Tanween Damm</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'un'</li>
            <li>• Two Dammah marks</li>
            <li>• No additional letter</li>
            <li>• Nominative case marker</li>
          </ul>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Examples in Context</h3>

        <p>Let's see how Tanween appears in different words:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">رَجُلًا</div>
          <div className="text-sm font-medium">A man (rajulan)</div>
          <div className="text-xs text-muted-foreground">Tanween Fath</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">بَيْتٍ</div>
          <div className="text-sm font-medium">Of a house (baytin)</div>
          <div className="text-xs text-muted-foreground">Tanween Kasr</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">وَلَدٌ</div>
          <div className="text-sm font-medium">A boy (waladun)</div>
          <div className="text-xs text-muted-foreground">Tanween Damm</div>
        </div>
      </div>

      <PronunciationPractice text="Practice pronouncing Tanween" audioSrc="/audio/tanween.mp3" arabicText="كِتَابًا كِتَابٍ كِتَابٌ" />
    </div>
  )
}

function MixedVowelPracticeLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Mixed Vowel Practice</h2>

        <p>
          In this final lesson of the Vowels Application module, we'll practice reading words and sentences that
          combine all the vowel signs you've learned: Fathah, Kasrah, Dammah, and Tanween.
        </p>

        <h3>Review of All Vowel Signs</h3>

        <p>Let's review all the vowel signs we've covered:</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">َ</div>
          <div className="text-sm font-medium">Fathah</div>
          <div className="text-xs text-muted-foreground">Short 'a'</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ِ</div>
          <div className="text-sm font-medium">Kasrah</div>
          <div className="text-xs text-muted-foreground">Short 'i'</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ُ</div>
          <div className="text-sm font-medium">Dammah</div>
          <div className="text-xs text-muted-foreground">Short 'u'</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ً</div>
          <div className="text-sm font-medium">Tanween Fath</div>
          <div className="text-xs text-muted-foreground">'an'</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ٍ</div>
          <div className="text-sm font-medium">Tanween Kasr</div>
          <div className="text-xs text-muted-foreground">'in'</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">ٌ</div>
          <div className="text-sm font-medium">Tanween Damm</div>
          <div className="text-xs text-muted-foreground">'un'</div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Complex Reading Practice</h3>

        <p>Now let's practice reading more complex words that use multiple vowel types:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">مُسْتَشْفًى</div>
          <div className="text-sm font-medium">Hospital (mustashfan)</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">جَامِعَةٌ</div>
          <div className="text-sm font-medium">University (jaami'atun)</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">مَكْتَبَةٍ</div>
          <div className="text-sm font-medium">Library (maktabatin)</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">طَالِبًا</div>
          <div className="text-sm font-medium">Student (taaliban)</div>
        </div>
      </div>

      <PronunciationPractice text="Practice reading complex words" audioSrc="/audio/mixed-vowels.mp3" arabicText="مُسْتَشْفًى جَامِعَةٌ مَكْتَبَةٍ طَالِبًا" />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Sentence Reading</h3>

        <p>Let's practice reading complete sentences:</p>
      </div>

      <div className="bg-muted p-6 rounded-lg text-center">
        <div className="text-3xl mb-4">الطَّالِبُ فِي الْمَكْتَبَةِ</div>
        <div className="text-lg font-medium">The student is in the library</div>
        <div className="text-sm text-muted-foreground mt-2">(At-taalib fee al-maktabah)</div>
      </div>

      <Assessment
        title="Vowels Application Assessment"
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What sound does Tanween Fath make?",
            options: ["an", "in", "un", "on"],
            correctAnswer: "0",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "Which vowel sign is placed below the letter?",
            options: ["Fathah", "Kasrah", "Dammah", "Tanween"],
            correctAnswer: "1",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "How is بُ pronounced?",
            options: ["ba", "bi", "bu", "ban"],
            correctAnswer: "2",
          },
        ]}
        onComplete={(score, total) => {
          console.log(`Score: ${score}/${total}`)
        }}
      />

      <div className="prose dark:prose-invert max-w-none">
        <h3>Congratulations!</h3>

        <p>
          You have completed the Foundation Phase! You now know the Arabic letters, their forms, and how to apply
          vowel signs. In the next phase, we'll learn more advanced reading rules and begin studying Tajweed.
        </p>
      </div>
    </div>
  )
}

// Module 5: Mudood (Elongations) Lesson Components
function IntroToMudoodLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Introduction to Mudood (Elongations)</h2>

        <p>
          Welcome to the Mudood module! Mudood (مُدُود) refers to the rules of elongation in Arabic recitation.
          These rules determine how long certain vowel sounds should be held when reading the Qur'an.
        </p>

        <h3>What is Mudood?</h3>

        <p>
          Mudood literally means "elongations" or "extensions." It refers to the lengthening of certain vowel sounds
          beyond their normal duration. Proper application of Mudood rules is essential for correct Qur'anic recitation.
        </p>

        <h3>Types of Mudood</h3>

        <p>There are several types of Mudood, which we'll learn in the following lessons:</p>

        <ol>
          <li><strong>Madd Tabee'ee (Natural Elongation)</strong> - The basic elongation of 2 counts</li>
          <li><strong>Madd Muttasil (Connected Elongation)</strong> - When elongation meets Hamzah in the same word</li>
          <li><strong>Madd Munfasil (Separated Elongation)</strong> - When elongation meets Hamzah in different words</li>
          <li><strong>Madd Lazim (Necessary Elongation)</strong> - The longest elongation of 6 counts</li>
        </ol>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-bold mb-4">The Three Letters of Mudood</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-6xl mb-2">ا</div>
            <div className="text-lg font-medium">Alif</div>
            <div className="text-sm text-muted-foreground">After Fathah</div>
          </div>
          <div>
            <div className="text-6xl mb-2">و</div>
            <div className="text-lg font-medium">Waaw</div>
            <div className="text-sm text-muted-foreground">After Dammah</div>
          </div>
          <div>
            <div className="text-6xl mb-2">ي</div>
            <div className="text-lg font-medium">Yaa</div>
            <div className="text-sm text-muted-foreground">After Kasrah</div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Why Mudood Matters</h3>

        <p>Learning Mudood is important because:</p>

        <ul>
          <li>It ensures proper Qur'anic recitation</li>
          <li>It helps maintain the rhythm and beauty of recitation</li>
          <li>It preserves the traditional way the Qur'an has been recited for centuries</li>
          <li>It improves your overall fluency in Arabic reading</li>
        </ul>

        <p>
          In the following lessons, we'll explore each type of Mudood in detail with examples and practice.
        </p>
      </div>

      <PronunciationPractice
        text="Practice the three letters of Mudood"
        audioSrc="/audio/mudood-letters.mp3"
        arabicText="بَا بُو بِي"
      />
    </div>
  )
}

function NaturalElongationLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Natural Elongation (Madd Tabee'ee)</h2>

        <p>
          Madd Tabee'ee (مَدّ طَبِيعِي) is the most basic type of elongation. It occurs naturally when a short vowel
          is followed by its corresponding long vowel letter.
        </p>

        <h3>How Natural Elongation Works</h3>

        <p>Natural elongation occurs in three situations:</p>

        <ol>
          <li><strong>Fathah + Alif</strong> - Creates a long 'aa' sound</li>
          <li><strong>Dammah + Waaw</strong> - Creates a long 'oo' sound</li>
          <li><strong>Kasrah + Yaa</strong> - Creates a long 'ee' sound</li>
        </ol>

        <p>The duration of Madd Tabee'ee is <strong>2 counts</strong> (approximately 2 seconds).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">بَا</div>
            <h3 className="font-bold">Fathah + Alif</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'baa'</li>
            <li>• Hold for 2 counts</li>
            <li>• Long 'a' sound</li>
            <li>• Most common elongation</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">بُو</div>
            <h3 className="font-bold">Dammah + Waaw</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'boo'</li>
            <li>• Hold for 2 counts</li>
            <li>• Long 'u' sound</li>
            <li>• Waaw has no vowel mark</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">بِي</div>
            <h3 className="font-bold">Kasrah + Yaa</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'bee'</li>
            <li>• Hold for 2 counts</li>
            <li>• Long 'i' sound</li>
            <li>• Yaa has no dots below</li>
          </ul>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Examples in Words</h3>

        <p>Let's see how natural elongation appears in actual Qur'anic words:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">قَالَ</div>
          <div className="text-sm font-medium">He said (qaala)</div>
          <div className="text-xs text-muted-foreground">Fathah + Alif elongation</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">نُور</div>
          <div className="text-sm font-medium">Light (noor)</div>
          <div className="text-xs text-muted-foreground">Dammah + Waaw elongation</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">فِي</div>
          <div className="text-sm font-medium">In (fee)</div>
          <div className="text-xs text-muted-foreground">Kasrah + Yaa elongation</div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice natural elongation"
        audioSrc="/audio/natural-elongation.mp3"
        arabicText="قَالَ نُور فِي"
      />
    </div>
  )
}

function ConnectedElongationLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Connected Elongation (Madd Muttasil)</h2>

        <p>
          Madd Muttasil (مَدّ مُتَّصِل) occurs when a natural elongation is followed by a Hamzah (ء) in the same word.
          This type of elongation is longer than natural elongation.
        </p>

        <h3>Rules of Madd Muttasil</h3>

        <p>Madd Muttasil has the following characteristics:</p>

        <ul>
          <li>Duration: <strong>4-5 counts</strong> (longer than natural elongation)</li>
          <li>Occurs when elongation + Hamzah are in the same word</li>
          <li>Mandatory elongation - must be applied</li>
          <li>Found frequently in the Qur'an</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">جَاءَ</div>
            <h3 className="font-bold">Fathah + Alif + Hamzah</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'jaa'a'</li>
            <li>• Hold 'aa' for 4-5 counts</li>
            <li>• Then pronounce Hamzah</li>
            <li>• Meaning: "he came"</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">سُوءَ</div>
            <h3 className="font-bold">Dammah + Waaw + Hamzah</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'soo'a'</li>
            <li>• Hold 'oo' for 4-5 counts</li>
            <li>• Then pronounce Hamzah</li>
            <li>• Meaning: "evil"</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">شِيءَ</div>
            <h3 className="font-bold">Kasrah + Yaa + Hamzah</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Pronounced as 'shee'a'</li>
            <li>• Hold 'ee' for 4-5 counts</li>
            <li>• Then pronounce Hamzah</li>
            <li>• Meaning: "thing"</li>
          </ul>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>More Examples</h3>

        <p>Here are more examples of Madd Muttasil from the Qur'an:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">قُرَآن</div>
          <div className="text-sm font-medium">Qur'an</div>
          <div className="text-xs text-muted-foreground">Fathah + Alif + Hamzah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">مَلَائِكَة</div>
          <div className="text-sm font-medium">Angels</div>
          <div className="text-xs text-muted-foreground">Kasrah + Yaa + Hamzah</div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice connected elongation"
        audioSrc="/audio/connected-elongation.mp3"
        arabicText="جَاءَ سُوءَ شِيءَ"
      />
    </div>
  )
}

function SeparatedElongationLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Separated Elongation (Madd Munfasil)</h2>

        <p>
          Madd Munfasil (مَدّ مُنْفَصِل) occurs when a natural elongation at the end of one word is followed by
          a Hamzah at the beginning of the next word.
        </p>

        <h3>Rules of Madd Munfasil</h3>

        <p>Madd Munfasil has the following characteristics:</p>

        <ul>
          <li>Duration: <strong>2-5 counts</strong> (flexible length)</li>
          <li>Occurs when elongation and Hamzah are in separate words</li>
          <li>Optional elongation - can vary in length</li>
          <li>Depends on the recitation style (Qira'ah)</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">يَا أَيُّهَا</div>
            <h3 className="font-bold">Example 1</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• "Yaa" ends with Alif elongation</li>
            <li>• "Ayyuhaa" starts with Hamzah</li>
            <li>• Elongate the 'aa' for 2-5 counts</li>
            <li>• Meaning: "O you who..."</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">فِي أَنْفُسِهِمْ</div>
            <h3 className="font-bold">Example 2</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• "Fee" ends with Yaa elongation</li>
            <li>• "Anfusihim" starts with Hamzah</li>
            <li>• Elongate the 'ee' for 2-5 counts</li>
            <li>• Meaning: "in themselves"</li>
          </ul>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Practical Application</h3>

        <p>
          When you encounter Madd Munfasil, you have flexibility in how long to hold the elongation.
          The choice often depends on:
        </p>

        <ul>
          <li>The recitation style you're following</li>
          <li>The context and flow of the recitation</li>
          <li>Your teacher's guidance</li>
          <li>The traditional practice in your region</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">بِمَا أُنْزِلَ</div>
          <div className="text-sm font-medium">With what was revealed</div>
          <div className="text-xs text-muted-foreground">Fathah + Alif | Hamzah</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">قُو أَنْفُسَكُمْ</div>
          <div className="text-sm font-medium">Protect yourselves</div>
          <div className="text-xs text-muted-foreground">Dammah + Waaw | Hamzah</div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice separated elongation"
        audioSrc="/audio/separated-elongation.mp3"
        arabicText="يَا أَيُّهَا فِي أَنْفُسِهِمْ"
      />
    </div>
  )
}

function NecessaryElongationLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Necessary Elongation (Madd Lazim)</h2>

        <p>
          Madd Lazim (مَدّ لَازِم) is the longest type of elongation, held for 6 counts. It occurs when a natural
          elongation is followed by a letter with Sukuun (no vowel) or a doubled letter (Shaddah).
        </p>

        <h3>Types of Madd Lazim</h3>

        <p>There are several types of Madd Lazim:</p>

        <ol>
          <li><strong>Madd Lazim Kalimi</strong> - Within a word</li>
          <li><strong>Madd Lazim Harfi</strong> - In individual letters (like at the beginning of chapters)</li>
          <li><strong>Heavy (Muthaqqal)</strong> - With Shaddah</li>
          <li><strong>Light (Mukhaffaf)</strong> - With Sukuun</li>
        </ol>

        <p>All types are held for exactly <strong>6 counts</strong>.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">الضَّالِّين</div>
            <h3 className="font-bold">Heavy Madd Lazim</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Alif followed by doubled Laam</li>
            <li>• Hold 'aa' for exactly 6 counts</li>
            <li>• Found in Surah Al-Fatihah</li>
            <li>• Meaning: "those who went astray"</li>
          </ul>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <div className="text-center mb-4">
            <div className="text-6xl mb-2">الم</div>
            <h3 className="font-bold">Letter Madd Lazim</h3>
          </div>
          <ul className="text-sm space-y-1">
            <li>• Individual letters at chapter start</li>
            <li>• Each letter elongated for 6 counts</li>
            <li>• "Alif Laam Meem"</li>
            <li>• Found at start of several chapters</li>
          </ul>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h3>Examples from the Qur'an</h3>

        <p>Here are some examples of Madd Lazim you'll encounter:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">آلْآن</div>
          <div className="text-sm font-medium">Now</div>
          <div className="text-xs text-muted-foreground">6 counts elongation</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">الطَّامَّة</div>
          <div className="text-sm font-medium">The overwhelming</div>
          <div className="text-xs text-muted-foreground">6 counts elongation</div>
        </div>

        <div className="bg-muted p-4 rounded text-center">
          <div className="text-4xl mb-2">الحَاقَّة</div>
          <div className="text-sm font-medium">The inevitable</div>
          <div className="text-xs text-muted-foreground">6 counts elongation</div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice necessary elongation"
        audioSrc="/audio/necessary-elongation.mp3"
        arabicText="الضَّالِّين آلْآن الطَّامَّة"
      />

      <Assessment
        title="Mudood Assessment"
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "How long is Madd Tabee'ee (Natural Elongation)?",
            options: ["1 count", "2 counts", "4-5 counts", "6 counts"],
            correctAnswer: "1",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "What is Madd Muttasil?",
            options: ["Natural elongation", "Connected elongation", "Separated elongation", "Necessary elongation"],
            correctAnswer: "1",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "How long is Madd Lazim held?",
            options: ["2 counts", "4 counts", "5 counts", "6 counts"],
            correctAnswer: "3",
          },
        ]}
        onComplete={(score, total) => {
          console.log(`Score: ${score}/${total}`)
        }}
      />
    </div>
  )
}

// Module 6: Sukuun and Non-Vowels Lesson Components
function IntroToSukuunLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Introduction to Sukuun</h2>

        <p>
          Welcome to the Sukuun module! Sukuun (سُكُون) is a diacritical mark that indicates the absence of a vowel sound after a consonant.
          Understanding Sukuun is crucial for proper Arabic pronunciation and reading.
        </p>

        <h3>What is Sukuun?</h3>

        <p>
          Sukuun (ْ) is a small circle placed above a letter to indicate that the letter has no vowel sound following it.
          When a letter has Sukuun, you pronounce only the consonant sound without any vowel.
        </p>

        <h3>How Sukuun Looks</h3>

        <p>The Sukuun mark appears as a small circle (ْ) above the letter.</p>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-bold mb-4">Examples of Sukuun</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-6xl mb-2">مِنْ</div>
            <div className="text-lg font-medium">min</div>
            <div className="text-sm text-muted-foreground">from</div>
          </div>
          <div>
            <div className="text-6xl mb-2">عَنْ</div>
            <div className="text-lg font-medium">an</div>
            <div className="text-sm text-muted-foreground">about</div>
          </div>
          <div>
            <div className="text-6xl mb-2">فِي</div>
            <div className="text-lg font-medium">fee</div>
            <div className="text-sm text-muted-foreground">in</div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice Sukuun pronunciation"
        audioSrc="/audio/sukuun-intro.mp3"
        arabicText="مِنْ عَنْ إِلَى"
      />
    </div>
  )
}

function SukuunOnLettersLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Sukuun on Different Letters</h2>

        <p>
          In this lesson, we'll learn how Sukuun affects different Arabic letters and how to pronounce them correctly.
        </p>

        <h3>Sukuun Rules</h3>

        <ol>
          <li>When a letter has Sukuun, pronounce only the consonant sound</li>
          <li>No vowel sound follows the letter</li>
          <li>The letter sound is "cut off" or stopped</li>
          <li>Common in the middle and end of words</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Common Letters with Sukuun</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-3xl">بْ</span>
              <span>b (no vowel)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl">تْ</span>
              <span>t (no vowel)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl">نْ</span>
              <span>n (no vowel)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl">مْ</span>
              <span>m (no vowel)</span>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Words with Sukuun</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-4xl mb-2">كَتَبْتُ</div>
              <div className="text-sm">katabtu (I wrote)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">مَدْرَسَة</div>
              <div className="text-sm">madrasah (school)</div>
            </div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice letters with Sukuun"
        audioSrc="/audio/sukuun-letters.mp3"
        arabicText="كَتَبْتُ مَدْرَسَة"
      />
    </div>
  )
}

function ConsonantClustersLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Consonant Clusters</h2>

        <p>
          Consonant clusters occur when two or more consonants (letters with Sukuun) come together without vowels between them.
          This is common in Arabic and requires special attention for proper pronunciation.
        </p>

        <h3>Types of Consonant Clusters</h3>

        <ol>
          <li><strong>Two consonants together</strong> - Most common type</li>
          <li><strong>Three consonants together</strong> - Less common but important</li>
          <li><strong>At word boundaries</strong> - Between words</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Two-Consonant Clusters</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-4xl mb-2">كَتْبٌ</div>
              <div className="text-sm">katbun (writing)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">حَمْدٌ</div>
              <div className="text-sm">hamdun (praise)</div>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Three-Consonant Clusters</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-4xl mb-2">كَتَبْتُمْ</div>
              <div className="text-sm">katabtum (you wrote)</div>
            </div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice consonant clusters"
        audioSrc="/audio/consonant-clusters.mp3"
        arabicText="كَتْبٌ حَمْدٌ"
      />
    </div>
  )
}

function SpecialSukuunCasesLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Special Sukuun Cases</h2>

        <p>
          There are special cases where Sukuun behaves differently or requires special attention.
          Understanding these cases will improve your Arabic reading significantly.
        </p>

        <h3>Special Cases</h3>

        <ol>
          <li><strong>Sukuun at the end of words</strong></li>
          <li><strong>Sukuun with doubled letters (Shaddah)</strong></li>
          <li><strong>Sukuun in connected speech</strong></li>
          <li><strong>Silent letters</strong></li>
        </ol>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-bold mb-4">Examples of Special Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-4xl mb-2">الْكِتَابْ</div>
            <div className="text-sm">al-kitaab (the book)</div>
            <div className="text-xs text-muted-foreground">Final Sukuun</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">مُحَمَّدْ</div>
            <div className="text-sm">Muhammad</div>
            <div className="text-xs text-muted-foreground">Name ending</div>
          </div>
        </div>
      </div>

      <Assessment
        title="Sukuun and Non-Vowels Assessment"
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What does Sukuun indicate?",
            options: ["A vowel sound", "No vowel sound", "A long vowel", "A short vowel"],
            correctAnswer: "1",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "How is Sukuun written?",
            options: ["A small circle above the letter", "A line above the letter", "A dot below the letter", "Two lines above the letter"],
            correctAnswer: "0",
          },
        ]}
        onComplete={(score, total) => {
          console.log(`Score: ${score}/${total}`)
        }}
      />

      <PronunciationPractice
        text="Practice special Sukuun cases"
        audioSrc="/audio/special-sukuun.mp3"
        arabicText="الْكِتَابْ مُحَمَّدْ"
      />
    </div>
  )
}

// Module 7: Sun and Moon Letters Lesson Components
function DefiniteArticleLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>The Definite Article (ال)</h2>

        <p>
          The definite article in Arabic is "ال" (al), which is equivalent to "the" in English.
          However, its pronunciation changes depending on the letter that follows it.
        </p>

        <h3>Basic Rules</h3>

        <ol>
          <li>The definite article is always written as "ال"</li>
          <li>It's attached to the beginning of nouns</li>
          <li>Its pronunciation depends on the first letter of the word</li>
          <li>There are two types of letters: Sun Letters and Moon Letters</li>
        </ol>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-bold mb-4">Examples of the Definite Article</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-4xl mb-2">الْكِتَاب</div>
            <div className="text-sm">al-kitaab (the book)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">الْبَيْت</div>
            <div className="text-sm">al-bayt (the house)</div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice the definite article"
        audioSrc="/audio/definite-article.mp3"
        arabicText="الْكِتَاب الْبَيْت"
      />
    </div>
  )
}

function SunLettersLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Sun Letters (الحروف الشمسية)</h2>

        <p>
          Sun Letters are 14 letters that cause the "ل" (Laam) in the definite article "ال" to be assimilated (merged)
          into the following letter. When this happens, the following letter receives a Shaddah (ّ).
        </p>

        <h3>The 14 Sun Letters</h3>

        <p>The Sun Letters are: ت ث د ذ ر ز س ش ص ض ط ظ ل ن</p>

        <h3>How Sun Letters Work</h3>

        <ol>
          <li>The Laam (ل) is not pronounced</li>
          <li>The Sun Letter gets a Shaddah (ّ)</li>
          <li>The Sun Letter is pronounced with emphasis</li>
          <li>The "ا" (Alif) is still pronounced as "a"</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Sun Letters Examples</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-3xl">الشَّمْس</span>
              <span>ash-shams (the sun)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl">الطَّعَام</span>
              <span>at-ta'aam (the food)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl">الرَّجُل</span>
              <span>ar-rajul (the man)</span>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Memory Aid</h3>
          <p className="text-sm mb-3">
            Remember Sun Letters with this phrase:
          </p>
          <div className="text-center">
            <div className="text-2xl mb-2">طِبْ ثُمَّ صِلْ رَحِماً تَفُزْ ضِفْ ذَا نِعَمْ دَعْ سُوءَ ظَنٍّ زُرْ شَرِيفاً لِلْكَرَمْ</div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice Sun Letters"
        audioSrc="/audio/sun-letters.mp3"
        arabicText="الشَّمْس الطَّعَام الرَّجُل"
      />
    </div>
  )
}

function MoonLettersLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Moon Letters (الحروف القمرية)</h2>

        <p>
          Moon Letters are the remaining 14 letters of the Arabic alphabet. When the definite article "ال"
          comes before a Moon Letter, the Laam (ل) is pronounced clearly.
        </p>

        <h3>The 14 Moon Letters</h3>

        <p>The Moon Letters are: ا ب ج ح خ ع غ ف ق ك م ه و ي</p>

        <h3>How Moon Letters Work</h3>

        <ol>
          <li>The Laam (ل) is pronounced clearly</li>
          <li>No Shaddah is added to the Moon Letter</li>
          <li>The pronunciation is "al-" + the word</li>
          <li>This is the "normal" pronunciation of the definite article</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Moon Letters Examples</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-3xl">الْقَمَر</span>
              <span>al-qamar (the moon)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl">الْبَيْت</span>
              <span>al-bayt (the house)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl">الْكِتَاب</span>
              <span>al-kitaab (the book)</span>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Key Difference</h3>
          <div className="space-y-3">
            <div>
              <div className="font-semibold">Sun Letters:</div>
              <div className="text-2xl">الشَّمْس (ash-shams)</div>
              <div className="text-sm text-muted-foreground">Laam not pronounced</div>
            </div>
            <div>
              <div className="font-semibold">Moon Letters:</div>
              <div className="text-2xl">الْقَمَر (al-qamar)</div>
              <div className="text-sm text-muted-foreground">Laam pronounced clearly</div>
            </div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice Moon Letters"
        audioSrc="/audio/moon-letters.mp3"
        arabicText="الْقَمَر الْبَيْت الْكِتَاب"
      />
    </div>
  )
}

function SunMoonPracticeLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Sun and Moon Letters Practice</h2>

        <p>
          Now let's practice distinguishing between Sun and Moon Letters and applying the correct pronunciation rules.
        </p>

        <h3>Quick Review</h3>

        <ul>
          <li><strong>Sun Letters:</strong> Laam is assimilated, following letter gets Shaddah</li>
          <li><strong>Moon Letters:</strong> Laam is pronounced clearly</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Sun Letters Practice</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-3xl mb-1">النَّار</div>
              <div className="text-sm">an-naar (the fire)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">الدَّار</div>
              <div className="text-sm">ad-daar (the house)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">الصَّبْر</div>
              <div className="text-sm">as-sabr (patience)</div>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Moon Letters Practice</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-3xl mb-1">الْعِلْم</div>
              <div className="text-sm">al-'ilm (knowledge)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">الْحَمْد</div>
              <div className="text-sm">al-hamd (praise)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">الْوَقْت</div>
              <div className="text-sm">al-waqt (time)</div>
            </div>
          </div>
        </div>
      </div>

      <Assessment
        title="Sun and Moon Letters Assessment"
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What happens with Sun Letters?",
            options: ["Laam is pronounced clearly", "Laam is assimilated", "Alif is dropped", "Nothing special"],
            correctAnswer: "1",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "How many Sun Letters are there?",
            options: ["12", "13", "14", "15"],
            correctAnswer: "2",
          },
          {
            id: "q3",
            type: "multiple-choice",
            prompt: "Which is a Moon Letter?",
            options: ["ت", "ش", "ق", "ر"],
            correctAnswer: "2",
          },
        ]}
        onComplete={(score, total) => {
          console.log(`Score: ${score}/${total}`)
        }}
      />

      <PronunciationPractice
        text="Practice mixed Sun and Moon Letters"
        audioSrc="/audio/sun-moon-practice.mp3"
        arabicText="النَّار الْعِلْم الدَّار الْحَمْد"
      />
    </div>
  )
}

// Module 8: Word Formation Lesson Components
function SimpleWordsLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Reading Simple Words</h2>

        <p>
          Now that you've learned individual letters, vowels, and basic rules, it's time to start reading complete words.
          We'll begin with simple, common Arabic words.
        </p>

        <h3>What Makes a Word "Simple"?</h3>

        <ul>
          <li>Short length (2-4 letters)</li>
          <li>Clear vowel markings</li>
          <li>No complex rules applied</li>
          <li>Common vocabulary</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Two-Letter Words</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-4xl mb-2">مَا</div>
              <div className="text-sm">maa (what)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">لَا</div>
              <div className="text-sm">laa (no)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">فِي</div>
              <div className="text-sm">fee (in)</div>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Three-Letter Words</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-4xl mb-2">كِتَاب</div>
              <div className="text-sm">kitaab (book)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">بَيْت</div>
              <div className="text-sm">bayt (house)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">وَلَد</div>
              <div className="text-sm">walad (boy)</div>
            </div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice simple words"
        audioSrc="/audio/simple-words.mp3"
        arabicText="مَا لَا فِي كِتَاب بَيْت"
      />
    </div>
  )
}

function ComplexWordsLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Reading Complex Words</h2>

        <p>
          Complex words involve multiple rules working together. These might include elongations,
          definite articles, or special letter combinations.
        </p>

        <h3>What Makes a Word "Complex"?</h3>

        <ul>
          <li>Longer length (5+ letters)</li>
          <li>Multiple rules applied</li>
          <li>Elongations (Mudood)</li>
          <li>Sun/Moon letter rules</li>
          <li>Consonant clusters</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Words with Elongations</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-4xl mb-2">الْقُرْآن</div>
              <div className="text-sm">al-qur'aan (the Qur'an)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">الصَّلَاة</div>
              <div className="text-sm">as-salaah (the prayer)</div>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Words with Multiple Rules</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-4xl mb-2">الْمُسْلِمُون</div>
              <div className="text-sm">al-muslimoon (the Muslims)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">الْمَدْرَسَة</div>
              <div className="text-sm">al-madrasah (the school)</div>
            </div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice complex words"
        audioSrc="/audio/complex-words.mp3"
        arabicText="الْقُرْآن الصَّلَاة الْمُسْلِمُون"
      />
    </div>
  )
}

function WordRecognitionLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Word Recognition Skills</h2>

        <p>
          Developing word recognition skills helps you read more fluently. This involves recognizing
          common word patterns and building your Arabic vocabulary.
        </p>

        <h3>Recognition Strategies</h3>

        <ol>
          <li><strong>Root patterns:</strong> Most Arabic words are built on 3-letter roots</li>
          <li><strong>Common prefixes:</strong> ال، و، ب، ل، ف</li>
          <li><strong>Common suffixes:</strong> ة، ان، ين، ون</li>
          <li><strong>Word families:</strong> Words sharing the same root</li>
        </ol>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-bold mb-4">Word Family Example: ك-ت-ب (writing)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">كَتَبَ</div>
            <div className="text-sm">kataba (he wrote)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">كِتَاب</div>
            <div className="text-sm">kitaab (book)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">مَكْتَبَة</div>
            <div className="text-sm">maktabah (library)</div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice word recognition"
        audioSrc="/audio/word-recognition.mp3"
        arabicText="كَتَبَ كِتَاب مَكْتَبَة"
      />
    </div>
  )
}

function ReadingPracticeLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Reading Practice</h2>

        <p>
          Let's practice reading various words to build your confidence and fluency.
          Focus on applying all the rules you've learned so far.
        </p>

        <h3>Reading Tips</h3>

        <ul>
          <li>Start slowly and focus on accuracy</li>
          <li>Apply vowel rules correctly</li>
          <li>Pay attention to elongations</li>
          <li>Practice regularly for improvement</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Practice Set 1</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-3xl mb-1">الْحَمْدُ لِلّهِ</div>
              <div className="text-sm">al-hamdu lillaahi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">رَبِّ الْعَالَمِين</div>
              <div className="text-sm">rabbi al-'aalameen</div>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Practice Set 2</h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-3xl mb-1">الرَّحْمٰنِ الرَّحِيم</div>
              <div className="text-sm">ar-rahmaani ar-raheem</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-1">مَالِكِ يَوْمِ الدِّين</div>
              <div className="text-sm">maaliki yawmi ad-deen</div>
            </div>
          </div>
        </div>
      </div>

      <Assessment
        title="Word Formation Assessment"
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "What makes a word 'simple' in Arabic reading?",
            options: ["Few letters", "No elongations or special rules", "Short vowels only", "Common vocabulary"],
            correctAnswer: "1",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "Most Arabic words are built on how many letter roots?",
            options: ["2 letters", "3 letters", "4 letters", "5 letters"],
            correctAnswer: "1",
          },
        ]}
        onComplete={(score, total) => {
          console.log(`Score: ${score}/${total}`)
        }}
      />

      <PronunciationPractice
        text="Practice reading"
        audioSrc="/audio/reading-practice.mp3"
        arabicText="الْحَمْدُ لِلّهِ رَبِّ الْعَالَمِين"
      />
    </div>
  )
}

// Module 9: Sentence Construction Lesson Components
function SimpleSentencesLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Reading Simple Sentences</h2>

        <p>
          Now that you can read individual words, let's move on to reading complete sentences.
          We'll start with simple, short sentences from the Qur'an and common Arabic phrases.
        </p>

        <h3>Sentence Reading Tips</h3>

        <ul>
          <li>Read word by word initially</li>
          <li>Pay attention to word boundaries</li>
          <li>Apply all the rules you've learned</li>
          <li>Focus on smooth transitions between words</li>
        </ul>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-bold mb-4">Simple Qur'anic Sentences</h3>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl mb-2">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيم</div>
            <div className="text-sm">Bismillaahi ar-rahmaani ar-raheem</div>
            <div className="text-xs text-muted-foreground">In the name of Allah, the Most Gracious, the Most Merciful</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">الْحَمْدُ لِلّهِ رَبِّ الْعَالَمِين</div>
            <div className="text-sm">Al-hamdu lillaahi rabbi al-'aalameen</div>
            <div className="text-xs text-muted-foreground">All praise is due to Allah, Lord of the worlds</div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice simple sentences"
        audioSrc="/audio/simple-sentences.mp3"
        arabicText="بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيم"
      />
    </div>
  )
}

function BreathControlLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Breath Control in Reading</h2>

        <p>
          Proper breath control is essential for smooth, flowing recitation. Learning when and where
          to take breaths will improve your reading significantly.
        </p>

        <h3>Breath Control Rules</h3>

        <ol>
          <li><strong>Natural pauses:</strong> Take breaths at the end of verses or logical breaks</li>
          <li><strong>Don't break words:</strong> Never take a breath in the middle of a word</li>
          <li><strong>Don't break meaning:</strong> Avoid breaking closely related words</li>
          <li><strong>Practice regularly:</strong> Build your lung capacity gradually</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Good Breathing Points</h3>
          <div className="space-y-3">
            <div>
              <div className="text-2xl mb-1">الْحَمْدُ لِلّهِ رَبِّ الْعَالَمِين</div>
              <div className="text-sm">✓ End of verse - good place to breathe</div>
            </div>
            <div>
              <div className="text-2xl mb-1">الرَّحْمٰنِ الرَّحِيم</div>
              <div className="text-sm">✓ End of verse - good place to breathe</div>
            </div>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="font-bold mb-4">Avoid Breaking Here</h3>
          <div className="space-y-3">
            <div>
              <div className="text-2xl mb-1">بِسْمِ | اللهِ</div>
              <div className="text-sm">✗ Don't break between closely related words</div>
            </div>
            <div>
              <div className="text-2xl mb-1">الرَّحْ | مٰنِ</div>
              <div className="text-sm">✗ Never break in the middle of a word</div>
            </div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice breath control"
        audioSrc="/audio/breath-control.mp3"
        arabicText="الْحَمْدُ لِلّهِ رَبِّ الْعَالَمِين الرَّحْمٰنِ الرَّحِيم"
      />
    </div>
  )
}

function SentenceFlowLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Sentence Flow and Rhythm</h2>

        <p>
          Developing good sentence flow involves connecting words smoothly and maintaining a
          natural rhythm in your recitation.
        </p>

        <h3>Flow Techniques</h3>

        <ul>
          <li><strong>Smooth transitions:</strong> Connect words naturally</li>
          <li><strong>Consistent pace:</strong> Don't rush or drag</li>
          <li><strong>Natural rhythm:</strong> Follow the Arabic language's natural flow</li>
          <li><strong>Emotional connection:</strong> Understand the meaning to improve flow</li>
        </ul>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-bold mb-4">Practice Sentences for Flow</h3>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-2xl mb-2">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِين</div>
            <div className="text-sm">Iyyaaka na'budu wa iyyaaka nasta'een</div>
            <div className="text-xs text-muted-foreground">You alone we worship, and You alone we ask for help</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">اهْدِنَا الصِّرَاطَ الْمُسْتَقِيم</div>
            <div className="text-sm">Ihdinaa as-siraata al-mustaqeem</div>
            <div className="text-xs text-muted-foreground">Guide us to the straight path</div>
          </div>
        </div>
      </div>

      <PronunciationPractice
        text="Practice sentence flow"
        audioSrc="/audio/sentence-flow.mp3"
        arabicText="إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِين"
      />
    </div>
  )
}

function FluentReadingLesson() {
  return (
    <div className="space-y-6">
      <div className="prose dark:prose-invert max-w-none">
        <h2>Developing Fluent Reading</h2>

        <p>
          Fluent reading combines all the skills you've learned: accurate pronunciation, proper breath control,
          smooth flow, and understanding of the text's meaning.
        </p>

        <h3>Fluency Goals</h3>

        <ul>
          <li>Read without hesitation</li>
          <li>Apply all rules automatically</li>
          <li>Maintain natural rhythm</li>
          <li>Focus on meaning, not just pronunciation</li>
        </ul>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h3 className="font-bold mb-4">Complete Surah Al-Fatihah Practice</h3>
        <div className="text-center space-y-3">
          <div className="text-2xl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيم</div>
          <div className="text-2xl">الْحَمْدُ لِلّهِ رَبِّ الْعَالَمِين</div>
          <div className="text-2xl">الرَّحْمٰنِ الرَّحِيم</div>
          <div className="text-2xl">مَالِكِ يَوْمِ الدِّين</div>
          <div className="text-2xl">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِين</div>
          <div className="text-2xl">اهْدِنَا الصِّرَاطَ الْمُسْتَقِيم</div>
          <div className="text-2xl">صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّين</div>
        </div>
      </div>

      <Assessment
        title="Sentence Construction Assessment"
        questions={[
          {
            id: "q1",
            type: "multiple-choice",
            prompt: "When should you take breaths while reading?",
            options: ["After every word", "At natural pause points", "Never", "Randomly"],
            correctAnswer: "1",
          },
          {
            id: "q2",
            type: "multiple-choice",
            prompt: "What helps with sentence flow?",
            options: ["Reading faster", "Understanding meaning", "Ignoring vowels", "Skipping words"],
            correctAnswer: "1",
          },
        ]}
        onComplete={(score, total) => {
          console.log(`Score: ${score}/${total}`)
        }}
      />

      <PronunciationPractice
        text="Practice fluent reading"
        audioSrc="/audio/fluent-reading.mp3"
        arabicText="بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيم الْحَمْدُ لِلّهِ رَبِّ الْعَالَمِين"
      />
    </div>
  )
}

