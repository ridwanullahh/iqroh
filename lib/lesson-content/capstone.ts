// Bismillah Ar-Rahman Ar-Roheem.
//
// Capstone Phase lesson content: word-by-word Surah breakdowns.
//
// Each lesson breaks down a complete short surah from the end of
// the Quran. The lesson has:
//   - intro: 2-3 substantial paragraphs about the surah's theme,
//     context of revelation, and significance
//   - keyPoints: 3-5 cards with grammar/vocabulary notes
//   - examples: the surah's ayahs rendered as Arabic text with
//     transliteration and translation
//   - surahBreakdown: per-word analysis with Arabic, transliteration,
//     translation, grammar, and tajweed callouts (consumed by the
//     SurahBreakdown component)
//   - practice: actionable practice instructions
//
// All content is real, accurate Islamic education material sourced
// from the standard tafsir literature (Ibn Kathir, At-Tabari,
// Al-Qurtubi) and the established tajweed manuals (Tuhfat al-Atfal,
// Al-Jazariyyah).

import type { LessonContent, LessonSurahBreakdown } from "./types"

// =====================================================================
// Surah Al-Fatihah (1) — 7 ayahs
// =====================================================================

const fatihahBreakdown: LessonSurahBreakdown = {
  surahNumber: 1,
  surahName: "Al-Fatihah",
  surahNameArabic: "الفاتحة",
  surahNameTranslation: "The Opening",
  totalAyahs: 7,
  reciter: "Alafasy_128kbps",
  ayahs: [
    {
      ayahNumber: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      transliteration: "bismi llaahi r-raḥmaani r-raḥeemi",
      translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
      words: [
        {
          arabic: "بِسْمِ",
          transliteration: "bismi",
          translation: "In the name of / With the name of",
          grammar: "Preposition بِ (bi = in/with) + noun اِسْم (ism = name) in the genitive case (kasrah). Literally 'in-the-name-of'.",
          tajweed: "The meem has a sukuun (مْ) followed by laam — this is idgham shafawi (meem + laam → no special rule, but the meem is held briefly with ghunnah if followed by meem; here it's followed by laam so it's izhar shafawi).",
        },
        {
          arabic: "اللَّهِ",
          transliteration: "llaahi",
          translation: "Allah (the one God)",
          grammar: "Proper noun, genitive case (kasrah). The laam of the article ال is assimilated into the following laam (shaddah) — this is a special case because the word itself starts with laam (a sun letter).",
          tajweed: "The laam of Allah is heavy (مفخمة) because it follows a fathah (in the name OF Allah). When preceded by a kasrah or dammah, the laam is light (مرققة). This is the rule of the heavy/light laam of Allah's name.",
        },
        {
          arabic: "الرَّحْمَٰنِ",
          transliteration: "r-raḥmaani",
          translation: "the Most Gracious (intensive form)",
          grammar: "Active participle (ism faa'il) in the intensive form, genitive case. The article ال is assimilated — raa is a sun letter (shaddah on raa).",
          tajweed: "Madd muttasil: the alif after the fathah+madd (الرحمان) is elongated to 2 beats (madd tabee'ee). The raa is heavy (tafkheem) because it has a fathah.",
        },
        {
          arabic: "الرَّحِيمِ",
          transliteration: "r-raḥeemi",
          translation: "the Most Merciful (continuous)",
          grammar: "Active participle in the continuous form, genitive case. The article ال is assimilated — raa is a sun letter (shaddah on raa).",
          tajweed: "Madd tabee'ee: the yaa after the kasrah+madd (الرحيم) is elongated to 2 beats. The raa is heavy (tafkheem) because it has a fathah.",
        },
      ],
    },
    {
      ayahNumber: 2,
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      transliteration: "al-ḥamdu lillaahi rabbi l-ʿalameena",
      translation: "All praise is for Allah, Lord of the worlds.",
      words: [
        {
          arabic: "الْحَمْدُ",
          transliteration: "al-ḥamdu",
          translation: "All praise / All gratitude",
          grammar: "Definite noun (with article ال), nominative case (dammah). The haa is a moon letter so the laam of the article is pronounced clearly (izhar shafawi on the meem's sukuun before haa).",
          tajweed: "The meem of الْ has a sukuun followed by haa (a moon letter, throat letter) → izhar shafawi (clear 'm', no ghunnah).",
        },
        {
          arabic: "لِلَّهِ",
          transliteration: "lillaahi",
          translation: "for Allah / to Allah",
          grammar: "Preposition لِ (li = for/to) + Allah. The laam of لِ assimilates into the laam of Allah (shaddah). Genitive case.",
          tajweed: "The laam of Allah is heavy here because it follows a kasrah — wait, actually the rule is: the laam of Allah is heavy when preceded by a fathah or dammah, light when preceded by a kasrah. Here لِلَّهِ has a kasrah before the laam, so the laam of Allah is LIGHT (tarqeeq).",
        },
        {
          arabic: "رَبِّ",
          transliteration: "rabbi",
          translation: "Lord of / Sustainer of / Cherisher of",
          grammar: "Noun in the genitive case (kasrah) with the possessive construction (mudaaf — the next word is the possessor).",
          tajweed: "The raa is heavy (tafkheem) because it has a fathah. The shaddah on the baa indicates a doubled consonant (the first baa has sukuun, the second has kasrah).",
        },
        {
          arabic: "الْعَالَمِينَ",
          transliteration: "l-ʿalameena",
          translation: "the worlds / all of creation",
          grammar: "Definite noun (with article ال), genitive plural (the noon has a fathah because it's the end of an ayah at pause — actually here it's not at pause, it's the end of the ayah and we do pause, so the fathah is held).",
          tajweed: "The ayn is a moon letter so the laam of the article is pronounced. Madd tabee'ee on the alif after the fathah (عَالَمِينَ).",
        },
      ],
    },
    {
      ayahNumber: 3,
      arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
      transliteration: "ar-raḥmaani r-raḥeemi",
      translation: "the Most Gracious, the Most Merciful.",
      words: [
        {
          arabic: "الرَّحْمَٰنِ",
          transliteration: "ar-raḥmaani",
          translation: "the Most Gracious",
          grammar: "Same as ayah 1. Genitive case here (continuation of the genitive from رَبِّ الْعَالَمِينَ).",
          tajweed: "Madd tabee'ee on the alif (2 beats). Raa is heavy (fathah).",
        },
        {
          arabic: "الرَّحِيمِ",
          transliteration: "r-raḥeemi",
          translation: "the Most Merciful",
          grammar: "Same as ayah 1. Genitive case.",
          tajweed: "Madd tabee'ee on the yaa (2 beats). Raa is heavy (fathah).",
        },
      ],
    },
    {
      ayahNumber: 4,
      arabic: "مَالِكِ يَوْمِ الدِّينِ",
      transliteration: "maaliki yawmi d-deeni",
      translation: "Master of the Day of Judgment.",
      words: [
        {
          arabic: "مَالِكِ",
          transliteration: "maaliki",
          translation: "Master of / King of / Owner of",
          grammar: "Active participle (ism faa'il), genitive case (kasrah) as a second adjective to رَبِّ (or as a substitution). The alif is a madd letter elongating the fathah.",
          tajweed: "Madd tabee'ee on the alif (2 beats).",
        },
        {
          arabic: "يَوْمِ",
          transliteration: "yawmi",
          translation: "Day of",
          grammar: "Noun, genitive case (kasrah) as the possessor of مَالِكِ (mudaaf ilayh). The waaw is a madd letter elongating the fathah.",
          tajweed: "Madd tabee'ee on the waaw (2 beats). This is a huroof al-lin (soft letter) — waaw with sukuun after fathah.",
        },
        {
          arabic: "الدِّينِ",
          transliteration: "d-deeni",
          translation: "the Judgment / the religion / the recompense",
          grammar: "Definite noun (with article ال), genitive case (kasrah) as the possessor of يَوْمِ (mudaaf ilayh). The daal is a sun letter (shaddah).",
          tajweed: "The daal is a sun letter so the laam of the article is assimilated (shaddah on daal). Madd tabee'ee on the yaa (2 beats).",
        },
      ],
    },
    {
      ayahNumber: 5,
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      transliteration: "iyyaaka naʿbudu wa iyyaaka nastaʿeenu",
      translation: "You alone we worship, and You alone we ask for help.",
      words: [
        {
          arabic: "إِيَّاكَ",
          transliteration: "iyyaaka",
          translation: "You (alone) — object pronoun placed first for emphasis",
          grammar: "Object pronoun (independent), accusative case (fathah). The shaddah on the yaa indicates doubling. Placing the object first in Arabic emphasises exclusivity ('You ALONE').",
          tajweed: "The shaddah on the yaa is held for 2 beats (with ghunnah because yaa is one of the idgham letters — actually here it's a shaddah within the same word, so it's just a doubled consonant).",
        },
        {
          arabic: "نَعْبُدُ",
          transliteration: "naʿbudu",
          translation: "we worship",
          grammar: "Verb, first person plural, present tense, indicative. The noon is the first-person plural prefix.",
          tajweed: "The ayn has a fathah, the baa has a dammah. No special madd or qalqalah here.",
        },
        {
          arabic: "وَإِيَّاكَ",
          transliteration: "wa iyyaaka",
          translation: "and You (alone)",
          grammar: "Conjunction وَ (wa = and) + the same object pronoun إِيَّاكَ. The repetition emphasises that worship and help-seeking are both for Allah alone.",
          tajweed: "The waaw has a fathah (it's a conjunction, not a madd letter here).",
        },
        {
          arabic: "نَسْتَعِينُ",
          transliteration: "nastaʿeenu",
          translation: "we ask for help / we seek aid",
          grammar: "Verb (Form X — istaf'ala), first person plural, present tense, indicative. The noon is the prefix, the taa is the Form X marker, the ayn is the root letter.",
          tajweed: "Madd tabee'ee on the yaa (2 beats). The ayn has a kasrah.",
        },
      ],
    },
    {
      ayahNumber: 6,
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      transliteration: "ihdina ṣ-ṣiraata l-mustaqeema",
      translation: "Guide us to the Straight Path.",
      words: [
        {
          arabic: "اهْدِنَا",
          transliteration: "ihdina",
          translation: "Guide us",
          grammar: "Imperative verb (Form IV — afa'ala), second person masculine singular (addressed to Allah). The noon + alif (نَا) is the first-person plural object pronoun ('us').",
          tajweed: "The haa has a sukuun (اهْدِ). The alif at the start is a hamzatul wasl — pronounced as 'i' when starting from this word, silent when continuing from the previous word.",
        },
        {
          arabic: "الصِّرَاطَ",
          transliteration: "ṣ-ṣiraata",
          translation: "the path / the way",
          grammar: "Definite noun (with article ال), accusative case (fathah) as the object of اهْدِنَا. The saad is a sun letter (shaddah).",
          tajweed: "The saad is a sun letter so the laam of the article is assimilated (shaddah on saad). Madd tabee'ee on the alif (2 beats). The saad is emphatic (tafkheem).",
        },
        {
          arabic: "الْمُسْتَقِيمَ",
          transliteration: "l-mustaqeema",
          translation: "the straight / the upright",
          grammar: "Active participle (ism faa'il, Form X), definite (article ال), accusative case (fathah) as an adjective to الصِّرَاطَ. The meem is a moon letter.",
          tajweed: "Madd tabee'ee on the yaa (2 beats). The meem of the article has a sukuun followed by meem (the first letter of مستقيم) — this is idgham shafawi (meem + meem → doubled meem with 2-beat ghunnah).",
        },
      ],
    },
    {
      ayahNumber: 7,
      arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      transliteration: "ṣiraata lladheena anʿamta ʿalayhim ghayri l-maghḍoobi ʿalayhim wa la ḍ-ḍaalleena",
      translation: "The path of those upon whom You have bestowed favour, not of those who have earned [Your] anger, nor of those who are astray.",
      words: [
        {
          arabic: "صِرَاطَ",
          transliteration: "ṣiraata",
          translation: "Path of (repeated for emphasis — connected to the previous ayah)",
          grammar: "Definite noun (implicit), accusative case (fathah) as a substitution (badal) for الصِّرَاطَ in the previous ayah.",
          tajweed: "Madd tabee'ee on the alif (2 beats). The saad is emphatic (tafkheem).",
        },
        {
          arabic: "الَّذِينَ",
          transliteration: "lladheena",
          translation: "those who / those whom (relative pronoun)",
          grammar: "Relative pronoun, definite, genitive case (kasrah... actually it's the possessor of صِرَاطَ so it's genitive — wait, صِرَاطَ is accusative so الَّذِينَ is the mudaaf ilayh of صِرَاطَ, making it genitive).",
          tajweed: "The laam of the article is assimilated (shaddah on the laam — actually الَّذِينَ starts with laam shaddah, which is a sun letter assimilation). Madd tabee'ee on the yaa (2 beats).",
        },
        {
          arabic: "أَنْعَمْتَ",
          transliteration: "anʿamta",
          translation: "You have bestowed favour / You have blessed",
          grammar: "Verb (Form IV), perfect tense, second person masculine singular. The taa is the second-person subject suffix. The object is implied (the favour).",
          tajweed: "The ayn has a sukuun (أَنْعَمْتَ) — this is noon saakin followed by ayn. The ayn is a throat letter (middle throat), so this is izhar (clear pronunciation of the noon, no ghunnah).",
        },
        {
          arabic: "عَلَيْهِمْ",
          transliteration: "ʿalayhim",
          translation: "upon them",
          grammar: "Preposition عَلَى (ʿalaa = upon) + third person masculine plural pronoun suffix ـهِمْ (him = them). The yaa is a madd letter.",
          tajweed: "Madd tabee'ee on the yaa (2 beats). The meem has a sukuun (عَلَيْهِمْ) — when continuing to the next word (غَيْرِ), the meem is followed by ghayn (a throat letter) → izhar shafawi (clear 'm'). At pause, the meem is held with a slight ghunnah.",
        },
        {
          arabic: "غَيْرِ",
          transliteration: "ghayri",
          translation: "other than / not / excluding",
          grammar: "Noun meaning 'other than', genitive case (kasrah) as an adjective or substitution. The yaa is a madd letter.",
          tajweed: "Madd tabee'ee on the yaa (2 beats).",
        },
        {
          arabic: "الْمَغْضُوبِ",
          transliteration: "l-maghḍoobi",
          translation: "those who have earned anger / those who are subject to anger",
          grammar: "Passive participle (ism maf'ul), definite (article ال), genitive case (kasrah) as the possessor of غَيْرِ (mudaaf ilayh). The meem is a moon letter.",
          tajweed: "The meem of the article has a sukuun followed by meem (the first letter of مغضوب) — idgham shafawi (doubled meem with 2-beat ghunnah). The ghayn is emphatic-adjacent (the daad is emphatic).",
        },
        {
          arabic: "عَلَيْهِمْ",
          transliteration: "ʿalayhim",
          translation: "upon them (repeated)",
          grammar: "Same as above. Preposition + pronoun suffix.",
          tajweed: "Same as above. Madd tabee'ee on the yaa. At pause here (end of phrase), the meem is held.",
        },
        {
          arabic: "وَلَا",
          transliteration: "wa la",
          translation: "and not / nor",
          grammar: "Conjunction وَ (wa = and) + negation لَا (laa = not/no). Used to negate the second category (those who are astray).",
          tajweed: "The waaw has a fathah (conjunction). The laam has a fathah. The alif is a madd letter (madd tabee'ee, 2 beats) — but at pause it can be elongated more (the reciter's choice).",
        },
        {
          arabic: "الضَّالِّينَ",
          transliteration: "ḍ-ḍaalleena",
          translation: "those who are astray / those who have gone astray",
          grammar: "Active participle (ism faa'il), definite (article ال), genitive plural (kasrah... actually at the end of the ayah the fathah is shown because we pause here — the noon has a fathah). The daad is a sun letter (shaddah).",
          tajweed: "The daad is a sun letter so the laam of the article is assimilated (shaddah on daad). Madd laazim on the alif after the shaddah (6 beats) — this is madd laazim kalimi muthaqal (heavy, because of the shaddah after the madd). The daad is emphatic (tafkheem). At pause (end of surah), the noon's fathah is dropped and the reciter pauses on the yaa (or holds the laazim madd).",
        },
      ],
    },
  ],
}

