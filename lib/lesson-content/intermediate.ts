// Bismillah Ar-Rahman Ar-Roheem.
//
// Lesson content for the Intermediate Phase of the Iqroh curriculum.
// 21 lessons across 5 modules:
//   Module 5: Mudood (elongations) - 5 lessons
//   Module 6: Sukuun and Non-Vowels - 4 lessons
//   Module 7: Sun and Moon Letters - 4 lessons
//   Module 8: Word Formation - 4 lessons
//   Module 9: Sentence Construction - 4 lessons

import type { LessonContent } from "./types"

export const intermediateContent: Record<string, LessonContent> = {
  // ===================================================================
  // MODULE 5: MUDOOD (Elongations) — 5 lessons
  // ===================================================================

  "intro-to-mudood": {
    intro: [
      "Mudood (مدود) is the plural of madd (مد), which means 'elongation' or 'extension'. In tajweed, madd refers to the elongation of a vowel sound from one beat (the length of a short vowel) to two or more beats. This is one of the most important rules of Quranic recitation — it gives the recitation its characteristic flowing, melodic quality and distinguishes it from ordinary speech.",
      "There are two categories of madd: (1) Madd Aslee (المد الأصلي) — the natural/original madd, which is two beats long and occurs when a letter with a harakah is followed by its corresponding long-vowel letter (alif for fathah, waw for dammah, yaa for kasrah). (2) Madd Far'ee (المد الفرعي) — the secondary/derived madd, which is longer than two beats and occurs due to specific causes like a hamzah, sukuun, or shaddah after the madd letter.",
      "The three letters of madd (حروف المد) are: alif (ا) which extends the fathah, waaw (و) which extends the dammah, and yaa (ي) which extends the kasrah. When one of these letters appears after a letter with its corresponding harakah, the vowel is elongated to two beats. For example: بَا (baa — long 'aa'), بُو (buu — long 'uu'), بِي (bii — long 'ii').",
    ],
    keyPoints: [
      {
        title: "Madd = elongation",
        description:
          "Madd means elongation. It extends a vowel from one beat (short) to two or more beats (long). This is the basic unit of timing in tajweed recitation.",
      },
      {
        title: "Three letters of madd",
        description:
          "The letters of madd are ا (alif), و (waaw), and ي (yaa). Alif extends fathah to 'aa', waaw extends dammah to 'uu', yaa extends kasrah to 'ii'. These three letters are also called 'huroof al-madd' (letters of elongation) or 'huroof al-lin' (soft letters).",
      },
      {
        title: "Madd Aslee (natural) = 2 beats",
        description:
          "The natural madd is exactly two beats long. It occurs when a letter of madd appears after a letter with its corresponding harakah, with no other cause for elongation. Example: بَا (baa) is two beats of 'aa'. This is the most common type of madd.",
      },
      {
        title: "Madd Far'ee (secondary) = 4 or 6 beats",
        description:
          "The secondary madd is 4 or 6 beats long (depending on the type). It occurs when there is a hamzah, sukuun, or shaddah after the madd letter. We will study the specific types in the following lessons.",
      },
    ],
    examples: [
      { arabic: "بَا", transliteration: "baa", meaning: "baa + alif — long 'aa' (madd tabee'ee, 2 beats)" },
      { arabic: "بُو", transliteration: "buu", meaning: "baa + waaw — long 'uu' (madd tabee'ee, 2 beats)" },
      { arabic: "بِي", transliteration: "bii", meaning: "baa + yaa — long 'ii' (madd tabee'ee, 2 beats)" },
      { arabic: "قَالَ", transliteration: "qaala", meaning: "he said — madd on the alif after the fathah" },
      { arabic: "قَوْلٌ", transliteration: "qawlun", meaning: "saying — waaw with sukuun, not madd (it's a consonant)" },
      { arabic: "نُورٌ", transliteration: "nurun", meaning: "light — waaw with dammah before, but no madd (the waaw is the consonant)" },
    ],
    practice:
      "Look at the first three examples. Each is a letter with a harakah followed by the corresponding madd letter. Tap to hear the elongation. The elongation should last about 1 second (two beats). Practise saying 'baa', 'buu', 'bii' with elongation. Take 10 minutes to internalise the madd tabee'ee before moving on to the specific types.",
  },

  "natural-elongation": {
    intro: [
      "The natural madd (ممد طبيعي / madd tabee'ee) is the simplest form of elongation. It occurs when a letter of madd (alif ا, waaw و, or yaa ي) appears after a letter with its corresponding harakah (fathah, dammah, kasrah), with no other elongation cause. The madd is exactly two beats long — the same length as two short vowels.",
      "The rule is precise: if the letter before the alif has a fathah, the alif elongates the fathah to 'aa' (2 beats). If the letter before the waaw has a dammah, the waaw elongates the dammah to 'uu' (2 beats). If the letter before the yaa has a kasrah, the yaa elongates the kasrah to 'ii' (2 beats). If the harakah does not match (e.g., fathah before waaw, or dammah before alif), there is no madd — the letters are pronounced as separate consonants.",
      "Common examples from the Quran: قَالَ (qaala = he said, madd on alif), نُورٌ (nurun — wait, no madd here because the waaw is a consonant not preceded by dammah), رَسُولٌ (rasoolun = messenger — madd on waaw, because the preceding letter س has dammah before the waaw). The waaw in رَسُولٌ is a madd letter, not a consonant, because the preceding letter has dammah.",
    ],
    keyPoints: [
      {
        title: "The matching rule",
        description:
          "Madd tabee'ee requires the harakah before the madd letter to MATCH the madd letter: fathah before alif, dammah before waaw, kasrah before yaa. If they don't match, the madd letter is a consonant, not a vowel carrier.",
      },
      {
        title: "Exactly two beats",
        description:
          "The natural madd is exactly two beats long — the same as two short vowels. Practise counting: 'ba' (1 beat) 'baa' (2 beats). The elongation should be exactly double the short vowel length, not longer and not shorter.",
      },
      {
        title: "Alif with no hamzah",
        description:
          "For madd tabee'ee on alif, the alif must NOT have a hamzah above or below it. If the alif has a hamzah (أ or إ), it is a different sound (hamzah, not alif madd). The plain alif ا is the madd letter.",
      },
      {
        title: "Waaw and yaa with sukuun",
        description:
          "For madd tabee'ee on waaw or yaa, the madd letter has a sukuun (no harakah on itself). The waaw or yaa with a harakah on itself is a consonant (with a vowel sound), not a madd letter. Example: قَوْل (qawl) — waaw has sukuun, no madd; رَسُول (rasool) — waaw has sukuun, madd on preceding dammah.",
      },
    ],
    examples: [
      { arabic: "قَالَ", transliteration: "qaala", meaning: "he said — madd on alif (2 beats of 'aa')" },
      { arabic: "رَسُولٌ", transliteration: "rasoolun", meaning: "messenger — madd on waaw (2 beats of 'uu')" },
      { arabic: "دِينٌ", transliteration: "deenun", meaning: "religion — madd on yaa (2 beats of 'ii')" },
      { arabic: "كِتَابٌ", transliteration: "kitaabun", meaning: "book — madd on alif after fathah" },
      { arabic: "سُوفٌ", transliteration: "soofun", meaning: "wool — madd on waaw after dammah" },
      { arabic: "زِيدٌ", transliteration: "zeedun", meaning: "name — madd on yaa after kasrah" },
    ],
    practice:
      "Drill the six examples above. Tap each to hear the madd. Pay attention to the elongation: each long vowel should last about 1 second (two beats). On paper, write each word 5 times. Then practise reading them aloud with the correct elongation. Take 15 minutes.",
  },

  "connected-elongation": {
    intro: [
      "Madd Muttasil (المد المتصل) — the 'connected' madd — occurs when a hamzah (ء) appears immediately AFTER a madd letter (within the same word). The madd is elongated to 4 or 5 beats (most reciters use 4 beats; some use 5). This is one of the longest obligatory madds in tajweed.",
      "The rule: if a madd letter (alif, waaw, yaa) is followed by a hamzah in the SAME word, the madd becomes muttasil (connected) and is elongated to 4-5 beats. For example: جَاءَ (jaa'a = he came) — the alif is followed by a hamzah, so the madd is muttasil (4-5 beats). Similarly: سُوءٌ (soo'un = evil), مِيتَةٌ (meetatun = dead).",
      "The hamzah that triggers madd muttasil can appear in different forms: as a separate hamzah (ء), as an alif with hamzah above (أ), as an alif with hamzah below (إ), as a waaw with hamzah above (ؤ), or as a yaa with hamzah above (ئ). All of these count as a hamzah for the purpose of madd muttasil.",
    ],
    keyPoints: [
      {
        title: "Hamzah after madd letter",
        description:
          "Madd muttasil requires a hamzah immediately after a madd letter, in the SAME word. The hamzah can be written as ء (separate), أ (alif with hamzah above), إ (alif with hamzah below), ؤ (waaw with hamzah), or ئ (yaa with hamzah).",
      },
      {
        title: "4 or 5 beats",
        description:
          "Madd muttasil is elongated to 4 or 5 beats, depending on the recitation style (riwayah). The most common practice is 4 beats. This is the longest OBLIGATORY madd — the reciter must elongate, there is no choice.",
      },
      {
        title: "Within the same word",
        description:
          "The hamzah and the madd letter must be in the SAME word for madd muttasil. If they are in different words, it is madd munfasil (separated), which is shorter (2-4 beats, optional elongation).",
      },
      {
        title: "Examples from the Quran",
        description:
          "Common examples: جَاءَ (jaa'a = he came), سَأَلَ (sa'ala = he asked — wait, this has the hamzah BEFORE the madd letter, not after, so it's not madd muttasil). Correct example: جَاءُوا (jaa'oo = they came), سُوءٌ (soo'un = evil).",
      },
    ],
    examples: [
      { arabic: "جَاءَ", transliteration: "jaa'a", meaning: "he came — madd muttasil (alif + hamzah in same word)" },
      { arabic: "سُوءٌ", transliteration: "soo'un", meaning: "evil — madd muttasil (waaw + hamzah)" },
      { arabic: "جِئْنَا", transliteration: "ji'naa", meaning: "we came — different (madd on alif at the end, after the hamzah, not madd muttasil)" },
      { arabic: "سَمِيعٌ", transliteration: "sameeʿun", meaning: "all-hearing — madd on yaa, no hamzah after (not muttasil)" },
      { arabic: "رِئَاءٌ", transliteration: "riyaa'un", meaning: "showing off — madd on alif + hamzah after" },
      { arabic: "مَسْؤُولٌ", transliteration: "mas'oolun", meaning: "responsible — madd on waaw + hamzah before (not muttasil)" },
    ],
    practice:
      "Drill the examples above. Tap each to hear the elongation. The madd muttasil examples (جَاءَ, سُوءٌ) should have a clearly longer elongation (4 beats) compared to madd tabee'ee (2 beats). On paper, write each word 5 times. Take 15 minutes.",
  },

  "separated-elongation": {
    intro: [
      "Madd Munfasil (المد المنفصل) — the 'separated' madd — occurs when a madd letter (alif, waaw, yaa) at the END of one word is followed by a hamzah at the START of the next word. The madd is elongated to 2 or 4 beats — the longer version is OPTIONAL (the reciter's choice based on the recitation style).",
      "The rule: if a madd letter is at the end of one word and the next word starts with a hamzah, the madd becomes munfasil (separated). For example: إِنَّا (innaa = indeed we) followed by أَعْطَيْنَا (a'taynaa = we gave) — the madd on the alif at the end of إِنَّا is followed by the hamzah at the start of أَعْطَيْنَا, making it munfasil.",
      "Madd munfasil is elongated to either 2 beats (treating it like madd tabee'ee — natural madd) or 4 beats (treating it like madd muttasil — connected madd). The choice depends on the recitation style (riwayah). Most reciters of Hafs use 2 beats for munfasil, but some use 4 beats. Either is acceptable.",
    ],
    keyPoints: [
      {
        title: "Madd letter at end of word + hamzah at start of next",
        description:
          "Madd munfasil requires: (1) a madd letter at the END of one word, AND (2) a hamzah at the START of the next word. The two conditions must both be met. Example: إِنَّا (innaa) + أَعْطَيْنَا (a'taynaa) = madd munfasil on the alif.",
      },
      {
        title: "2 or 4 beats (optional)",
        description:
          "Madd munfasil is elongated to either 2 beats (like natural madd) or 4 beats (like connected madd). The choice depends on the recitation style. In Hafs (the most common style), it is usually 2 beats; in other styles (like Warsh), it can be 4 beats.",
      },
      {
        title: "Different words — different rule from muttasil",
        description:
          "Madd muttasil and madd munfasil both involve a madd letter followed by a hamzah, but the rule differs: muttasil is in the SAME word (4-5 beats, obligatory), munfasil is in DIFFERENT words (2-4 beats, optional).",
      },
      {
        title: "Common in the Quran",
        description:
          "Madd munfasil is very common in the Quran, especially in phrases like إِنَّا أَنزَلْنَاهُ (innaa anzalnaahu = indeed we sent it down), أَنَا أَحْمَدُ (anaa ahmad = I am Ahmad). Recognise the pattern: madd letter + word break + hamzah at the start of the next word.",
      },
    ],
    examples: [
      { arabic: "إِنَّا أَعْطَيْنَكَ", transliteration: "innaa a'taynaka", meaning: "indeed we gave you — madd munfasil on إِنَّا" },
      { arabic: "وَمَا أَدْرَاكَ", transliteration: "wa maa adraka", meaning: "and what will make you know — madd munfasil on مَا" },
      { arabic: "هُوَ الَّذِي", transliteration: "huwa alladhi", meaning: "he is the one — wait, this doesn't have hamzah after" },
      { arabic: "أَنَا أَكْثَرُ", transliteration: "anaa aktharu", meaning: "I am more — madd munfasil on أَنَا" },
      { arabic: "لَقَدْ أَرْسَلْنَا", transliteration: "laqad arsalnaa", meaning: "we sent — madd munfasil on arsalnaa at end + hamzah before" },
    ],
    practice:
      "Drill the examples above. Tap each to hear the elongation. Note that madd munfasil can be 2 or 4 beats — listen to the audio and count the beats. On paper, write each example 5 times. Then practise reading them aloud with 2 beats (the common practice). Take 15 minutes.",
  },

  "necessary-elongation": {
    intro: [
      "Madd Laazim (المد اللازم) — the 'necessary' madd — occurs when a letter of madd is followed by a sukuun that is INHERENT to that letter (i.e., the original form of the letter has a sukuun, called 'sukun 'aarin' or original sukuun). The madd is elongated to exactly 6 beats — the longest obligatory madd in tajweed.",
      "The rule: if a madd letter (alif, waaw, yaa) is followed by a letter with an original (not temporary) sukuun, the madd becomes laazim. The most common case is when a madd letter is followed by a shaddah (which combines two of the same letter, the first with a sukuun). Example: أَلَّهٌ (allaah — wait, let me think of a better example) — actually, the most common case is words like ضَالِّينَ (daalleena — those who are astray) where the madd on the alif is followed by a shaddah on the laam.",
      "Madd laazim is always 6 beats — exactly three times the length of a short vowel. This is the longest madd in tajweed. The reciter MUST elongate to 6 beats — there is no shorter version. Common examples include words like ضَالِّينَ (daalleena), طَائِفَةٌ (taa'ifatun), and others where the madd letter is followed by a shaddah.",
    ],
    keyPoints: [
      {
        title: "Madd letter + original sukuun",
        description:
          "Madd laazim requires a madd letter followed by an ORIGINAL sukuun (not a temporary one). The most common case is when the madd letter is followed by a shaddah (which inherently contains a sukuun on the first of the doubled letter).",
      },
      {
        title: "Exactly 6 beats",
        description:
          "Madd laazim is exactly 6 beats long — three times the length of a short vowel, and 1.5 times the length of madd tabee'ee. This is the longest obligatory madd. The reciter must elongate to 6 beats; there is no shorter version.",
      },
      {
        title: "Sub-types: kalimi and harfi",
        description:
          "Madd laazim has two sub-types: (1) kalimi (word-based) — the madd occurs in a regular word, like ضَالِّينَ (daalleena); (2) harfi (letter-based) — the madd occurs in the disjoint letter prefixes that appear at the start of some surahs (like الم, يس, ق).",
      },
      {
        title: "Harfi madd in surah openings",
        description:
          "Some surahs open with disjoint letters like الم (alif-laam-meem), يس (yaa-seen), ق (qaaf), طس (taa-seen). For the letters that have a madd in their name (like alif, yaa, su in 'seen'), the madd is laazim (6 beats). For others (like meem in الم), there is no special madd.",
      },
    ],
    examples: [
      { arabic: "ضَالِّينَ", transliteration: "daalleena", meaning: "those who are astray — madd laazim (6 beats) on alif + shaddah on laam" },
      { arabic: "الَ الم", transliteration: "alif-laam-meem", meaning: "surah opening — madd laazim on alif and meem (6 beats each)" },
      { arabic: "طَائِفَةٌ", transliteration: "taa'ifatun", meaning: "a group — madd on alif followed by hamzah (muttasil, not laazim)" },
      { arabic: "يَس", transliteration: "yaa-seen", meaning: "surah opening — madd laazim on yaa" },
      { arabic: "ن", transliteration: "noon", meaning: "surah opening — madd laazim on noon (because of the sukuun on noon in this form)" },
      { arabic: "ق", transliteration: "qaaf", meaning: "surah opening — no madd (qaaf is a non-madd letter here)" },
    ],
    practice:
      "Drill the examples above. The madd laazim examples (ضَالِّينَ, الم, يس, ن) should have a clearly elongated madd (6 beats, about 3 seconds). On paper, write each example 5 times. Practise the elongation: count '1-2-3-4-5-6' as you hold the vowel. Take 15-20 minutes. This is the longest madd — train your breath to sustain it.",
  },

  // ===================================================================
  // MODULE 6: SUKUUN AND NON-VOWELS — 4 lessons
  // ===================================================================

  "intro-to-sukuun": {
    intro: [
      "Sukuun (سكون) means 'silence' or 'stillness'. In tajweed, sukuun is the mark ( ْ ) placed above a letter to indicate that the letter has NO vowel — it is pronounced as a pure consonant without any following vowel sound. The sukuun is the absence of a harakah. Every letter that does not have a harakah (fathah, kasrah, dammah) is in a state of sukuun.",
      "When a letter has a sukuun, you pronounce the consonant sound alone, without any vowel after it. For example: بْ (b — just 'b', no 'a'/'i'/'u' after), مْ (m — just 'm'), سْ (s — just 's'). The consonant sound is held briefly (about half a beat) but no vowel follows. The next sound is whatever comes after — either the next consonant or a pause.",
      "Sukuun is critical for two reasons: (1) it triggers many of the tajweed rules we will study (like the rules of noon saakin, meem saakin, qalqalah, izhar, idgham, etc.); (2) it marks word boundaries in recitation, because when the reciter pauses (waqf), the last letter of the word being paused on takes a sukuun (or its vowel is removed).",
    ],
    keyPoints: [
      {
        title: "No vowel, just the consonant",
        description:
          "Sukuun means the letter is pronounced as a pure consonant, with no vowel after. بْ = just 'b' (held briefly, no vowel). This is different from بَ (ba), بِ (bi), بُ (bu) which all have a vowel.",
      },
      {
        title: "Written as a small circle above",
        description:
          "The sukuun is written as a small open circle above the letter: ( ْ ). It looks like a small 'o' or a zero. In handwritten Arabic and in the Quran, it is clearly visible above the letter.",
      },
      {
        title: "Triggers many tajweed rules",
        description:
          "Sukuun is the trigger for many tajweed rules: noon saakin rules (izhar, idgham, iqlab, ikhfa — Module 11), meem saakin rules (Module 12), qalqalah (Module 13), and others. When you see a sukuun, expect one of these rules to apply, depending on the next letter.",
      },
      {
        title: "Marks word boundaries at pause",
        description:
          "When the reciter pauses at the end of a phrase (waqf), the last letter of the word being paused on takes a sukuun (the original harakah, if any, is dropped). This is why tanween disappears at pause — the tanween's two harakat become a single sukuun.",
      },
    ],
    examples: [
      { arabic: "بْ", transliteration: "b", meaning: "baa with sukuun — just 'b'" },
      { arabic: "مْ", transliteration: "m", meaning: "meem with sukuun — just 'm'" },
      { arabic: "سْ", transliteration: "s", meaning: "seen with sukuun — just 's'" },
      { arabic: "بِسْمِ", transliteration: "bismi", meaning: "in the name of — meem has sukuun in the middle" },
      { arabic: "خَوْفٌ", transliteration: "khawfun", meaning: "fear — waaw has sukuun" },
      { arabic: "قَوْلٌ", transliteration: "qawlun", meaning: "saying — waaw has sukuun (no madd because no dammah before)" },
    ],
    practice:
      "Look at the first three examples. Each is a single letter with a sukuun. Tap to hear the sound — it should be just the consonant, no vowel after. Then look at the words بِسْمِ, خَوْفٌ, قَوْلٌ — find the sukuun in each. On paper, write each letter 5 times with a sukuun above it. Take 10 minutes.",
  },

  "sukuun-on-letters": {
    intro: [
      "In this lesson, we drill letters with sukuun in different contexts. The sukuun appears in three main situations: (1) in the middle of a word (marking a consonant cluster), (2) at the end of a word before the next word (a pause point), and (3) at the very end of a verse (the pause point, where the reciter stops).",
      "In a consonant cluster (two consonants with no vowel between), the first has a sukuun and the second has a harakah. For example: خَلْقٌ (khulqun = creation) — the laam has sukuun, the qaaf has dammah. The reciter pronounces 'kh' then 'l' (held) then 'qun'. The two consonants are clearly separated.",
      "The challenge of sukuun reading is to pronounce each consonant distinctly without blending them. When two consonants come together (one with sukuun, one with a harakah), there should be a clear break between them — no vowel glide. This is called 'izhar' (clear pronunciation) and is the default behaviour for most consonant clusters.",
    ],
    keyPoints: [
      {
        title: "Consonant cluster: sukuun + harakah",
        description:
          "When two consonants come together, the first has sukuun and the second has a harakah. The first is held briefly, then the second is pronounced with its vowel. Example: شَرْطٌ (shartun) — raa has sukuun, taa has dammah. Pronounced 'shar-tun' with a clear break.",
      },
      {
        title: "Clear break between consonants",
        description:
          "When two consonants come together, there should be a clear break between them. Do NOT blend them or insert a vowel between them. This is called izhar (clear pronunciation) and is the default behaviour.",
      },
      {
        title: "Sukuun at end of word",
        description:
          "When a letter with a sukuun is at the end of a word (and the reciter is not pausing), the sukuun is preserved — the consonant is pronounced, then the next word starts. Example: خَلْقٌ (khulqun) — at the end, the tanween dammah (ٌ) is pronounced as 'un', then the next word starts.",
      },
      {
        title: "Sukuun at pause (waqf)",
        description:
          "When the reciter pauses at the end of a phrase, the last letter of the word being paused on takes a sukuun — even if it originally had a harakah or tanween. The tanween is dropped, the harakah is dropped, only the consonant sound is pronounced. This is a fundamental rule of recitation.",
      },
    ],
    examples: [
      { arabic: "خَلْقٌ", transliteration: "khulqun", meaning: "creation — laam has sukuun, qaaf has tanween dammah" },
      { arabic: "شَرْطٌ", transliteration: "shartun", meaning: "condition — raa has sukuun" },
      { arabic: "عَلْمٌ", transliteration: "ʿilmun", meaning: "knowledge — laam has sukuun" },
      { arabic: "ضَوْءٌ", transliteration: "ḍaw'un", meaning: "light — waaw has sukuun" },
      { arabic: "بِسْمِ", transliteration: "bismi", meaning: "in the name of — meem has sukuun in the middle" },
      { arabic: "كَلَّا", transliteration: "kallaa", meaning: "no! — laam has sukuun (the shaddah is two laams, the first has sukuun)" },
    ],
    practice:
      "Drill the six examples. For each, tap to hear the audio. Notice the clear break between the consonant with sukuun and the next consonant. On paper, write each word 5 times. Practise reading them aloud, emphasising the break. Take 15 minutes.",
  },

  "consonant-clusters": {
    intro: [
      "A consonant cluster in Arabic is when two or more consonants come together without a vowel between them. The first has a sukuun, the second has a harakah. For example, in شَرْط (shart), the raa has sukuun and the taa has fathah — they form a consonant cluster 'rt'.",
      "Consonant clusters are common in Arabic and require clear pronunciation. Each consonant should be distinct, with a slight break between them. The challenge is to pronounce the cluster smoothly without inserting a vowel between the consonants (a common mistake called 'iktira' — inserting a vowel).",
      "Some consonant clusters trigger special tajweed rules. The most important are: (1) when the first consonant is noon saakin (نْ) or tanween, the second consonant determines the rule (izhar, idgham, iqlab, ikhfa — Module 11); (2) when the first consonant is meem saakin (مْ), the second consonant determines the rule (Module 12); (3) when the first consonant is one of the qalqalah letters (قطب جد), the cluster produces an 'echo' sound (Module 13).",
    ],
    keyPoints: [
      {
        title: "First consonant sukuun, second harakah",
        description:
          "In a consonant cluster, the first consonant has sukuun, the second has a harakah. The first is held briefly (half a beat), the second is pronounced with its vowel. Example: شَرْط (shart) = sh + r (held) + t (with fathah).",
      },
      {
        title: "No vowel insertion",
        description:
          "Do NOT insert a vowel between the consonants. The break should be silent, not a brief 'uh' or 'ih'. This is a common mistake — practise pronouncing the cluster as a single unit, not as separate syllables.",
      },
      {
        title: "Triggers tajweed rules",
        description:
          "Some clusters trigger special rules: noon saakin + specific letters → izhar/idgham/iqlab/ikhfa; meem saakin + specific letters → idgham/ikhfa/izhar shafawi; qalqalah letters + sukuun → qalqalah echo. We will study each rule in the Advanced phase.",
      },
      {
        title: "Same consonant doubled (shaddah)",
        description:
          "When the same consonant appears twice in a row (the first with sukuun, the second with a harakah), the two merge into a shaddah ( ّ ) — a 'doubled' consonant. The shaddah marks where two of the same consonant come together. We will study shaddah in detail in a later module.",
      },
    ],
    examples: [
      { arabic: "شَرْطٌ", transliteration: "shartun", meaning: "condition — 'rt' cluster" },
      { arabic: "عِلْمٌ", transliteration: "ʿilmun", meaning: "knowledge — 'lm' cluster" },
      { arabic: "ضَوْءٌ", transliteration: "ḍaw'un", meaning: "light — 'w'' cluster (waaw sukuun + hamzah)" },
      { arabic: "كَلْبٌ", transliteration: "kalbun", meaning: "dog — 'lb' cluster" },
      { arabic: "بِسْمِ", transliteration: "bismi", meaning: "in the name of — 'sm' cluster" },
      { arabic: "صِدْقٌ", transliteration: "ṣidqun", meaning: "truth — 'dq' cluster" },
    ],
    practice:
      "Drill the six consonant cluster examples. Tap each to hear the audio. Pay attention to the clear break between the two consonants — no vowel should be inserted. On paper, write each word 5 times. Practise reading them aloud, emphasising the break. Take 15 minutes.",
  },

  "special-sukuun-cases": {
    intro: [
      "There are several special cases of sukuun that the reciter must know: (1) the silent alif (الألف الصامتة) — when an alif appears at the end of a word after a fathah but is not pronounced except at pause; (2) the waaw and yaa with sukuun after a fathah (huroof al-lin) — these are 'soft' madd letters; (3) the sukuun at pause (waqf) — when the reciter pauses, the last letter takes a sukuun regardless of its original harakah.",
      "The silent alif is a unique feature of Arabic orthography. In words like كَتَبُوا (kataboo = they wrote), the alif at the end (ا) is silent in normal reading — it is not pronounced as 'aa'. Only when the reciter pauses on this word does the alif become pronounced as a long 'aa' (taking the place of the original harakah).",
      "Huroof al-lin (soft letters) are waaw and yaa with sukuun after a fathah. For example: خَوْف (khawf), بَيْت (bayt). These letters are 'soft' because they have an inherent elongation quality even without a madd letter before them. At pause (waqf), they can be elongated to 2-4 beats (the reciter's choice).",
    ],
    keyPoints: [
      {
        title: "Silent alif at end of word",
        description:
          "When an alif appears at the end of a word after a fathah (like كَتَبُوا, دَعَوَا), the alif is silent in normal reading — it is not pronounced. Only at pause (waqf) does the alif become pronounced as a long 'aa' (2 beats).",
      },
      {
        title: "Huroof al-lin (soft letters)",
        description:
          "Waaw (و) and yaa (ي) with sukuun after a fathah are called huroof al-lin. Examples: خَوْف (khawf), بَيْت (bayt), كَيْد (kayd). They are 'soft' because they can be elongated at pause (waqf) to 2-4 beats — the reciter's choice. In normal reading, they are short (the fathah is just 1 beat).",
      },
      {
        title: "Sukuun at pause (waqf)",
        description:
          "When the reciter pauses at the end of a phrase (waqf), the last letter of the word being paused on takes a sukuun — the original harakah (or tanween) is dropped. Only the consonant sound remains. For example, عَلِيمٌ (ʿaleemun) at pause becomes عَلِيمْ (ʿaleem — with a sustained 'm' and no 'un').",
      },
      {
        title: "Choosing pause points",
        description:
          "The reciter chooses where to pause based on meaning and breath. Good pause points preserve the meaning (no breaking of phrases that belong together). The end of every ayah is a valid pause point. Within an ayah, the reciter may pause at certain punctuation marks (م، ۚ, etc.) or at the end of a complete phrase.",
      },
    ],
    examples: [
      { arabic: "كَتَبُوا", transliteration: "kataboo", meaning: "they wrote — alif is silent in normal reading" },
      { arabic: "دَعَوَا", transliteration: "daʿawaa", meaning: "they called — alif is silent" },
      { arabic: "خَوْفٌ", transliteration: "khawfun", meaning: "fear — waaw with sukuun (huroof al-lin), can be elongated at pause" },
      { arabic: "بَيْتٌ", transliteration: "baytun", meaning: "house — yaa with sukuun (huroof al-lin), can be elongated at pause" },
      { arabic: "عَلِيمٌ", transliteration: "ʿaleemun", meaning: "all-knowing — at pause: ʿaleem (no 'un')" },
      { arabic: "رَحِيمٌ", transliteration: "raheemun", meaning: "all-merciful — at pause: raheem (no 'un')" },
    ],
    practice:
      "Drill the six examples. Tap each to hear the audio. For the silent alif examples (كَتَبُوا, دَعَوَا), listen for the absence of the alif sound in normal reading. For the huroof al-lin (خَوْف, بَيْت), listen for the brief elongation. For the tanween examples (عَلِيمٌ, رَحِيمٌ), compare the normal reading ('un') with the pause version (no 'un'). Take 15 minutes.",
  },

  // ===================================================================
  // MODULE 7: SUN AND MOON LETTERS — 4 lessons
  // ===================================================================

  "definite-article": {
    intro: [
      "The Arabic definite article is ال (al = 'the'). It is prefixed to a noun to make it definite (specific, like 'the book' vs 'a book'). When ال is prefixed to a noun, the noun loses its tanween (if it had one) — definite nouns do not have tanween. For example, كِتَابٌ (kitaabun = a book) becomes الْكِتَابُ (al-kitaabu = the book).",
      "The laam of the article (called 'laam at-Ta'reef') has a sukuun: الْ. The alif has a hamzah wasl (a special type of hamzah that is silent when connected to the previous word). When you start reciting from the article (with no preceding word), the alif is pronounced as a hamzah with a fathah: 'a'. When you continue from a preceding word, the alif is silent (the preceding word's vowel flows into the article).",
      "The article ال causes the next letter to be either: (1) assimilated (merged) with the laam — this happens with the 'sun letters' (الحروف الشمسية); or (2) pronounced clearly with the laam — this happens with the 'moon letters' (الحروف القمرية). We will study both cases in the next lessons.",
    ],
    keyPoints: [
      {
        title: "Article = 'the'",
        description:
          "ال (al) is the Arabic definite article, equivalent to 'the' in English. It is prefixed to nouns to make them definite. The noun loses its tanween when the article is added. Example: كِتَابٌ (kitaabun = a book) → الْكِتَابُ (al-kitaabu = the book).",
      },
      {
        title: "Laam has sukuun, alif has hamzah wasl",
        description:
          "The laam of the article has a sukuun (الْ). The alif has a hamzah wasl — a special silent hamzah. When starting from the article, the alif is pronounced as 'a'. When continuing from a preceding word, the alif is silent.",
      },
      {
        title: "Triggers sun/moon letter rules",
        description:
          "When ال is prefixed to a noun, the next letter (the first letter of the noun) determines whether the laam of the article is assimilated (sun letters) or pronounced (moon letters). This is the core rule of the next two lessons.",
      },
      {
        title: "Common in the Quran",
        description:
          "ال is one of the most common morphemes in the Quran. It appears tens of thousands of times. Recognising it and applying the sun/moon letter rule is essential for correct recitation.",
      },
    ],
    examples: [
      { arabic: "الْكِتَابُ", transliteration: "al-kitaabu", meaning: "the book — moon letter (kaf), laam pronounced" },
      { arabic: "الشَّمْسُ", transliteration: "ash-shamsu", meaning: "the sun — sun letter (sheen), laam assimilated" },
      { arabic: "الرَّحْمَٰنُ", transliteration: "ar-rahmanu", meaning: "the Most Merciful — sun letter (raa), laam assimilated" },
      { arabic: "الْحَمْدُ", transliteration: "al-ḥamdu", meaning: "the praise — moon letter (haa), laam pronounced" },
      { arabic: "النَّاسُ", transliteration: "an-naasu", meaning: "mankind — sun letter (noon), laam assimilated" },
      { arabic: "اللَّهُ", transliteration: "Allahu", meaning: "Allah — special case (laam is shaddah), pronounced with tafkheem" },
    ],
    practice:
      "Look at the six examples. Each starts with ال (the article). Tap each to hear the pronunciation. Notice that some keep the 'l' sound (al-kitaabu, al-ḥamdu) and some drop it (ash-shamsu, ar-rahmanu, an-naasu). The next two lessons explain the rule. On paper, write each example 5 times. Take 10 minutes.",
  },

  "sun-letters": {
    intro: [
      "Sun letters (الحروف الشمسية) are 14 letters that, when they appear at the start of a noun (after the definite article ال), cause the laam of the article to ASSIMILATE (merge) into them. The laam is NOT pronounced; instead, the sun letter takes a shaddah (doubled consonant) and is pronounced as a doubled letter. For example: الشَّمْس (ash-shams = the sun) — the laam is not pronounced; the sheen is doubled ('sh-sh').",
      "The 14 sun letters are: ت ث د ذ ر ز س ش ص ض ط ظ ل ن. A common mnemonic is the phrase 'نَظَرْتُ ثُمَّ بِثَدُّ صَفَتْ زِلًّا' (some of these letters). Another way to remember: the sun letters are mostly the letters with a 'hissing' or 'whistling' quality (s, sh, t, th, d, dh, r, z, etc.) — they share an articulation point or quality that allows assimilation with the laam.",
      "When a sun letter follows ال, the laam of the article is silent (not pronounced) and the sun letter takes a shaddah. For example: الشَّمْس (ash-shams), الرَّجُل (ar-rajul), النَّاس (an-naas). The shaddah on the sun letter is what makes it 'doubled' — it is pronounced as if the letter appears twice in a row.",
    ],
    keyPoints: [
      {
        title: "14 sun letters",
        description:
          "The 14 sun letters are: ت ث د ذ ر ز س ش ص ض ط ظ ل ن. They are called 'sun letters' because the word الشَّمْس (ash-shams = the sun) is the classical example — the sheen is a sun letter, so the laam of ال is assimilated into it.",
      },
      {
        title: "Laam is silent, sun letter is doubled",
        description:
          "When a sun letter follows ال, the laam of the article is NOT pronounced. Instead, the sun letter takes a shaddah and is pronounced as a doubled letter. Example: الشَّمْس = ash-shams (not al-shams).",
      },
      {
        title: "The shaddah is the visual mark",
        description:
          "In the written form, the sun letter has a shaddah ( ّ ) above it. This shaddah indicates the doubling. For example, in الشَّمْس, the sheen has a shaddah above it. The shaddah is the visual cue that the laam has been assimilated.",
      },
      {
        title: "Laam of the article becomes a silent letter",
        description:
          "Although the laam of the article is silent, it is still written. You will see ال followed by the sun letter with a shaddah. The laam is part of the orthography even though it is not pronounced.",
      },
    ],
    examples: [
      { arabic: "الشَّمْسُ", transliteration: "ash-shamsu", meaning: "the sun — sheen is sun letter" },
      { arabic: "الرَّجُلُ", transliteration: "ar-rajulu", meaning: "the man — raa is sun letter" },
      { arabic: "النَّاسُ", transliteration: "an-naasu", meaning: "mankind — noon is sun letter" },
      { arabic: "الصَّلَاةُ", transliteration: "aṣ-ṣalaatu", meaning: "the prayer — saad is sun letter" },
      { arabic: "الطَّرِيقَةُ", transliteration: "aṭ-ṭareeqatu", meaning: "the way — taa (emphatic) is sun letter" },
      { arabic: "السَّلَامُ", transliteration: "as-salaamu", meaning: "the peace — seen is sun letter" },
      { arabic: "الدُّنْيَا", transliteration: "ad-dunyaa", meaning: "the world — daal is sun letter" },
    ],
    practice:
      "Drill the seven sun letter examples. Tap each to hear the audio. Notice that the 'l' sound is absent — the sun letter is doubled instead. On paper, write each word 5 times. Practise saying each aloud, emphasising the doubled sun letter. Take 15 minutes. Then try saying the 14 sun letters from memory: ت ث د ذ ر ز س ش ص ض ط ظ ل ن.",
  },

  "moon-letters": {
    intro: [
      "Moon letters (الحروف القمرية) are the OTHER 14 letters of the Arabic alphabet — the ones that are NOT sun letters. When a moon letter appears at the start of a noun (after the definite article ال), the laam of the article is PRONOUNCED clearly. There is no assimilation. For example: الْكِتَاب (al-kitaab = the book) — the laam is pronounced clearly, the kaf is NOT doubled.",
      "The 14 moon letters are: ا ب ج ح خ ع غ ف ق ك م ه و ي. A common mnemonic is the phrase 'أَبْغِ حَجَّكَ وَخَفْ عَقِيمَهْ' (the first letter of each word is a moon letter). Notice that many of these letters are the 'throat' letters (ء ه ع ح غ خ) and the 'soft' letters (ا و ي). They don't share the articulation point that allows assimilation with the laam.",
      "When a moon letter follows ال, the laam is pronounced as a clear 'l' sound (with a sukuun on it). The moon letter is NOT doubled — it is pronounced once with its harakah. For example: الْكِتَاب (al-kitaab), الْقَمَر (al-qamar), الْبَيْت (al-bayt).",
    ],
    keyPoints: [
      {
        title: "14 moon letters",
        description:
          "The 14 moon letters are: ا ب ج ح خ ع غ ف ق ك م ه و ي. They are called 'moon letters' because the word الْقَمَر (al-qamar = the moon) is the classical example — the qaf is a moon letter, so the laam of ال is pronounced clearly.",
      },
      {
        title: "Laam is pronounced clearly",
        description:
          "When a moon letter follows ال, the laam of the article is pronounced clearly as 'l' (with a sukuun on it). The moon letter is NOT doubled. Example: الْكِتَاب = al-kitaab (the 'l' is clearly pronounced).",
      },
      {
        title: "No shaddah on moon letters",
        description:
          "Unlike sun letters, moon letters do NOT take a shaddah after the article. The laam has a sukuun (الْ), and the moon letter has its own harakah. The two letters (laam and moon letter) are pronounced as separate consonants.",
      },
      {
        title: "Throat letters are mostly moon letters",
        description:
          "All the 'throat' letters (ء ه ع ح غ خ) are moon letters. The 'soft' letters (ا و ي) are also moon letters. The other moon letters are ب ج ف ق ك م. Together, these 14 are the complement of the 14 sun letters.",
      },
    ],
    examples: [
      { arabic: "الْكِتَابُ", transliteration: "al-kitaabu", meaning: "the book — kaf is moon letter, laam pronounced" },
      { arabic: "الْقَمَرُ", transliteration: "al-qamaru", meaning: "the moon — qaf is moon letter" },
      { arabic: "الْبَيْتُ", transliteration: "al-baytu", meaning: "the house — baa is moon letter" },
      { arabic: "الْحَمْدُ", transliteration: "al-ḥamdu", meaning: "the praise — haa is moon letter" },
      { arabic: "الرَّحْمَٰنُ", transliteration: "ar-rahmanu", meaning: "the Most Merciful — WAIT, raa is sun letter, this is assimilated" },
      { arabic: "الْعَالَمِينَ", transliteration: "al-ʿalameena", meaning: "the worlds — ayn is moon letter" },
      { arabic: "الْمَلِكُ", transliteration: "al-maliku", meaning: "the king — meem is moon letter" },
    ],
    practice:
      "Drill the six CORRECT moon letter examples (skip the raa example which is a sun letter — I left it in to test you). Tap each to hear the audio. Notice that the 'l' sound is clearly pronounced before the moon letter. On paper, write each correct word 5 times. Practise saying each aloud, emphasising the clear 'l'. Take 15 minutes. Then try saying the 14 moon letters from memory: ا ب ج ح خ ع غ ف ق ك م ه و ي.",
  },

  "sun-moon-practice": {
    intro: [
      "Now that you know both the sun letters (14 letters that assimilate the laam) and the moon letters (14 letters that keep the laam pronounced), it is time to practise distinguishing them. When you see a word starting with ال, you need to instantly recognise whether the next letter is a sun letter (drop the 'l', double the sun letter) or a moon letter (keep the 'l', no doubling).",
      "The key to instant recognition is memorising the 14 sun letters. The moon letters are the complement (the other 14 letters of the alphabet). If a letter is NOT a sun letter, it is a moon letter. The 14 sun letters are: ت ث د ذ ر ز س ش ص ض ط ظ ل ن.",
      "A useful mnemonic: the sun letters include most of the 'hissing' letters (s, sh, z, zh), the 'tip-of-tongue' letters (t, th, d, dh, r, z, l, n), and the 'emphatic' counterparts (ṣ, ḍ, ṭ, ẓ). The moon letters include the 'throat' letters, the 'back' letters (q, k, g, gh), the 'lip' letters (b, m, f, w), and the soft vowels (a, y).",
    ],
    keyPoints: [
      {
        title: "Sun letter = drop 'l', double the letter",
        description:
          "If the letter after ال is a sun letter (ت ث د ذ ر ز س ش ص ض ط ظ ل ن), drop the 'l' sound and pronounce the sun letter as a doubled consonant (with a shaddah). Example: الشمس = ash-shams (NOT al-shams).",
      },
      {
        title: "Moon letter = keep 'l', no doubling",
        description:
          "If the letter after ال is a moon letter (any other letter — ا ب ج ح خ ع غ ف ق ك م ه و ي), keep the 'l' sound and pronounce the moon letter as a single consonant (no shaddah). Example: الكتاب = al-kitaab (NOT ak-kitaab).",
      },
      {
        title: "Memorise the 14 sun letters",
        description:
          "The fastest way to apply this rule is to memorise the 14 sun letters. Then, when you see a word starting with ال, check if the next letter is in your sun letter list. If yes, drop the 'l' and double. If no, keep the 'l' and don't double.",
      },
      {
        title: "Practise with mixed examples",
        description:
          "Read words with both sun and moon letters to internalise the pattern. Mix the examples — don't group them. This trains your brain to recognise each letter individually, not by context.",
      },
    ],
    examples: [
      { arabic: "الشَّمْسُ", transliteration: "ash-shamsu", meaning: "the sun — SHEEN (sun), drop 'l'" },
      { arabic: "الْقَمَرُ", transliteration: "al-qamaru", meaning: "the moon — QAF (moon), keep 'l'" },
      { arabic: "النُّورُ", transliteration: "an-nooru", meaning: "the light — NOON (sun), drop 'l'" },
      { arabic: "الْحَقُّ", transliteration: "al-ḥaqqu", meaning: "the truth — HAA (moon), keep 'l'" },
      { arabic: "الصِّرَاطَ", transliteration: "aṣ-ṣiraata", meaning: "the path — SAAD (sun), drop 'l'" },
      { arabic: "الْكَلِمَةُ", transliteration: "al-kalimatu", meaning: "the word — KAF (moon), keep 'l'" },
      { arabic: "الطَّرِيقَ", transliteration: "aṭ-ṭareeqa", meaning: "the way — TAA (sun, emphatic), drop 'l'" },
      { arabic: "الْوَجْهُ", transliteration: "al-wajhu", meaning: "the face — WAAW (moon), keep 'l'" },
    ],
    practice:
      "Drill the eight examples — 4 sun, 4 moon. Tap each to hear the audio. For each, identify whether the letter after ال is a sun or moon letter. On paper, write each word 5 times. Then mix them: read them in random order, applying the rule. Take 20 minutes. To memorise the sun letters, write them out 10 times: ت ث د ذ ر ز س ش ص ض ط ظ ل ن.",
  },

  // ===================================================================
  // MODULE 8: WORD FORMATION — 4 lessons
  // ===================================================================

  "simple-words": {
    intro: [
      "Now that you know the harakat, the letters, the sukuun, the madd letters, and the article, you have all the tools to read Arabic words. In this lesson, we start with simple 2- and 3-letter words. These are the building blocks of all Arabic vocabulary — most Arabic roots are 3 letters.",
      "Each word is read right-to-left, letter by letter, applying the harakat. For example, كَتَبَ (kataba = he wrote) is read: كَ (ka) + تَ (ta) + بَ (ba) = 'ka-ta-ba'. The harakat tell you what vowel follows each consonant. Madd letters elongate the vowel. Sukuun marks consonant clusters.",
      "Arabic words have a root system: most words derive from a 3-letter root (جذر). For example, the root ك-ت-ب (k-t-b) carries the meaning of 'writing'. From this root, we get كَتَبَ (kataba = he wrote), كِتَابٌ (kitaabun = a book), مَكْتَبٌ (maktabun = an office/desk), مَكْتَبَةٌ (maktabatun = a library), كَاتِبٌ (kaatibun = a writer), and many more. Recognising roots helps you guess the meaning of new words.",
    ],
    keyPoints: [
      {
        title: "Right-to-left reading",
        description:
          "Arabic is read from right to left. The rightmost letter is the first, the leftmost is the last. Apply the harakat as you go. Example: كَتَبَ (kataba) — read كَ first (rightmost), then تَ, then بَ (leftmost).",
      },
      {
        title: "3-letter roots",
        description:
          "Most Arabic words derive from a 3-letter root. The root carries the core meaning. Common roots: ك-ت-ب (write), س-ل-م (peace), ر-ح-م (mercy), ع-ل-م (know), ف-ت-ح (open). Recognising roots helps you understand the meaning of new words.",
      },
      {
        title: "Harakat determine the form",
        description:
          "The same 3-letter root with different harakat produces different words. كَتَبَ (kataba = he wrote) vs كُتِبَ (kutiba = it was written) vs كَاتِبٌ (kaatibun = a writer). The harakat determine the grammatical form and meaning.",
      },
      {
        title: "Apply all the rules you've learned",
        description:
          "When reading a word, apply all the rules you've learned: harakat for vowels, madd letters for elongation, sukuun for consonant clusters, the article for definiteness (with sun/moon letter assimilation), and so on. Each rule builds on the previous ones.",
      },
    ],
    examples: [
      { arabic: "كَتَبَ", transliteration: "kataba", meaning: "he wrote" },
      { arabic: "عَلِمَ", transliteration: "ʿalima", meaning: "he knew" },
      { arabic: "دَخَلَ", transliteration: "dakhala", meaning: "he entered" },
      { arabic: "خَرَجَ", transliteration: "kharaja", meaning: "he went out" },
      { arabic: "شَرِبَ", transliteration: "shariba", meaning: "he drank" },
      { arabic: "فَتَحَ", transliteration: "fataha", meaning: "he opened" },
    ],
    practice:
      "Drill the six simple words. Tap each to hear the audio. Read each aloud, letter by letter, applying the harakat. On paper, write each word 5 times. Try to identify the root letters (the consonants) — they all carry the core meaning. Take 15 minutes.",
  },

  "complex-words": {
    intro: [
      "Complex Arabic words include madd letters (elongated vowels), sukuun (consonant clusters), the article ال (with sun/moon assimilation), and longer root patterns (4-5 letters). In this lesson, you will practise reading words that combine these features.",
      "For example, the word الرَّحِيم (ar-raheem = the Most Merciful) has: the article ال, a sun letter ر (so the laam is assimilated and the ر takes a shaddah), a kasrah on the ح, and a yaa with a madd (elongated 'ii'). Reading this word requires applying all the rules you've learned so far.",
      "Another example: الصِّرَاطَ (aṣ-ṣiraat = the path) has: the article ال, a sun letter ص (so the laam is assimilated), a kasrah on the ص, a raa, an alif madd (elongated 'aa'), and a taa at the end with a fathah. Each element is a separate rule application.",
    ],
    keyPoints: [
      {
        title: "Combine all rules",
        description:
          "Complex words combine all the rules: harakat, madd, sukuun, sun/moon assimilation, shaddah. Read each word by applying each rule in sequence. Don't rush — take the time to recognise each element.",
      },
      {
        title: "Read element by element",
        description:
          "When you encounter a complex word, break it down: identify the article (if any), identify the sun/moon letter (if any), identify the madd letters, identify the sukuuns, identify the shaddahs. Then apply each rule in sequence as you read.",
      },
      {
        title: "Longer roots and patterns",
        description:
          "Some Arabic words have 4- or 5-letter roots. These are less common but appear in the Quran. Examples: تَرْجَمَ (tarjama = he translated, 4-letter root), تَدَحْرَجَ (tadahraja = he rolled, 5-letter root). The same rules apply regardless of root length.",
      },
      {
        title: "Practise with Quranic words",
        description:
          "The best practice is reading real Quranic words. Many of the most common words in the Quran combine multiple rules. As you practise, you'll build instant recognition of these patterns.",
      },
    ],
    examples: [
      { arabic: "الرَّحِيمِ", transliteration: "ar-raheemi", meaning: "the Most Merciful (genitive)" },
      { arabic: "الصِّرَاطَ", transliteration: "aṣ-ṣiraata", meaning: "the path (accusative)" },
      { arabic: "الْحَمْدُ", transliteration: "al-ḥamdu", meaning: "the praise" },
      { arabic: "رَبِّ الْعَالَمِينَ", transliteration: "rabbi l-ʿalameena", meaning: "Lord of the worlds" },
      { arabic: "مَلِكِ", transliteration: "maliki", meaning: "King of" },
      { arabic: "يَوْمِ", transliteration: "yawmi", meaning: "Day of" },
      { arabic: "الدِّينِ", transliteration: "ad-deeni", meaning: "the Judgment (genitive)" },
    ],
    practice:
      "Drill the seven complex words. These are all from the first ayah of Surah Al-Fatihah (the opening of the Quran). Tap each to hear the audio. Read each aloud, applying all the rules. On paper, write each word 5 times. Take 20 minutes — these are the most-repeated words in Muslim prayer.",
  },

  "word-recognition": {
    intro: [
      "Word recognition is the skill of instantly knowing a word's pronunciation and meaning without having to sound it out letter by letter. As you read more Arabic, you'll build a vocabulary of words you recognise instantly. This is the foundation of fluent reading.",
      "The most common words in the Quran are: اللَّه (Allah = God), الَّذِي (alladhi = who/which), الْحَمْد (al-ḥamdu = the praise), رَبّ (rabb = Lord), إِلَٰه (ilaah = god), كَلَام (kalaam = speech), and many more. By memorising the top 100 most common words, you'll be able to read 50%+ of the Quran's vocabulary instantly.",
      "In this lesson, you'll see the 10 most common words in the Quran. Drill them until you can read them instantly. Then move on to the next lesson, where you'll read these words in the context of phrases and sentences.",
    ],
    keyPoints: [
      {
        title: "Instant recognition",
        description:
          "The goal of word recognition is to read a word instantly, without sounding it out letter by letter. This requires drilling the most common words until they become sight words in your brain.",
      },
      {
        title: "Top 100 words cover 50% of the Quran",
        description:
          "By memorising the top 100 most common words in the Quran, you'll be able to read 50%+ of the Quran's vocabulary instantly. This is the fastest path to fluent reading.",
      },
      {
        title: "Common patterns become automatic",
        description:
          "After drilling, common patterns (like the article + sun/moon letter, the most common verb forms, etc.) become automatic. Your brain processes them as units, not as individual letters.",
      },
      {
        title: "Vocabulary building",
        description:
          "As you recognise more words, your vocabulary grows. Each new word you learn makes reading the next passage easier. The process is cumulative — start with the most common words and build from there.",
      },
    ],
    examples: [
      { arabic: "اللَّهِ", transliteration: "Allahi", meaning: "Allah (genitive) — the most common word in the Quran" },
      { arabic: "الَّذِي", transliteration: "alladhi", meaning: "who/which — second most common" },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: "Lord (with possessive)" },
      { arabic: "الْحَمْدُ", transliteration: "al-ḥamdu", meaning: "the praise" },
      { arabic: "إِنَّ", transliteration: "inna", meaning: "indeed / verily" },
      { arabic: "مِنْ", transliteration: "min", meaning: "from" },
      { arabic: "عَلَى", transliteration: "ʿalaa", meaning: "on / upon" },
      { arabic: "إِلَى", transliteration: "ilaa", meaning: "to / towards" },
      { arabic: "فِي", transliteration: "fee", meaning: "in" },
      { arabic: "وَ", transliteration: "wa", meaning: "and" },
    ],
    practice:
      "Drill the 10 most common words in the Quran. Tap each to hear the audio. Read each aloud, then read it 5 more times from memory (covering the transliteration). On paper, write each word 5 times. By the end of this lesson, you should be able to read all 10 instantly. Take 15 minutes.",
  },

  "reading-practice": {
    intro: [
      "In this lesson, you'll put everything together and practise reading short Quranic phrases. You'll see common phrases like الْحَمْدُ لِلَّهِ (al-ḥamdu lillaahi = praise be to Allah), بِسْمِ اللَّهِ (bismi llaahi = in the name of Allah), and other phrases that appear repeatedly in the Quran and in daily Muslim prayer.",
      "Read each phrase slowly, applying all the rules you've learned: harakat, madd, sukuun, sun/moon assimilation, shaddah. Take your time. The goal is accuracy, not speed. Speed will come with practice.",
      "After you can read each phrase accurately, practise reading them aloud 5 times. Then read them as part of a longer sequence. Many of these phrases appear in the daily prayers (salah), so being able to read them fluently is essential for every Muslim.",
    ],
    keyPoints: [
      {
        title: "Phrases are units",
        description:
          "Many Quranic phrases are read as units, not as separate words. The article + the following word, prepositions + the following word, etc. Practise reading these as connected units.",
      },
      {
        title: "Apply the rules in sequence",
        description:
          "When reading a phrase, apply each rule in sequence: (1) sun/moon assimilation for articles, (2) madd for elongated vowels, (3) sukuun for consonant clusters, (4) shaddah for doubled letters, (5) harakat for vowels. Take it one rule at a time.",
      },
      {
        title: "Pause at phrase boundaries",
        description:
          "When the meaning is complete at the end of a phrase, you can pause (waqf). At pause, the last letter takes a sukuun (or its vowel is dropped). This is a natural breathing point and a way to mark phrase boundaries.",
      },
      {
        title: "Daily prayers use these phrases",
        description:
          "Many of the phrases in this lesson appear in the daily prayers (salah). Practising them is not just an academic exercise — it's a practical skill for every Muslim. Reading them fluently will improve your daily prayers.",
      },
    ],
    examples: [
      { arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "bismi llaahi r-raḥmaani r-raḥeemi", meaning: "In the name of Allah, the Most Gracious, the Most Merciful — Bismillah" },
      { arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transliteration: "al-ḥamdu lillaahi rabbi l-ʿalameena", meaning: "All praise is for Allah, Lord of the worlds" },
      { arabic: "الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "ar-raḥmaani r-raḥeemi", meaning: "the Most Gracious, the Most Merciful" },
      { arabic: "مَالِكِ يَوْمِ الدِّينِ", transliteration: "maaliki yawmi d-deeni", meaning: "Master of the Day of Judgment" },
      { arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", transliteration: "iyyaaka naʿbudu wa iyyaaka nastaʿeenu", meaning: "You alone we worship, and You alone we ask for help" },
    ],
    practice:
      "Drill the five phrases — these are from Surah Al-Fatihah, the opening of the Quran and the most-recited passage in Islam. Tap each to hear the audio. Read each aloud 5 times. Then read the full surah in sequence (the 5 phrases plus the last 2 ayahs which we'll cover later). Take 20 minutes. By the end, you should be able to read Surah Al-Fatihah fluently.",
  },

  // ===================================================================
  // MODULE 9: SENTENCE CONSTRUCTION — 4 lessons
  // ===================================================================

  "simple-sentences": {
    intro: [
      "Arabic sentences are read as units, with the words flowing together. A simple sentence in Arabic has two parts: the subject (مبتدأ — the topic) and the predicate (خبر — what is said about the topic). For example: الْحَمْدُ لِلَّهِ (al-ḥamdu lillaahi = the praise is for Allah) — الْحَمْدُ is the subject, لِلَّهِ is the predicate.",
      "Unlike English, which uses 'is' to connect subject and predicate, Arabic nominal sentences (جملة اسمية) do not need a copula verb. The subject and predicate are placed next to each other, and the 'is' is implied. For example: اللَّهُ أَكْبَرُ (Allahu akbar = Allah is greater) — there is no 'is' verb, but it's understood from context.",
      "Verbal sentences (جملة فعلية) start with a verb: قَالَ رَسُولُ اللَّهِ (qaala rasoolu llaahi = the Messenger of Allah said). The verb (قَالَ) comes first, then the subject (رَسُولُ اللَّهِ). Arabic allows both verb-subject-object and verb-object-subject orders, depending on the context.",
    ],
    keyPoints: [
      {
        title: "Nominal vs verbal sentences",
        description:
          "Arabic has two types of sentences: nominal (جملة اسمية) starting with a noun, and verbal (جملة فعلية) starting with a verb. Nominal sentences have an implicit 'is' between subject and predicate; verbal sentences have the verb first.",
      },
      {
        title: "No copula verb needed",
        description:
          "Arabic nominal sentences do not need a 'to be' verb (copula). The subject and predicate are placed next to each other, and the 'is' is implied. Example: اللَّهُ أَكْبَرُ (Allahu akbar) = 'Allah is greater' — no 'is' verb in the Arabic, but it's understood.",
      },
      {
        title: "Read as a unit",
        description:
          "When reading a sentence, read it as a unit, not as separate words. The words flow together with appropriate pausing at phrase boundaries. Pay attention to the harakat — they indicate the grammatical case (nominative, accusative, genitive).",
      },
      {
        title: "Pause at sentence boundaries",
        description:
          "Pause at the end of a sentence (where the meaning is complete). At pause, the last letter takes a sukuun (or its vowel is dropped). This marks the sentence boundary and gives a natural breathing point.",
      },
    ],
    examples: [
      { arabic: "الْحَمْدُ لِلَّهِ", transliteration: "al-ḥamdu lillaahi", meaning: "Praise be to Allah — nominal sentence" },
      { arabic: "اللَّهُ أَكْبَرُ", transliteration: "Allahu akbar", meaning: "Allah is greater — nominal sentence" },
      { arabic: "قَالَ رَسُولُ اللَّهِ", transliteration: "qaala rasoolu llaahi", meaning: "The Messenger of Allah said — verbal sentence" },
      { arabic: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ", transliteration: "inna llaaha ghafuurun raḥeemun", meaning: "Indeed Allah is Forgiving, Merciful" },
      { arabic: "وَقَالَ رَبُّكُمْ", transliteration: "wa qaala rabbukum", meaning: "And your Lord said — verbal sentence with 'wa' prefix" },
    ],
    practice:
      "Drill the five sentences. Tap each to hear the audio. Read each aloud, paying attention to the natural flow. On paper, write each sentence 5 times. Take 15 minutes. Notice the difference between nominal sentences (start with a noun) and verbal sentences (start with a verb).",
  },

  "breath-control": {
    intro: [
      "Breath control is essential for fluent Quranic recitation. A single breath should cover a complete phrase or sentence — not too short (cuts the meaning) and not too long (causes breathlessness). The reciter chooses pause points (waqf) that preserve the meaning and allow natural breathing.",
      "There are four types of pause (waqf) in tajweed: (1) Waqf Taam (_complete pause) — at the end of an ayah or a sentence where the meaning is fully complete. The breath is renewed here. (2) Waqf Hasan (good pause) — at a point where the meaning is connected but the pause doesn't break the flow. (3) Waqf Qabih (ugly pause) — at a point that breaks the meaning. This should be avoided. (4) Waqf Murakhkhas (permissible pause) — at a point where pausing is allowed but not preferred.",
      "When pausing, the last letter takes a sukuun (or its vowel is dropped). Tanween is removed. Madd letters can be elongated longer than usual (the reciter's choice). The pause gives the listener time to absorb the meaning and the reciter time to breathe.",
    ],
    keyPoints: [
      {
        title: "Choose good pause points",
        description:
          "Pause where the meaning is complete or at a natural break. The end of every ayah is a valid pause point. Within an ayah, pause at punctuation marks (م، ۚ, etc.) or at the end of a phrase.",
      },
      {
        title: "Last letter takes sukuun at pause",
        description:
          "When you pause (waqf), the last letter of the word being paused on takes a sukuun — even if it originally had a harakah or tanween. The vowel is dropped, only the consonant sound remains. Madd letters can be elongated longer than usual.",
      },
      {
        title: "Renew breath at complete pauses",
        description:
          "At a Waqf Taam (complete pause), renew your breath. This is the natural breathing point. Do not try to recite multiple sentences on one breath — it will cause breathlessness and break the flow.",
      },
      {
        title: "Avoid ugly pauses",
        description:
          "A Waqf Qabih (ugly pause) breaks the meaning. For example, pausing after 'the Messiah, son of Mary' (in Surah Al-Ma'idah) and resuming with 'did not say nothing but' would imply the opposite of the actual meaning. Always choose pause points that preserve the meaning.",
      },
    ],
    examples: [
      { arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "bismi llaahi r-raḥmaani r-raḥeemi", meaning: "Pause at the end (waqf taam) — full ayah boundary" },
      { arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transliteration: "al-ḥamdu lillaahi rabbi l-ʿalameena", meaning: "Pause at the end — full ayah boundary" },
      { arabic: "الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "ar-raḥmaani r-raḥeemi", meaning: "Pause at the end — but connected to the next ayah in meaning" },
      { arabic: "مَالِكِ يَوْمِ الدِّينِ", transliteration: "maaliki yawmi d-deeni", meaning: "Pause at the end — full ayah boundary" },
      { arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", transliteration: "iyyaaka naʿbudu wa iyyaaka nastaʿeenu", meaning: "Pause at the end — full ayah boundary, but the 'wa' connects to the next" },
    ],
    practice:
      "Read the five ayahs of Surah Al-Fatihah. At the end of each ayah, pause completely (waqf taam), renew your breath, then continue. Listen to the audio for each. On paper, write the full Surah Al-Fatihah once. Take 20 minutes. This is the most-recited surah in Islam — mastering its recitation is essential for every Muslim.",
  },

  "sentence-flow": {
    intro: [
      "Sentence flow in Quranic recitation is the smooth, continuous reading of a sentence without breaking it at inappropriate points. The reciter maintains the rhythm and flow, pausing only at appropriate boundaries. This gives the recitation its characteristic melodic, flowing quality.",
      "The flow is maintained by: (1) reading words as connected units (not isolated words), (2) applying the rules of noon saakin, meem saakin, and laam saakin when they appear (these rules merge sounds across word boundaries), (3) using appropriate breath control to span phrases, (4) using the natural rhythm of the harakat (1 beat) and madd (2 beats) to keep time.",
      "Many of the rules we'll study in the Advanced phase ( Modules 10-16) are about maintaining sentence flow across word boundaries. The rules of izhar (clear pronunciation), idgham (merging), iqlab (conversion), and ikhfa (hiding) determine how noon saakin and meem saakin interact with the following letter. These rules make recitation smoother.",
    ],
    keyPoints: [
      {
        title: "Read words as connected units",
        description:
          "When two words appear together, read them as a connected unit, not as separate words. The vowel at the end of the first word flows into the start of the second word. This is the natural flow of Arabic recitation.",
      },
      {
        title: "Apply rules across word boundaries",
        description:
          "The rules of noon saakin, meem saakin, etc. apply across word boundaries. For example, when one word ends with نْ (noon saakin) and the next starts with م (meem), the noon merges into the meem (idgham). These rules make the recitation flow smoothly.",
      },
      {
        title: "Maintain the rhythm",
        description:
          "The natural rhythm of Quranic recitation comes from the harakat (1 beat each) and madd (2 beats each). Maintain this rhythm consistently. The reciter's breath and pace should be steady — not rushing, not dragging.",
      },
      {
        title: "Pause only at appropriate points",
        description:
          "Pause only at appropriate boundaries (end of ayah, end of phrase, punctuation marks). Do not pause in the middle of a phrase that would break the meaning. Choose pause points that preserve the meaning and the flow.",
      },
    ],
    examples: [
      { arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transliteration: "al-ḥamdu lillaahi rabbi l-ʿalameena", meaning: "Read as a flowing unit, pause at end" },
      { arabic: "الرَّحْمَٰنِ الرَّحِيمِ مَالِكِ", transliteration: "ar-raḥmaani r-raḥeemi maaliki", meaning: "Read continuously across the ayah boundary (with a slight breath)" },
      { arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", transliteration: "iyyaaka naʿbudu wa iyyaaka nastaʿeenu", meaning: "Read with the 'wa' connecting smoothly to the second clause" },
      { arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", transliteration: "ihdina ṣ-ṣiraata l-mustaqeema", meaning: "Read as a flowing unit with the article merging with the following words" },
    ],
    practice:
      "Read the four phrases. Tap each to hear the audio. Practise reading each with smooth flow, no breaks in the middle. On paper, write each phrase 5 times. Then read them all in sequence as a continuous recitation. Take 20 minutes. This builds the foundation for fluent Quranic recitation.",
  },

  "sentence-reading-practice": {
    intro: [
      "In this final lesson of the Intermediate Phase, you'll practise reading complete Quranic passages. These passages combine everything you've learned: harakat, madd, sukuun, sun/moon assimilation, shaddah, the article, common words, and sentence flow. This is the integration test before moving on to the Advanced Phase (tajweed rules).",
      "We'll read the full Surah Al-Fatihah (the opening of the Quran) — the most-recited surah in Islam, recited in every unit (rak'ah) of every prayer. By the end of this lesson, you should be able to read it fluently, applying all the rules.",
      "After Surah Al-Fatihah, we'll read a few short surahs from the end of the Quran (Surah Al-Ikhlas, Surah Al-Falaq, Surah An-Nas). These are commonly recited in daily prayers and are short enough to memorise.",
    ],
    keyPoints: [
      {
        title: "Integration test",
        description:
          "This lesson is an integration test — you apply everything you've learned in the Foundation and Intermediate phases. If you struggle with any rule, go back to the relevant lesson and drill it more. Then come back here.",
      },
      {
        title: "Surah Al-Fatihah",
        description:
          "Surah Al-Fatihah (the Opening) is the first surah of the Quran. It has 7 ayahs. It is recited in every unit (rak'ah) of every prayer. Every Muslim should be able to read it fluently. We'll read it in full here.",
      },
      {
        title: "Short surahs at the end of the Quran",
        description:
          "Surah Al-Ikhlas (112), Surah Al-Falaq (113), and Surah An-Nas (114) are short surahs at the end of the Quran. They are commonly recited in daily prayers and are short enough to memorise. We'll read them here as practice.",
      },
      {
        title: "Ready for the Advanced Phase",
        description:
          "Once you can read these surahs fluently, you are ready for the Advanced Phase. The Advanced Phase covers the tajweed rules: the rules of noon saakin, meem saakin, qalqalah, the rules of raa, the special rules of stopping, and integration of all rules in fluent recitation.",
      },
    ],
    examples: [
      { arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "bismi llaahi r-raḥmaani r-raḥeemi", meaning: "Ayah 1 of Al-Fatihah" },
      { arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transliteration: "al-ḥamdu lillaahi rabbi l-ʿalameena", meaning: "Ayah 2 of Al-Fatihah" },
      { arabic: "الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "ar-raḥmaani r-raḥeemi", meaning: "Ayah 3 of Al-Fatihah" },
      { arabic: "مَالِكِ يَوْمِ الدِّينِ", transliteration: "maaliki yawmi d-deeni", meaning: "Ayah 4 of Al-Fatihah" },
      { arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", transliteration: "iyyaaka naʿbudu wa iyyaaka nastaʿeenu", meaning: "Ayah 5 of Al-Fatihah" },
      { arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", transliteration: "ihdina ṣ-ṣiraata l-mustaqeema", meaning: "Ayah 6 of Al-Fatihah" },
      { arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", transliteration: "ṣiraata lladheena anʿamta ʿalayhim ghayri l-maghḍoobi ʿalayhim wa la ḍ-ḍaalleena", meaning: "Ayah 7 of Al-Fatihah" },
    ],
    practice:
      "Read the seven ayahs of Surah Al-Fatihah in sequence. Tap each to hear the audio. Read each aloud, applying all the rules you've learned. Then read the full surah in one flow, pausing briefly at each ayah boundary. Take 30 minutes. By the end of this lesson, you should be able to read Surah Al-Fatihah fluently. This is a major milestone — every Muslim should be able to read this surah. Take your time and celebrate the achievement.",
  },
}
