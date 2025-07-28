export const curriculumData = {
  phases: [
    {
      title: "Foundation Phase (Days 1-10)",
      description:
        "Master the basic building blocks of Arabic reading, including letters, vowels, and basic combinations.",
      modules: [
        {
          title: "Harakat - Arabic Signs",
          description: "Learn the short vowels and signs that give Arabic letters their sounds.",
          isAvailable: true,
          lessons: [
            { title: "Introduction to Harakat", slug: "intro-to-harakat", isCompleted: false },
            { title: "Fathah (َ)", slug: "fathah", isCompleted: false },
            { title: "Kasrah (ِ)", slug: "kasrah", isCompleted: false },
            { title: "Dammah (ُ)", slug: "dammah", isCompleted: false },
            { title: "Practice with Harakat", slug: "harakat-practice", isCompleted: false },
          ],
        },
        {
          title: "Huruuful-Hijah - Arabic Letters",
          description: "Learn all 28 Arabic letters, their sounds, and articulation points.",
          isAvailable: true,
          lessons: [
            { title: "Introduction to Arabic Letters", slug: "intro-to-letters", isCompleted: false },
            { title: "First Group: ا ب ت ث", slug: "letters-group-1", isCompleted: false },
            { title: "Second Group: ج ح خ", slug: "letters-group-2", isCompleted: false },
            { title: "Third Group: د ذ ر ز", slug: "letters-group-3", isCompleted: false },
            { title: "Fourth Group: س ش ص ض", slug: "letters-group-4", isCompleted: false },
            { title: "Fifth Group: ط ظ ع غ", slug: "letters-group-5", isCompleted: false },
            { title: "Sixth Group: ف ق ك ل", slug: "letters-group-6", isCompleted: false },
            { title: "Seventh Group: م ن ه و ي", slug: "letters-group-7", isCompleted: false },
          ],
        },
        {
          title: "Huruuf Forms",
          description: "Learn how Arabic letters change form based on their position in a word.",
          isAvailable: true,
          lessons: [
            { title: "Letter Positions Overview", slug: "letter-positions", isCompleted: false },
            { title: "Initial Form", slug: "initial-form", isCompleted: false },
            { title: "Medial Form", slug: "medial-form", isCompleted: false },
            { title: "Final Form", slug: "final-form", isCompleted: false },
            { title: "Isolated Form", slug: "isolated-form", isCompleted: false },
            { title: "Connection Rules", slug: "connection-rules", isCompleted: false },
          ],
        },
        {
          title: "Vowels Application",
          description: "Apply vowels to letters and learn to pronounce letter-vowel combinations.",
          isAvailable: true,
          lessons: [
            { title: "Letters with Fathah", slug: "letters-with-fathah", isCompleted: false },
            { title: "Letters with Kasrah", slug: "letters-with-kasrah", isCompleted: false },
            { title: "Letters with Dammah", slug: "letters-with-dammah", isCompleted: false },
            { title: "Tanween (Double Vowels)", slug: "tanween", isCompleted: false },
            { title: "Mixed Vowel Practice", slug: "mixed-vowel-practice", isCompleted: false },
          ],
        },
      ],
    },
    {
      title: "Intermediate Phase (Days 11-20)",
      description: "Build on the foundation to develop more complex reading skills and tajweed awareness.",
      modules: [
        {
          title: "Mudood (Elongations)",
          description: "Learn the rules of elongation in Arabic recitation.",
          isAvailable: true,
          lessons: [
            { title: "Introduction to Mudood", slug: "intro-to-mudood", isCompleted: false },
            { title: "Natural Elongation (Madd Tabee'ee)", slug: "natural-elongation", isCompleted: false },
            { title: "Connected Elongation (Madd Muttasil)", slug: "connected-elongation", isCompleted: false },
            { title: "Separated Elongation (Madd Munfasil)", slug: "separated-elongation", isCompleted: false },
            { title: "Necessary Elongation (Madd Lazim)", slug: "necessary-elongation", isCompleted: false },
          ],
        },
        {
          title: "Sukuun and Non-Vowels",
          description: "Learn about the absence of vowels and its effect on pronunciation.",
          isAvailable: true,
          lessons: [
            { title: "Introduction to Sukuun", slug: "intro-to-sukuun", isCompleted: false },
            { title: "Sukuun on Letters", slug: "sukuun-on-letters", isCompleted: false },
            { title: "Consonant Clusters", slug: "consonant-clusters", isCompleted: false },
            { title: "Special Cases with Sukuun", slug: "special-sukuun-cases", isCompleted: false },
          ],
        },
        {
          title: "Sun and Moon Letters",
          description: "Learn the assimilation rules with the definite article 'Al'.",
          isAvailable: true,
          lessons: [
            { title: "The Definite Article (ال)", slug: "definite-article", isCompleted: false },
            { title: "Sun Letters (Al-Shamshiyah)", slug: "sun-letters", isCompleted: false },
            { title: "Moon Letters (Al-Qomariyyah)", slug: "moon-letters", isCompleted: false },
            { title: "Practice with Sun and Moon Letters", slug: "sun-moon-practice", isCompleted: false },
          ],
        },
        {
          title: "Word Formation",
          description: "Learn to read complete words with proper pronunciation.",
          isAvailable: true,
          lessons: [
            { title: "Simple Words", slug: "simple-words", isCompleted: false },
            { title: "Complex Words", slug: "complex-words", isCompleted: false },
            { title: "Word Recognition", slug: "word-recognition", isCompleted: false },
            { title: "Reading Practice", slug: "reading-practice", isCompleted: false },
          ],
        },
        {
          title: "Sentence Construction",
          description: "Learn to read complete sentences with proper flow.",
          isAvailable: true,
          lessons: [
            { title: "Simple Sentences", slug: "simple-sentences", isCompleted: false },
            { title: "Breath Control", slug: "breath-control", isCompleted: false },
            { title: "Sentence Flow", slug: "sentence-flow", isCompleted: false },
            { title: "Reading Practice", slug: "sentence-reading-practice", isCompleted: false },
          ],
        },
      ],
    },
    {
      title: "Advanced Phase (Days 21-30)",
      description: "Master tajweed rules and develop fluent Qur'anic reading skills.",
      modules: [
        {
          title: "Tajweed Fundamentals",
          description: "Learn the basic principles of tajweed for proper Qur'anic recitation.",
          isAvailable: true,
          lessons: [
            { title: "Introduction to Tajweed", slug: "intro-to-tajweed", isCompleted: false },
            { title: "Importance of Tajweed", slug: "importance-of-tajweed", isCompleted: false },
            { title: "Common Mistakes", slug: "common-mistakes", isCompleted: false },
            { title: "Basic Application", slug: "basic-application", isCompleted: false },
          ],
        },
        {
          title: "Rules of Nun Sakin and Tanween",
          description: "Learn the four rules that apply when encountering a nun sakin or tanween.",
          isAvailable: true,
          lessons: [
            { title: "Izhar (Clear Pronunciation)", slug: "izhar", isCompleted: false },
            { title: "Idgham (Merging)", slug: "idgham", isCompleted: false },
            { title: "Iqlab (Conversion)", slug: "iqlab", isCompleted: false },
            { title: "Ikhfa (Hiding)", slug: "ikhfa", isCompleted: false },
            { title: "Practice with Nun Sakin Rules", slug: "nun-sakin-practice", isCompleted: false },
          ],
        },
        {
          title: "Rules of Meem Sakin",
          description: "Learn the rules that apply when encountering a meem with sukuun.",
          isAvailable: true,
          lessons: [
            { title: "Idgham Shafawi", slug: "idgham-shafawi", isCompleted: false },
            { title: "Ikhfa Shafawi", slug: "ikhfa-shafawi", isCompleted: false },
            { title: "Izhar Shafawi", slug: "izhar-shafawi", isCompleted: false },
            { title: "Practice with Meem Sakin", slug: "meem-sakin-practice", isCompleted: false },
          ],
        },
        {
          title: "Qalqalah",
          description: "Learn the echoing sound for specific letters when they have sukuun.",
          isAvailable: true,
          lessons: [
            { title: "Introduction to Qalqalah", slug: "intro-to-qalqalah", isCompleted: false },
            { title: "Minor Qalqalah", slug: "minor-qalqalah", isCompleted: false },
            { title: "Major Qalqalah", slug: "major-qalqalah", isCompleted: false },
            { title: "Practice with Qalqalah", slug: "qalqalah-practice", isCompleted: false },
          ],
        },
        {
          title: "Rules of Raa (Ahkamu'r-Raa)",
          description: "Learn when to pronounce the letter Raa with tafkheem (heavy) or tarqeeq (light).",
          isAvailable: true,
          lessons: [
            { title: "Heavy Pronunciation of Raa", slug: "heavy-raa", isCompleted: false },
            { title: "Light Pronunciation of Raa", slug: "light-raa", isCompleted: false },
            { title: "Mixed Cases", slug: "mixed-raa-cases", isCompleted: false },
            { title: "Practice with Raa Rules", slug: "raa-rules-practice", isCompleted: false },
          ],
        },
        {
          title: "Special Rules and Symbols",
          description: "Learn special rules and Qur'anic symbols for proper recitation.",
          isAvailable: true,
          lessons: [
            { title: "Hamzatul Wasl", slug: "hamzatul-wasl", isCompleted: false },
            { title: "Stopping Signs", slug: "stopping-signs", isCompleted: false },
            { title: "Special Qur'anic Symbols", slug: "quran-symbols", isCompleted: false },
            { title: "Final Review and Integration", slug: "final-review", isCompleted: false },
          ],
        },
        {
          title: "Integration and Mastery",
          description: "Integrate all learned rules and practice with complete Qur'anic passages.",
          isAvailable: true,
          lessons: [
            { title: "Comprehensive Practice", slug: "comprehensive-practice", isCompleted: false },
            { title: "Surah Recitation", slug: "surah-recitation", isCompleted: false },
            { title: "Error Analysis", slug: "error-analysis", isCompleted: false },
            { title: "Final Assessment", slug: "final-assessment", isCompleted: false },
          ],
        },
      ],
    },
  ],
}