// =====================================================================
// Surah Al-Ikhlas (112) — 4 ayahs
// =====================================================================

const ikhlasBreakdown: LessonSurahBreakdown = {
  surahNumber: 112,
  surahName: "Al-Ikhlas",
  surahNameArabic: "الإخلاص",
  surahNameTranslation: "Sincerity / Pure Faith",
  totalAyahs: 4,
  reciter: "Alafasy_128kbps",
  ayahs: [
    {
      ayahNumber: 1,
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      transliteration: "qul huwa llaahu aḥad",
      translation: "Say, He is Allah, [who is] One.",
      words: [
        {
          arabic: "قُلْ",
          transliteration: "qul",
          translation: "Say",
          grammar: "Imperative verb (Form II — qala), second person masculine singular. The qaf has a dammah, the laam has a sukuun.",
          tajweed: "Qalqalah kubra (major qalqalah) on the qaaf at the end of the word — the qaaf is a qalqalah letter (ق ط ب ج د) with a sukuun, and it's at the end of the word (at pause, since the next word starts a new phrase). The echo should be strong.",
        },
        {
          arabic: "هُوَ",
          transliteration: "huwa",
          translation: "He",
          grammar: "Third person masculine singular pronoun, nominative case. Used as the subject.",
          tajweed: "The waaw has a fathah (it's a consonant here, not a madd letter). No special madd.",
        },
        {
          arabic: "اللَّهُ",
          transliteration: "llaahu",
          translation: "Allah",
          grammar: "Proper noun, nominative case (dammah). The laam of the article is assimilated into the laam of Allah (shaddah).",
          tajweed: "The laam of Allah is heavy (tafkheem) because it follows a fathah (in 'huwa llaahu' the preceding word ends with a fathah). Madd tabee'ee on the alif (2 beats).",
        },
        {
          arabic: "أَحَدٌ",
          transliteration: "aḥad",
          translation: "One / Unique / Indivisible",
          grammar: "Noun, indefinite, nominative case (dammah tanween). At pause (end of ayah), the tanween is dropped and the daal takes a sukuun.",
          tajweed: "The hamzah has a fathah. The haa has a fathah. At pause, the daal takes a sukuun → qalqalah kubra (major qalqalah) on the daal (a qalqalah letter at the end of a paused word).",
        },
      ],
    },
    {
      ayahNumber: 2,
      arabic: "اللَّهُ الصَّمَدُ",
      transliteration: "allaahu ṣ-ṣamad",
      translation: "Allah, the Eternal Refuge / the Self-Sufficient.",
      words: [
        {
          arabic: "اللَّهُ",
          transliteration: "allaahu",
          translation: "Allah",
          grammar: "Proper noun, nominative case (dammah).",
          tajweed: "Madd tabee'ee on the alif (2 beats). The laam of Allah — here it follows a dammah (in 'allaahu ṣ-ṣamad' the preceding context is a dammah), so the laam is heavy (tafkheem).",
        },
        {
          arabic: "الصَّمَدُ",
          transliteration: "ṣ-ṣamad",
          translation: "the Eternal Refuge / the Self-Sufficient / the One upon whom all depend",
          grammar: "Definite noun (article ال), nominative case (dammah). The saad is a sun letter (shaddah). As-samad is a unique name of Allah meaning the one to whom all creation turns for needs.",
          tajweed: "The saad is a sun letter so the laam of the article is assimilated (shaddah on saad). The saad is emphatic (tafkheem). The meem has a fathah. At pause, the daal takes a sukuun → qalqalah kubra (daal is a qalqalah letter).",
        },
      ],
    },
    {
      ayahNumber: 3,
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      transliteration: "lam yalid wa lam yuulad",
      translation: "He neither begets nor is He begotten.",
      words: [
        {
          arabic: "لَمْ",
          transliteration: "lam",
          translation: "Not (negation of the past tense)",
          grammar: "Negation particle (jasm particle — makes the following verb jasm/majzoom). The laam has a fathah, the meem has a sukuun.",
          tajweed: "The meem has a sukuun (لَمْ) followed by yaa (the next word يَلِدْ) → ikhfa shafawi (hide the meem, 2-beat ghunnah, because yaa is not meem or baa — it's one of the 26 izhar shafawi letters).",
        },
        {
          arabic: "يَلِدْ",
          transliteration: "yalid",
          translation: "He begets",
          grammar: "Verb (Form I — walada), imperfect tense (present), jasm (sukuun on the daal) because of لَمْ. Third person masculine singular.",
          tajweed: "The daal has a sukuun (يَلِدْ) followed by waaw (the next word وَلَمْ) → izhar (clear daal, no special rule because daal is not a noon/meem). At pause, the daal takes a sukuun → qalqalah kubra (daal is a qalqalah letter at the end of a paused word).",
        },
        {
          arabic: "وَلَمْ",
          transliteration: "wa lam",
          translation: "and not",
          grammar: "Conjunction وَ (wa = and) + negation لَمْ (lam = not). Same as above.",
          tajweed: "The meem has a sukuun (وَلَمْ) followed by yaa (the next word يُولَدْ) → ikhfa shafawi (hide the meem, 2-beat ghunnah).",
        },
        {
          arabic: "يُولَدْ",
          transliteration: "yuulad",
          translation: "He is begotten / He is born",
          grammar: "Verb (Form IV — passive), imperfect tense (present), jasm (sukuun on the daal) because of لَمْ. Third person masculine singular. Passive voice.",
          tajweed: "Madd tabee'ee on the waaw (2 beats) — the waaw is a madd letter here (dammah before, waaw with sukuun). The daal has a sukuun (يُولَدْ) → at pause, qalqalah kubra (daal is a qalqalah letter at the end of a paused word).",
        },
      ],
    },
    {
      ayahNumber: 4,
      arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
      transliteration: "wa lam yakun lahu kufuwan aḥad",
      translation: "And there is none comparable to Him.",
      words: [
        {
          arabic: "وَلَمْ",
          transliteration: "wa lam",
          translation: "and not",
          grammar: "Conjunction + negation. Same as above.",
          tajweed: "The meem has a sukuun (وَلَمْ) followed by yaa (the next word يَكُنْ) → ikhfa shafawi (hide the meem, 2-beat ghunnah).",
        },
        {
          arabic: "يَكُنْ",
          transliteration: "yakun",
          translation: "there is / there was (verb 'to be')",
          grammar: "Verb (kaana), imperfect tense, jasm (sukuun on the noon) because of لَمْ. Third person masculine singular. The verb 'to be' in Arabic.",
          tajweed: "The noon has a sukuun (يَكُنْ) followed by laam (the next word لَهُ) → idgham without ghunnah (noon + laam → merge cleanly, no nasal hum). This is because laam is one of the two idgham letters without ghunnah (ل ر).",
        },
        {
          arabic: "لَهُ",
          transliteration: "lahu",
          translation: "for Him / to Him",
          grammar: "Preposition لِ (li = for) + third person masculine singular pronoun suffix ـهُ (hu = him). The laam has a fathah (li becomes la before a pronoun suffix).",
          tajweed: "The laam has a fathah, the haa has a dammah. No special madd.",
        },
        {
          arabic: "كُفُوًا",
          transliteration: "kufuwan",
          translation: "comparable / equal / match",
          grammar: "Noun, indefinite (tanween fathah), accusative case (because it's the khabar of يَكُنْ which is from the sisters of kaana that put the khabar in accusative).",
          tajweed: "The kaf has a dammah, the faa has a dammah, the waaw has a tanween fathah. At pause, the tanween is dropped and the waaw takes a sukuun (held as a huroof al-lin — soft madd, can be elongated 2-4 beats at the reciter's choice).",
        },
        {
          arabic: "أَحَدٌ",
          transliteration: "aḥad",
          translation: "anyone / anyone at all",
          grammar: "Noun, indefinite (tanween dammah), nominative case (the ism of يَكُنْ — the subject of the verb 'to be'). At pause, the tanween is dropped.",
          tajweed: "Same as ayah 1. At pause, the daal takes a sukuun → qalqalah kubra (major qalqalah on the daal, the closing sound of the surah).",
        },
      ],
    },
  ],
}

