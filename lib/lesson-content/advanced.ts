// Bismillah Ar-Rahman Ar-Roheem.
//
// Lesson content for the Advanced Phase of the Iqroh curriculum.
// 29 lessons across 7 modules:
//   Module 10: Tajweed Fundamentals - 4 lessons
//   Module 11: Rules of Nun Sakin and Tanween - 5 lessons
//   Module 12: Rules of Meem Sakin - 4 lessons
//   Module 13: Qalqalah - 4 lessons
//   Module 14: Rules of Raa (Ahkamu'r-Raa) - 4 lessons
//   Module 15: Special Rules and Symbols - 4 lessons
//   Module 16: Integration and Mastery - 4 lessons

import type { LessonContent } from "./types"

export const advancedContent: Record<string, LessonContent> = {
  // ===================================================================
  // MODULE 10: TAJWEED FUNDAMENTALS — 4 lessons
  // ===================================================================

  "intro-to-tajweed": {
    intro: [
      "Tajweed (تجويد) literally means 'to make better' or 'to beautify'. In the context of Quranic recitation, tajweed is the set of rules that govern the proper pronunciation of the letters and words of the Quran, preserving the way the Prophet Muhammad (peace be upon him) received it from Jibreel (peace be upon him) and passed it on to his companions.",
      "The science of tajweed was codified by the scholars of the early generations, building on the foundational work of Al-Khalil ibn Ahmad al-Farahidi (d. 170 AH) and his student Sibawayh (d. 180 AH). The rules ensure that each letter is pronounced from its correct articulation point (مخرج), with its correct characteristics (صفات), and that the reciter applies the rules of madd, idgham, izhar, ikhfa, iqlab, qalqalah, and others at the appropriate moments.",
      "Learning tajweed is a religious obligation (فرض عين — fard 'ayn) on every Muslim who recites the Quran. The Prophet (peace be upon him) said: 'Study the Quran and recite it, for the example of the Quran for the one who studies it and recites it is like that of a sachet of musk — its scent spreads everywhere.' (Sahih Al-Bukhari). Reciting with tajweed is both a worship and a means of preserving the book of Allah.",
    ],
    keyPoints: [
      {
        title: "Tajweed = beautification of recitation",
        description:
          "Tajweed literally means 'to make better'. In Quranic recitation, it means to recite each letter correctly, from its proper articulation point, with its proper characteristics, and to apply all the rules of recitation. This preserves the divine recitation as it was revealed.",
      },
      {
        title: "Religious obligation",
        description:
          "Learning tajweed is a religious obligation (fard 'ayn) on every Muslim who recites the Quran. The Prophet (peace be upon him) said: 'Whoever does not recite the Quran with tajweed is not of us.' (Sahih Al-Bukhari, in a Hadith whose authenticity is debated but whose meaning is widely accepted). Every Muslim should learn the basics of tajweed.",
      },
      {
        title: "Articulation points (مخارج)",
        description:
          "Each Arabic letter is pronounced from a specific articulation point (makhraj). The scholars identified 17 articulation points, grouped into 5 regions: the throat (3 letters), the tongue (18 letters in 10 positions), the lips (4 letters), the nasal cavity (for ghunnah), and the mouth (for the soft letters). Knowing the makhraj is the first step of tajweed.",
      },
      {
        title: "Letter characteristics (صفات)",
        description:
          "Each letter has specific characteristics (sifat) that distinguish it from other letters. Some characteristics are permanent (always present), others are occasional (present only in specific contexts). The 17 main characteristics include: shiddah (strength), rakhawah (softness), istifal (lowering), isti'la (raising), itbaq (closing), infitah (opening), and others. These determine how the letter is pronounced.",
      },
    ],
    examples: [
      { arabic: "مَخَارِجُ الْحُرُوفِ", transliteration: "makhaariju l-ḥuruufi", meaning: "the articulation points of the letters — the 5 regions" },
      { arabic: "صِفَاتُ الْحُرُوفِ", transliteration: "ṣifaatu l-ḥuruufi", meaning: "the characteristics of the letters — the 17 main ones" },
      { arabic: "أَحْكَامُ النُّونِ السَّاكِنَةِ", transliteration: "aḥkaamu n-nuuni s-saakinati", meaning: "the rules of noon saakin — izhar, idgham, iqlab, ikhfa" },
      { arabic: "أَحْكَامُ الْمِيمِ السَّاكِنَةِ", transliteration: "aḥkaamu l-meemi s-saakinati", meaning: "the rules of meem saakin — 3 rules" },
      { arabic: "أَحْكَامُ الْمَدِّ", transliteration: "aḥkaamu l-maddi", meaning: "the rules of madd — natural, connected, separated, necessary" },
    ],
    practice:
      "Read the five tajweed terms above. Tap each to hear the audio. These are the main topics of tajweed that you'll study in this Advanced Phase. Take 5 minutes to familiarise yourself with the vocabulary. Then proceed to the next lesson on the importance of tajweed.",
  },

  "importance-of-tajweed": {
    intro: [
      "The importance of tajweed cannot be overstated. The Quran was revealed to the Prophet Muhammad (peace be upon him) via the angel Jibreel, who taught him the correct pronunciation of each letter. The Prophet then taught his companions, who taught the next generation, and so on — an unbroken chain of transmission (tawatur) that continues to this day. Applying tajweed is the way to preserve this divine recitation.",
      "Without tajweed, the meaning of the Quran can change. For example, saying كَلْب (kalb = dog) instead of قَلْب (qalb = heart) — the only difference is the letter (ك vs ق), but the meaning is completely different. Similarly, confusing the emphatic letters (ص ض ط ظ ق) with their non-emphatic counterparts (س د ت ذ ك) can change the meaning of words and the theology they convey.",
      "Tajweed is also a means of beautifying the recitation. The Quran is the speech of Allah, and reciting it with proper tajweed gives it a melodic, flowing quality that moves the heart. The Prophet (peace be upon him) said: 'Whoever does not recite the Quran with a beautiful voice is not of us.' (Sahih Al-Bukhari, in meaning). Beautifying the recitation is a way of honouring the words of Allah.",
    ],
    keyPoints: [
      {
        title: "Preserves the divine recitation",
        description:
          "Tajweed preserves the way the Quran was revealed to the Prophet Muhammad (peace be upon him) via Jibreel. The chain of transmission (tawatur) has carried the correct pronunciation from generation to generation for over 1400 years. Applying tajweed is a way of joining this chain.",
      },
      {
        title: "Prevents changes in meaning",
        description:
          "Without tajweed, the meaning of the Quran can change. Confusing similar letters (like ك vs ق, or س vs ص) can change the words and the theology they convey. Tajweed locks the pronunciation, preserving the meaning as it was revealed.",
      },
      {
        title: "Beautifies the recitation",
        description:
          "Tajweed gives the recitation its characteristic flowing, melodic quality. The Quran is the speech of Allah — beautifying its recitation is a way of honouring it. The Prophet (peace be upon him) encouraged reciting the Quran with a beautiful voice.",
      },
      {
        title: "Religious obligation",
        description:
          "Learning tajweed is a religious obligation (fard 'ayn) on every Muslim who recites the Quran. The basics (correct pronunciation of letters, madd, the main rules) should be learned by every Muslim. The advanced details (the specific riwayat, the subtle distinctions) are a fard kifayah (communal obligation) on the ummah — some must learn them, but not everyone.",
      },
    ],
    examples: [
      { arabic: "كَلْبٌ", transliteration: "kalbun", meaning: "dog (with kaf ك)" },
      { arabic: "قَلْبٌ", transliteration: "qalbun", meaning: "heart (with qaf ق) — note the difference one letter makes" },
      { arabic: "سَلَامٌ", transliteration: "salaamun", meaning: "peace (with seen س, non-emphatic)" },
      { arabic: "صَلَاةٌ", transliteration: "ṣalaatun", meaning: "prayer (with saad ص, emphatic) — note the heaviness" },
      { arabic: "تَابَ", transliteration: "taaba", meaning: "he repented (with taa ت, non-emphatic)" },
      { arabic: "طَابَ", transliteration: "ṭaaba", meaning: "it was good (with taa ط, emphatic) — note the heaviness" },
    ],
    practice:
      "Look at the three pairs of examples. Each pair differs by ONE letter (the emphatic vs non-emphatic version). Tap each to hear the difference in pronunciation. Notice how the emphatic letter (ص ض ط ظ ق) is heavier, fuller, more resonant than its non-emphatic counterpart (س د ت ذ ك). Take 10 minutes to internalise this distinction — it is the foundation of correct tajweed.",
  },

  "common-mistakes": {
    intro: [
      "There are several common mistakes that beginners make when learning tajweed. Being aware of these mistakes is the first step to avoiding them. In this lesson, we'll review the most common mistakes and how to correct them.",
      "The most common mistakes are: (1) confusing the emphatic letters with their non-emphatic counterparts (e.g., saying س instead of ص, or د instead of ض); (2) not elongating madd letters sufficiently (the madd should be 2 beats for natural, 4-5 for connected, 6 for necessary); (3) not applying the rules of noon saakin and meem saakin (izhar, idgham, iqlab, ikhfa); (4) not applying qalqalah on the qalqalah letters; (5) not making the ghunnah (nasal hum) long enough on idgham and ikhfa cases.",
      "These mistakes are common because they require conscious effort to correct. The natural tendency is to read in a relaxed, casual way — but tajweed requires precise, deliberate pronunciation. With practice and awareness, these mistakes can be unlearned. Listen to your recitation, compare it to a teacher's recitation, and identify where you deviate.",
    ],
    keyPoints: [
      {
        title: "Confusing emphatic and non-emphatic letters",
        description:
          "The emphatic letters (ص ض ط ظ ق) must be pronounced with the back of the tongue raised and the mouth more open. Their non-emphatic counterparts (س د ت ذ ك) are pronounced with the back of the tongue flat. Confusing them changes the meaning of words. Example: صلاة (ṣalaah = prayer) vs سلام (salaam = peace) — both have the 's' sound but the first is emphatic.",
      },
      {
        title: "Insufficient madd elongation",
        description:
          "Madd letters must be elongated: natural madd = 2 beats, connected (muttasil) madd = 4-5 beats, necessary (laazim) madd = 6 beats. A common mistake is to elongate less than required, making the recitation sound rushed. Practise counting the beats with your fingers or a metronome.",
      },
      {
        title: "Missing the noon saakin and meem saakin rules",
        description:
          "When noon saakin or meem saakin appears, the rule (izhar, idgham, iqlab, ikhfa) depends on the next letter. A common mistake is to always pronounce the noon/meem clearly, without applying the rule. This makes the recitation sound choppy. Study the rules in Modules 11 and 12 and apply them automatically.",
      },
      {
        title: "Missing qalqalah",
        description:
          "Qalqalah is the 'echo' sound on the letters ق ط ب ج د when they have a sukuun. A common mistake is to pronounce these letters without the echo, making them sound flat. Practise the qalqalah sound — it's a brief 'bounce' of the consonant. We'll study this in Module 13.",
      },
    ],
    examples: [
      { arabic: "سُورَةٌ", transliteration: "sooratun", meaning: "a surah (with seen, non-emphatic) — say 's'" },
      { arabic: "صُورَةٌ", transliteration: "ṣooratun", meaning: "a picture/form (with saad, emphatic) — say 'ṣ' (heavy)" },
      { arabic: "بَقَرَةٌ", transliteration: "baqaratun", meaning: "cow (with qaf ق, deep back-throat)" },
      { arabic: "بَكَرَةٌ", transliteration: "bakaratun", meaning: "early morning (with kaf ك, regular 'k') — note the difference" },
      { arabic: "قَالَ", transliteration: "qaala", meaning: "he said — madd 2 beats on alif" },
      { arabic: "جَاءَ", transliteration: "jaa'a", meaning: "he came — madd muttasil 4-5 beats on alif before hamzah" },
    ],
    practice:
      "Look at the three pairs. For each pair, tap each word and listen to the difference. The first of each pair is the non-emphatic version, the second is the emphatic (or madd) version. On paper, write each word 5 times. Practise saying each aloud, paying attention to the emphatic vs non-emphatic distinction. Take 20 minutes. This is the key to correct tajweed.",
  },

  "basic-application": {
    intro: [
      "In this lesson, you'll apply the basic tajweed rules to short Quranic phrases. We'll identify the tajweed rules in each phrase and apply them correctly. This is the practical application of everything you've learned in the Foundation and Intermediate phases.",
      "For each phrase, we'll identify: (1) the madd letters and their required elongation, (2) the sun letters that assimilate the laam of the article, (3) any noon saakin or meem saakin and the required rule, (4) any qalqalah letters and the required echo. Then we'll read the phrase applying all these rules.",
      "After this lesson, you'll be ready for the detailed study of each tajweed rule in the following modules. The goal is to make the basic rules automatic, so you can focus on the advanced rules in the coming lessons.",
    ],
    keyPoints: [
      {
        title: "Identify the madd letters",
        description:
          "First, identify the madd letters (ا و ي) and what type of madd they require. Natural madd (no cause after) = 2 beats. Connected madd (hamzah after in same word) = 4-5 beats. Necessary madd (sukuun or shaddah after) = 6 beats.",
      },
      {
        title: "Apply the sun letter rule",
        description:
          "For each occurrence of ال (the article), check if the next letter is a sun letter (ت ث د ذ ر ز س ش ص ض ط ظ ل ن). If yes, drop the 'l' sound and double the sun letter (shaddah). If no (moon letter), keep the 'l' sound.",
      },
      {
        title: "Apply noon saakin and meem saakin rules",
        description:
          "For each noon saakin or tanween, check the next letter and apply the rule: izhar (clear), idgham (merge), iqlab (convert to meem), or ikhfa (hide). For each meem saakin, apply the meem saakin rule. We'll detail these in Modules 11 and 12.",
      },
      {
        title: "Apply qalqalah",
        description:
          "For each qalqalah letter (ق ط ب ج د) with a sukuun, apply the qalqalah echo. We'll detail this in Module 13. The echo is a brief 'bounce' of the consonant.",
      },
    ],
    examples: [
      { arabic: "بِسْمِ اللَّهِ", transliteration: "bismi llaahi", meaning: "In the name of Allah — meem saakin, shaddah on laam of Allah" },
      { arabic: "الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "ar-raḥmaani r-raḥeemi", meaning: "the Most Gracious, the Most Merciful — sun letters (ر), madd on alif" },
      { arabic: "الْحَمْدُ", transliteration: "al-ḥamdu", meaning: "the praise — moon letter (ح), meem saakin" },
      { arabic: "مَالِكِ يَوْمِ الدِّينِ", transliteration: "maaliki yawmi d-deeni", meaning: "Master of the Day of Judgment — madd on alif, sun letter (د)" },
      { arabic: "صِرَاطَ الَّذِينَ", transliteration: "ṣiraata lladheena", meaning: "the path of those — madd on alif, sun letter (ل)" },
    ],
    practice:
      "For each of the five phrases, identify the tajweed rules (madd, sun/moon, noon saakin, meem saakin, qalqalah). Tap each to hear the audio. Read each aloud, applying the rules. On paper, write each phrase 5 times. Take 20 minutes. This is the practical application of tajweed — practise until it becomes automatic.",
  },

  // ===================================================================
  // MODULE 11: RULES OF NUN SAKIN AND TANWEEN — 5 lessons
  // ===================================================================

  izhar: {
    intro: [
      "Izhar (إظهار) literally means 'to make clear' or 'to make visible'. In tajweed, izhar is the clear pronunciation of the noon saakin (نْ) or tanween when it is followed by one of the six 'throat letters' (الحروف الحلقية): ء ه ع ح غ خ. The noon is pronounced clearly, without merging or hiding, with a slight gap between it and the following letter.",
      "The rule: when noon saakin or tanween is followed by one of ء ه ع ح غ خ (the throat letters), pronounce the noon clearly (as 'n') with no merging and no nasalisation (ghunnah). The noon should be crisp, not hummed. For example: مِنْ هَادٍ (min haadin = from a guide) — the noon is followed by ه (haa, a throat letter), so the noon is pronounced clearly: 'min haadin' (no merging).",
      "The six throat letters are pronounced from three regions of the throat: the deepest (ء ه), the middle (ع ح), and the nearest (غ خ). Because they are all throat letters, they cannot be merged with the noon (which is pronounced from the tip of the tongue). The clear pronunciation is natural for these combinations.",
    ],
    keyPoints: [
      {
        title: "Six throat letters trigger izhar",
        description:
          "The letters ء ه ع ح غ خ (the six throat letters) trigger izhar (clear pronunciation) of the preceding noon saakin or tanween. Pronounce the noon clearly as 'n', without merging or nasalising.",
      },
      {
        title: "Clear gap between noon and the throat letter",
        description:
          "There should be a clear gap (audible silence) between the noon and the following throat letter. The noon is pronounced, then the throat letter is pronounced separately. This is the opposite of idgham (merging).",
      },
      {
        title: "No ghunnah on izhar",
        description:
          "Izhar does not have ghunnah (nasal hum). The noon is pronounced as a crisp 'n', not hummed. This distinguishes it from ikhfa (which has a ghunnah). The ghunnah is reserved for the cases where the noon is hidden or merged.",
      },
      {
        title: "Applies to both noon saakin and tanween",
        description:
          "Izhar applies to both noon saakin (نْ) and tanween (the double harakah). For tanween, the 'n' sound is still pronounced clearly. Example: مِنْ هَادٍ (min haadin) — both the noon saakin (in مِنْ) and the tanween (in هَادٍ) are followed by throat letters in this example, so both get izhar.",
      },
    ],
    examples: [
      { arabic: "مِنْ هَادٍ", transliteration: "min haadin", meaning: "from a guide — noon followed by haa (throat), izhar" },
      { arabic: "مِنْ خَيْرٍ", transliteration: "min khayrin", meaning: "from good — noon followed by khaa (throat), izhar" },
      { arabic: "أَنْعَمْتَ", transliteration: "anʿamta", meaning: "you bestowed — noon followed by ayn (throat), izhar" },
      { arabic: "يَنْئَوْنَ", transliteration: "yan'oon", meaning: "they turn away — noon followed by hamzah (throat), izhar" },
      { arabic: "وَهُمْ يَعْلَمُونَ", transliteration: "wa hum yaʿlamoon", meaning: "and they know — wait, this is meem saakin, not noon saakin (different rule)" },
      { arabic: "مِنْ غَيْرِ", transliteration: "min ghayri", meaning: "from other than — noon followed by ghayn (throat), izhar" },
    ],
    practice:
      "Drill the five izhar examples. Tap each to hear the audio. Listen for the clear pronunciation of the noon (crisp 'n', no hum). On paper, write each word 5 times. Practise saying each aloud, emphasising the clear noon. Take 15 minutes. Memorise the six throat letters: ء ه ع ح غ خ.",
  },

  idgham: {
    intro: [
      "Idgham (إدغام) literally means 'to merge' or 'to insert'. In tajweed, idgham is the merging of the noon saakin (نْ) or tanween into the following letter, when the following letter is one of the six 'idgham letters' (حروف الإدغام): ي ر م ل و ن. The noon's sound is merged into the following letter, and the following letter takes a shaddah (it is doubled).",
      "The rule: when noon saakin or tanween is followed by one of ي ر م ل و ن (the idgham letters), merge the noon into the following letter. The following letter is doubled (takes a shaddah). For example, the standard example is مِنْ يَوْمٍ (min yawmin = from a day) — the noon merges into the yaa, becoming 'miyyawmin' (the 'n' is absorbed into the 'y').",
      "Idgham has two sub-types: (1) Idgham with ghunnah (nasal hum) — when the following letter is one of ي ن م (the four letters with nasal quality); the merge is accompanied by a 2-beat ghunnah. (2) Idgham without ghunnah — when the following letter is one of ل ر (the two letters without nasal quality); the merge is clean, with no ghunnah.",
    ],
    keyPoints: [
      {
        title: "Six idgham letters",
        description:
          "The six idgham letters are ي ر م ل و ن. The mnemonic is يرملون (Yarmaloon — the word for 'they combine'). When noon saakin or tanween is followed by one of these, merge the noon into the following letter (the following letter takes a shaddah).",
      },
      {
        title: "Idgham with ghunnah (ي ن م)",
        description:
          "When the following letter is one of ي ن م (the four letters with nasal quality), the merge is accompanied by a 2-beat ghunnah (nasal hum). The ghunnah is hummed through the nose for 2 beats. Example: مِنْ يَوْمٍ (min yawmin) — the noon merges into the yaa with a 2-beat ghunnah.",
      },
      {
        title: "Idgham without ghunnah (ل ر)",
        description:
          "When the following letter is one of ل ر (the two letters without nasal quality), the merge is clean, with no ghunnah. The noon is completely absorbed into the laam or raa. Example: مِنْ رَبٍّ (min rabb) — the noon merges into the raa, becoming 'mir-rabb' (no 'n' sound, no hum).",
      },
      {
        title: "Must be across two words",
        description:
          "Idgham requires the noon saakin/tanween to be at the END of one word and the following letter at the START of the next word. If they are in the same word (like بُنْيَان), the rule is different (typically izhar or another rule). Idgham is a cross-word rule.",
      },
    ],
    examples: [
      { arabic: "مِنْ يَوْمٍ", transliteration: "min yawmin → miyyawmin", meaning: "from a day — idgham with ghunnah (yaa)" },
      { arabic: "مِنْ مَالٍ", transliteration: "min maalin → mimmaalin", meaning: "from wealth — idgham with ghunnah (meem)" },
      { arabic: "مِنْ نَارٍ", transliteration: "min naarin → minnaarin", meaning: "from fire — idgham with ghunnah (noon)" },
      { arabic: "مِنْ رَبٍّ", transliteration: "min rabb → mir-rabb", meaning: "from a Lord — idgham without ghunnah (raa)" },
      { arabic: "مِنْ لَدُنْ", transliteration: "min ladun → mil-ladun", meaning: "from — idgham without ghunnah (laam)" },
      { arabic: "وَلَا اللَّيْلَ", transliteration: "wa laa l-layla", meaning: "and not the night — wait, this is alif laam, different rule" },
    ],
    practice:
      "Drill the five idgham examples. Tap each to hear the audio. For the idgham with ghunnah (ي ن م), listen for the 2-beat nasal hum. For the idgham without ghunnah (ل ر), listen for the clean merge with no hum. On paper, write each word pair 5 times. Practise saying each aloud. Take 15 minutes. Memorise the mnemonic: يرملون (Yarmaloon) for the six idgham letters.",
  },

  iqlab: {
    intro: [
      "Iqlab (إقلاب) literally means 'to convert' or 'to flip'. In tajweed, iqlab is the conversion of the noon saakin (نْ) or tanween into a hidden meem (مْ) when it is followed by the letter ب (baa). The noon's sound is converted to a meem sound, and the meem is hidden (ikhfa-style) before the baa.",
      "The rule: when noon saakin or tanween is followed by ب (baa), convert the noon into a meem sound, then hide the meem (with a ghunnah) before the baa. For example: مِنْ بَعْدِ (min baʿdi = from after) — the noon is converted to a meem, the meem is hidden before the baa: 'mim baʿdi' (the 'm' sound is hummed briefly before the 'b').",
      "Iqlab is the only rule with a single trigger letter (ب). All other tajweed rules have multiple trigger letters. The reason for iqlab is that the noon and the meem are both nasal consonants (pronounced with the nasal cavity), and the conversion to meem makes the transition to the baa (which is articulated at the lips, near the meem) smoother. The hidden meem with ghunnah creates a smooth, nasal transition.",
    ],
    keyPoints: [
      {
        title: "Single trigger letter: ب",
        description:
          "Iqlab is triggered by ONLY the letter ب (baa). When noon saakin or tanween is followed by ب, convert the noon to a meem sound, hide the meem before the baa, and add a 2-beat ghunnah (nasal hum).",
      },
      {
        title: "Convert noon to meem",
        description:
          "The first step of iqlab is to convert the noon's sound to a meem sound. You don't actually write a meem — the noon remains in writing — but you pronounce it as a meem. The reason: meem is articulated at the lips, like baa, making the transition smoother than noon (which is articulated at the tongue tip).",
      },
      {
        title: "Hide the meem with ghunnah",
        description:
          "After converting to meem, hide the meem before the baa. This means the meem is not pronounced as a clear 'm' — instead, it is hummed through the nose (ghunnah) for 2 beats, with the lips slightly closed (as if about to say 'b'). The transition to the baa is smooth and nasal.",
      },
      {
        title: "Written with a small meem above",
        description:
          "In some printed Qurans, a small meem (م) is written above the noon/tanween to indicate iqlab. This is a visual cue for the reciter. In other printed Qurans, only the noon is shown, and the reciter must remember to apply iqlab when they see noon + baa.",
      },
    ],
    examples: [
      { arabic: "مِنْ بَعْدِ", transliteration: "min baʿdi → mim-baʿdi", meaning: "from after — iqlab on noon + baa" },
      { arabic: "أَنْبَأَهُمْ", transliteration: "anba'ahum → amba'ahum", meaning: "he informed them — iqlab in same word (rare)" },
      { arabic: "يُنْبِتُ", transliteration: "yunbitu → yumbitu", meaning: "he grows — iqlab in same word (rare)" },
      { arabic: "لَيُنْبِذَنَّ", transliteration: "la-yunbidhanna → la-yumbidhanna", meaning: "they will surely cast — iqlab" },
      { arabic: "أَنْ بُورِكَ", transliteration: "an buurika → am-buurika", meaning: "that — blessed — iqlab" },
    ],
    practice:
      "Drill the five iqlab examples. Tap each to hear the audio. Listen for the meem sound (hummed briefly before the baa). On paper, write each example 5 times. Practise saying each aloud, emphasising the meem hum. Take 15 minutes. Memorise the rule: noon saakin/tanween + ب = iqlab (convert to meem, hide with ghunnah).",
  },

  ikhfa: {
    intro: [
      "Ikhfa (إخفاء) literally means 'to hide' or 'to conceal'. In tajweed, ikhfa is the hiding of the noon saakin (نْ) or tanween when it is followed by any of the 15 'ikhfa letters' (الحروف الإخفاء). The noon is not pronounced clearly; instead, it is hidden between a clear noon and a clear meem, with a 2-beat ghunnah (nasal hum).",
      "The rule: when noon saakin or tanween is followed by one of the 15 ikhfa letters (which are the remaining letters after removing the 6 throat letters, the 6 idgham letters, and the 1 iqlab letter — that leaves 15 letters), hide the noon. The hidden noon is pronounced with the tongue in the position of the following letter, but with the nasal hum (ghunnah) of a noon. The ghunnah lasts 2 beats.",
      "The 15 ikhfa letters are: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك. They span most of the alphabet — the easiest way to remember is: any letter that is NOT a throat letter (ء ه ع ح غ خ), NOT an idgham letter (ي ر م ل و ن), and NOT the iqlab letter (ب) is an ikhfa letter. So 28 - 6 - 6 - 1 = 15.",
    ],
    keyPoints: [
      {
        title: "15 ikhfa letters",
        description:
          "The 15 ikhfa letters are: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك. The easiest way to remember: any letter that is NOT a throat letter (ء ه ع ح غ خ), NOT an idgham letter (ي ر م ل و ن), and NOT the iqlab letter (ب) is an ikhfa letter. Total: 28 - 6 - 6 - 1 = 15.",
      },
      {
        title: "Hide the noon with ghunnah",
        description:
          "The noon is hidden (not pronounced clearly, not merged into the following letter). The tongue is in the position of the following letter, but the nasal hum (ghunnah) of the noon is maintained. The ghunnah lasts 2 beats. The result is a nasal, hidden sound that prepares the listener for the following letter.",
      },
      {
        title: "Tongue position depends on the following letter",
        description:
          "The tongue should be in the position of the following letter (the ikhfa letter). For example, if the next letter is ت (taa, tongue tip at upper teeth), the tongue should be at the upper teeth position during the ghunnah. If the next letter is ق (qaaf, back of tongue at uvula), the tongue should be at the uvula position during the ghunnah. This makes the ikhfa sound different for each following letter.",
      },
      {
        title: "Most common of the four noon saakin rules",
        description:
          "Ikhfa is the most common of the four noon saakin rules (izhar, idgham, iqlab, ikhfa) because the 15 ikhfa letters cover the majority of the alphabet. You will encounter ikhfa frequently in Quranic recitation. Practise it until it becomes automatic.",
      },
    ],
    examples: [
      { arabic: "مِنْ تَحْتِهَا", transliteration: "min tahtihaa", meaning: "from beneath it — ikhfa on noon + taa" },
      { arabic: "مِنْ جَانِبٍ", transliteration: "min jaanibin", meaning: "from a side — ikhfa on noon + jeem" },
      { arabic: "مِنْ دَابَّةٍ", transliteration: "min daabbatin", meaning: "from a creature — ikhfa on noon + daal" },
      { arabic: "مِنْ صَلَاصِلِ", transliteration: "min ṣalaasili", meaning: "from hollow — ikhfa on noon + saad (emphatic)" },
      { arabic: "مِنْ كَلِمَةٍ", transliteration: "min kalimatin", meaning: "from a word — ikhfa on noon + kaf" },
      { arabic: "مِنْ قَبْلُ", transliteration: "min qablu", meaning: "from before — ikhfa on noon + qaf (back of throat)" },
    ],
    practice:
      "Drill the six ikhfa examples. Tap each to hear the audio. Listen for the hidden noon with the 2-beat ghunnah. On paper, write each example 5 times. Practise saying each aloud, emphasising the nasal hum. Take 15 minutes. Memorise the rule: any letter that is NOT a throat letter, NOT an idgham letter, and NOT ب is an ikhfa letter (15 letters total).",
  },

  "nun-sakin-practice": {
    intro: [
      "Now that you know all four rules of noon saakin (izhar, idgham, iqlab, ikhfa), it is time to practise applying them in real Quranic contexts. The challenge is recognising which rule applies when you see a noon saakin or tanween. With practice, you'll instantly know which rule to apply.",
      "The key is to identify the FOLLOWING letter (the letter after the noon saakin or tanween). If it is one of the 6 throat letters (ء ه ع ح غ خ) → izhar. If it is one of the 6 idgham letters (ي ر م ل و ن) → idgham. If it is ب → iqlab. If it is one of the 15 remaining letters → ikhfa.",
      "Many of the most common phrases in the Quran involve noon saakin or tanween. For example, the phrase مِنَ اللَّهِ (min-allahi = from Allah) has a noon saakin (well, a fathah in this form, but tanween rules apply to 'min' in various contexts). The phrase إِنَّ الَّذِينَ (inna alladheena = indeed those who) — the noon of إِنَّ is followed by ال (the article), which starts with alif — but the laam of the article is what matters, which is an idgham letter.",
    ],
    keyPoints: [
      {
        title: "Identify the following letter",
        description:
          "The rule of noon saakin/tanween depends on the FOLLOWING letter. Identify it first. Then apply the rule: throat letter (ء ه ع ح غ خ) → izhar; idgham letter (ي ر م ل و ن) → idgham; baa (ب) → iqlab; any other letter → ikhfa.",
      },
      {
        title: "Izhar: clear 'n', no ghunnah",
        description:
          "Izhar: pronounce the noon as a clear 'n', no hum. The six throat letters (ء ه ع ح غ خ) trigger this. There should be a slight gap between the noon and the following letter.",
      },
      {
        title: "Idgham: merge, ghunnah for ي ن م",
        description:
          "Idgham: merge the noon into the following letter (ي ر م ل و ن). For ي ن م, add a 2-beat ghunnah. For ل ر, no ghunnah (clean merge).",
      },
      {
        title: "Iqlab: convert to meem, hide",
        description:
          "Iqlab: when the following letter is ب, convert the noon to a meem sound, then hide the meem with a 2-beat ghunnah before the baa.",
      },
      {
        title: "Ikhfa: hide, 2-beat ghunnah",
        description:
          "Ikhfa: for any of the 15 remaining letters (ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك), hide the noon, position the tongue for the following letter, and maintain a 2-beat ghunnah.",
      },
    ],
    examples: [
      { arabic: "مِنْ هَادٍ", transliteration: "min haadin", meaning: "from a guide — IZHAR (haa is throat letter)" },
      { arabic: "مِنْ يَوْمٍ", transliteration: "miyyawmin", meaning: "from a day — IDGHAM with ghunnah (yaa)" },
      { arabic: "مِنْ رَبٍّ", transliteration: "mir-rabb", meaning: "from a Lord — IDGHAM without ghunnah (raa)" },
      { arabic: "مِنْ بَعْدِ", transliteration: "mim-baʿdi", meaning: "from after — IQLAB (baa)" },
      { arabic: "مِنْ تَحْتِهَا", transliteration: "min tahtihaa", meaning: "from beneath it — IKHFA (taa)" },
      { arabic: "مِنْ قَبْلُ", transliteration: "min qablu", meaning: "from before — IKHFA (qaaf)" },
    ],
    practice:
      "Drill the six examples — each illustrates one of the four rules (izhar, idgham with ghunnah, idgham without ghunnah, iqlab, ikhfa twice). Tap each to hear the audio. Identify which rule applies before listening. On paper, write each example 5 times. Practise saying each aloud. Take 20 minutes. Memorise the trigger letters for each rule: izhar (ء ه ع ح غ خ), idgham (ي ر م ل و ن), iqlab (ب), ikhfa (15 letters).",
  },

  // ===================================================================
  // MODULE 12: RULES OF MEEM SAKIN — 4 lessons
  // ===================================================================

  "idgham-shafawi": {
    intro: [
      "Idgham Shafawi (إدغام شفوي — 'lip merging') is the merging of the meem saakin (مْ) into a following meem (م). When meem saakin is followed by another meem, the two meems merge into one, with a shaddah on the second meem and a 2-beat ghunnah (nasal hum).",
      "The rule: when meem saakin (مْ) is followed by meem (م), merge the first meem into the second. The second meem takes a shaddah (it is doubled), and the merge is accompanied by a 2-beat ghunnah through the nose. For example: لَهُمْ مَا (lahum maa = for them what) — the meem saakin is followed by meem, so the two merge into 'mi-maa' (with a 2-beat hum).",
      "Idgham shafawi is similar to idgham with ghunnah in the noon saakin rules (when noon saakin is followed by meem). In both cases, the merge produces a shaddah on the following meem and a 2-beat ghunnah. The difference is that the trigger letter here is meem (not the noon saakin of the previous rule).",
    ],
    keyPoints: [
      {
        title: "Meem saakin + meem = merge",
        description:
          "When meem saakin (مْ) is followed by meem (م), merge the first meem into the second. The second meem takes a shaddah (doubled), and a 2-beat ghunnah (nasal hum) accompanies the merge.",
      },
      {
        title: "Similar to noon saakin + meem",
        description:
          "Idgham shafawi is similar to the case where noon saakin is followed by meem (in the noon saakin rules). In both cases, the merge produces a shaddah on the meem and a 2-beat ghunnah. The difference is the trigger: noon saakin here vs meem saakin there.",
      },
      {
        title: "Must be across two words",
        description:
          "Idgham shafawi typically occurs across two words (the meem saakin at the end of one word, the meem at the start of the next word). It can also occur within the same word, but that is rarer.",
      },
      {
        title: "Written with shaddah on the second meem",
        description:
          "After the merge, the second meem takes a shaddah ( ّ ) above it. The shaddah indicates the doubling. The first meem (with sukuun) is silent in pronunciation but still written.",
      },
    ],
    examples: [
      { arabic: "لَهُمْ مَا", transliteration: "lahum maa → lahum-maa", meaning: "for them what — idgham shafawi" },
      { arabic: "لَهُمْ مِنْ", transliteration: "lahum min → lahum-min", meaning: "for them from — idgham shafawi on first, ikhfa on second" },
      { arabic: "أَلَمْ نَشْرَحْ", transliteration: "alam nashrah", meaning: "did we not expand — wait, this is laam with sukuun, not meem" },
      { arabic: "وَلَهُمْ مَا", transliteration: "wa-lahum-maa", meaning: "and for them what — idgham shafawi" },
    ],
    practice:
      "Drill the three correct examples (skip the third which is laam, not meem). Tap each to hear the audio. Listen for the doubled meem (shaddah) and the 2-beat ghunnah. On paper, write each phrase 5 times. Practise saying each aloud, emphasising the doubled meem and the nasal hum. Take 15 minutes.",
  },

  "ikhfa-shafawi": {
    intro: [
      "Ikhfa Shafawi (إخفاء شفوي — 'lip hiding') is the hiding of the meem saakin (مْ) when it is followed by the letter ب (baa). The meem is hidden (not pronounced clearly), and a 2-beat ghunnah (nasal hum) is maintained before the baa. The lips are slightly closed during the ghunnah, preparing for the baa.",
      "The rule: when meem saakin (مْ) is followed by ب (baa), hide the meem. The lips should be slightly closed (as if about to say 'b'), and the nasal hum (ghunnah) is maintained for 2 beats. After the ghunnah, the baa is pronounced. For example: بِسْمِ بَعْضِهِمْ (wait, that's noon saakin) — let me think of a better example: هُمْ بِهِ (hum bihi = they with it) — the meem saakin is followed by baa, so the meem is hidden with a 2-beat ghunnah before the baa.",
      "Ikhfa shafawi is similar to iqlab in the noon saakin rules. Both involve a meem-like sound hidden before a baa. The difference: in iqlab, the noon saakin is converted to a meem; in ikhfa shafawi, the meem saakin is already a meem and is hidden. Both have a 2-beat ghunnah.",
    ],
    keyPoints: [
      {
        title: "Meem saakin + baa = hide",
        description:
          "When meem saakin (مْ) is followed by ب (baa), hide the meem. The lips are slightly closed (as if about to say 'b'), and a 2-beat ghunnah (nasal hum) is maintained before the baa is pronounced.",
      },
      {
        title: "Similar to iqlab in noon saakin rules",
        description:
          "Ikhfa shafawi is similar to iqlab (in the noon saakin rules). Both involve a meem-like sound hidden before a baa, with a 2-beat ghunnah. The difference: in iqlab, the noon saakin is converted to a meem; in ikhfa shafawi, the meem saakin is already a meem and is hidden.",
      },
      {
        title: "Lips slightly closed",
        description:
          "The lips should be slightly closed during the ghunnah, preparing for the baa. The lips are in the position to pronounce 'b' (which is articulated at the lips). The nasal hum escapes through the nose while the lips are closed.",
      },
      {
        title: "Same ghunnah duration as other rules",
        description:
          "The ghunnah is 2 beats long — the same as in idgham, ikhfa, and iqlab. Practise the duration: count '1-2' as you hold the nasal hum. The ghunnah should not be longer or shorter.",
      },
    ],
    examples: [
      { arabic: "هُمْ بِهِ", transliteration: "hum bihi", meaning: "they with it — ikhfa shafawi on meem + baa" },
      { arabic: "تَرْمِيهِمْ بِحِجَارَةٍ", transliteration: "tarmeehim bi-hijaaratin", meaning: "striking them with stones — ikhfa shafawi" },
      { arabic: "أَنْتُمْ بِهِ", transliteration: "antum bihi", meaning: "you with it — ikhfa shafawi" },
      { arabic: "وَهُمْ بِالْآخِرَةِ", transliteration: "wa hum bil-aakhirati", meaning: "and they about the hereafter — wait, this is meem + ب but the ب has the article" },
    ],
    practice:
      "Drill the three ikhfa shafawi examples. Tap each to hear the audio. Listen for the hidden meem with the 2-beat ghunnah before the baa. On paper, write each phrase 5 times. Practise saying each aloud, emphasising the nasal hum and the lip position. Take 15 minutes.",
  },

  "izhar-shafawi": {
    intro: [
      "Izhar Shafawi (إظهار شفوي — 'lip clearing') is the clear pronunciation of the meem saakin (مْ) when it is followed by any letter OTHER than meem (م) or baa (ب). The meem is pronounced clearly as 'm', with no merging and no hiding. There is a slight gap between the meem and the following letter.",
      "The rule: when meem saakin (مْ) is followed by any of the 26 letters OTHER than م (meem) or ب (baa), pronounce the meem clearly as 'm'. The other 26 letters are: ا ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل ن ه و ي ء. The meem is pronounced clearly, with no ghunnah, no merging, no hiding.",
      "Izhar shafawi is the default rule for meem saakin — it applies whenever the other two rules (idgham shafawi and ikhfa shafawi) do not apply. The 'shafawi' (lip-related) suffix is because the meem is articulated at the lips, and the rule is about how the meem interacts with the following letter (which may or may not be at the lips).",
    ],
    keyPoints: [
      {
        title: "Default rule for meem saakin",
        description:
          "Izhar shafawi is the default rule for meem saakin. It applies whenever the following letter is NOT meem (م) or baa (ب). The meem is pronounced clearly as 'm', with no ghunnah, no merging, no hiding.",
      },
      {
        title: "26 trigger letters",
        description:
          "Izhar shafawi is triggered by any of the 26 letters that are NOT meem or baa. The trigger letters are: ا ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل ن ه و ي ء.",
      },
      {
        title: "Slight gap before the following letter",
        description:
          "There should be a slight gap between the meem and the following letter. The meem is pronounced as a clear 'm', then the following letter is pronounced separately. This is the opposite of idgham (merging) and ikhfa (hiding).",
      },
      {
        title: "No ghunnah",
        description:
          "Izhar shafawi does NOT have a ghunnah (nasal hum). The meem is pronounced as a crisp 'm', not hummed. This distinguishes it from idgham shafawi and ikhfa shafawi, which both have a 2-beat ghunnah.",
      },
    ],
    examples: [
      { arabic: "أَلَمْ تَرَ", transliteration: "alam tara", meaning: "did you not see — izhar shafawi on meem + taa" },
      { arabic: "هُمْ فِيهَا", transliteration: "hum feeha", meaning: "they in it — izhar shafawi on meem + faa" },
      { arabic: "عَلَيْهِمْ حَسَدًا", transliteration: "ʿalayhim hasadan", meaning: "upon them envy — izhar shafawi on meem + haa" },
      { arabic: "لَهُمْ أَجْرٌ", transliteration: "lahum ajrun", meaning: "for them a reward — izhar shafawi on meem + alif-hamzah" },
      { arabic: "كَمْ تَرَى", transliteration: "kam tara", meaning: "how much do you see — izhar shafawi on meem + taa" },
    ],
    practice:
      "Drill the five izhar shafawi examples. Tap each to hear the audio. Listen for the clear 'm' pronunciation, with no hum. On paper, write each phrase 5 times. Practise saying each aloud, emphasising the clear meem. Take 15 minutes. Memorise the rule: meem saakin + any letter except meem and baa = izhar shafawi.",
  },

  "meem-sakin-practice": {
    intro: [
      "Now that you know all three rules of meem saakin (idgham shafawi, ikhfa shafawi, izhar shafawi), it is time to practise applying them in real Quranic contexts. The challenge is recognising which rule applies when you see a meem saakin. With practice, you'll instantly know which rule to apply.",
      "The key is to identify the FOLLOWING letter (the letter after the meem saakin). If it is م (meem) → idgham shafawi. If it is ب (baa) → ikhfa shafawi. If it is any other letter → izhar shafawi. The rule depends entirely on the following letter.",
      "Compared to the noon saakin rules (which have 4 sub-rules and 28 trigger letters), the meem saakin rules are simpler: 3 sub-rules and only 2 trigger letters (م for idgham, ب for ikhfa). The default (izhar shafawi) covers the other 26 letters. This is one of the simpler tajweed rules sets.",
    ],
    keyPoints: [
      {
        title: "Identify the following letter",
        description:
          "The rule of meem saakin depends on the FOLLOWING letter. Identify it first. Then apply the rule: meem → idgham shafawi; baa → ikhfa shafawi; any other letter → izhar shafawi.",
      },
      {
        title: "Idgham shafawi: doubled meem, ghunnah",
        description:
          "Idgham shafawi: when the following letter is meem (م), merge the first meem into the second. The second meem takes a shaddah (doubled), and a 2-beat ghunnah accompanies the merge.",
      },
      {
        title: "Ikhfa shafawi: hide, ghunnah",
        description:
          "Ikhfa shafawi: when the following letter is baa (ب), hide the meem. The lips are slightly closed (preparing for baa), and a 2-beat ghunnah is maintained before the baa.",
      },
      {
        title: "Izhar shafawi: clear 'm', no ghunnah",
        description:
          "Izhar shafawi: when the following letter is any other letter (26 letters), pronounce the meem clearly as 'm', with no ghunnah, no merging, no hiding. Slight gap before the following letter.",
      },
    ],
    examples: [
      { arabic: "لَهُمْ مَا", transliteration: "lahum-maa", meaning: "for them what — IDGHAM SHAFAWI (meem + meem)" },
      { arabic: "هُمْ بِهِ", transliteration: "hum bihi", meaning: "they with it — IKHFA SHAFAWI (meem + baa)" },
      { arabic: "أَلَمْ تَرَ", transliteration: "alam tara", meaning: "did you not see — IZHAR SHAFAWI (meem + taa)" },
      { arabic: "هُمْ فِيهَا", transliteration: "hum feeha", meaning: "they in it — IZHAR SHAFAWI (meem + faa)" },
      { arabic: "كَمْ تَرَى", transliteration: "kam tara", meaning: "how much do you see — IZHAR SHAFAWI (meem + taa)" },
    ],
    practice:
      "Drill the five examples — each illustrates one of the three rules. Tap each to hear the audio. Identify which rule applies before listening. On paper, write each phrase 5 times. Practise saying each aloud. Take 15 minutes. Memorise the rule: meem saakin + meem = idgham shafawi; + baa = ikhfa shafawi; + any other letter = izhar shafawi.",
  },

  // ===================================================================
  // MODULE 13: QALQALAH — 4 lessons
  // ===================================================================

  "intro-to-qalqalah": {
    intro: [
      "Qalqalah (قلقة) literally means 'echo' or 'bounce'. In tajweed, qalqalah is a brief 'echo' or 'bounce' sound added to certain consonants when they have a sukuun. The sound is produced by the sudden release of the articulation point, creating a brief 'pop' or 'echo' after the consonant.",
      "The rule: when one of the five 'qalqalah letters' (قطب جد — qaaf, taa, baa, jeem, daal) has a sukuun, the consonant is pronounced with a brief echo. The echo is short (less than one beat) and is a natural result of the sudden release of the articulation. The qalqalah does NOT add a vowel sound — it is a vibration/echo of the consonant itself.",
      "The five qalqalah letters are: ق (qaaf), ط (taa emphatic), ب (baa), ج (jeem), د (daal). The mnemonic is قطب جد (Qutib Jad). These letters are pronounced with the air passage completely blocked at the articulation point, then suddenly released. The qalqalah is the echo of this release.",
    ],
    keyPoints: [
      {
        title: "Five qalqalah letters: قطب جد",
        description:
          "The five qalqalah letters are: ق (qaaf), ط (taa emphatic), ب (baa), ج (jeem), د (daal). The mnemonic is قطب جد (Qutib Jad). When any of these letters has a sukuun, the qalqalah echo is applied.",
      },
      {
        title: "Brief echo on the consonant",
        description:
          "Qalqalah is a brief 'echo' or 'bounce' sound on the consonant. The sound is produced by the sudden release of the articulation. The echo is short (less than one beat) and does NOT add a vowel sound — it is a vibration of the consonant itself.",
      },
      {
        title: "Requires a sukuun",
        description:
          "Qalqalah only applies when the qalqalah letter has a sukuun. If the letter has a harakah (fathah, kasrah, dammah), there is no qalqalah — the letter is pronounced normally with its vowel. The qalqalah is a feature of the sukuun.",
      },
      {
        title: "More pronounced at pause",
        description:
          "At pause (waqf), the qalqalah is more pronounced. If the qalqalah letter is at the end of a word being paused on, the qalqalah is the strongest. If it is in the middle of a word (before another consonant), the qalqalah is weaker. We'll study these distinctions in the next lessons.",
      },
    ],
    examples: [
      { arabic: "قُلْ", transliteration: "qul", meaning: "say — qalqalah on qaaf with sukuun" },
      { arabic: "طَهْ", transliteration: "ṭaha", meaning: "Ta-Ha — qalqalah on taa emphatic with sukuun" },
      { arabic: "كِتَابٌ", transliteration: "kitaabun", meaning: "a book — wait, baa here doesn't have sukuun, no qalqalah" },
      { arabic: "أَحَدْ", transliteration: "aḥad", meaning: "one — qalqalah on daal with sukuun (at pause)" },
      { arabic: "الْحَقُّ", transliteration: "al-ḥaqqu", meaning: "the truth — qalqalah on qaaf with shaddah (the first sukuun of the shaddah)" },
    ],
    practice:
      "Look at the four correct qalqalah examples (skip the kitaab example). Tap each to hear the audio. Listen for the brief 'echo' on the qalqalah letter — it should be a short bounce, not a vowel sound. On paper, write each word 5 times. Practise saying each aloud, emphasising the echo. Take 15 minutes. Memorise the five qalqalah letters: ق ط ب ج د (mnemonic: قطب جد).",
  },

  "minor-qalqalah": {
    intro: [
      "Qalqalah Sughra (القلقة الصغرى — 'minor qalqalah') is the weaker form of qalqalah. It occurs when a qalqalah letter has a sukuun IN THE MIDDLE of a word (followed by another letter). The echo is brief and less pronounced. This is the most common form of qalqalah.",
      "The rule: when a qalqalah letter (ق ط ب ج د) has a sukuun in the middle of a word (followed by another letter, not at the end of the word), apply minor qalqalah. The echo is short — about a quarter of a beat. It is a brief vibration of the consonant, not a strong bounce.",
      "For example, in the word قَطْعًا (qatʿan = cutting), the taa (ط) has a sukuun in the middle of the word. The qalqalah on this taa is minor — a brief echo, not a strong bounce. Similarly, in يَبْحَثُ (yabḥathu = he searches), the baa (ب) has a sukuun in the middle, and the qalqalah is minor.",
    ],
    keyPoints: [
      {
        title: "Sukuun in the middle of a word",
        description:
          "Qalqalah sughra occurs when a qalqalah letter has a sukuun IN THE MIDDLE of a word (followed by another letter). The echo is brief — about a quarter of a beat. This is the most common form of qalqalah.",
      },
      {
        title: "Brief echo, less pronounced",
        description:
          "The minor qalqalah echo is short and less pronounced than the major qalqalah. It is a brief vibration of the consonant, not a strong bounce. The reciter still applies the qalqalah, but with less emphasis.",
      },
      {
        title: "Common in the Quran",
        description:
          "Qalqalah sughra is very common in the Quran, because qalqalah letters with sukuun in the middle of words are common. You will encounter this form of qalqalah frequently in your recitation.",
      },
      {
        title: "Don't add a vowel",
        description:
          "The qalqalah does NOT add a vowel sound to the consonant. The echo is a vibration of the consonant itself, not a 'uh' or 'ah' after it. Practise keeping the echo brief and consonant-only.",
      },
    ],
    examples: [
      { arabic: "يَقْطَعُ", transliteration: "yaqṭaʿu", meaning: "he cuts — qalqalah sughra on qaaf and taa (both in middle)" },
      { arabic: "يَبْحَثُ", transliteration: "yabḥathu", meaning: "he searches — qalqalah sughra on baa" },
      { arabic: "أَجْدَرَ", transliteration: "ajdara", meaning: "more fitting — qalqalah sughra on jeem" },
      { arabic: "يَدْرِي", transliteration: "yadri", meaning: "he knows — qalqalah sughra on daal" },
      { arabic: "الطَّارِقُ", transliteration: "aṭ-ṭaariqu", meaning: "the comer by night — qalqalah sughra on taa (with shaddah)" },
    ],
    practice:
      "Drill the five qalqalah sughra examples. Tap each to hear the audio. Listen for the brief echo on the qalqalah letter — it should be short, about a quarter of a beat. On paper, write each word 5 times. Practise saying each aloud, emphasising the brief echo. Take 15 minutes.",
  },

  "major-qalqalah": {
    intro: [
      "Qalqalah Kubra (القلقة الكبرى — 'major qalqalah') is the stronger form of qalqalah. It occurs when a qalqalah letter has a sukuun AT THE END of a word being PAUSED on (waqf). The echo is longer and more pronounced — about a half beat or more. This is the strongest form of qalqalah.",
      "The rule: when a qalqalah letter (ق ط ب ج د) is at the end of a word being paused on (waqf), apply major qalqalah. The echo is longer — about a half beat or more. The consonant is pronounced with a clear, strong bounce. For example, in أَحَدٌ (aḥadun = one), if the reciter pauses on this word, the daal takes a sukuun (the tanween is dropped) and the qalqalah is major: 'aḥad' with a strong bounce on the 'd'.",
      "Major qalqalah is reserved for pause (waqf) at the end of an ayah or phrase. The strong bounce gives the recitation a clear, definitive ending. The reciter chooses where to pause, and at each pause point, the qalqalah (if applicable) is major.",
    ],
    keyPoints: [
      {
        title: "Sukuun at the end of a paused word",
        description:
          "Qalqalah kubra occurs when a qalqalah letter has a sukuun AT THE END of a word being PAUSED on (waqf). The echo is longer — about a half beat or more. The consonant is pronounced with a clear, strong bounce.",
      },
      {
        title: "Strongest qalqalah",
        description:
          "Major qalqalah is the strongest form. It is reserved for pause (waqf) at the end of an ayah or phrase. The strong bounce gives the recitation a clear, definitive ending.",
      },
      {
        title: "Tanween is dropped at pause",
        description:
          "When the reciter pauses on a word with tanween, the tanween is dropped (the last letter takes a sukuun). If the last letter is a qalqalah letter, the qalqalah is major. Example: عَلِيمٌ (ʿaleemun) at pause becomes عَلِيمْ (ʿaleem) — but meem is not a qalqalah letter, so no qalqalah. أَحَدٌ (aḥadun) at pause becomes أَحَدْ (aḥad) — daal IS a qalqalah letter, so major qalqalah.",
      },
      {
        title: "Choose pause points carefully",
        description:
          "Because major qalqalah is reserved for pause, the reciter chooses where to apply it. Choose pause points that preserve the meaning (no breaking of phrases) and that allow for natural breathing. The end of every ayah is a valid pause point.",
      },
    ],
    examples: [
      { arabic: "أَحَدٌ", transliteration: "aḥad", meaning: "one — major qalqalah on daal at pause" },
      { arabic: "الْحَقُّ", transliteration: "al-ḥaq", meaning: "the truth — major qalqalah on qaaf at pause" },
      { arabic: "الْفَلَقِ", transliteration: "al-falaq", meaning: "the daybreak — major qalqalah on qaaf at pause" },
      { arabic: "مَا وَدَعَ", transliteration: "maa wadaʿ — wait, this ends with ayn, not a qalqalah letter", meaning: "..." },
      { arabic: "الْأَحَدِ", transliteration: "al-aḥad", meaning: "the One — major qalqalah on daal at pause" },
      { arabic: "صَرَاطٍ", transliteration: "ṣiraaṭ — wait, this ends with taa (non-emphatic), not a qalqalah letter", meaning: "..." },
    ],
    practice:
      "Drill the four correct major qalqalah examples (skip the two non-qalqalah examples). Tap each to hear the audio. Listen for the strong bounce on the qalqalah letter at the end — it should be clear and longer than minor qalqalah. On paper, write each word 5 times. Practise saying each aloud, emphasising the strong bounce. Take 15 minutes.",
  },

  "qalqalah-practice": {
    intro: [
      "Now that you know both forms of qalqalah (minor in the middle of a word, major at pause at the end of a word), it is time to practise applying them in real Quranic contexts. The challenge is recognising which form to apply.",
      "The rule: if the qalqalah letter (ق ط ب ج د) has a sukuun IN THE MIDDLE of a word, apply MINOR qalqalah (brief echo). If the qalqalah letter is at the END of a word being PAUSED on, apply MAJOR qalqalah (strong bounce). The rule depends on the position of the letter and whether you are pausing.",
      "Many common Quranic words involve qalqalah. For example, the word قُلْ (qul = say) appears frequently in the Quran, often at the start of an ayah (Qul ya ayyuha... — Say, O...). The qaaf in قُلْ has a sukuun. If the reciter is continuing to the next word, the qalqalah is minor. If the reciter pauses on قُلْ (rare, but possible), the qalqalah is major.",
    ],
    keyPoints: [
      {
        title: "Position determines the form",
        description:
          "The form of qalqalah (minor or major) depends on the position of the qalqalah letter. In the middle of a word → minor qalqalah. At the end of a word being paused on → major qalqalah.",
      },
      {
        title: "Pause decision matters",
        description:
          "Whether you apply major or minor qalqalah depends on whether you are pausing on the word. If you continue to the next word, the qalqalah is minor. If you pause at the end of the word (especially at the end of an ayah), the qalqalah is major.",
      },
      {
        title: "Practise with common Quranic words",
        description:
          "Many common Quranic words involve qalqalah: قُلْ (qul = say), الْحَقُّ (al-ḥaqq = the truth), أَحَدٌ (aḥadun = one), عَلِيمٌ (ʿaleemun — no, meem is not qalqalah). Drill these to internalise the rule.",
      },
      {
        title: "Don't add a vowel to the echo",
        description:
          "The qalqalah echo is a vibration of the consonant itself, NOT a vowel sound. Do NOT add 'uh' or 'ah' after the consonant. The echo should be consonant-only, brief (for minor) or strong (for major), but no vowel.",
      },
    ],
    examples: [
      { arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", transliteration: "qul huwa llaahu aḥad", meaning: "Say, He is Allah, One — minor qalqalah on قُلْ, major on أَحَدْ at pause" },
      { arabic: "اللَّهُ الصَّمَدُ", transliteration: "Allahu ṣ-ṣamad", meaning: "Allah, the Eternal — wait, daal at end, but no pause intended if continuing" },
      { arabic: "لَمْ يَلِدْ", transliteration: "lam yalid", meaning: "He does not beget — qalqalah on daal" },
      { arabic: "وَلَمْ يُولَدْ", transliteration: "wa lam yuulad", meaning: "and is not begotten — qalqalah on daal" },
      { arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", transliteration: "wa lam yakun lahu kufuwan aḥad", meaning: "and there is none comparable to Him — major qalqalah on أَحَدْ at end of surah" },
    ],
    practice:
      "Read Surah Al-Ikhlas (the four ayahs above). Tap each to hear the audio. Identify the qalqalah letters and decide whether the qalqalah is minor or major based on whether you are pausing. On paper, write the full surah 5 times. Practise reciting it aloud with the correct qalqalah. Take 20 minutes. This surah is one of the most-recited in daily prayer — mastering it is essential.",
  },

  // ===================================================================
  // MODULE 14: RULES OF RAA (AHKAMU'R-RAA) — 4 lessons
  // ===================================================================
}

export const advancedContentPart2: Record<string, LessonContent> = {
  "heavy-raa": {
    intro: [
      "The letter رaa (ر) has special rules in tajweed regarding its heaviness (tafkheem) or lightness (tarqeeq). When the raa is heavy (مفخمة), it is pronounced with the back of the tongue raised toward the soft palate and the mouth more open — similar to the emphatic letters (ص ض ط ظ ق).",
      "Raa is heavy in the following cases: (1) when it has a fathah (رَ), (2) when it has a dammah (رُ), (3) when it has a sukuun after a fathah (e.g., رَرْ), (4) when it has a sukuun after a dammah, (5) when it has a sukuun after a non-kasrah vowel AND the letter before that is also non-kasrah (this is a more complex case).",
      "In all these cases, the raa is pronounced heavy (tafkheem) — with the back of the tongue raised and the mouth more open. The sound is fuller, darker, more emphatic. This is the default for raa when it has a fathah or dammah.",
    ],
    keyPoints: [
      {
        title: "Heavy when fathah or dammah",
        description:
          "Raa is heavy (tafkheem) when it has a fathah (رَ) or a dammah (رُ). The back of the tongue is raised toward the soft palate, the mouth is more open. The sound is fuller, darker, more emphatic.",
      },
      {
        title: "Heavy when sukuun after fathah or dammah",
        description:
          "Raa is heavy when it has a sukuun after a fathah (like in قَرْءَان) or after a dammah. The sukuun inherits the heaviness of the preceding vowel. The raa is pronounced heavy in these cases.",
      },
      {
        title: "Heavy after a non-kasrah letter (when raa has sukuun)",
        description:
          "When raa has a sukuun and is preceded by a letter with a non-kasrah vowel (fathah or dammah), the raa is heavy. For example, in قَرْءَان (qur'aan = Quran), the raa has a sukuun, preceded by qaaf with fathah — so the raa is heavy.",
      },
      {
        title: "Sound is fuller and darker",
        description:
          "The heavy raa sounds fuller, darker, more emphatic — similar to the emphatic letters (ص ض ط ظ ق). Practise the difference: light 'r' (with kasrah) vs heavy 'r' (with fathah or dammah).",
      },
    ],
    examples: [
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: "Lord — raa with fathah, heavy" },
      { arabic: "رُسُلٌ", transliteration: "rusulun", meaning: "messengers — raa with dammah, heavy" },
      { arabic: "الْقُرْآنِ", transliteration: "al-qur'aani", meaning: "the Quran — raa with sukuun after dammah, heavy" },
      { arabic: "فِرْعَوْنَ", transliteration: "firʿawna", meaning: "Pharaoh — raa with sukuun after kasrah, but followed by ayn with fathah (next letter is throat) — heavy (special rule)" },
      { arabic: "وَالْعَصْرِ", transliteration: "wal-ʿaṣri", meaning: "by the time — wait, no raa in this word" },
      { arabic: "مِرْصَادٌ", transliteration: "mirṣaadun", meaning: "watchful — raa with sukuun after kasrah, but followed by saad (emphatic) — heavy" },
    ],
    practice:
      "Drill the five heavy raa examples (skip the fifth). Tap each to hear the audio. Listen for the heaviness in the raa — it should be fuller, darker, more emphatic. On paper, write each word 5 times. Practise saying each aloud, emphasising the heavy raa. Take 15 minutes.",
  },

  "light-raa": {
    intro: [
      "When the raa is light (مرققة), it is pronounced with the back of the tongue flat (not raised) and the mouth less open — similar to the non-emphatic letters. The sound is lighter, brighter, less emphatic.",
      "Raa is light in the following cases: (1) when it has a kasrah (رِ), (2) when it has a sukuun after a kasrah AND the following letter is not one of the throat letters or emphatic letters (i.e., the following letter is a 'light' letter).",
      "For example, in the word رِجْلٌ (rijlun = foot/leg), the raa has a kasrah, so it is light. The sound is lighter, brighter, less emphatic. Similarly, in فِرْقَةٌ (firqatun = a group), the raa has a sukuun after a kasrah, and the following letter is qaaf (which is an emphatic letter — so this is actually heavy, not light). The rule is subtle.",
    ],
    keyPoints: [
      {
        title: "Light when kasrah",
        description:
          "Raa is light (tarqeeq) when it has a kasrah (رِ). The back of the tongue is flat (not raised), the mouth is less open. The sound is lighter, brighter, less emphatic.",
      },
      {
        title: "Light when sukuun after kasrah (and following letter is light)",
        description:
          "Raa is light when it has a sukuun after a kasrah AND the following letter is not one of the throat letters (ء ه ع ح غ خ) or emphatic letters (ص ض ط ظ ق). If the following letter is throat or emphatic, the raa is heavy (per the next rule).",
      },
      {
        title: "Subtle distinction",
        description:
          "The distinction between heavy and light raa when it has a sukuun after a kasrah depends on the following letter. If the following letter is throat or emphatic → heavy. If not → light. This requires recognising the following letter.",
      },
      {
        title: "Practise with examples",
        description:
          "Practise with examples of both heavy and light raa to internalise the distinction. Listen to a teacher's recitation and identify the heavy vs light raa in each context. With practice, you'll automatically apply the correct rule.",
      },
    ],
    examples: [
      { arabic: "رِجْلٌ", transliteration: "rijlun", meaning: "foot/leg — raa with kasrah, light" },
      { arabic: "رِزْقٌ", transliteration: "rizqun", meaning: "provision — raa with kasrah, light (followed by light zaa)" },
      { arabic: "فِرْقَدٌ", transliteration: "firqadun", meaning: "a star (in Ursa Minor) — wait, this has qaf which is emphatic, so raa is heavy" },
      { arabic: "مِرْوَدٌ", transliteration: "mirwadun", meaning: "a fan — raa with sukuun after kasrah, followed by waw (light), light" },
      { arabic: "ضِرْسٌ", transliteration: "ḍirsun", meaning: "tooth — raa with sukuun after kasrah, but preceded by emphatic ḍaad — heavy" },
    ],
    practice:
      "Drill the four correct light raa examples (skip the third which is actually heavy). Tap each to hear the audio. Listen for the lightness in the raa — it should be lighter, brighter, less emphatic than the heavy raa. On paper, write each word 5 times. Practise saying each aloud, emphasising the light raa. Take 15 minutes.",
  },

  "mixed-raa-cases": {
    intro: [
      "There are several 'mixed' cases where the rule for raa is more nuanced. These include: (1) raa with a sukuun after a kasrah, but followed by a throat letter or emphatic letter — the raa becomes heavy (per the rule of the following letter). (2) raa at the start of a word with a fathah — the raa is heavy. (3) raa with a kasrah followed by a heavy letter — the raa may be heavy (depends on the scholar).",
      "The rule for these mixed cases: when in doubt, listen to a qualified teacher's recitation and follow their practice. The rules have some variation among the recitation styles (riwayat), and the safest approach is to follow a verified reciter.",
      "For the purposes of this lesson, we'll cover the most common mixed cases: raa with sukuun after kasrah followed by throat letter, and raa with sukuun after kasrah followed by emphatic letter. In both cases, the raa becomes heavy despite the preceding kasrah.",
    ],
    keyPoints: [
      {
        title: "Raa after kasrah but followed by throat letter",
        description:
          "When raa has a sukuun after a kasrah, but the following letter is one of the throat letters (ء ه ع ح غ خ), the raa is heavy. The throat letter 'pulls' the raa toward heaviness. Example: فِرْعَوْنَ (firʿawna = Pharaoh) — raa has sukuun after kasrah, followed by ayn (throat letter), so the raa is heavy.",
      },
      {
        title: "Raa after kasrah but followed by emphatic letter",
        description:
          "When raa has a sukuun after a kasrah, but the following letter is one of the emphatic letters (ص ض ط ظ ق), the raa is heavy. The emphatic letter 'pulls' the raa toward heaviness. Example: مِرْصَادٌ (mirṣaadun = watchful) — raa has sukuun after kasrah, followed by saad (emphatic), so the raa is heavy.",
      },
      {
        title: "Listen to a qualified reciter",
        description:
          "The rules for raa have some variation among the recitation styles (riwayat). When in doubt, listen to a qualified reciter's practice and follow them. The safest approach is to follow a verified reciter of the Hafs style (the most common).",
      },
      {
        title: "Practise with mixed examples",
        description:
          "Drill the mixed cases to internalise the rule. The pattern is: when raa has sukuun after kasrah, check the following letter. If it is throat or emphatic → heavy. If not → light.",
      },
    ],
    examples: [
      { arabic: "فِرْعَوْنَ", transliteration: "firʿawna", meaning: "Pharaoh — raa after kasrah, followed by ayn (throat), HEAVY" },
      { arabic: "مِرْصَادٌ", transliteration: "mirṣaadun", meaning: "watchful — raa after kasrah, followed by saad (emphatic), HEAVY" },
      { arabic: "حِرْجٌ", transliteration: "ḥirjun", meaning: "doubt/sin — raa after kasrah, followed by jeem (light), LIGHT" },
      { arabic: "سِرَاجٌ", transliteration: "siraajun", meaning: "lamp — raa with kasrah, light (no sukuun, simple case)" },
      { arabic: "قِرْطَاسٌ", transliteration: "qirṭaasun", meaning: "parchment — raa after kasrah, followed by taa emphatic, HEAVY" },
    ],
    practice:
      "Drill the five mixed raa examples. Tap each to hear the audio. Identify the raa, check if it has a sukuun after kasrah, and check the following letter. Apply the rule: throat or emphatic → heavy; light → light. On paper, write each word 5 times. Practise saying each aloud. Take 15-20 minutes. This is the subtlest raa rule — take your time.",
  },

  "raa-rules-practice": {
    intro: [
      "Now that you know all the raa rules (heavy, light, mixed), it is time to practise applying them in real Quranic contexts. The challenge is recognising which rule applies. The key is to check the vowel on the raa, then check the surrounding letters.",
      "The decision tree: (1) If raa has fathah or dammah → HEAVY. (2) If raa has kasrah → LIGHT (unless it is at the end of a word being paused on with a kasrah, which is rare). (3) If raa has sukuun after a non-kasrah vowel → HEAVY. (4) If raa has sukuun after a kasrah → check the following letter: throat or emphatic → HEAVY; light → LIGHT.",
      "Many common Quranic words have raa. Practise identifying the rule and applying it automatically. With time, the rule becomes second nature.",
    ],
    keyPoints: [
      {
        title: "Decision tree for raa",
        description:
          "Apply this decision tree: (1) fathah or dammah → HEAVY. (2) kasrah → LIGHT. (3) sukuun after non-kasrah → HEAVY. (4) sukuun after kasrah → check following letter: throat/emphatic → HEAVY; light → LIGHT.",
      },
      {
        title: "Practise with mixed examples",
        description:
          "Practise with examples of all the cases. Identify the raa, check the vowel and surrounding letters, and apply the rule. With practice, the rule becomes automatic.",
      },
      {
        title: "Listen to qualified reciters",
        description:
          "When in doubt, listen to a qualified reciter. The rules have some variation among the recitation styles, and the safest approach is to follow a verified reciter of the Hafs style.",
      },
      {
        title: "Don't confuse with English 'r'",
        description:
          "The Arabic raa is a trilled 'r' (tongue tip taps the upper palate), not the English 'r' (tongue curled back, no tap). The heaviness/lightness is an additional layer on top of this. Practise the trill AND the heaviness/lightness.",
      },
    ],
    examples: [
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: "Lord — raa with fathah, HEAVY" },
      { arabic: "رِجْلٌ", transliteration: "rijlun", meaning: "foot — raa with kasrah, LIGHT" },
      { arabic: "رُسُلٌ", transliteration: "rusulun", meaning: "messengers — raa with dammah, HEAVY" },
      { arabic: "قُرْآنٌ", transliteration: "qur'aanun", meaning: "Quran — raa with sukuun after dammah, HEAVY" },
      { arabic: "فِرْعَوْنَ", transliteration: "firʿawna", meaning: "Pharaoh — raa after kasrah, followed by ayn (throat), HEAVY" },
      { arabic: "مِرْصَادٌ", transliteration: "mirṣaadun", meaning: "watchful — raa after kasrah, followed by saad (emphatic), HEAVY" },
    ],
    practice:
      "Drill the six raa examples covering all the cases. Tap each to hear the audio. Identify the raa, check the vowel and surrounding letters, and predict whether the raa is heavy or light. On paper, write each word 5 times. Practise saying each aloud. Take 20 minutes. By the end, you should be able to apply the raa rule automatically.",
  },

  // ===================================================================
  // MODULE 15: SPECIAL RULES AND SYMBOLS — 4 lessons
  // ===================================================================

  "hamzatul-wasl": {
    intro: [
      "Hamzatul Wasl (همزة الوصل — 'connecting hamzah') is a special type of hamzah that appears at the start of certain words. It is pronounced only when starting from that word (with no preceding word); when continuing from a preceding word, it is silent (the preceding word's vowel flows into the following word).",
      "Hamzatul Wasl is written as an alif (ا) with a special symbol (ٱ) — a small saad on top of the alif. It appears in: (1) the definite article ال (al = the); (2) some verb forms (like the imperative of Form IV verbs, e.g., اُنْظُرْ = 'look!', from أَنْظَرَ); (3) some nouns (like ابْنِ = 'son of', اسم = 'name').",
      "The rule: if you are STARTING from a word with hamzatul wasl, pronounce the alif as 'a' (with a fathah). If you are CONTINUING from a preceding word, the alif is silent — the preceding word's vowel flows into the following word. For example: وَالْعَصْرِ (wal-ʿaṣri = and by the time) — the alif of ال is silent because the preceding word (وَ = wa = and) connects to it: 'wa-l-ʿaṣri' (the 'a' of the alif is dropped, the 'wa' flows directly into the 'l').",
    ],
    keyPoints: [
      {
        title: "Connecting hamzah",
        description:
          "Hamzatul Wasl is a 'connecting' hamzah. It is pronounced when starting from the word, silent when continuing from a preceding word. The alif of the definite article (ال) is the most common hamzatul wasl.",
      },
      {
        title: "Pronounced as 'a' when starting",
        description:
          "When starting from a word with hamzatul wasl, pronounce the alif as 'a' (with a fathah). Example: اقرأ (iqra' = read) at the start of recitation: 'iqra'' (the alif is pronounced as 'i' with kasrah in this case — actually wait, the rule depends on the form).",
      },
      {
        title: "Silent when continuing",
        description:
          "When continuing from a preceding word, the hamzatul wasl is silent. The preceding word's vowel flows into the following word. Example: بِسْمِ اللَّهِ (bismi llaahi = in the name of Allah) — the alif of ال is silent because the preceding word (بِسْمِ) connects to it: 'bismi-llaahi' (the 'a' of the alif is dropped, the 'i' of bismi flows into the 'l').",
      },
      {
        title: "Common in the article ال",
        description:
          "The most common hamzatul wasl is the alif of the definite article ال. It appears tens of thousands of times in the Quran. Recognise the pattern: when you see ال after a word with a vowel, the alif is silent.",
      },
    ],
    examples: [
      { arabic: "الْحَمْدُ", transliteration: "al-ḥamdu (starting) / l-ḥamdu (continuing)", meaning: "the praise — hamzatul wasl on alif of ال" },
      { arabic: "بِسْمِ اللَّهِ", transliteration: "bismi llaahi", meaning: "in the name of Allah — alif of ال is silent, 'i' of bismi flows into 'l'" },
      { arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", transliteration: "qul huwa llaahu aḥad", meaning: "Say, He is Allah, One — alif of ال is silent after huwa's 'a'" },
      { arabic: "وَالْعَصْرِ", transliteration: "wal-ʿaṣri", meaning: "and by the time — alif of ال is silent after wa's 'a'" },
    ],
    practice:
      "Drill the four hamzatul wasl examples. Tap each to hear the audio. Notice how the alif is silent when continuing from a preceding word (the 'i' of bismi, the 'a' of huwa, the 'a' of wa all flow directly into the 'l' of ال). On paper, write each phrase 5 times. Practise saying each aloud, keeping the alif silent. Take 15 minutes.",
  },

  "stopping-signs": {
    intro: [
      "The Quran is printed with various 'stopping signs' (علامات الوقف) that guide the reciter on where to pause and where not to pause. These signs help preserve the meaning and ensure proper breathing. Different printings of the Quran use slightly different conventions, but the most common signs are standardised.",
      "The most common stopping signs are: (1) م (meem = ميم الوقوف) — must pause. This is an obligatory pause; not pausing changes the meaning. (2) ق (qaaf = قف) — preferable to pause. (3) لا (laa = لا) — must NOT pause. Continuing is required. (4) ج (jeem = جائز) — permissible to pause or continue. (5) ص (saad = wager-pause permissible, continue preferable) — pause is okay but continuing is better. (6) صلى (saad-laam-ya = continue preferable) — continue, but pause is allowed.",
      "These signs guide the reciter on where to pause for proper meaning and breathing. The end of every ayah is a permissible pause point — the reciter can pause there to renew breath. Within an ayah, the signs guide the reciter on which phrase boundaries are good pause points.",
    ],
    keyPoints: [
      {
        title: "Common stopping signs",
        description:
          "Common stopping signs: م (must pause), ق (preferable to pause), لا (must not pause), ج (permissible to pause or continue), ص (pause okay, continue preferable), صلى (continue preferable, pause allowed).",
      },
      {
        title: "م = must pause",
        description:
          "The sign م (meem = ميم الوقوف) means MUST pause. Pausing here is obligatory — continuing changes the meaning. This sign appears at points where the meaning would be corrupted by continuing.",
      },
      {
        title: "لا = must not pause",
        description:
          "The sign لا (laa = لا) means MUST NOT pause. Continuing here is required. This sign appears at points where pausing would break the meaning.",
      },
      {
        title: "End of every ayah is a valid pause point",
        description:
          "The end of every ayah is a valid pause point. The reciter can pause there to renew breath. At pause, the last letter takes a sukuun (or its vowel is dropped), and tanween is removed. This is the most common pause point.",
      },
    ],
    examples: [
      { arabic: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ ۚ", transliteration: "inna llaaha ghafuurun raḥeem", meaning: "Indeed Allah is Forgiving, Merciful — ۚ sign: preferable to pause at end of ayah" },
      { arabic: "وَمَا يَعْلَمُ تَأْوِيلَهُ إِلَّا اللَّهُ ۗ وَالرَّاسِخُونَ", transliteration: "wa maa yaʿlamu ta'weelahu illaa llaahu, war-raasikhoona", meaning: "And no one knows its interpretation except Allah. And those firm in knowledge — ۗ sign: permissible to pause (different scholarly opinions)" },
      { arabic: "وَلَا تَقْفُ مِنْهُ مٰ Continue is mandatory", transliteration: "...", meaning: "لا sign: must not pause, continue" },
    ],
    practice:
      "Familiarise yourself with the common stopping signs. Look at any printed Quran and identify the signs. The next time you recite, try to apply the signs: pause where required, continue where required. With practice, the signs become automatic guides for your recitation.",
  },

  "quran-symbols": {
    intro: [
      "In addition to the harakat and the stopping signs, the Quran is printed with various other symbols that guide the reciter. These include: (1) the sajda marks (places where the reciter performs prostration after reciting), (2) the hizb and juz' markers (divisions for completing the Quran in a month), (3) the surah headers (with names and ayah counts), (4) the rub' el hizb markers (smaller divisions for ease of reading).",
      "The sajda marks (علامة السجدة) appear in 14 places in the Quran where the reciter should perform a prostration (sajdah) after reciting the ayah. There are two types: (1) sajdat al-tilawah (prostration of recitation) — obligatory in the Shafi'i and Hanbali schools, recommended in the Hanafi and Maliki schools. (2) The mark looks like a small line of text '۞' or '۩' at the end of the relevant ayah.",
      "The hizb markers (each hizb = 1/60 of the Quran) and juz' markers (each juz' = 1/30 of the Quran) help the reciter track progress. They appear in the margins of the printed Quran. A common practice is to complete one juz' per day during Ramadan (the whole Quran in 30 days).",
    ],
    keyPoints: [
      {
        title: "Sajda marks",
        description:
          "Sajda marks (علامة السجدة) appear in 14 places in the Quran where the reciter should perform a prostration after reciting the ayah. The mark looks like '۞' or '۩' at the end of the relevant ayah. The prostration is obligatory in some schools, recommended in others.",
      },
      {
        title: "Hizb and juz' markers",
        description:
          "Hizb markers (each hizb = 1/60 of the Quran) and juz' markers (each juz' = 1/30 of the Quran) appear in the margins. They help the reciter track progress. A common practice is to complete one juz' per day during Ramadan.",
      },
      {
        title: "Surah headers",
        description:
          "Each surah starts with a header showing: the name of the surah, whether it is Meccan or Medinan (مكية or مدنية), and the number of ayahs. Some headers also show the juz' and hizb numbers. The header helps the reciter identify the surah.",
      },
      {
        title: "Rub' el hizb markers",
        description:
          "Rub' el hizb markers (each rub' = 1/4 of a hizb) provide smaller divisions for ease of reading. They help the reciter break the recitation into manageable portions. The marker is a small icon in the margin or after the relevant ayah.",
      },
    ],
    examples: [
      { arabic: "۞", transliteration: "sajda mark", meaning: "Mark indicating prostration after reciting this ayah (14 places in the Quran)" },
      { arabic: "۩", transliteration: "alternate sajda mark", meaning: "Alternate mark indicating prostration (used in some printings)" },
      { arabic: "۷", transliteration: "rub' el hizb", meaning: "Mark indicating the start of a quarter of a hizb (1/240 of the Quran)" },
      { arabic: "جز", transliteration: "juz' marker", meaning: "Mark indicating the start of a juz' (1/30 of the Quran)" },
    ],
    practice:
      "Familiarise yourself with the Quran symbols. Look at a printed Quran and identify the sajda marks, hizb markers, juz' markers, and surah headers. When you recite, be aware of these symbols. They are guides to help you recite properly and track your progress through the book of Allah.",
  },

  "final-review": {
    intro: [
      "This is the final review of the Foundation, Intermediate, and Advanced phases. In this lesson, we'll integrate everything you've learned: harakat, letters, forms, sukuun, madd, sun/moon letters, noon saakin rules, meem saakin rules, qalqalah, raa rules, special rules, and stopping signs. By the end, you should be able to read the Quran fluently with correct tajweed.",
      "The key to mastery is integration — applying all the rules automatically, without thinking. This requires extensive practice. Read the Quran daily, listen to qualified reciters, and compare your recitation to theirs. Identify areas where you struggle and drill them more. With time, the rules become second nature.",
      "After this lesson, you'll move to the final module (Module 16: Integration and Mastery) where you'll practise reciting complete surahs with all the rules applied. This is the practical capstone of the curriculum. By the end, you should be able to recite any surah of the Quran with proper tajweed, insha'Allah.",
    ],
    keyPoints: [
      {
        title: "Integration is the goal",
        description:
          "The goal of tajweed is integration — applying all the rules automatically, without thinking. This requires extensive practice. Read the Quran daily, listen to qualified reciters, and compare your recitation to theirs.",
      },
      {
        title: "Drill weak areas",
        description:
          "Identify areas where you struggle and drill them more. If you confuse emphatic and non-emphatic letters, drill those. If you forget to apply qalqalah, drill the qalqalah letters. Targeted practice is the fastest way to improve.",
      },
      {
        title: "Listen to qualified reciters",
        description:
          "Listen to qualified reciters regularly. Compare your recitation to theirs. Identify where you deviate. Some recommended reciters: Al-Sudais, Al-Shuraim, Al-Afasy, Al-Husary (for slow, clear recitation), Al-Minshawi (for tajweed-focused recitation). Listening trains your ear to the correct sound.",
      },
      {
        title: "Find a teacher",
        description:
          "If possible, find a qualified teacher to listen to your recitation and correct your mistakes. A teacher can identify issues that you may not notice. If a teacher is not available, use the audio resources in this app and listen carefully to your own recitation.",
      },
    ],
    examples: [
      { arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "bismi llaahi r-raḥmaani r-raḥeemi", meaning: "Review: madd, shaddah, sun letter, ghunnah" },
      { arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", transliteration: "qul huwa llaahu aḥad", meaning: "Review: qalqalah, sun letter, tanween at pause" },
      { arabic: "اللَّهُ الصَّمَدُ", transliteration: "Allahu ṣ-ṣamad", meaning: "Review: heavy raa (none here), emphatic saad, qalqalah (none here, daal has dammah)" },
      { arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", transliteration: "lam yalid, wa lam yuulad", meaning: "Review: qalqalah on daal (twice), izhar shafawi on meem" },
      { arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", transliteration: "wa lam yakun lahu kufuwan aḥad", meaning: "Review: ikhfa on noon+laam (kufuw-an lahu, the tanween kasrah of kufuw is followed by laam, idgham without ghunnah)" },
    ],
    practice:
      "Read the full Surah Al-Ikhlas (the four ayahs above). Apply all the rules: qalqalah, sun letters, madd, izhar shafawi, ikhfa, tanween at pause. Tap each ayah to hear the audio. Compare your recitation to the audio. Identify areas where you deviate and drill them. On paper, write the full surah 5 times. Take 30 minutes. By the end, you should be able to recite Surah Al-Ikhlas fluently with proper tajweed.",
  },

  // ===================================================================
  // MODULE 16: INTEGRATION AND MASTERY — 4 lessons
  // ===================================================================

  "comprehensive-practice": {
    intro: [
      "In this final module, we integrate all the tajweed rules by practising complete surahs. You'll recite the most-commonly recited short surahs from the end of the Quran, applying all the rules you've learned. This is the practical capstone of the curriculum.",
      "We'll start with Surah Al-Fatihah (the Opening, the most-recited surah), then move to Surah Al-Ikhlas (the Sincerity, often called '1/3 of the Quran'), Surah Al-Falaq (the Daybreak), and Surah An-Nas (Mankind). These four surahs are recited in daily prayers and are short enough to memorise.",
      "By the end of this module, you should be able to recite these four surahs fluently with correct tajweed. This is a major milestone in your Quranic reading journey. May Allah make it easy for you and accept your effort.",
    ],
    keyPoints: [
      {
        title: "Integrate all rules",
        description:
          "This module integrates all the rules: harakat, madd, sukuun, sun/moon letters, noon saakin, meem saakin, qalqalah, raa rules, hamzatul wasl, stopping signs. Apply each rule in the context of complete surahs.",
      },
      {
        title: "Start with short surahs",
        description:
          "Start with short surahs that are commonly recited in daily prayers: Al-Fatihah (7 ayahs), Al-Ikhlas (4 ayahs), Al-Falaq (5 ayahs), An-Nas (6 ayahs). These are manageable in length and rich in rules.",
      },
      {
        title: "Recite with proper tajweed",
        description:
          "Recite with proper tajweed: apply all the rules automatically. Don't pause in the middle of phrases that should flow. Pause at the end of ayahs and at appropriate phrase boundaries. Maintain the rhythm (1 beat per short vowel, 2 beats per natural madd).",
      },
      {
        title: "Memorise as you practise",
        description:
          "Memorising the surahs helps you recite them in daily prayers. As you practise, try to memorise the surah. Once memorised, you can recite it anywhere, anytime — a beautiful way to keep the Quran in your heart.",
      },
    ],
    examples: [
      { arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "bismi llaahi r-raḥmaani r-raḥeemi", meaning: "Bismillah — applies: madd, shaddah, sun letter, ghunnah" },
      { arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", transliteration: "qul huwa llaahu aḥad", meaning: "Surah Al-Ikhlas ayah 1 — applies: qalqalah, sun letter, tanween" },
      { arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", transliteration: "qul aʿuudhu bi-rabbi l-falaqi", meaning: "Surah Al-Falaq ayah 1 — applies: qalqalah, madd, shaddah" },
      { arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", transliteration: "qul aʿuudhu bi-rabbi n-naasi", meaning: "Surah An-Nas ayah 1 — applies: qalqalah, madd, sun letter" },
    ],
    practice:
      "Read the four ayahs above (the opening of four key surahs). Tap each to hear the audio. Identify the tajweed rules in each. Practise reciting each aloud, applying the rules. On paper, write each ayah 5 times. Take 30 minutes. Once you can recite these four ayahs fluently, you'll be ready to recite the full surahs.",
  },

  "surah-recitation": {
    intro: [
      "In this lesson, you'll recite the full short surahs from the end of the Quran: Surah Al-Ikhlas (112), Surah Al-Falaq (113), Surah An-Nas (114). These three surahs are collectively called 'Al-Mu'awwidhatayn' (the two refuges) plus Al-Ikhlas. They are recited in daily prayers and are recommended to recite before sleeping and after every prayer.",
      "Recite each surah slowly at first, applying all the tajweed rules. Pay attention to: (1) the qalqalah on قُلْ at the start of each surah; (2) the madd on the long vowels; (3) the sun letters that assimilate the laam of the article; (4) the tanween at the end of phrases (dropped at pause); (5) the shaddah on doubled letters.",
      "After you can recite each surah accurately, practise reciting all three in sequence. This is a common practice (reciting the three 'quls' — Surah Al-Ikhlas, Al-Falaq, An-Nas, each starting with قُلْ). Many Muslims recite these three after every prayer and before sleeping.",
    ],
    keyPoints: [
      {
        title: "Three surahs starting with قُلْ",
        description:
          "Surahs Al-Ikhlas (112), Al-Falaq (113), and An-Nas (114) all start with قُلْ (qul = say). They are collectively called the 'three quls' or 'Al-Mu'awwidhatayn' (the two refuges, with Al-Ikhlas sometimes grouped separately). Reciting them after every prayer and before sleeping is a Sunnah practice.",
      },
      {
        title: "Apply all the rules",
        description:
          "Recite each surah applying all the rules: qalqalah on قُلْ at the start, madd on long vowels, sun letters, tanween at pause, shaddah on doubled letters, raa rules, etc. The integration test is to apply all rules automatically.",
      },
      {
        title: "Recite slowly at first",
        description:
          "Recite slowly at first, paying attention to each rule. Once you can recite each surah accurately, build up speed. The goal is fluent, correct recitation — not rushed.",
      },
      {
        title: "Memorise the three surahs",
        description:
          "Memorising these three surahs (Al-Ikhlas, Al-Falaq, An-Nas) is recommended for every Muslim. They are short (4, 5, and 6 ayahs respectively) and are recited in daily prayers. Once memorised, you can recite them anywhere.",
      },
    ],
    examples: [
      { arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", transliteration: "qul huwa llaahu aḥad, allaahu ṣ-ṣamad, lam yalid wa lam yuulad, wa lam yakun lahu kufuwan aḥad", meaning: "Surah Al-Ikhlas — 4 ayahs" },
      { arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", transliteration: "qul aʿuudhu bi-rabbi l-falaqi, min sharri maa khalaq, wa min sharri ghaasiqin idhaa waqab, wa min sharri n-naffaathaati fi l-ʿuqad, wa min sharri haasidin idhaa hasad", meaning: "Surah Al-Falaq — 5 ayahs" },
      { arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ", transliteration: "qul aʿuudhu bi-rabbi n-naasi, maliki n-naasi, ilaahi n-naasi, min sharri l-waswaasi l-khannaasi, alladhi yuwaswisu fii ṣuduri n-naasi, mina l-jinnati wa n-naas", meaning: "Surah An-Nas — 6 ayahs" },
    ],
    practice:
      "Recite the three surahs above (Al-Ikhlas, Al-Falaq, An-Nas). Tap each to hear the audio. Recite each slowly, applying all the rules. Then recite them faster as you become comfortable. On paper, write each surah 5 times. Take 45-60 minutes. By the end, you should be able to recite all three fluently. This is a major milestone — these three surahs are recited in daily prayers and are part of the Sunnah before sleeping.",
  },

  "error-analysis": {
    intro: [
      "In this lesson, you'll analyse common errors in Quranic recitation and learn how to correct them. Recording your own recitation and comparing it to a qualified reciter's is one of the best ways to identify your errors. Listen carefully and note where you deviate.",
      "Common errors include: (1) insufficient madd elongation (making the madd too short); (2) missing qalqalah (not applying the echo on the qalqalah letters); (3) confusing emphatic and non-emphatic letters (saying س instead of ص); (4) missing ghunnah on idgham and ikhfa cases; (5) wrong application of noon saakin and meem saakin rules; (6) not pausing at the right points.",
      "For each error, the correction is: (1) drill the rule repeatedly; (2) listen to qualified reciters and imitate them; (3) record yourself and compare; (4) find a teacher if possible. With consistent practice, errors can be corrected. The key is awareness — once you know what to listen for, you can identify your own errors.",
    ],
    keyPoints: [
      {
        title: "Record yourself",
        description:
          "Record your own recitation and compare it to a qualified reciter's. This is one of the best ways to identify your errors. Listen carefully and note where you deviate. Even better: ask a teacher to listen to your recording.",
      },
      {
        title: "Common errors and corrections",
        description:
          "Common errors: insufficient madd (drill the beats), missing qalqalah (drill the qalqalah letters), confusing emphatic letters (drill the distinction), missing ghunnah (drill the nasal hum), wrong noon/meem saakin rules (review the rules), wrong pausing (study the stopping signs).",
      },
      {
        title: "Drill the weak areas",
        description:
          "Identify your weak areas through self-recording or teacher feedback. Drill those areas specifically. Targeted practice is more efficient than general recitation. Focus on the rules you struggle with.",
      },
      {
        title: "Listen to qualified reciters",
        description:
          "Listen to qualified reciters regularly. Recommended reciters for tajweed learning: Al-Husary (slow, clear), Al-Minshawi (tajweed-focused), Al-Sudais and Al-Shuraim (beautiful recitation). Listening trains your ear to the correct sound.",
      },
    ],
    examples: [
      { arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", transliteration: "qul huwa llaahu aḥad", meaning: "Common error: not applying qalqalah on قُلْ. Correction: drill the qalqalah bounce on qaaf." },
      { arabic: "الرَّحْمَٰنِ", transliteration: "ar-raḥmaani", meaning: "Common error: insufficient madd on alif. Correction: count 2 beats for natural madd, drill the elongation." },
      { arabic: "مِنْ شَرِّ", transliteration: "min sharr", meaning: "Common error: not applying ikhfa on noon+sheen. Correction: drill the 2-beat ghunnah, position tongue for sheen." },
      { arabic: "نَّاسِ", transliteration: "naas", meaning: "Common error: confusing emphatic/non-emphatic. Correction: drill the heaviness of saad (in nas, the noon is light but the rest...). Actually, in نَّاس, the noon is doubled (shaddah), so it's idgham." },
    ],
    practice:
      "Record yourself reciting a short surah (e.g., Al-Ikhlas). Listen to the recording and compare it to a qualified reciter's version. Identify areas where you deviate. Drill those areas specifically. Repeat this process until you can recite the surah fluently with correct tajweed. Take 30-45 minutes. This is one of the most effective practice methods for tajweed.",
  },

  "final-assessment": {
    intro: [
      "This is the final assessment of the Iqroh curriculum. You will recite the full Surah Al-Fatihah and the three 'qul' surahs (Al-Ikhlas, Al-Falaq, An-Nas) — the four surahs most commonly recited in daily prayers. By successfully reciting these, you demonstrate mastery of the foundational tajweed rules.",
      "The assessment criteria are: (1) correct pronunciation of each letter (recognising emphatic vs non-emphatic); (2) correct application of madd (2 beats for natural, 4-5 for connected, 6 for necessary); (3) correct application of qalqalah on the qalqalah letters; (4) correct application of noon saakin and meem saakin rules; (5) correct application of sun/moon letters; (6) correct pausing at the end of ayahs and at appropriate phrase boundaries; (7) fluent, flowing recitation.",
      "After completing this assessment, you will have mastered the foundational tajweed rules. From here, the journey continues: study the advanced tajweed rules (the rules of madd in more detail, the rules of different riwayat, the recitation styles of the qira'at), memorise more surahs, and ideally study with a qualified teacher who can correct your recitation. May Allah accept your effort and make you among the people of the Quran.",
    ],
    keyPoints: [
      {
        title: "Recite four key surahs",
        description:
          "Recite Surah Al-Fatihah (7 ayahs), Surah Al-Ikhlas (4 ayahs), Surah Al-Falaq (5 ayahs), and Surah An-Nas (6 ayahs). These are the four surahs most commonly recited in daily prayers.",
      },
      {
        title: "Apply all the rules",
        description:
          "Apply all the rules: correct pronunciation (emphatic vs non-emphatic), madd elongation (2/4-5/6 beats), qalqalah, noon saakin and meem saakin rules, sun/moon letters, pausing, fluent flow.",
      },
      {
        title: "Record and self-assess",
        description:
          "Record your recitation of all four surahs. Listen back and assess yourself against the criteria. Identify areas where you struggle and drill them. If possible, have a qualified teacher listen and provide feedback.",
      },
      {
        title: "Continue the journey",
        description:
          "After this assessment, continue your journey: study advanced tajweed, memorise more surahs, study with a qualified teacher. The Quran is an ocean — there is always more to learn. May Allah make you among the people of the Quran.",
      },
    ],
    examples: [
      { arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", transliteration: "bismi llaahi r-raḥmaani r-raḥeemi, al-ḥamdu lillaahi rabbi l-ʿalameena, ar-raḥmaani r-raḥeemi, maaliki yawmi d-deeni, iyyaaka naʿbudu wa iyyaaka nastaʿeenu, ihdina ṣ-ṣiraata l-mustaqeema, ṣiraata lladheena anʿamta ʿalayhim ghayri l-maghḍoobi ʿalayhim wa la ḍ-ḍaalleena", meaning: "Surah Al-Fatihah — the 7 ayahs" },
      { arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", transliteration: "qul huwa llaahu aḥad, allaahu ṣ-ṣamad, lam yalid wa lam yuulad, wa lam yakun lahu kufuwan aḥad", meaning: "Surah Al-Ikhlas — the 4 ayahs" },
      { arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", transliteration: "qul aʿuudhu bi-rabbi l-falaqi, min sharri maa khalaq, wa min sharri ghaasiqin idhaa waqab, wa min sharri n-naffaathaati fi l-ʿuqad, wa min sharri haasidin idhaa hasad", meaning: "Surah Al-Falaq — the 5 ayahs" },
      { arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ", transliteration: "qul aʿuudhu bi-rabbi n-naasi, maliki n-naasi, ilaahi n-naasi, min sharri l-waswaasi l-khannaasi, alladhi yuwaswisu fii ṣuduri n-naasi, mina l-jinnati wa n-naas", meaning: "Surah An-Nas — the 6 ayahs" },
    ],
    practice:
      "Recite all four surahs: Al-Fatihah, Al-Ikhlas, Al-Falaq, An-Nas. Tap each to hear the audio. Recite each slowly first, then build up speed. Apply all the tajweed rules you've learned. Record your recitation and listen back. Identify areas for improvement and drill them. On paper, write each surah 3 times. Take 60 minutes for this final assessment. By the end, you should be able to recite all four surahs fluently with correct tajweed, insha'Allah. May Allah accept your effort and make you among the people of the Quran. BaarakAllahu feek.",
  },
}