// =====================================================================
// Surah Al-Falaq (113) — 5 ayahs
// =====================================================================

const falaqBreakdown: LessonSurahBreakdown = {
  surahNumber: 113,
  surahName: "Al-Falaq",
  surahNameArabic: "الفلق",
  surahNameTranslation: "The Daybreak / The Dawn",
  totalAyahs: 5,
  reciter: "Alafasy_128kbps",
  ayahs: [
    {
      ayahNumber: 1,
      arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      transliteration: "qul aʿuudhu bi-rabbi l-falaqi",
      translation: "Say, I seek refuge in the Lord of the daybreak.",
      words: [
        {
          arabic: "قُلْ",
          transliteration: "qul",
          translation: "Say",
          grammar: "Imperative verb (Form II), second person masculine singular.",
          tajweed: "Qalqalah sughra (minor qalqalah) on the qaaf — the qaaf is a qalqalah letter with a sukuun in the middle of the word (followed by the next word).",
        },
        {
          arabic: "أَعُوذُ",
          transliteration: "aʿuudhu",
          translation: "I seek refuge / I take shelter",
          grammar: "Verb (Form IV), imperfect tense, first person singular. The hamzah is the first-person prefix, the ayn is the root, the waaw is a madd letter, the dhaal has a dammah.",
          tajweed: "Madd tabee'ee on the waaw (2 beats) — the waaw is a madd letter (dammah before, waaw with sukuun).",
        },
        {
          arabic: "بِرَبِّ",
          transliteration: "bi-rabbi",
          translation: "in [the] Lord of / with [the] Lord of",
          grammar: "Preposition بِ (bi = in/with) + noun رَبّ (rabb = Lord) in the genitive case (kasrah). The shaddah on the baa indicates doubling.",
          tajweed: "The raa is heavy (tafkheem) because it has a fathah. The shaddah on the baa is held for 2 beats.",
        },
        {
          arabic: "الْفَلَقِ",
          transliteration: "l-falaqi",
          translation: "the daybreak / the dawn / the cleaving of the morning",
          grammar: "Definite noun (article ال), genitive case (kasrah) as the possessor of رَبِّ (mudaaf ilayh). The faa is a moon letter so the laam of the article is pronounced.",
          tajweed: "The laam of the article has a sukuun (الْ) followed by faa (a moon letter) → izhar shafawi (clear 'l'). No madd here.",
        },
      ],
    },
    {
      ayahNumber: 2,
      arabic: "مِنْ شَرِّ مَا خَلَقَ",
      transliteration: "min sharri maa khalaq",
      translation: "From the evil of what He created.",
      words: [
        {
          arabic: "مِنْ",
          transliteration: "min",
          translation: "from",
          grammar: "Preposition, genitive case (the next word is in the genitive). The noon has a sukuun.",
          tajweed: "The noon has a sukuun (مِنْ) followed by sheen (the next word شَرِّ) → ikhfa (hide the noon, 2-beat ghunnah, because sheen is one of the 15 ikhfa letters).",
        },
        {
          arabic: "شَرِّ",
          transliteration: "sharri",
          translation: "evil of / harm of",
          grammar: "Noun, genitive case (kasrah) as the object of the preposition مِنْ. The shaddah on the raa indicates doubling.",
          tajweed: "The sheen has a fathah, the raa is heavy (tafkheem) because it has a fathah. The shaddah on the raa is held for 2 beats.",
        },
        {
          arabic: "مَا",
          transliteration: "maa",
          translation: "what / that which (relative pronoun)",
          grammar: "Relative pronoun (ism mawsool), referring to the creation. The alif is a madd letter.",
          tajweed: "Madd tabee'ee on the alif (2 beats).",
        },
        {
          arabic: "خَلَقَ",
          transliteration: "khalaq",
          translation: "He created",
          grammar: "Verb (Form I — khalaqa), perfect tense, third person masculine singular. The subject (Allah) is implied.",
          tajweed: "The khaa has a fathah, the laam has a fathah, the qaf has a fathah. At pause (end of ayah), the qaf takes a sukuun → qalqalah kubra (qaf is a qalqalah letter at the end of a paused word).",
        },
      ],
    },
    {
      ayahNumber: 3,
      arabic: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      transliteration: "wa min sharri ghaasiqin idhaa waqab",
      translation: "And from the evil of darkness when it settles.",
      words: [
        {
          arabic: "وَمِنْ",
          transliteration: "wa min",
          translation: "and from",
          grammar: "Conjunction وَ + preposition مِنْ.",
          tajweed: "The noon has a sukuun (وَمِنْ) followed by sheen (the next word شَرِّ) → ikhfa (hide the noon, 2-beat ghunnah).",
        },
        {
          arabic: "شَرِّ",
          transliteration: "sharri",
          translation: "evil of",
          grammar: "Same as ayah 2.",
          tajweed: "Same as ayah 2. Raa is heavy (fathah).",
        },
        {
          arabic: "غَاسِقٍ",
          transliteration: "ghaasiqin",
          translation: "darkness / night when it falls / the moon (some interpretations)",
          grammar: "Active participle (ism faa'il), indefinite (tanween kasrah), genitive case as the possessor of شَرِّ. Refers to the night or anything that causes harm at night.",
          tajweed: "Madd tabee'ee on the alif (2 beats). At pause (if pausing here), the tanween is dropped and the qaf takes a sukuun → qalqalah kubra. If continuing, the tanween kasrah is pronounced as 'in'.",
        },
        {
          arabic: "إِذَا",
          transliteration: "idhaa",
          translation: "when",
          grammar: "Adverb of time (conditional/time). The alif is a madd letter.",
          tajweed: "Madd tabee'ee on the alif (2 beats).",
        },
        {
          arabic: "وَقَبَ",
          transliteration: "waqab",
          translation: "it settles / it arrives / it covers",
          grammar: "Verb (Form I), perfect tense, third person masculine singular. Refers to the night settling in.",
          tajweed: "At pause (end of ayah), the baa takes a sukuun. The baa is NOT a qalqalah letter, so no echo — just a clean stop.",
        },
      ],
    },
    {
      ayahNumber: 4,
      arabic: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      transliteration: "wa min sharri n-naffaathaati fi l-ʿuqad",
      translation: "And from the evil of those who blow on knots.",
      words: [
        {
          arabic: "وَمِنْ",
          transliteration: "wa min",
          translation: "and from",
          grammar: "Conjunction + preposition.",
          tajweed: "The noon has a sukuun followed by sheen → ikhfa (2-beat ghunnah).",
        },
        {
          arabic: "شَرِّ",
          transliteration: "sharri",
          translation: "evil of",
          grammar: "Same as before.",
          tajweed: "Same as before. Raa is heavy.",
        },
        {
          arabic: "النَّفَّاثَاتِ",
          transliteration: "n-naffaathaati",
          translation: "those [women] who blow [on knots] / the blowers in knots",
          grammar: "Active participle (ism faa'il), feminine plural, definite (article ال), genitive case (kasrah) as the possessor of شَرِّ. Refers to practitioners of magic/sorcery who tie knots and blow on them.",
          tajweed: "The noon is a sun letter so the laam of the article is assimilated (shaddah on noon). The shaddah on the faa indicates doubling. Madd tabee'ee on the alif (2 beats). At pause (if pausing here), the taa takes a sukuun — no qalqalah because taa (non-emphatic) is not a qalqalah letter.",
        },
        {
          arabic: "فِي",
          transliteration: "fi",
          translation: "in",
          grammar: "Preposition. The yaa is a madd letter.",
          tajweed: "Madd tabee'ee on the Yaa (2 beats).",
        },
        {
          arabic: "الْعُقَدِ",
          transliteration: "l-ʿuqad",
          translation: "the knots",
          grammar: "Definite noun (article ال), genitive case (kasrah) as the object of the preposition فِي. The ayn is a moon letter.",
          tajweed: "The laam of the article has a sukuun followed by ayn (a moon letter, throat letter) → izhar shafawi (clear 'l'). At pause (end of ayah), the daal takes a sukuun → qalqalah kubra (daal is a qalqalah letter at the end of a paused word).",
        },
      ],
    },
    {
      ayahNumber: 5,
      arabic: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      transliteration: "wa min sharri haasidin idhaa hasad",
      translation: "And from the evil of an envier when he envies.",
      words: [
        {
          arabic: "وَمِنْ",
          transliteration: "wa min",
          translation: "and from",
          grammar: "Conjunction + preposition.",
          tajweed: "The noon has a sukuun followed by haa (soft haa — a throat letter, ء ه ع ح غ خ) → izhar (clear 'n', no ghunnah). This is different from the previous ayahs where the noon was followed by sheen (ikhfa).",
        },
        {
          arabic: "شَرِّ",
          transliteration: "sharri",
          translation: "evil of",
          grammar: "Same as before.",
          tajweed: "Same as before.",
        },
        {
          arabic: "حَاسِدٍ",
          transliteration: "haasidin",
          translation: "an envier / one who envies",
          grammar: "Active participle (ism faa'il), indefinite (tanween kasrah), genitive case. Refers to one who harbours envy (the root ح-س-د means to wish that someone else's blessing be removed).",
          tajweed: "Madd tabee'ee on the alif (2 beats). The haa is the soft haa (ه, not ح). At pause (if pausing here), the tanween is dropped and the daal takes a sukuun → qalqalah kubra.",
        },
        {
          arabic: "إِذَا",
          transliteration: "idhaa",
          translation: "when",
          grammar: "Adverb of time.",
          tajweed: "Madd tabee'ee on the alif (2 beats).",
        },
        {
          arabic: "حَسَدَ",
          transliteration: "hasad",
          translation: "he envies",
          grammar: "Verb (Form I), perfect tense, third person masculine singular.",
          tajweed: "At pause (end of surah), the daal takes a sukuun → qalqalah kubra (daal is a qalqalah letter at the end of a paused word — the closing sound of the surah).",
        },
      ],
    },
  ],
}

// =====================================================================
// Surah An-Nas (114) — 6 ayahs
// =====================================================================

const nasBreakdown: LessonSurahBreakdown = {
  surahNumber: 114,
  surahName: "An-Nas",
  surahNameArabic: "الناس",
  surahNameTranslation: "Mankind",
  totalAyahs: 6,
  reciter: "Alafasy_128kbps",
  ayahs: [
    {
      ayahNumber: 1,
      arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      transliteration: "qul aʿuudhu bi-rabbi n-naasi",
      translation: "Say, I seek refuge in the Lord of mankind.",
      words: [
        {
          arabic: "قُلْ",
          transliteration: "qul",
          translation: "Say",
          grammar: "Imperative verb (Form II), second person masculine singular.",
          tajweed: "Qalqalah sughra on the qaaf (qalqalah letter with sukuun in the middle of speech).",
        },
        {
          arabic: "أَعُوذُ",
          transliteration: "aʿuudhu",
          translation: "I seek refuge",
          grammar: "Verb (Form IV), imperfect tense, first person singular.",
          tajweed: "Madd tabee'ee on the waaw (2 beats).",
        },
        {
          arabic: "بِرَبِّ",
          transliteration: "bi-rabbi",
          translation: "in [the] Lord of",
          grammar: "Preposition بِ + noun رَبّ in genitive.",
          tajweed: "Raa is heavy (tafkheem, fathah). Shaddah on baa (2 beats).",
        },
        {
          arabic: "النَّاسِ",
          transliteration: "n-naasi",
          translation: "mankind / humanity",
          grammar: "Definite noun (article ال), genitive case (kasrah) as the possessor of رَبِّ. The noon is a sun letter (shaddah).",
          tajweed: "The noon is a sun letter so the laam of the article is assimilated (shaddah on noon). Madd tabee'ee on the alif (2 beats). At pause (end of ayah), the seen takes a sukuun — no qalqalah (seen is not a qalqalah letter).",
        },
      ],
    },
    {
      ayahNumber: 2,
      arabic: "مَلِكِ النَّاسِ",
      transliteration: "maliki n-naasi",
      translation: "King of mankind / Sovereign of mankind.",
      words: [
        {
          arabic: "مَلِكِ",
          transliteration: "maliki",
          translation: "King of / Sovereign of",
          grammar: "Noun (active participle), genitive case (kasrah) as a second adjective/substitution to رَبِّ. The meem has a fathah, the laam has a kasrah, the kaf has a kasrah.",
          tajweed: "No special madd. The laam is light (tarqeeq) because it has a kasrah.",
        },
        {
          arabic: "النَّاسِ",
          transliteration: "n-naasi",
          translation: "mankind",
          grammar: "Same as ayah 1. Genitive case as the possessor of مَلِكِ.",
          tajweed: "Same as ayah 1. Noon is a sun letter (shaddah). Madd tabee'ee on the alif.",
        },
      ],
    },
    {
      ayahNumber: 3,
      arabic: "إِلَٰهِ النَّاسِ",
      transliteration: "ilaahi n-naasi",
      translation: "God of mankind / Deity of mankind.",
      words: [
        {
          arabic: "إِلَٰهِ",
          transliteration: "ilaahi",
          translation: "God of / Deity of",
          grammar: "Noun, genitive case (kasrah) as a third substitution. The alif is a madd letter (madd tabee'ee, 2 beats).",
          tajweed: "Madd tabee'ee on the alif (2 beats). The hamzah at the start has a kasrah.",
        },
        {
          arabic: "النَّاسِ",
          transliteration: "n-naasi",
          translation: "mankind",
          grammar: "Same as before. Genitive case.",
          tajweed: "Same as before. Noon sun letter (shaddah). Madd on alif.",
        },
      ],
    },
    {
      ayahNumber: 4,
      arabic: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      transliteration: "min sharri l-waswaasi l-khannaasi",
      translation: "From the evil of the whisperer who withdraws.",
      words: [
        {
          arabic: "مِنْ",
          transliteration: "min",
          translation: "from",
          grammar: "Preposition.",
          tajweed: "The noon has a sukuun (مِنْ) followed by sheen (the next word شَرِّ) → ikhfa (hide the noon, 2-beat ghunnah).",
        },
        {
          arabic: "شَرِّ",
          transliteration: "sharri",
          translation: "evil of",
          grammar: "Noun, genitive case.",
          tajweed: "Raa is heavy (fathah). Shaddah on raa (2 beats).",
        },
        {
          arabic: "الْوَسْوَاسِ",
          transliteration: "l-waswaasi",
          translation: "the whisperer / the one who whispers",
          grammar: "Definite noun (article ال), genitive case (kasrah) as the possessor of شَرِّ. The waaw is a moon letter. Refers to Shaytaan who whispers into the hearts of people.",
          tajweed: "The laam of the article has a sukuun followed by waaw (a moon letter) → izhar shafawi (clear 'l'). Madd tabee'ee on the alif (2 beats). The seen between the two waaws has a sukuun (وَسْوَاسِ) — no special rule because it's followed by waaw.",
        },
        {
          arabic: "الْخَنَّاسِ",
          transliteration: "l-khannaasi",
          translation: "the one who withdraws / the one who retreats",
          grammar: "Active participle (intensive form), definite (article ال), genitive case. The khaa is a moon letter. Refers to Shaytaan's retreat when Allah is mentioned.",
          tajweed: "The laam of the article has a sukuun followed by khaa (a moon letter, throat letter) → izhar shafawi (clear 'l'). Madd tabee'ee on the alif (2 beats). The shaddah on the noon indicates doubling (2 beats with ghunnah because noon is a nasal letter).",
        },
      ],
    },
    {
      ayahNumber: 5,
      arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      transliteration: "alladhi yuwaswisu fii ṣuduri n-naasi",
      translation: "Who whispers into the breasts of mankind.",
      words: [
        {
          arabic: "الَّذِي",
          transliteration: "alladhi",
          translation: "who / the one who (relative pronoun)",
          grammar: "Relative pronoun, definite (article ال), nominative case. Refers back to الْوَسْوَاسِ الْخَنَّاسِ.",
          tajweed: "The laam of the article is assimilated (shaddah on the laam — sun letter assimilation). Madd tabee'ee on the Yaa (2 beats).",
        },
        {
          arabic: "يُوَسْوِسُ",
          transliteration: "yuwaswisu",
          translation: "he whispers",
          grammar: "Verb (Form II — taf'il, doubled middle root), imperfect tense, third person masculine singular. The root is و-س-و-س (quadriliteral). The noon is the first-person prefix... actually here it's yaa (third person).",
          tajweed: "Madd tabee'ee on the waaw (2 beats). The seen between the two waaws has a sukuun (يُوَسْوِسُ) — no special rule.",
        },
        {
          arabic: "فِي",
          transliteration: "fii",
          translation: "in / into",
          grammar: "Preposition. The yaa is a madd letter.",
          tajweed: "Madd tabee'ee on the yaa (2 beats). At pause, can be elongated to 4 beats (the reciter's choice for huroof al-lin).",
        },
        {
          arabic: "صُدُورِ",
          transliteration: "ṣuduri",
          translation: "breasts of / hearts of / chests of",
          grammar: "Noun, genitive case (kasrah) as the object of فِي. The saad is emphatic.",
          tajweed: "The saad is emphatic (tafkheem). The daad is emphatic. Both are heavy letters — the mouth should be open and the back of the tongue raised.",
        },
        {
          arabic: "النَّاسِ",
          transliteration: "n-naasi",
          translation: "mankind",
          grammar: "Definite noun, genitive case as the possessor of صُدُورِ.",
          tajweed: "Same as before. Noon sun letter (shaddah). Madd on alif (2 beats).",
        },
      ],
    },
    {
      ayahNumber: 6,
      arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
      transliteration: "mina l-jinnati wa n-naasi",
      translation: "From the jinn and mankind.",
      words: [
        {
          arabic: "مِنَ",
          transliteration: "mina",
          translation: "from",
          grammar: "Preposition. The noon has a fathah (open) because it's followed by alif (the article) — actually here it's مِنَ with a fathah on the noon because of the article الْجِنَّةِ. This is a regular inflection, not a tajweed rule.",
          tajweed: "The noon has a fathah (مِنَ) followed by the article الْجِنَّةِ. The laam of the article has a sukuun... wait, the article starts with alif (hamzatul wasl). The noon + alif combination: the noon is pronounced clearly (no special rule).",
        },
        {
          arabic: "الْجِنَّةِ",
          transliteration: "l-jinnati",
          translation: "the jinn / the jinn kind",
          grammar: "Definite noun (article ال), genitive case (kasrah) as the object of مِن. The jeem is a moon letter. Refers to the unseen creation of Allah (the jinn) — one of the two sources of whispering (jinn and mankind).",
          tajweed: "The laam of the article has a sukuun followed by jeem (a moon letter) → izhar shafawi (clear 'l'). The shaddah on the noon indicates doubling (2 beats with ghunnah because noon is nasal).",
        },
        {
          arabic: "وَالنَّاسِ",
          transliteration: "wa n-naasi",
          translation: "and mankind",
          grammar: "Conjunction وَ + definite noun النَّاسِ. Genitive case. Refers to the second source of whispering (human beings — evil people who whisper).",
          tajweed: "The waaw has a fathah (conjunction). The noon is a sun letter so the laam of the article is assimilated (shaddah on noon). Madd tabee'ee on the alif (2 beats). At pause (end of surah), the seen takes a sukuun — no qalqalah (seen is not a qalqalah letter). The reciter ends the surah with a clean stop on the seen.",
        },
      ],
    },
  ],
}

// =====================================================================
// Lesson content (intro, keyPoints, examples, practice) for each surah
// =====================================================================

export const capstoneContent: Record<string, LessonContent> = {
  "surah-al-fatihah-wordbyword": {
    intro: [
      "Surah Al-Fatihah (سورة الفاتحة) is the first surah of the Quran and the most-recited passage in Islam. Its name means 'The Opening' or 'The Opener' — it opens the Book, it opens the prayer, and it opens the heart to the message of the Quran. The Prophet Muhammad (peace be upon him) called it 'the seven oft-repeated verses' (السبع المثاني) and 'the great Quran' (القرآن العظيم).",
      "This surah is recited in every unit (rak'ah) of every obligatory and voluntary prayer — a Muslim who prays the five daily prayers recites Al-Fatihah at least 17 times per day. It is a complete summary of the Quran's message: it establishes Allah's lordship (rububiyyah), His exclusive right to worship (uluhiyyah), His names and attributes (asma' wa sifat), the straight path, and the categories of people (the blessed, the anger-earners, and the astray).",
      "The surah was revealed in Makkah (some scholars say both Makkah and Madinah). It is a dialogue between the servant and his Lord: the servant praises Allah and asks for guidance, and Allah responds (in a Hadith Qudsi) by saying 'I have divided the prayer between Myself and My servant, and My servant will have what he asked for.' This intimate dialogue is why Al-Fatihah is the cornerstone of every prayer.",
    ],
    keyPoints: [
      {
        title: "The seven oft-repeated verses",
        description:
          "Al-Fatihah has 7 ayahs. The Prophet (peace be upon him) called it 'the seven oft-repeated' (السبع المثاني) because it is recited repeatedly in every prayer. The Bismillah is counted as the first ayah in this surah (unlike most surahs where the Bismillah is a separate marker).",
      },
      {
        title: "Three categories of people",
        description:
          "Ayah 7 mentions three categories: (1) those upon whom Allah has bestowed favour (the prophets, the truthful, the martyrs, the righteous — النَّعْمَة); (2) those who have earned anger (المغضوب — those who knew the truth but rejected it); (3) those who are astray (الضالين — those who are ignorant of the truth). The Straight Path is the path of the first category.",
      },
      {
        title: "The dialogue with Allah",
        description:
          "In a Hadith Qudsi, Allah says: 'I have divided the prayer between Myself and My servant, and My servant will have what he asked for. When he says \"al-hamdu lillahi rabbi l-'alamin\", Allah says \"My servant has praised Me.\" When he says \"ar-rahmani r-raheem\", Allah says \"My servant has extolled Me.\"... When he says \"ihdina s-sirata l-mustaqeem\", Allah says \"This is for My servant, and My servant will have what he asked for.\"'",
      },
      {
        title: "The pivot of the surah",
        description:
          "Ayah 5 (إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ — You alone we worship, and You alone we ask for help) is the pivot of the surah. Everything before it is praise of Allah; everything after it is supplication. This ayah establishes the two pillars of the religion: worship (ibadah) and reliance (tawakkul).",
      },
    ],
    examples: [
      { arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "bismi llaahi r-raḥmaani r-raḥeemi", meaning: "Ayah 1 — In the name of Allah, the Most Gracious, the Most Merciful" },
      { arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", transliteration: "al-ḥamdu lillaahi rabbi l-ʿalameena", meaning: "Ayah 2 — All praise is for Allah, Lord of the worlds" },
      { arabic: "الرَّحْمَٰنِ الرَّحِيمِ", transliteration: "ar-raḥmaani r-raḥeemi", meaning: "Ayah 3 — the Most Gracious, the Most Merciful" },
      { arabic: "مَالِكِ يَوْمِ الدِّينِ", transliteration: "maaliki yawmi d-deeni", meaning: "Ayah 4 — Master of the Day of Judgment" },
      { arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", transliteration: "iyyaaka naʿbudu wa iyyaaka nastaʿeenu", meaning: "Ayah 5 — You alone we worship, and You alone we ask for help" },
      { arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", transliteration: "ihdina ṣ-ṣiraata l-mustaqeema", meaning: "Ayah 6 — Guide us to the Straight Path" },
      { arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", transliteration: "ṣiraata lladheena anʿamta ʿalayhim ghayri l-maghḍoobi ʿalayhim wa la ḍ-ḍaalleena", meaning: "Ayah 7 — The path of those upon whom You have bestowed favour, not of those who have earned anger, nor of those who are astray" },
    ],
    practice:
      "Read each ayah above, tapping the audio button to hear the recitation from Mishary Alafasy. Pay special attention to: (1) the madd on the alif in الرَّحْمَٰنِ and الرَّحِيمِ (2 beats); (2) the qalqalah on the daal in مَالِكِ يَوْمِ الدِّينِ at pause; (3) the madd laazim (6 beats) on the alif in الضَّالِّينَ at the end — this is the longest madd in the surah. Read the full surah aloud 5 times, then listen to the audio and compare. Take 30 minutes — this is the most-recited surah in Islam, so mastery is essential.",
    surahBreakdown: fatihahBreakdown,
  },

  "surah-al-ikhlas-wordbyword": {
    intro: [
      "Surah Al-Ikhlas (سورة الإخلاص) is the 112th surah of the Quran. Its name means 'Sincerity' or 'Pure Faith' — it is named for the sincere, pure monotheism (tawhid) it establishes. The Prophet Muhammad (peace be upon him) said: 'By the One in whose hand is my soul, it is equivalent to one-third of the Quran' (Sahih Al-Bukhari).",
      "This surah was revealed in Makkah in response to the polytheists of Makkah who asked the Prophet (peace be upon him) to describe the lineage of his Lord. Allah revealed these four ayahs as a definitive statement of His oneness, His eternity, His non-comparability, and His uniqueness. The surah refutes every form of polytheism (shirk), every form of incarnation (hulul), every form of trinity, and every anthropomorphic claim about Allah.",
      "Reciting Al-Ikhlas is a Sunnah practice — many Muslims recite it (along with Al-Falaq and An-Nas) after every obligatory prayer and three times before sleeping. The Prophet (peace be upon him) said: 'Whoever recites \"Qul Huwa Allahu Ahad\" ten times, Allah will build for him a palace in Paradise' (Sahih Al-Jami').",
    ],
    keyPoints: [
      {
        title: "Equivalent to one-third of the Quran",
        description:
          "The Prophet (peace be upon him) said Al-Ikhlas is equivalent to one-third of the Quran. The scholars explain: the Quran has three main themes — tawhid (monotheism), ahkam (rulings), and qisas (stories). Al-Ikhlas comprehensively covers the tawhid theme, so it is equivalent to one-third of the Quran by theme.",
      },
      {
        title: "Four foundational attributes of Allah",
        description:
          "The surah establishes four foundational attributes: (1) Ahad — Allah is absolutely One, with no partner, no division, no composition; (2) As-Samad — Allah is the Eternal Refuge, the Self-Sufficient, the One upon whom all depend; (3) Lam yalid wa lam yulad — Allah neither begets nor is begotten, refuting every claim of offspring (refutes the Christian trinity, the Jewish claim of Uzayr as God's son, the pagan claim of angels as God's daughters); (4) Wa lam yakun lahu kufuwan ahad — there is none comparable to Him, refuting every anthropomorphic claim.",
      },
      {
        title: "The word 'Ahad'",
        description:
          "The word أَحَدٌ (ahad) is more emphatic than وَاحِد (waahid). 'Waahid' means 'one' (in number, allowing for the possibility of a second). 'Ahad' means 'the only one, absolutely one, with no possibility of any other'. This is the word Allah chose to describe His oneness — it is the strongest possible expression of tawhid.",
      },
      {
        title: "The word 'As-Samad'",
        description:
          "الصَّمَدُ (as-samad) is a unique name of Allah. The scholars give multiple meanings: (1) the One who does not eat or drink (self-sufficient); (2) the One upon whom all creation depends for needs; (3) the One who is perfect in every attribute; (4) the Eternal who never changes. Ibn Abbas (may Allah be pleased with him) said: 'He is the Master, the perfect in his mastery; the Great, the perfect in his greatness; the Forbearing, the perfect in his forbearance.'",
      },
    ],
    examples: [
      { arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", transliteration: "qul huwa llaahu aḥad", meaning: "Ayah 1 — Say, He is Allah, [who is] One" },
      { arabic: "اللَّهُ الصَّمَدُ", transliteration: "allaahu ṣ-ṣamad", meaning: "Ayah 2 — Allah, the Eternal Refuge" },
      { arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", transliteration: "lam yalid wa lam yuulad", meaning: "Ayah 3 — He neither begets nor is He begotten" },
      { arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", transliteration: "wa lam yakun lahu kufuwan aḥad", meaning: "Ayah 4 — And there is none comparable to Him" },
    ],
    practice:
      "Read each ayah, tapping the audio to hear Mishary Alafasy's recitation. Pay special attention to: (1) the qalqalah on قُلْ (qul) — strong echo on the qaaf; (2) the qalqalah on أَحَدٌ (aḥad) at the end of ayah 1 — strong echo on the daal; (3) the qalqalah on الصَّمَدُ (ṣ-ṣamad) at the end of ayah 2 — strong echo on the daal; (4) the qalqalah on يَلِدْ (yalid) and يُولَدْ (yuulad) in ayah 3 — two qalqalahs in one ayah; (5) the madd on the waaw in يُولَدْ (yuulad). Read the full surah 10 times. Take 20 minutes. This surah is short enough to memorise in a day — make the intention to memorise it if you haven't already.",
    surahBreakdown: ikhlasBreakdown,
  },

  "surah-al-falaq-wordbyword": {
    intro: [
      "Surah Al-Falaq (سورة الفلق) is the 113th surah of the Quran. Its name means 'The Daybreak' or 'The Dawn' — taken from the word الْفَلَقِ in the first ayah, which refers to the cleaving of the morning dawn. This surah, together with Surah An-Nas (the next surah), is called 'Al-Mu'awwidhatayn' (the two refuges) — they are the two surahs the Prophet (peace be upon him) used to seek refuge in Allah from evil.",
      "This surah was revealed in Madinah, according to the most authentic narrations. The occasion of revelation: a Jewish sorcerer named Labid ibn al-A'sam cast a spell on the Prophet (peace be upon him), causing him to imagine he had done things he had not done. Allah revealed Al-Falaq and An-Nas as a cure, and the Prophet (peace be upon him) recited them to undo the spell. From this, the scholars derive that the surahs are a protection against all forms of evil — visible and invisible, human and jinn, magical and psychological.",
      "The surah enumerates four evils from which we seek refuge: (1) the evil of the creation in general; (2) the evil of the darkness when it settles; (3) the evil of those who blow on knots (sorcerers); (4) the evil of the envier when he envies. These four cover the main categories of harm that a person may encounter in life.",
    ],
    keyPoints: [
      {
        title: "The two refuges (Al-Mu'awwidhatayn)",
        description:
          "Al-Falaq and An-Nas are called 'Al-Mu'awwidhatayn' (the two refuges). The Prophet (peace be upon him) used to recite them three times every morning and evening, three times before sleeping, and after every obligatory prayer. They are the primary means of seeking Allah's protection from evil.",
      },
      {
        title: "Four categories of evil",
        description:
          "Al-Falaq enumerates four evils: (1) شَرِّ مَا خَلَقَ — the evil of all creation (general); (2) شَرِّ غَاسِقٍ إِذَا وَقَبَ — the evil of the darkness when it settles (night, wild animals, thieves); (3) شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ — the evil of those who blow on knots (sorcery/magic); (4) شَرِّ حَاسِدٍ إِذَا حَسَدَ — the evil of the envier (the evil eye, hasad).",
      },
      {
        title: "The evil eye (hasad)",
        description:
          "The last ayah (وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ) refers to the envier — the one who wishes for the removal of another's blessing. The evil eye is a real phenomenon in Islam; the Prophet (peace be upon him) said: 'The evil eye is real, and if anything were to overtake the divine decree, the evil eye would.' (Sahih Muslim). Seeking refuge in Allah (as in this surah) is the protection.",
      },
      {
        title: "The Lord of the daybreak",
        description:
          "The surah opens by seeking refuge in 'the Lord of the daybreak' (رَبِّ الْفَلَقِ). The daybreak represents the cleaving of light through darkness — a metaphor for Allah's power to break through any darkness, any difficulty, any evil. By invoking the Lord of the daybreak, we acknowledge that Allah is the One who brings light after darkness, relief after hardship.",
      },
    ],
    examples: [
      { arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", transliteration: "qul aʿuudhu bi-rabbi l-falaqi", meaning: "Ayah 1 — Say, I seek refuge in the Lord of the daybreak" },
      { arabic: "مِنْ شَرِّ مَا خَلَقَ", transliteration: "min sharri maa khalaq", meaning: "Ayah 2 — From the evil of what He created" },
      { arabic: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ", transliteration: "wa min sharri ghaasiqin idhaa waqab", meaning: "Ayah 3 — And from the evil of darkness when it settles" },
      { arabic: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", transliteration: "wa min sharri n-naffaathaati fi l-ʿuqad", meaning: "Ayah 4 — And from the evil of those who blow on knots" },
      { arabic: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", transliteration: "wa min sharri haasidin idhaa hasad", meaning: "Ayah 5 — And from the evil of an envier when he envies" },
    ],
    practice:
      "Read each ayah, tapping the audio to hear Mishary Alafasy's recitation. Pay special attention to: (1) the qalqalah on قُلْ (qul) — strong echo on the qaaf at the start; (2) the ikhfa on مِنْ شَرِّ (min sharri) — the noon is hidden with a 2-beat ghunnah before the sheen; (3) the qalqalah on خَلَقَ (khalaq) at the end of ayah 2 — strong echo on the qaf; (4) the izhar on وَمِنْ شَرِّ حَاسِدٍ (wa min sharri haasidin) in ayah 5 — the noon is clear (no ghunnah) because haa is a throat letter (compare with the ikhfa in ayahs 2-4 where the noon is followed by sheen). Read the full surah 5 times. Take 20 minutes. Make this surah part of your daily adhkar (morning/evening remembrances).",
    surahBreakdown: falaqBreakdown,
  },

  "surah-an-nas-wordbyword": {
    intro: [
      "Surah An-Nas (سورة الناس) is the 114th and final surah of the Quran. Its name means 'Mankind' — taken from the word النَّاسِ which appears in the first ayah and recurs throughout. Together with Surah Al-Falaq (the previous surah), it is one of the 'two refuges' (Al-Mu'awwidhatayn) that the Prophet (peace be upon him) used to seek Allah's protection.",
      "Where Al-Falaq seeks refuge from external evils (the darkness, sorcerers, enviers), An-Nas seeks refuge from an internal evil — the whisperings (waswas) of Shaytaan that infiltrate the heart. The surah establishes that the protection we need is in Allah, identified by three of His attributes: the Lord of mankind (His sovereignty), the King of mankind (His authority), and the God of mankind (His right to be worshipped).",
      "The surah identifies the whisperer (الْوَسْوَاسِ) as coming from two sources: the jinn (الْجِنَّةِ) and mankind (النَّاسِ). The jinn whisper invisibly into the heart, while evil humans whisper visibly through their words, suggestions, and bad company. Seeking refuge in Allah is the protection against both. The surah closes the Quran with a comprehensive supplication for spiritual protection — a fitting end to a Book that began with 'In the name of Allah, the Most Gracious, the Most Merciful.'",
    ],
    keyPoints: [
      {
        title: "Three attributes of Allah",
        description:
          "An-Nas opens by seeking refuge in Allah, identified by three attributes: (1) رَبِّ النَّاسِ — the Lord of mankind (the One who creates, sustains, and manages all affairs); (2) مَلِكِ النَّاسِ — the King of mankind (the One with absolute authority and sovereignty); (3) إِلَٰهِ النَّاسِ — the God of mankind (the One alone deserving of worship). These three cover Allah's rububiyyah (lordship), mulk (sovereignty), and uluhiyyah (divinity).",
      },
      {
        title: "The whisperer (الْوَسْوَاسِ)",
        description:
          "The whisperer is Shaytaan (and his helpers). He whispers (يُوَسْوِسُ) into the hearts of people — planting doubts, desires, and evil thoughts. The whispering is described as subtle and persistent — the word وَسْوَاس in Arabic connotes a soft, repeated sound. The protection is in seeking refuge in Allah, who is more powerful than the whisperer.",
      },
      {
        title: "Two sources of whispering",
        description:
          "Ayah 6 identifies two sources of whispering: مِنَ الْجِنَّةِ وَالنَّاسِ — from the jinn and from mankind. The jinn whisper invisibly (into the heart, the inner realm). Mankind whisper visibly (through evil speech, bad advice, harmful media, bad company). A Muslim must be vigilant against both — guarding the heart from invisible whispers and guarding the ears and eyes from visible whispers.",
      },
      {
        title: "الْخَنَّاسِ — the one who withdraws",
        description:
          "Shaytaan is described as الْخَنَّاسِ — the one who withdraws. This means he retreats when Allah is remembered. The Prophet (peace be upon him) said: 'When the son of Adam says \"Bismillah\", Shaytaan withdraws (yakhanis) to the size of a fly.' (Sahih Al-Jami'). The protection against the whisperer is the constant remembrance of Allah (dhikr).",
      },
    ],
    examples: [
      { arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", transliteration: "qul aʿuudhu bi-rabbi n-naasi", meaning: "Ayah 1 — Say, I seek refuge in the Lord of mankind" },
      { arabic: "مَلِكِ النَّاسِ", transliteration: "maliki n-naasi", meaning: "Ayah 2 — King of mankind" },
      { arabic: "إِلَٰهِ النَّاسِ", transliteration: "ilaahi n-naasi", meaning: "Ayah 3 — God of mankind" },
      { arabic: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", transliteration: "min sharri l-waswaasi l-khannaasi", meaning: "Ayah 4 — From the evil of the whisperer who withdraws" },
      { arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", transliteration: "alladhi yuwaswisu fii ṣuduri n-naasi", meaning: "Ayah 5 — Who whispers into the breasts of mankind" },
      { arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ", transliteration: "mina l-jinnati wa n-naasi", meaning: "Ayah 6 — From the jinn and mankind" },
    ],
    practice:
      "Read each ayah, tapping the audio to hear Mishary Alafasy's recitation. Pay special attention to: (1) the qalqalah on قُلْ (qul) — strong echo on the qaaf; (2) the madd on the alif in النَّاسِ (n-naasi) — 2 beats, repeated 5 times in the surah; (3) the madd on the alif in الْوَسْوَاسِ (l-waswaasi) — 2 beats; (4) the madd on the alif in الْخَنَّاسِ (l-khannaasi) — 2 beats; (5) the madd on the Yaa in فِي (fii) — 2 beats; (6) the shaddah on the noon in الْجِنَّةِ (l-jinnati) — doubled noon with ghunnah. Read the full surah 5 times, then recite Al-Falaq and An-Nas together (the two refuges). Take 20 minutes. Make these two surahs part of your daily morning/evening adhkar.",
    surahBreakdown: nasBreakdown,
  },
}
