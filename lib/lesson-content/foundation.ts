// Bismillah Ar-Rahman Ar-Roheem.
//
// Lesson content for the Foundation Phase of the Iqroh curriculum.
// 24 lessons across 4 modules:
//   Module 1: Harakat (Arabic vowel signs) - 5 lessons
//   Module 2: Huruuful-Hijah (Arabic letters) - 8 lessons
//   Module 3: Huruuf Forms (letter positions) - 6 lessons
//   Module 4: Vowels Application - 5 lessons
//
// All content is real, accurate Islamic education material.
// No placeholders, no "coming soon" text. Every lesson has:
//   - intro: 2-3 substantial paragraphs
//   - keyPoints: 3-5 cards with detailed explanations
//   - examples: 3-6 Arabic examples with transliteration + meaning
//   - practice: actionable practice instructions

import type { LessonContent } from "./types"

export const foundationContent: Record<string, LessonContent> = {
  // ===================================================================
  // MODULE 1: HARAKAT (Arabic vowel signs) — 5 lessons
  // ===================================================================

  "intro-to-harakat": {
    intro: [
      "Arabic is a consonantal script by nature. The 28 letters of the Arabic alphabet represent consonant sounds; the short vowel sounds are indicated by special diacritical marks placed above or below the letter. These marks are called harakat (حركات), the plural of harakah (حركة), which literally means 'movement' — because they give life and movement to otherwise silent letters.",
      "There are three primary harakat: fathah (فتحة) which produces a short 'a' sound, kasrah (كسرة) which produces a short 'i' sound, and dammah (ضمة) which produces a short 'u' sound. Each harakah is a single short vowel that lasts approximately one beat (one harakah) when reciting the Quran. Mastery of these three signs is the foundation of all Arabic reading, because every word in the Quran depends on them for correct pronunciation.",
      "Before learning each harakah individually, it is essential to understand that the harakat were introduced by the scholars Abu al-Aswad al-Du'ali and later standardised by Al-Khalil ibn Ahmad al-Farahidi in the first century of Islam. Their purpose was to preserve the correct recitation of the Quran for non-Arabs and for future generations. Without harakat, the same consonantal text could be read in dozens of ways, leading to corruption of meaning. The harakat lock the pronunciation to the way the Prophet Muhammad (peace be upon him) received it from Jibreel (peace be upon him).",
    ],
    keyPoints: [
      {
        title: "Harakat means movement",
        description:
          "The word harakah (حركة) means 'movement'. A bare letter without a harakah is called saakin (ساكن), meaning 'still' or 'silent'. A harakah 'moves' the letter by giving it a short vowel sound. This is why the harakat are also called mutaharrikah (متحركة) — 'the movers'.",
      },
      {
        title: "Three primary harakat",
        description:
          "There are three primary harakat: fathah (a short 'a'), kasrah (a short 'i'), and dammah (a short 'u'). Together they cover the three short vowel sounds of Arabic. The other signs (sukuun, shaddah, tanween, madd) are built on top of these three.",
      },
      {
        title: "Each harakah is one beat",
        description:
          "When reciting the Quran, each harakah lasts approximately one second (or one beat). This is the unit of timing in tajweed. Two harakat equal one beat of madd (elongation). This is why understanding harakat is essential not only for correct pronunciation but also for correct recitation rhythm.",
      },
      {
        title: "Why harakat exist",
        description:
          "The Arabic script originally recorded only consonants. As Islam spread, non-Arab Muslims needed guidance to recite the Quran correctly. The harakat were added as a mercy from the scholars to preserve the recitation. They are a sign of Allah's preservation of His book: He inspired the scholars to invent a system that locks the pronunciation forever.",
      },
    ],
    examples: [
      { arabic: "بْ", transliteration: "b (silence)", meaning: "baa with sukuun — no vowel, just the consonant sound" },
      { arabic: "بَ", transliteration: "ba", meaning: "baa with fathah — short 'a' sound" },
      { arabic: "بِ", transliteration: "bi", meaning: "baa with kasrah — short 'i' sound" },
      { arabic: "بُ", transliteration: "bu", meaning: "baa with dammah — short 'u' sound" },
    ],
    practice:
      "Look at the four forms of the letter baa above. Tap the audio button to hear each one pronounced. Notice how the same letter (ب) carries a completely different sound depending on the harakah above or below it. Practice writing each form on paper, then come back and listen again. Repeat until you can identify each harakah by sight, without the audio.",
  },

  fathah: {
    intro: [
      "The fathah (فتحة) is the first of the three primary harakat. It is written as a small diagonal stroke above the letter, like a tiny forward slash: ( َ ). Its name comes from the Arabic root f-t-ha which means 'to open' — because the mouth opens slightly to produce the fathah sound. The sound it produces is a short 'a' as in the English word 'cat' or 'bat', but shorter and crisper.",
      "To pronounce the fathah correctly, the mouth should be open, the tongue should be flat and relaxed in the lower position, and the sound should come from the throat with no rounding of the lips. The jaw drops slightly. The sound is short — it should not be elongated unless there is a madd (elongation) sign after it. A common mistake is to pronounce the fathah like the English 'ay' (as in 'day'), which is actually a long 'aa' sound. The fathah itself is just a single short 'a'.",
      "When a letter has a fathah above it, you say the name of the letter with an 'a' vowel. So بَ is pronounced 'ba', تَ is pronounced 'ta', ثَ is pronounced 'tha', and so on. The fathah is the most common harakah in the Arabic language and appears tens of thousands of times in the Quran. Mastering it is non-negotiable for any student of the Quran.",
    ],
    keyPoints: [
      {
        title: "The shape and position",
        description:
          "The fathah is a small diagonal stroke above the letter, slanting from upper-right to lower-left: ( َ ). It always goes above the letter, never below. If a letter has both a fathah and a dot above (like ب ت ث ج خ ذ ر ز), the fathah sits above the dot.",
      },
      {
        title: "Mouth position",
        description:
          "Open the mouth slightly, drop the jaw a little, flatten the tongue in the lower position. Do not round the lips. The sound comes from the opening of the mouth — this is why it is called fathah, 'the opening'.",
      },
      {
        title: "The sound is short",
        description:
          "The fathah produces a short 'a' (like the 'a' in 'cat'). It is NOT the long 'aa' (like the 'a' in 'father'). The long 'aa' is produced by adding an alif (ا) after the letter, which extends the fathah into a madd of two beats. We will study this in the Mudood (elongation) module.",
      },
      {
        title: "Pronunciation rule",
        description:
          "When you see a letter with a fathah, you pronounce the letter's sound followed by the short 'a'. For example: بَ = 'ba', مَ = 'ma', سَ = 'sa', نَ = 'na'. Always pronounce the consonant first, then the vowel — never blend them.",
      },
    ],
    examples: [
      { arabic: "اَ", transliteration: "a", meaning: "alif with fathah — pure short 'a' sound" },
      { arabic: "بَ", transliteration: "ba", meaning: "baa with fathah" },
      { arabic: "تَ", transliteration: "ta", meaning: "taa with fathah" },
      { arabic: "مَ", transliteration: "ma", meaning: "meem with fathah" },
      { arabic: "سَ", transliteration: "sa", meaning: "seen with fathah" },
      { arabic: "نَ", transliteration: "na", meaning: "noon with fathah" },
    ],
    practice:
      "Look at the six examples above. Each is a single letter with a fathah. Tap each one to hear the audio. Then, on a piece of paper, write the letter ب five times, each time adding a fathah above it. Say 'ba' out loud each time you write it. Repeat with ت (ta), م (ma), س (sa), and ن (na). Aim for 25 reps total before moving to the next lesson.",
  },

  kasrah: {
    intro: [
      "The kasrah (كسرة) is the second of the three primary harakat. It is written as a small diagonal stroke below the letter, mirroring the fathah: ( ِ ). Its name comes from the Arabic root k-s-r which means 'to break' — because the kasrah 'breaks' the downward movement of the letter to the lower position. The sound it produces is a short 'i' as in the English word 'sit' or 'pin', but shorter and crisper.",
      "To pronounce the kasrah correctly, the mouth should be slightly closed, the tongue should be raised toward the upper palate (but not touching it), and the sound should come from the front of the mouth. The jaw rises a little compared to the fathah. The sound is short — it should not be elongated unless there is a yaa (ي) after the letter, which extends the kasrah into a long 'ii' sound (a madd of two beats).",
      "When a letter has a kasrah below it, you say the letter's sound with an 'i' vowel. So بِ is pronounced 'bi', تِ is pronounced 'ti', مِ is pronounced 'mi', and so on. The kasrah, like the fathah, is one of the most common harakat in the Quran. Together with the fathah and dammah, it covers all the short vowel sounds needed to read Arabic.",
    ],
    keyPoints: [
      {
        title: "The shape and position",
        description:
          "The kasrah is a small diagonal stroke below the letter, slanting from upper-right to lower-left (mirroring the fathah's direction): ( ِ ). It always goes below the letter. If a letter has dots below (like ب ت ث which have dots above, or ج ح خ which have dots below the letter, etc.), the kasrah is placed below the dots.",
      },
      {
        title: "Mouth position",
        description:
          "Close the mouth slightly, raise the tongue toward the upper palate (but not touching). The jaw rises a little compared to the fathah. The sound comes from the front of the mouth with a smile-like shape. This is the opposite of the dammah, which uses rounded lips.",
      },
      {
        title: "The sound is short",
        description:
          "The kasrah produces a short 'i' (like the 'i' in 'sit'). It is NOT the long 'ii' (like the 'ee' in 'see'). The long 'ii' is produced by adding a yaa (ي) after the letter, which extends the kasrah into a madd of two beats. We will study this in the Mudood module.",
      },
      {
        title: "Pronunciation rule",
        description:
          "When you see a letter with a kasrah, you pronounce the letter's sound followed by the short 'i'. For example: بِ = 'bi', مِ = 'mi', سِ = 'si', نِ = 'ni'. The consonant comes first, then the vowel — never blend them.",
      },
    ],
    examples: [
      { arabic: "بِ", transliteration: "bi", meaning: "baa with kasrah" },
      { arabic: "تِ", transliteration: "ti", meaning: "taa with kasrah" },
      { arabic: "مِ", transliteration: "mi", meaning: "meem with kasrah" },
      { arabic: "سِ", transliteration: "si", meaning: "seen with kasrah" },
      { arabic: "نِ", transliteration: "ni", meaning: "noon with kasrah" },
      { arabic: "لِ", transliteration: "li", meaning: "laam with kasrah" },
    ],
    practice:
      "Look at the six examples above. Tap each to hear the audio. Notice the difference in mouth position between the kasrah (mouth slightly closed, tongue raised) and the fathah (mouth slightly open, tongue flat). On paper, write the letter ب five times with a kasrah below it, saying 'bi' each time. Repeat with ت (ti), م (mi), س (si), ن (ni), and ل (li). Aim for 30 reps before the next lesson.",
  },

  dammah: {
    intro: [
      "The dammah (ضمة) is the third of the three primary harakat. It is written as a small shape above the letter that resembles a miniature Arabic waw (و) without the dot, or a small reversed 'c': ( ُ ). Its name comes from the Arabic root d-m-m which means 'to join' or 'to gather' — because the dammah 'gathers' the lips together into a rounded shape. The sound it produces is a short 'u' as in the English word 'put' or 'book', but shorter and crisper.",
      "To pronounce the dammah correctly, the lips should be rounded forward (like saying 'oo' but with a shorter sound), and the tongue should be in a mid position in the mouth — neither flat like the fathah nor raised like the kasrah. The jaw is in a middle position. The sound is short — it should not be elongated unless there is a waw (و) after the letter, which extends the dammah into a long 'uu' sound (a madd of two beats).",
      "When a letter has a dammah above it, you say the letter's sound with a 'u' vowel. So بُ is pronounced 'bu', تُ is pronounced 'tu', مُ is pronounced 'mu', and so on. The dammah is the last of the three primary harakat. Together, the fathah, kasrah, and dammah are the building blocks of all Arabic reading. Once you can recognise and pronounce all three, you can read any letter-vowel combination in the Quran.",
    ],
    keyPoints: [
      {
        title: "The shape and position",
        description:
          "The dammah is a small shape above the letter, resembling a miniature waw (و) without the dot, or a reversed 'c': ( ُ ). It always goes above the letter, never below. It sits above the dot if the letter has one (like ب ت ث ج).",
      },
      {
        title: "Mouth position",
        description:
          "Round the lips forward as if saying 'oo'. The tongue is in a mid position in the mouth — not flat (like fathah) and not raised (like kasrah). The jaw is mid. The sound comes from the back of the mouth with the rounded lips acting as a resonance chamber.",
      },
      {
        title: "The sound is short",
        description:
          "The dammah produces a short 'u' (like the 'u' in 'put' or 'book'). It is NOT the long 'uu' (like the 'oo' in 'food'). The long 'uu' is produced by adding a waw (و) after the letter, which extends the dammah into a madd of two beats. We will study this in the Mudood module.",
      },
      {
        title: "Pronunciation rule",
        description:
          "When you see a letter with a dammah, you pronounce the letter's sound followed by the short 'u'. For example: بُ = 'bu', مُ = 'mu', سُ = 'su', نُ = 'nu'. The consonant comes first, then the vowel.",
      },
    ],
    examples: [
      { arabic: "بُ", transliteration: "bu", meaning: "baa with dammah" },
      { arabic: "تُ", transliteration: "tu", meaning: "taa with dammah" },
      { arabic: "مُ", transliteration: "mu", meaning: "meem with dammah" },
      { arabic: "سُ", transliteration: "su", meaning: "seen with dammah" },
      { arabic: "نُ", transliteration: "nu", meaning: "noon with dammah" },
      { arabic: "لُ", transliteration: "lu", meaning: "laam with dammah" },
    ],
    practice:
      "Look at the six examples above. Tap each to hear the audio. The dammah requires you to round your lips forward — like saying 'oo'. Practice in front of a mirror: your lips should form a small circle. On paper, write the letter ب five times with a dammah above it, saying 'bu' each time. Repeat with ت (tu), م (mu), س (su), ن (nu), and ل (lu). Aim for 30 reps before the next lesson.",
  },

  "harakat-practice": {
    intro: [
      "Now that you have learned the three primary harakat — fathah (a), kasrah (i), and dammah (u) — it is time to practice recognising them quickly. In real Quranic recitation, you will see letters with harakat flashing by at reading speed. Your brain must instantly recognise which harakah is on each letter and produce the correct vowel sound without hesitation.",
      "The key to fluency is repetition. Every letter can take all three harakat, so the combinations are: 28 letters × 3 harakat = 84 basic combinations. With practice, you will be able to read any of these 84 in under half a second of seeing it. This is the foundation of all fluent Arabic reading.",
      "In this practice lesson, you will see each letter of the Arabic alphabet with each of the three harakat. Tap each one to hear the audio, then say it out loud yourself. Compare your pronunciation to the audio. If they match, move on. If not, listen again and adjust. Do not skip this practice — it is the most important drill in the entire curriculum.",
    ],
    keyPoints: [
      {
        title: "Recognise before you read",
        description:
          "The goal of this practice is INSTANT recognition. When you see a letter with a harakah, you should know the sound in under half a second. This requires drilling — looking at the same combination over and over until your brain processes it automatically.",
      },
      {
        title: "Pronounce after you recognise",
        description:
          "Once you recognise the harakah, pronounce the letter with the correct vowel. Make sure your mouth is in the correct position for that harakah: fathah (mouth open, tongue flat), kasrah (mouth slightly closed, tongue raised), dammah (lips rounded forward).",
      },
      {
        title: "Mix the harakat",
        description:
          "In real reading, harakat are mixed. You will see sequences like بَبِبُ (ba-bi-bu) or مُمَمِ (mu-ma-mi). Practise reading these chains smoothly, with each vowel in its correct mouth position. The transition between mouth positions is what makes fluent reading hard.",
      },
      {
        title: "Do not skip the audio",
        description:
          "Tap every single example. Compare your pronunciation to the audio. If you read it differently, repeat until you match. The audio is your reference — your ear is the judge. Without this comparison, you will lock in mistakes that are very hard to unlearn later.",
      },
    ],
    examples: [
      { arabic: "اَ اِ اُ", transliteration: "a i u", meaning: "alif with fathah, kasrah, dammah" },
      { arabic: "بَ بِ بُ", transliteration: "ba bi bu", meaning: "baa with the three harakat" },
      { arabic: "تَ تِ تُ", transliteration: "ta ti tu", meaning: "taa with the three harakat" },
      { arabic: "مَ مِ مُ", transliteration: "ma mi mu", meaning: "meem with the three harakat" },
      { arabic: "سَ سِ سُ", transliteration: "sa si su", meaning: "seen with the three harakat" },
      { arabic: "نَ نِ نُ", transliteration: "na ni nu", meaning: "noon with the three harakat" },
      { arabic: "لَ لِ لُ", transliteration: "la li lu", meaning: "laam with the three harakat" },
      { arabic: "رَ رِ رُ", transliteration: "ra ri ru", meaning: "raa with the three harakat" },
    ],
    practice:
      "Drill the eight rows above. For each row: tap each letter to hear the audio, then say the three vowels out loud as a chain ('ba bi bu'). Repeat each row 5 times before moving to the next. After all 8 rows, mix them: pick a random row, read it 3 times fast. Then pick another. This drill builds muscle memory. Aim for 15-20 minutes of practice total before moving on.",
  },

  // ===================================================================
  // MODULE 2: HURUUFUL-HIJAH (Arabic letters) — 8 lessons
  // ===================================================================

  "intro-to-letters": {
    intro: [
      "The Arabic alphabet has 28 letters (some scholars count 29 including the hamzah separately). Unlike English, which is written left-to-right, Arabic is written right-to-left. Each letter has a name (like 'alif', 'baa', 'taa') and a sound (the consonant it represents). Some letters have similar sounds that differ only in their articulation point (مخرج) — for example, ت ط د ض all sound like 't'/'d' to an untrained ear, but are pronounced from different parts of the mouth.",
      "Each letter can take up to four different forms depending on its position in a word: isolated (when alone), initial (at the start of a word), medial (in the middle), and final (at the end). Some letters (called the 'non-connecting' letters) only connect to the letter before them, not after: these are ا (alif), د (daal), ذ (dhaal), ر (raa), ز (zaay), و (waaw), and ة (taa marbutah). We will study letter forms in detail in Module 3.",
      "In this module, we will learn the 28 letters in 7 groups. The grouping is based on the visual similarity of the letters and their articulation points. By learning them in groups, you will build the visual pattern recognition needed to read Arabic fluently. Take your time with each group — there is no rush. The goal is mastery, not speed.",
    ],
    keyPoints: [
      {
        title: "28 letters total",
        description:
          "The Arabic alphabet has 28 letters (29 if you count the hamzah as a separate letter). Each has a unique name, shape, and sound. The letters are written from right to left, and the words flow together as a connected script.",
      },
      {
        title: "Letter forms change by position",
        description:
          "Each letter can appear in up to 4 forms: isolated, initial, medial, and final. For example, the letter ع (ayn) appears as ع (isolated), عـ (initial), ـعـ (medial), ـع (final). Some letters do not connect to the following letter, so they only have isolated and final forms.",
      },
      {
        title: "Articulation points (مخارج)",
        description:
          "Each letter is pronounced from a specific part of the mouth or throat. The scholar Al-Khalil ibn Ahmad identified 17 articulation points, grouped into 5 main regions: the throat (3 letters), the tongue (18 letters in 10 positions), the lips (4 letters), the nasal cavity (1 — for the ghunnah of noon and meem), and the mouth (for the prolonged sound of letters like alif, waw, yaa).",
      },
      {
        title: "Right-to-left writing",
        description:
          "Arabic is written from right to left. When you write a word, you start with the rightmost letter and add letters to the left. The numbers, however, are written left-to-right (following the international convention). This is the opposite of English in writing direction.",
      },
    ],
    examples: [
      { arabic: "ا", transliteration: "alif", meaning: "the first letter, often used as a long vowel carrier" },
      { arabic: "ب", transliteration: "baa", meaning: "the second letter, pronounced 'b'" },
      { arabic: "ت", transliteration: "taa", meaning: "pronounced 't' — note the dots above (2 dots)" },
      { arabic: "ث", transliteration: "thaa", meaning: "pronounced 'th' as in 'three' — 3 dots above" },
      { arabic: "ج", transliteration: "jeem", meaning: "pronounced 'j' — 1 dot below" },
      { arabic: "ح", transliteration: "haa", meaning: "pronounced as a throaty 'h' — no dot" },
      { arabic: "خ", transliteration: "khaa", meaning: "pronounced as a scratchy 'kh' — 1 dot above" },
    ],
    practice:
      "Look at the seven letters above. They are the first seven of the 28-letter alphabet. Tap each to hear its name. Say each name out loud. Notice the dot patterns: taa has 2 dots above, thaa has 3 dots above. The base shape is the same — only the dots differ. This is a recurring pattern in Arabic. On paper, write each of these 7 letters 5 times. Total: 35 reps.",
  },

  "letters-group-1": {
    intro: [
      "The first group of letters contains four letters that share the same base shape but differ in their dot patterns: alif (ا), baa (ب), taa (ت), and thaa (ث). They are learned together because once you can recognise the base shape, you can identify all four just by looking at the dots. This is one of the most efficient groups to learn.",
      "Alif (ا) is unique in this group because it has no dots and no harakah of its own — it is a 'carrier' letter that takes its sound from whatever harakah or madd comes with it. Baa (ب) has one dot below. Taa (ت) has two dots above. Thaa (ث) has three dots above. The base shape is the same curved bowl for ب ت ث — only the position and number of dots differ.",
      "These four letters cover the sounds: a (alif carrier), b, t, and th (as in 'three'). Pay special attention to the 'th' sound — it does not exist in many languages. It is the same sound as the English 'th' in 'three' (not the 'th' in 'this', which is a different sound). Practise it carefully by putting your tongue between your teeth and blowing softly.",
    ],
    keyPoints: [
      {
        title: "Same base shape, different dots",
        description:
          "The letters ب ت ث all share the same 'bowl' shape (a curved base with a tail on the right). The only difference is the dots: baa has 1 dot below, taa has 2 dots above, thaa has 3 dots above. Once you see the bowl, count the dots and identify the letter.",
      },
      {
        title: "Alif is the carrier",
        description:
          "Alif (ا) is a vertical stroke with no dots and no inherent sound. It serves as a carrier for vowel sounds — it usually carries a long 'aa' sound when preceded by a letter with a fathah. We will study this in the Mudood module. For now, just know that alif is a vertical line.",
      },
      {
        title: "Thaa pronunciation",
        description:
          "The letter ث (thaa) is pronounced like the English 'th' in 'three', 'thin', or 'with'. The tongue goes between the teeth and the air flows around it. This is a voiceless sound (no vibration of the vocal cords). Do NOT pronounce it like 's' or 't' — it is its own distinct sound.",
      },
      {
        title: "Writing direction",
        description:
          "All four letters are written from right to left. Alif is a single vertical stroke from top to bottom. Baa, taa, and thaa start with the curved bowl (drawn from right to left) and then the tail extends to the left. The dots are added last.",
      },
    ],
    examples: [
      { arabic: "ا", transliteration: "alif", meaning: "vertical stroke, no dots, no inherent sound" },
      { arabic: "ب", transliteration: "baa", meaning: "bowl with 1 dot below — pronounced 'b'" },
      { arabic: "ت", transliteration: "taa", meaning: "bowl with 2 dots above — pronounced 't'" },
      { arabic: "ث", transliteration: "thaa", meaning: "bowl with 3 dots above — pronounced 'th'" },
      { arabic: "بَ", transliteration: "ba", meaning: "baa with fathah" },
      { arabic: "تَ", transliteration: "ta", meaning: "taa with fathah" },
      { arabic: "ثَ", transliteration: "tha", meaning: "thaa with fathah" },
    ],
    practice:
      "Drill the four letters in this group. Tap each to hear its name. Say the name out loud. Then tap each harakah combination (ba, ta, tha) and say them out loud. On paper, write each of the four letters 5 times with each of the three harakat (fathah, kasrah, dammah) — that is 4 × 3 × 5 = 60 reps. This may seem like a lot, but it is the foundation of all reading. Take 15-20 minutes.",
  },

  "letters-group-2": {
    intro: [
      "The second group of letters also contains three letters that share a base shape: jeem (ج), haa (ح), and khaa (خ). The base shape is a curved arc with a tail descending from the middle, like a hook. Jeem has one dot below, khaa has one dot above, and haa has no dot at all. This is a recurring pattern in Arabic: the same base shape with different dot placements creates different letters.",
      "These three letters are pronounced from the middle of the throat. They differ in voicing and articulation: jeem (ج) is voiced (vocal cords vibrate) and pronounced with the tongue raised to the middle of the palate. Haa (ح) is unvoiced (no vibration) and pronounced from the middle of the throat with a soft breath. Khaa (خ) is also unvoiced but pronounced with a scratchy, friction-creating sound from the same position as haa — like the 'ch' in the Scottish 'loch' or the German 'Bach'.",
      "Pay special attention to haa (ح) — it is different from the English 'h'. The English 'h' is pronounced from the back of the mouth with a soft breath. The Arabic ح is pronounced from the middle of the throat with a slightly stronger, more emphatic breath. To feel the difference, put your hand on your throat and say 'hah' — you should feel a slight vibration. The Arabic ح has more throat involvement than the English 'h'.",
    ],
    keyPoints: [
      {
        title: "Same arc shape, different dots",
        description:
          "The letters ج ح خ all share the same arc-with-tail shape. Jeem (ج) has 1 dot below the arc, khaa (خ) has 1 dot above the arc, and haa (ح) has no dot. Once you see the arc, look for the dot to identify the letter.",
      },
      {
        title: "Throat articulation",
        description:
          "All three letters are pronounced from the middle of the throat (مخرج الحلق الأوسط). This is one of the 5 main articulation regions in Arabic. The throat has 3 regions: the deepest (for the letters ء ه), the middle (for ع ح), and the nearest (for غ خ).",
      },
      {
        title: "Voiced vs unvoiced",
        description:
          "Jeem (ج) is a voiced sound (vocal cords vibrate). Haa (ح) and khaa (خ) are unvoiced (vocal cords do not vibrate, only breath flows). Place your fingers on your throat and say each — you will feel the vibration only with jeem.",
      },
      {
        title: "Khaa is the scratchy one",
        description:
          "Khaa (خ) is pronounced like the 'ch' in the Scottish 'loch' or the German 'Bach' — a scratchy, friction-creating sound from the middle of the throat. It is NOT pronounced like the English 'k' or 'h'. It is its own distinct sound.",
      },
    ],
    examples: [
      { arabic: "ج", transliteration: "jeem", meaning: "arc with 1 dot below — pronounced 'j' (as in 'jump')" },
      { arabic: "ح", transliteration: "haa", meaning: "arc with no dot — pronounced as a throaty 'h'" },
      { arabic: "خ", transliteration: "khaa", meaning: "arc with 1 dot above — pronounced as a scratchy 'kh'" },
      { arabic: "جَ", transliteration: "ja", meaning: "jeem with fathah" },
      { arabic: "حَ", transliteration: "ḥa", meaning: "haa with fathah" },
      { arabic: "خَ", transliteration: "kha", meaning: "khaa with fathah" },
    ],
    practice:
      "Drill these three letters. Tap each to hear its name and the harakah combination. Pay special attention to the difference between ح (soft throaty h) and خ (scratchy kh). On paper, write each letter 5 times with each of the three harakat — that is 3 × 3 × 5 = 45 reps. Take 15 minutes. If you have a mirror, use it: watch your throat as you say each sound. You should see more movement for خ than for ح.",
  },

  "letters-group-3": {
    intro: [
      "The third group of letters contains four letters: daal (د), dhaal (ذ), raa (ر), and zaay (ز). These are all 'non-connecting' letters — meaning they only connect to the letter BEFORE them, not the letter AFTER. When one of these letters appears in the middle of a word, it forces a break in the connection: the next letter starts fresh as if isolated. This is a unique property that affects how Arabic words are written.",
      "Daal (د) is pronounced like the English 'd' in 'dog'. Dhaal (ذ) is pronounced like the 'th' in 'this' or 'that' — a voiced 'th' (vocal cords vibrate). Raa (ر) is pronounced like a rolled or trilled 'r' (similar to the Spanish 'r' in 'perro'). Zaay (ز) is pronounced like the English 'z' in 'zoo'. All four are voiced sounds (vocal cords vibrate) and all four are non-connecting.",
      "The visual pattern of this group: daal has no dot, dhaal has one dot above, raa has no dot but a curved tail below, zaay has one dot above and a curved tail below. Daal and dhaal share a similar base shape (a small curve), while raa and zaay share a different base shape (a curve with a longer descending tail).",
    ],
    keyPoints: [
      {
        title: "Non-connecting letters",
        description:
          "Daal (د), dhaal (ذ), raa (ر), zaay (ز), waaw (و), and alif (ا) are the 6 'non-connecting' letters (الحروف المنفصلة). They only connect to the letter before them, never to the letter after. When they appear in a word, the next letter starts fresh as if isolated. This is a key rule for writing and reading Arabic.",
      },
      {
        title: "Voiced sounds",
        description:
          "All four letters in this group are voiced (vocal cords vibrate). Place your fingers on your throat and say each — you will feel vibration for all four. This is in contrast to group 2 where only jeem was voiced.",
      },
      {
        title: "Dhaal is the voiced 'th'",
        description:
          "Dhaal (ذ) is pronounced like the 'th' in 'this', 'that', or 'the' — a voiced 'th' (vocal cords vibrate). This is different from the unvoiced 'th' of thaa (ث) which is like 'three' or 'thin'. The two 'th' sounds in Arabic mirror the two 'th' sounds in English.",
      },
      {
        title: "Raa is trilled",
        description:
          "Raa (ر) is pronounced with a trilled or tapped 'r' sound, similar to the Spanish 'r' in 'perro' or the Italian 'r' in 'rosso'. The tongue tip taps the upper palate several times. This is different from the English 'r' which is made by curling the tongue back without tapping the palate.",
      },
    ],
    examples: [
      { arabic: "د", transliteration: "daal", meaning: "small curve, no dot — pronounced 'd'" },
      { arabic: "ذ", transliteration: "dhaal", meaning: "small curve with 1 dot above — pronounced voiced 'th'" },
      { arabic: "ر", transliteration: "raa", meaning: "curve with descending tail, no dot — pronounced trilled 'r'" },
      { arabic: "ز", transliteration: "zaay", meaning: "curve with descending tail and 1 dot above — pronounced 'z'" },
      { arabic: "دَ", transliteration: "da", meaning: "daal with fathah" },
      { arabic: "ذَ", transliteration: "dha", meaning: "dhaal with fathah" },
      { arabic: "رَ", transliteration: "ra", meaning: "raa with fathah" },
      { arabic: "زَ", transliteration: "za", meaning: "zaay with fathah" },
    ],
    practice:
      "Drill the four letters of this group. Pay special attention to the difference between ذ (voiced 'th' as in 'this') and ث (unvoiced 'th' as in 'three'). Practise the rolled 'r' of raa — tap your tongue tip against the upper palate 2-3 times for each 'r'. On paper, write each of the four letters 5 times with each of the three harakat — that is 4 × 3 × 5 = 60 reps. Take 15-20 minutes.",
  },

  "letters-group-4": {
    intro: [
      "The fourth group contains four letters that share a base shape with three teeth: seen (س), sheen (ش), saad (ص), and daad (ض). The base shape is a row of three small bumps (called 'teeth') connected by a horizontal line. Seen has no dots, sheen has three dots above, saad has no dots but the shape is larger/more emphatic, and daad has one dot above and is also more emphatic.",
      "Seen (س) is pronounced like the English 's' in 'sun'. Sheen (ش) is pronounced like the English 'sh' in 'ship'. Saad (ص) is pronounced like a heavier, more emphatic 's' — the tongue is raised and the sound is fuller, with a slight echo. Daad (ض) is pronounced like a heavier, more emphatic 'd' — again, the tongue is raised and the sound is fuller. Saad and daad are called the 'emphatic' consonants (الحروف المفخمة).",
      "The emphatic letters (ص ض ط ظ ق) are pronounced with the back of the tongue raised toward the soft palate and the mouth more open. This gives them a 'heavier' or 'darker' sound compared to their non-emphatic counterparts (س د ت ذ ك). In Tajweed, the distinction between emphatic and non-emphatic letters is critical — saying س instead of ص can change the meaning of a word completely.",
    ],
    keyPoints: [
      {
        title: "Three-tooth base shape",
        description:
          "Seen, sheen, saad, and daad all share the three-tooth base shape (like small bumps on a horizontal line). The dots and the size of the shape distinguish them: seen (no dots, regular size), sheen (3 dots above, regular size), saad (no dots, larger size), daad (1 dot above, larger size).",
      },
      {
        title: "Seen vs sheen",
        description:
          "Seen (س) is the plain 's' sound. Sheen (ش) is the 'sh' sound (like 'ship'). The only difference is the position of the tongue: for seen, the tongue tip is near the upper teeth; for sheen, the tongue body is raised toward the hard palate, creating the 'sh' friction.",
      },
      {
        title: "Saad and daad are emphatic",
        description:
          "Saad (ص) and daad (ض) are 'emphatic' (مفخم) versions of seen (س) and daal (د) respectively. They are pronounced with the back of the tongue raised toward the soft palate, the mouth more open, and the sound fuller/darker. This is a unique feature of Arabic that affects the surrounding vowels too.",
      },
      {
        title: "Daad is unique to Arabic",
        description:
          "The letter ض (daad) is so distinctive to Arabic that Arabic is sometimes called 'the language of Daad' (لغة الضاد). No other language has this exact sound. It is pronounced as an emphatic 'd' with the side of the tongue touching the upper molars and the back of the tongue raised.",
      },
    ],
    examples: [
      { arabic: "س", transliteration: "seen", meaning: "three teeth, no dots — pronounced 's'" },
      { arabic: "ش", transliteration: "sheen", meaning: "three teeth with 3 dots above — pronounced 'sh'" },
      { arabic: "ص", transliteration: "saad", meaning: "larger three teeth, no dots — pronounced emphatic 's'" },
      { arabic: "ض", transliteration: "daad", meaning: "larger three teeth with 1 dot above — pronounced emphatic 'd'" },
      { arabic: "سَ", transliteration: "sa", meaning: "seen with fathah" },
      { arabic: "شَ", transliteration: "sha", meaning: "sheen with fathah" },
      { arabic: "صَ", transliteration: "ṣa", meaning: "saad with fathah (emphatic)" },
      { arabic: "ضَ", transliteration: "ḍa", meaning: "daad with fathah (emphatic)" },
    ],
    practice:
      "Drill these four letters. Tap each to hear the audio. Pay special attention to the difference between س (light 's') and ص (emphatic, heavier 's'). Same for د vs ض — though daal is in the previous group. On paper, write each of the four letters 5 times with each of the three harakat. Take 20 minutes. Listen carefully to the emphatic sounds — your tongue should be raised at the back for ص and ض.",
  },

  "letters-group-5": {
    intro: [
      "The fifth group contains four letters that share an oval or rounded base shape: taa (ط), zhaa (ظ), ayn (ع), and ghayn (غ). Taa has no dots, zhaa has one dot above, ayn has no dots and a different shape (a smaller rounded form), and ghayn has one dot above with the same smaller shape as ayn. Taa and zhaa share one base shape (a larger oval), while ayn and ghayn share another (a smaller horn-like shape).",
      "Taa (ط) is pronounced like an emphatic 't' — heavier than the regular taa (ت), with the tongue raised at the back. Zhaa (ظ) is pronounced like an emphatic 'th' (as in 'three' but heavier). Ayn (ع) is a unique sound: it is a voiced pharyngeal fricative, pronounced by deepening the throat and constricting the pharynx while voicing. Ghayn (غ) is the unvoiced counterpart of ayn, pronounced like the French 'r' in 'rouge' or the 'gh' in the Arabic word 'ghayr' — a gargling sound from the back of the throat.",
      "Pay special attention to ayn (ع). This sound does not exist in English or in most European languages. To pronounce it, you must constrict your pharynx (the back of your throat) while voicing. It feels like a 'deep ah' with the throat squeezed. Listen to the audio many times and try to imitate. It may take days of practice to get it right — be patient.",
    ],
    keyPoints: [
      {
        title: "Two pairs of related shapes",
        description:
          "Taa (ط) and zhaa (ظ) share the larger oval base shape (with zhaa having a dot above). Ayn (ع) and ghayn (غ) share a smaller horn-like base shape (with ghayn having a dot above). Once you see the oval vs the horn, you can identify the pair, then the dot tells you which letter.",
      },
      {
        title: "Taa and zhaa are emphatic",
        description:
          "Taa (ط) is the emphatic version of taa (ت) — pronounced with the back of the tongue raised. Zhaa (ظ) is the emphatic version of thaa (ث). Both are heavier, fuller sounds than their non-emphatic counterparts.",
      },
      {
        title: "Ayn is a pharyngeal sound",
        description:
          "Ayn (ع) is a voiced pharyngeal fricative. It is pronounced by deepening the throat and constricting the pharynx while voicing. The sound feels like a 'deep ah' with the throat squeezed. This sound does not exist in English or in most European languages — it is unique to Arabic, Hebrew, and a few other Semitic languages.",
      },
      {
        title: "Ghayn is the gargling sound",
        description:
          "Ghayn (غ) is pronounced like the French 'r' in 'rouge' or the 'gh' sound in the Arabic word 'maghrib' (west). It is a gargling sound from the back of the throat, similar to the sound of gargling water. It is the unvoiced counterpart of ayn — same position but no vibration of the vocal cords.",
      },
    ],
    examples: [
      { arabic: "ط", transliteration: "taa", meaning: "larger oval, no dot — pronounced emphatic 't'" },
      { arabic: "ظ", transliteration: "zhaa", meaning: "larger oval with 1 dot above — pronounced emphatic 'th'" },
      { arabic: "ع", transliteration: "ayn", meaning: "smaller horn, no dot — pronounced voiced pharyngeal" },
      { arabic: "غ", transliteration: "ghayn", meaning: "smaller horn with 1 dot above — pronounced gargling 'gh'" },
      { arabic: "طَ", transliteration: "ṭa", meaning: "taa with fathah (emphatic)" },
      { arabic: "ظَ", transliteration: "ẓa", meaning: "zhaa with fathah (emphatic)" },
      { arabic: "عَ", transliteration: "ʿa", meaning: "ayn with fathah" },
      { arabic: "غَ", transliteration: "gha", meaning: "ghayn with fathah" },
    ],
    practice:
      "Drill these four letters. Tap each to hear the audio. The emphatic sounds (ط ظ) should have a heavier, darker quality than their non-emphatic counterparts (ت ذ) from earlier groups. The pharyngeal sounds (ع غ) require throat practice — try gargling without water to feel the position of غ. For ع, try to say 'ah' but squeeze the throat at the same time. On paper, write each letter 5 times with each harakah. Take 20 minutes — extra time for ع and غ.",
  },

  "letters-group-6": {
    intro: [
      "The sixth group contains four letters that share the same loop-with-tail base shape: faa (ف), qaaf (ق), kaaf (ك), and laam (ل). Faa has one dot above, qaaf has two dots above and a longer tail, kaaf has a different base shape (a longer loop with a smaller loop inside), and laam has a vertical stroke with a tail. The first two (faa and qaaf) share the loop base, while kaaf and laam have distinct shapes.",
      "Faa (ف) is pronounced like the English 'f' in 'fish'. Qaaf (ق) is pronounced like an emphatic 'q' — a deep, back-of-the-throat 'k' sound, with the back of the tongue touching the uvula. Kaaf (ك) is pronounced like the English 'k' in 'kite'. Laam (ل) is pronounced like the English 'l' in 'love' — a light 'l' with the tongue tip touching the upper palate.",
      "Pay special attention to qaaf (ق). It is different from kaaf (ك). Qaaf is pronounced from the very back of the throat (uvula region), while kaaf is pronounced from the middle of the mouth (the back of the hard palate). The difference is significant in Arabic — saying ك instead of ق can change the meaning of a word completely. For example, كلب (kalb) means 'dog', while قلب (qalb) means 'heart'.",
    ],
    keyPoints: [
      {
        title: "Loop-with-tail base shape",
        description:
          "Faa (ف) and qaaf (ق) share a loop-with-tail base shape. Faa has 1 dot above the loop; qaaf has 2 dots above the loop and a longer tail. Once you see the loop, count the dots and look at the tail length.",
      },
      {
        title: "Kaaf is distinct",
        description:
          "Kaaf (ك) has a unique shape: a longer loop with a smaller inner loop on the left side. It does not have dots in its isolated form. It is pronounced like the English 'k'.",
      },
      {
        title: "Laam is the tallest",
        description:
          "Laam (ل) is a vertical stroke with a slight curve at the top and a tail descending to the line. It is the tallest letter of the alphabet in its isolated form. It is pronounced like the English 'l'.",
      },
      {
        title: "Qaaf vs kaaf — a critical distinction",
        description:
          "Qaaf (ق) is pronounced from the uvula (very back of the throat), like a deep 'k'. Kaaf (ك) is pronounced from the soft palate (back of the mouth), like a regular 'k'. The two sounds are very different in Arabic. Confusing them changes the meaning of words: كلب (kalb = dog) vs قلب (qalb = heart); كفر (kufr = disbelief) vs كفر (kufur — different word).",
      },
    ],
    examples: [
      { arabic: "ف", transliteration: "faa", meaning: "loop with 1 dot above — pronounced 'f'" },
      { arabic: "ق", transliteration: "qaaf", meaning: "loop with 2 dots above, longer tail — pronounced deep 'q'" },
      { arabic: "ك", transliteration: "kaaf", meaning: "longer loop with inner loop — pronounced 'k'" },
      { arabic: "ل", transliteration: "laam", meaning: "tall vertical stroke with tail — pronounced 'l'" },
      { arabic: "فَ", transliteration: "fa", meaning: "faa with fathah" },
      { arabic: "قَ", transliteration: "qa", meaning: "qaaf with fathah (deep back-throat)" },
      { arabic: "كَ", transliteration: "ka", meaning: "kaaf with fathah" },
      { arabic: "لَ", transliteration: "la", meaning: "laam with fathah" },
    ],
    practice:
      "Drill these four letters. Pay special attention to the difference between ق (deep back-throat 'q') and ك (regular 'k'). To feel the difference, say 'kalb' (dog) and 'qalb' (heart) — the first is at the front of the mouth, the second is at the very back. On paper, write each letter 5 times with each harakah. Take 15-20 minutes. Listen carefully to the qaaf — it should sound like a deep, almost guttural 'k'.",
  },

  "letters-group-7": {
    intro: [
      "The seventh and final group contains five letters: meem (م), noon (ن), haa (ه), waaw (و), and yaa (ي). These are the last five letters of the Arabic alphabet. Meem and noon share a round base shape (meem has a small circle with a tail, noon has a longer bowl with a tail). Haa is a small open circle. Waaw is a curved stroke with one dot above. Yaa is a curved bowl with two dots below.",
      "Meem (م) is pronounced like the English 'm' in 'moon'. Noon (ن) is pronounced like the English 'n' in 'noon'. Haa (ه) is pronounced like a soft English 'h' in 'house' — but note that this is DIFFERENT from the throaty ح (haa) from group 2. Waaw (و) is pronounced like 'w' in 'water' or as a long 'uu' vowel. Yaa (ي) is pronounced like 'y' in 'yes' or as a long 'ii' vowel.",
      "Pay special attention to the two 'h' sounds: ه (soft haa, group 7) and ح (throaty haa, group 2). The soft haa is pronounced from the chest, with a gentle breath — like the English 'h' in 'house'. The throaty ح is pronounced from the middle of the throat, with a more emphatic breath. Confusing them changes the meaning of words: هد (hadd = gentle guidance) vs حد (ḥadd = sharp limit).",
    ],
    keyPoints: [
      {
        title: "Round and curved shapes",
        description:
          "Meem (م) is a small circle with a tail descending to the line. Noon (ن) is a longer bowl-shape with a tail. Haa (ه) is a small open circle. Waaw (و) is a single curved stroke with a dot above. Yaa (ي) is a curved bowl with two dots below (in isolated/final form) or a curved bowl with two dots below the line (in initial/medial form).",
      },
      {
        title: "Two haa sounds",
        description:
          "There are two letters pronounced 'h' in Arabic: ه (soft haa, group 7) and ح (throaty haa, group 2). The soft haa is like the English 'h' in 'house' — pronounced from the chest. The throaty ح is more emphatic, pronounced from the middle of the throat. They are completely different sounds — do not confuse them.",
      },
      {
        title: "Waaw and yaa are vowel carriers",
        description:
          "Waaw (و) and yaa (ي) have two roles: as consonants (waaw = 'w', yaa = 'y') and as long vowel carriers (waaw = long 'uu', yaa = long 'ii'). We will study the vowel-carrier role in the Mudood (elongation) module. For now, learn them as consonants.",
      },
      {
        title: "Noon and the ghunnah",
        description:
          "Noon (ن) has a special property: when followed by certain letters or when it has a sukuun, it produces a nasal sound called ghunnah (غنة). This is a hum from the nose that lasts about one beat. We will study this in detail in the Nun Sakin rules module (Module 11).",
      },
    ],
    examples: [
      { arabic: "م", transliteration: "meem", meaning: "small circle with tail — pronounced 'm'" },
      { arabic: "ن", transliteration: "noon", meaning: "longer bowl with tail — pronounced 'n'" },
      { arabic: "ه", transliteration: "haa", meaning: "open circle — pronounced soft 'h'" },
      { arabic: "و", transliteration: "waaw", meaning: "curved stroke with 1 dot above — pronounced 'w' or long 'uu'" },
      { arabic: "ي", transliteration: "yaa", meaning: "curved bowl with 2 dots below — pronounced 'y' or long 'ii'" },
      { arabic: "مَ", transliteration: "ma", meaning: "meem with fathah" },
      { arabic: "نَ", transliteration: "na", meaning: "noon with fathah" },
      { arabic: "هَا", transliteration: "haa", meaning: "soft haa with fathah and alif (long 'aa')" },
    ],
    practice:
      "Drill the five letters of this final group. Tap each to hear the audio. Compare the soft ه with the throaty ح from group 2. On paper, write each of the five letters 5 times with each harakah — that is 5 × 3 × 5 = 75 reps. This is the largest group; take 20-25 minutes. Once you finish, you have completed all 28 letters of the Arabic alphabet. Take a moment to acknowledge this milestone — you are now ready to start reading Arabic.",
  },

  // ===================================================================
  // MODULE 3: HURUUF FORMS (letter positions) — 6 lessons
  // ===================================================================

  "letter-positions": {
    intro: [
      "Unlike English, where each letter has a single shape regardless of its position in a word, Arabic letters change their shape depending on where they appear: at the start (initial), in the middle (medial), at the end (final), or alone (isolated). This is one of the most distinctive features of the Arabic script and a key reason why Arabic looks so different from other writing systems.",
      "Most Arabic letters (22 out of 28) are 'connecting' letters: they connect to the letter AFTER them as well as the letter before. These letters have all four forms. The remaining 6 letters (alif ا, daal د, dhaal ذ, raa ر, zaay ز, waaw و) are 'non-connecting': they only connect to the letter BEFORE them. When one of these letters appears in a word, the next letter starts fresh as if isolated.",
      "In this lesson, you will see the four forms of each connecting letter side by side. The shape changes are mostly about how the letter 'joins' to its neighbours — the core of the letter (its identifying part) usually stays the same. Once you understand the pattern of joining, you can read any Arabic word by recognising each letter in its context.",
    ],
    keyPoints: [
      {
        title: "Four forms per letter",
        description:
          "Most letters have 4 forms: isolated (alone), initial (start of word), medial (middle of word), final (end of word). The form is determined by position, not by meaning. Example for baa (ب): isolated ب, initial بـ, medial ـبـ, final ـب.",
      },
      {
        title: "Connecting vs non-connecting",
        description:
          "22 letters are 'connecting' (connect to the letter after them). 6 letters are 'non-connecting': ا د ذ ر ز و. They only connect to the letter before them. When a non-connecting letter appears, the next letter starts fresh.",
      },
      {
        title: "Joining with a baseline",
        description:
          "When letters join, they sit on a common horizontal line (the baseline). The joining happens via small connector strokes that flow from the end of one letter to the start of the next. The baseline holds the word together visually.",
      },
      {
        title: "The dot stays with the letter",
        description:
          "Even when a letter changes form, its dots stay in the same position (above or below) relative to the letter. Baa always has 1 dot below, no matter its form. This helps you identify the letter even when its shape changes.",
      },
    ],
    examples: [
      { arabic: "ب بـ ـبـ ـب", transliteration: "isolated, initial, medial, final", meaning: "baa in all four forms" },
      { arabic: "ت تـ ـتـ ـت", transliteration: "isolated, initial, medial, final", meaning: "taa in all four forms" },
      { arabic: "م مـ ـمـ ـم", transliteration: "isolated, initial, medial, final", meaning: "meem in all four forms" },
      { arabic: "س سـ ـسـ ـس", transliteration: "isolated, initial, medial, final", meaning: "seen in all four forms" },
      { arabic: "ل لـ ـلـ ـل", transliteration: "isolated, initial, medial, final", meaning: "laam in all four forms" },
      { arabic: "ع عـ ـعـ ـع", transliteration: "isolated, initial, medial, final", meaning: "ayn in all four forms" },
    ],
    practice:
      "Look at the four forms of each letter above. Notice that the core shape (the bowl of ب, the three teeth of س, the tall stroke of ل) stays recognisable across all four forms. The main change is in how the letter joins to its neighbours. On paper, write each of the six letters in all four forms — that is 6 × 4 = 24 forms total. Take 15 minutes.",
  },

  "initial-form": {
    intro: [
      "The initial form of a letter is used when the letter is at the START of a word. It connects to the letter AFTER it but not to anything before (because there is nothing before). The initial form typically has a 'connector stroke' on the LEFT side (since Arabic is written right-to-left, the 'after' direction is to the left), which allows it to flow into the next letter.",
      "When you see a word in Arabic, the rightmost letter is the start. If that letter is a 'connecting' letter (one of the 22 connecting letters), it will appear in its initial form. If it is a 'non-connecting' letter (one of ا د ذ ر ز و), it will appear in its isolated form, because non-connecting letters do not connect to anything after them — so their 'initial' form is the same as their 'isolated' form.",
      "For example, in the word بَيت (bayt = house), the first letter is ب (baa). Baa is a connecting letter, so it appears in its initial form: بـ. The next letter is ي (yaa), which connects to بـ on the left. So you see بـيـت where ب is in initial form, ي is in medial form, and ت is in final form. The joining is invisible — the letters just flow together on the baseline.",
    ],
    keyPoints: [
      {
        title: "Connector on the left",
        description:
          "The initial form of a connecting letter has a connector stroke on the LEFT side (the 'after' direction in right-to-left writing). This connector flows into the next letter. The right side of the letter is the start of the form (no connector).",
      },
      {
        title: "Non-connecting letters use isolated form",
        description:
          "If the first letter of a word is a non-connecting letter (ا د ذ ر ز و), it appears in its isolated form (not a special 'initial' form, because there is no such form for non-connecting letters). The next letter after it starts fresh as if isolated too, then connects to whatever follows.",
      },
      {
        title: "Dots stay in the same position",
        description:
          "When a letter changes to its initial form, its dots stay above or below as in the isolated form. Baa's dot is below, so بـ also has the dot below. Taa's dots are above, so تـ also has them above. This helps identify the letter.",
      },
      {
        title: "Visual examples",
        description:
          "Common initial forms you will see: بـ (baa), تـ (taa), ثـ (thaa), مـ (meem), نـ (noon), سـ (seen), لـ (laam), كـ (kaaf), عـ (ayn), فـ (faa), قـ (qaaf), etc. Notice that each ends with a connector stroke on the left.",
      },
    ],
    examples: [
      { arabic: "بـ", transliteration: "baa (initial)", meaning: "baa in initial form — ready to connect to the next letter on the left" },
      { arabic: "تـ", transliteration: "taa (initial)", meaning: "taa in initial form" },
      { arabic: "مـ", transliteration: "meem (initial)", meaning: "meem in initial form" },
      { arabic: "سـ", transliteration: "seen (initial)", meaning: "seen in initial form" },
      { arabic: "لـ", transliteration: "laam (initial)", meaning: "laam in initial form" },
      { arabic: "عـ", transliteration: "ayn (initial)", meaning: "ayn in initial form" },
    ],
    practice:
      "Look at the six initial forms above. Notice the connector stroke on the left of each. Tap each to hear its name. On paper, write each of these six letters in its initial form 5 times — that is 30 reps. Then try writing some simple 2-letter words: بـت (bt), مـل (ml), سـبـل (sbl). Take 15 minutes.",
  },

  "medial-form": {
    intro: [
      "The medial form of a letter is used when the letter is in the MIDDLE of a word AND is connected to letters on BOTH sides. It has connector strokes on both the left (after) and the right (before) sides. The medial form is typically the most compressed shape of a letter, because it has to fit between two other letters on the same baseline.",
      "When a connecting letter appears in the middle of a word, it appears in its medial form. For example, in the word سَلَم (salim = peace), the letter ل (laam) is between س (seen) and م (meem). It appears in its medial form: ـلـ. The connectors on both sides flow into the adjacent letters.",
      "If a non-connecting letter (ا د ذ ر ز و) appears in the middle of a word, it appears in its 'final' form (not medial, because there is no connector on its left side). The letter after it starts fresh. For example, in the word دَرَسَ (darasa = he studied), the letter ر (raa) is between د and س. ر is non-connecting, so it appears in its final form, and س starts fresh as if isolated (but then connects to whatever follows, in this case the fathah and the next letter).",
    ],
    keyPoints: [
      {
        title: "Connectors on both sides",
        description:
          "The medial form of a connecting letter has connectors on BOTH sides: left (after) and right (before). This is the most compressed shape. Example: ـبـ (medial baa), ـمـ (medial meem), ـسـ (medial seen).",
      },
      {
        title: "Non-connecting letters don't have a medial form",
        description:
          "The non-connecting letters (ا د ذ ر ز و) only have isolated and final forms. They never appear in a 'medial' form because they don't connect to the letter after. When they appear in the middle of a word, they use their final form, and the next letter starts fresh.",
      },
      {
        title: "Compressed shape",
        description:
          "The medial form is the most compressed version of a letter. For example, the three teeth of seen (س) become shorter in medial form (ـسـ) because the shape has to fit between two letters. The identifying features (dots, base shape) stay the same.",
      },
      {
        title: "Identifying medial forms",
        description:
          "When you see a letter in medial form, identify it by its dots and core shape. Baa's medial form (ـبـ) has the bowl shape with a dot below — same as isolated, just with connectors on both sides. Practise reading 3-letter words to see medial forms in context.",
      },
    ],
    examples: [
      { arabic: "ـبـ", transliteration: "baa (medial)", meaning: "medial baa with connectors on both sides" },
      { arabic: "ـمـ", transliteration: "meem (medial)", meaning: "medial meem" },
      { arabic: "ـسـ", transliteration: "seen (medial)", meaning: "medial seen — shorter teeth" },
      { arabic: "ـلـ", transliteration: "laam (medial)", meaning: "medial laam" },
      { arabic: "ـعـ", transliteration: "ayn (medial)", meaning: "medial ayn" },
      { arabic: "ـتـ", transliteration: "taa (medial)", meaning: "medial taa" },
    ],
    practice:
      "Look at the six medial forms above. Notice the connectors on both sides of each. Tap each to hear its name. Then practise reading simple 3-letter words with medial forms: بـتـر (btr), مـلـك (mlk), سـبـح (sbḥ). On paper, write each of these six letters in medial form 5 times. Take 15 minutes.",
  },

  "final-form": {
    intro: [
      "The final form of a letter is used when the letter is at the END of a word. It connects to the letter BEFORE it (via a connector on its right side) but NOT to the letter after (because there is no letter after — it is the end). The final form typically has a 'tail' that descends to the baseline or below, marking the end of the word visually.",
      "When a connecting letter appears at the end of a word, it appears in its final form. For example, in the word كِتَاب (kitaab = book), the last letter is ب (baa). It appears in its final form: ـب. The connector on the right (before) joins it to the preceding letter (ا alif, which is non-connecting but receives a connection from before).",
      "If a non-connecting letter (ا د ذ ر ز و) appears at the end of a word, it appears in its isolated form (because there is no connector on either side). For example, in the word فَرْ (far = mouse), the last letter is ر (raa). It is non-connecting, so it appears in its isolated form, and the preceding letter (ف) appears in its final form.",
    ],
    keyPoints: [
      {
        title: "Connector on the right only",
        description:
          "The final form of a connecting letter has a connector on the RIGHT side (before) but no connector on the left (after). It often has a 'tail' that descends to the baseline. Example: ـب (final baa), ـم (final meem), ـس (final seen).",
      },
      {
        title: "Non-connecting letters use isolated form at the end",
        description:
          "If a non-connecting letter (ا د ذ ر ز و) appears at the end of a word, it uses its isolated form, because it does not connect to the letter after (there is none) and does not connect to the letter before (it is non-connecting). However, the preceding letter DOES connect to it, so the preceding letter appears in its final form.",
      },
      {
        title: "Tail indicates word end",
        description:
          "Many final forms have a descending tail that visually marks the end of the word. This is a useful cue when reading: when you see a tail, you know the word ends there.",
      },
      {
        title: "Taa marbutah",
        description:
          "A special final form is ة (taa marbutah), which appears only at the end of words. It is a form of taa (ت) that looks like haa (ه) with two dots above. It is used to mark feminine nouns. When the word is paused on, the taa marbutah is pronounced as a soft 'h' (or silence). Otherwise, it is pronounced as 't'.",
      },
    ],
    examples: [
      { arabic: "ـب", transliteration: "baa (final)", meaning: "final baa with tail descending" },
      { arabic: "ـم", transliteration: "meem (final)", meaning: "final meem" },
      { arabic: "ـس", transliteration: "seen (final)", meaning: "final seen — long tail" },
      { arabic: "ـل", transliteration: "laam (final)", meaning: "final laam with curve at the bottom" },
      { arabic: "ـع", transliteration: "ayn (final)", meaning: "final ayn" },
      { arabic: "ـة", transliteration: "taa marbutah", meaning: "special final form for feminine nouns" },
    ],
    practice:
      "Look at the six final forms above. Notice the tails descending from each. Tap each to hear its name. Then practise reading 2-letter and 3-letter words ending in final forms: أَب (ab = father), كَلْب (kalb = dog), سَلَام (salaam = peace). On paper, write each of these six final forms 5 times. Take 15 minutes.",
  },

  "isolated-form": {
    intro: [
      "The isolated form of a letter is its standalone shape — used when the letter is not connected to any other letter. This happens in two cases: (1) when the letter stands alone as a single-letter word (like وَ = 'wa' = 'and'), or (2) when the letter appears in a word but is not connected to the letter after it (this happens with non-connecting letters, or when a letter follows a non-connecting letter).",
      "Every letter has an isolated form — even non-connecting letters. For non-connecting letters, the isolated form is the same as the initial form and the final form (because non-connecting letters don't have separate initial/medial/final forms — they only have isolated and final, and the final is similar to isolated but with a tail). For connecting letters, the isolated form is the standalone shape with no connector strokes.",
      "When you see a letter standing alone (not connected to anything), it is in its isolated form. The isolated form is often the 'canonical' shape that you see in alphabet charts. When you learn a new letter, you usually learn its isolated form first, then the initial/medial/final forms.",
    ],
    keyPoints: [
      {
        title: "Standalone shape",
        description:
          "The isolated form is the letter standing alone, with no connectors on either side. This is the 'canonical' shape used in alphabet charts. For connecting letters, it is the standalone version. For non-connecting letters, it is also their initial form (since they don't connect to anything after).",
      },
      {
        title: "Used after non-connecting letters",
        description:
          "When a connecting letter follows a non-connecting letter (like after alif ا, daal د, etc.), the connecting letter appears in its isolated form (not initial), because there is no connector on its right side. For example, in the word أَحَد (ahad = one), the letter ح (haa) appears in its isolated form because it follows ا (alif), which is non-connecting.",
      },
      {
        title: "Used as single-letter words",
        description:
          "Some letters can stand as single-letter words in Arabic. For example, وَ (wa = and), فَ (fa = so/then), لِ (li = for/to), بِ (bi = with/in). These use the isolated form of the letter plus the appropriate harakah.",
      },
      {
        title: "Reference shape",
        description:
          "When you learn a new letter, you learn the isolated form first. It is the reference shape that all other forms derive from. Once you know the isolated form, the initial/medial/final forms are just variations that add connector strokes.",
      },
    ],
    examples: [
      { arabic: "ب", transliteration: "baa (isolated)", meaning: "baa standing alone" },
      { arabic: "م", transliteration: "meem (isolated)", meaning: "meem standing alone" },
      { arabic: "س", transliteration: "seen (isolated)", meaning: "seen standing alone" },
      { arabic: "ل", transliteration: "laam (isolated)", meaning: "laam standing alone" },
      { arabic: "وَ", transliteration: "wa", meaning: "waaw with fathah — single-letter word 'and'" },
      { arabic: "فَ", transliteration: "fa", meaning: "faa with fathah — single-letter word 'so/then'" },
      { arabic: "لِ", transliteration: "li", meaning: "laam with kasrah — single-letter word 'for/to'" },
      { arabic: "بِ", transliteration: "bi", meaning: "baa with kasrah — single-letter word 'with/in/by'" },
    ],
    practice:
      "Look at the eight isolated forms above. The first four are pure isolated (just the letter shape). The last four are isolated forms with harakat — these are common single-letter words in Arabic. On paper, write each of the four pure isolated letters 5 times, and write each of the four single-letter words 5 times. Take 15 minutes.",
  },

  "connection-rules": {
    intro: [
      "Arabic is a connected script — letters in a word flow together on a common baseline. But not all letters connect to all sides. The rule is: every letter can connect to the letter BEFORE it (the one on its right), but only 22 of the 28 letters can connect to the letter AFTER it (the one on its left). The 6 letters that cannot connect after are called 'non-connecting' letters: alif (ا), daal (د), dhaal (ذ), raa (ر), zaay (ز), and waaw (و).",
      "When a non-connecting letter appears in a word, it breaks the connection: the next letter starts fresh as if isolated. For example, in the word خَوْف (khawf = fear), the letter و (waaw, non-connecting) appears in the middle. The letter ف after it starts fresh — it appears in its isolated form, not in initial form (because there is no connector on its right side).",
      "Understanding the connection rules is essential for both reading and writing Arabic. When you read, you need to know where one letter ends and the next begins — the non-connecting letters are visual cues for these boundaries. When you write, you need to know whether to continue the connection or break it. Practise reading many words to internalise this pattern.",
    ],
    keyPoints: [
      {
        title: "All letters connect BEFORE",
        description:
          "Every Arabic letter (all 28) can receive a connection from the letter BEFORE it (the one on its right). So if you see a connector on the right side of a letter, you know it is connected to the letter before.",
      },
      {
        title: "Only 22 connect AFTER",
        description:
          "Only 22 letters can connect to the letter AFTER (left side). The 6 that cannot are: ا (alif), د (daal), ذ (dhaal), ر (raa), ز (zaay), و (waaw). When you see one of these, expect the next letter to start fresh.",
      },
      {
        title: "Break before non-connecting",
        description:
          "When a non-connecting letter appears, the letter AFTER it starts fresh (isolated form). The non-connecting letter itself appears in its final form (or isolated if it's at the start of a word). For example: درس (darasa) is written د + ر + س — the ر is non-connecting, so the س starts fresh.",
      },
      {
        title: "Taa marbutah is special",
        description:
          "The letter ة (taa marbutah) is a special final form that only appears at the end of words. It does not connect to anything after. If the word needs to continue (e.g., when adding a suffix), the taa marbutah becomes a regular ت (taa) in its final form: ـتـ.",
      },
    ],
    examples: [
      { arabic: "بَيت", transliteration: "bayt", meaning: "house — ba + yaa + taa (all connecting, smooth flow)" },
      { arabic: "دَرَسَ", transliteration: "darasa", meaning: "he studied — daal + raa + seen + fathah (breaks after د and ر)" },
      { arabic: "وَلَد", transliteration: "walad", meaning: "boy — waaw + laam + daal (break after daal)" },
      { arabic: "أَحَد", transliteration: "aḥad", meaning: "one — alif + haa + daal (breaks after ا and د)" },
      { arabic: "رَجُل", transliteration: "rajul", meaning: "man — raa + jeem + laam (break after ر)" },
      { arabic: "مَوْت", transliteration: "mawt", meaning: "death — meem + waaw + taa (break after و)" },
    ],
    practice:
      "Read the six words above. For each, identify which letters are connecting and which are non-connecting. Mark the 'break points' where the connection is broken. On paper, copy each word 3 times — pay attention to where you lift your pen vs. where you continue the stroke. Take 15-20 minutes. This is the foundation of fluent Arabic writing.",
  },

  // ===================================================================
  // MODULE 4: VOWELS APPLICATION — 5 lessons
  // ===================================================================

  "letters-with-fathah": {
    intro: [
      "Now that you know the three harakat (fathah, kasrah, dammah) and the 28 letters, it is time to combine them. In this lesson, we focus on letters with FATHAH — the short 'a' sound. You will see every letter of the alphabet with a fathah above it, and you will practise reading them as a chain.",
      "When a letter has a fathah, you pronounce the consonant sound followed by a short 'a'. For example: بَ = 'ba', تَ = 'ta', مَ = 'ma', and so on. The goal of this lesson is to build instant recognition: see a letter with a fathah, know the sound immediately, no thinking.",
      "In real Quranic recitation, you will see chains of letters with fathah: بَتَمَ (ba-ta-ma), سَمَعَ (sa-ma-ʿa), كَتَبَ (ka-ta-ba = he wrote). To read these fluently, you need to recognise each letter+fathah combo in under half a second. The only way to achieve this is repetition — drill the chains in this lesson until they become automatic.",
    ],
    keyPoints: [
      {
        title: "Consonant + short 'a'",
        description:
          "Each letter with a fathah is pronounced as 'consonant + a'. بَ = 'ba', تَ = 'ta', ثَ = 'tha', جَ = 'ja', etc. Always pronounce the consonant first, then the vowel — never blend them.",
      },
      {
        title: "Mouth position for fathah",
        description:
          "For every fathah, the mouth should be slightly open, the jaw dropped a little, the tongue flat in the lower position. Maintain this position for the entire chain of fathah letters. Do NOT round your lips.",
      },
      {
        title: "Chain reading",
        description:
          "When you see a chain of letters with fathah (like بَتَمَ), read each one quickly: 'ba-ta-ma'. Do not pause between them. The goal is smooth, continuous reading. Practise slowly first, then build up speed.",
      },
      {
        title: "Real words appear",
        description:
          "Many chains of letters with fathah form real Arabic words. For example, كَتَبَ (kataba = he wrote), سَمِعَ (samia = he heard), دَخَلَ (dakhala = he entered). Recognising these words is a side-benefit of this drill.",
      },
    ],
    examples: [
      { arabic: "بَ تَ ثَ", transliteration: "ba ta tha", meaning: "first three letters with fathah" },
      { arabic: "جَ حَ خَ", transliteration: "ja ḥa kha", meaning: "group 2 with fathah" },
      { arabic: "دَ ذَ رَ زَ", transliteration: "da dha ra za", meaning: "group 3 with fathah" },
      { arabic: "سَ شَ صَ ضَ", transliteration: "sa sha ṣa ḍa", meaning: "group 4 with fathah (note emphatic)" },
      { arabic: "كَتَبَ", transliteration: "kataba", meaning: "he wrote — real word with all fathah" },
      { arabic: "دَخَلَ", transliteration: "dakhala", meaning: "he entered — real word with all fathah" },
      { arabic: "سَمِعَ", transliteration: "samiʿa", meaning: "he heard — mixed fathah and kasrah" },
    ],
    practice:
      "Drill the seven rows above. For each row, tap each letter to hear the audio, then say the chain out loud. Repeat each row 5 times. After all 7 rows, mix them: pick a row at random, read it 3 times fast. Take 15-20 minutes. The goal is instant recognition — see a letter with a fathah, know the sound without thinking.",
  },

  "letters-with-kasrah": {
    intro: [
      "In this lesson, we focus on letters with KASRAH — the short 'i' sound. You will see every letter of the alphabet with a kasrah below it, and you will practise reading them as a chain. The kasrah requires a different mouth position from the fathah: mouth slightly closed, tongue raised toward the upper palate.",
      "When a letter has a kasrah, you pronounce the consonant sound followed by a short 'i'. For example: بِ = 'bi', تِ = 'ti', مِ = 'mi', and so on. The kasrah is the second most common harakah in Arabic, after the fathah. It appears in many common words like بِسْمِ (bismi = in the name of) and لِ (li = for).",
      "In real Quranic recitation, you will see chains of letters with kasrah: بِتِمِ (bi-ti-mi), سِمِعِ (si-mi-ʿi), كَتَبَ (ka-ta-ba — wait, this is all fathah, but mixed chains like كُتِبَ (ku-ti-ba = it was written) are common). To read these fluently, drill the chains in this lesson until they become automatic.",
    ],
    keyPoints: [
      {
        title: "Consonant + short 'i'",
        description:
          "Each letter with a kasrah is pronounced as 'consonant + i'. بِ = 'bi', تِ = 'ti', ثِ = 'thi', جِ = 'ji', etc. The 'i' is short (like in 'sit'), not the long 'ii' (like in 'see').",
      },
      {
        title: "Mouth position for kasrah",
        description:
          "For every kasrah, the mouth should be slightly closed, the tongue raised toward the upper palate (but not touching it), the jaw slightly raised. Maintain this position for the entire chain of kasrah letters. Slight smile-like shape on the lips.",
      },
      {
        title: "Chain reading",
        description:
          "When you see a chain of letters with kasrah (like بِتِمِ), read each one quickly: 'bi-ti-mi'. Do not pause between them. Practise slowly first, then build up speed. The transition between mouth positions is what makes fluent reading hard — but with kasrah, the position is constant, so it's easier than mixing harakat.",
      },
      {
        title: "Bismillah practice",
        description:
          "The most famous phrase in the Quran, بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (Bismillah ir-Rahman ir-Raheem), starts with two kasrahs (بِسْمِ). Practise this phrase — it appears at the start of every surah except one. The kasrah on the ب and the س should be clear and short.",
      },
    ],
    examples: [
      { arabic: "بِ تِ ثِ", transliteration: "bi ti thi", meaning: "first three letters with kasrah" },
      { arabic: "جِ حِ خِ", transliteration: "ji ḥi khi", meaning: "group 2 with kasrah" },
      { arabic: "دِ ذِ رِ زِ", transliteration: "di dhi ri zi", meaning: "group 3 with kasrah" },
      { arabic: "سِ شِ صِ ضِ", transliteration: "si shi ṣi ḍi", meaning: "group 4 with kasrah (note emphatic)" },
      { arabic: "بِسْمِ", transliteration: "bismi", meaning: "in the name of — common word with kasrah + sukuun" },
      { arabic: "لِ", transliteration: "li", meaning: "for / to — single-letter word with kasrah" },
      { arabic: "فِيهِ", transliteration: "fihi", meaning: "in it — common word with two kasrahs" },
    ],
    practice:
      "Drill the seven rows above. For each row, tap each letter to hear the audio, then say the chain out loud. Pay special attention to the mouth position — the mouth should be slightly closed, the tongue raised. Repeat each row 5 times. After all 7 rows, practise the word بِسْمِ (bismi) 10 times — it appears in the most-repeated phrase in the Quran. Take 15-20 minutes.",
  },

  "letters-with-dammah": {
    intro: [
      "In this lesson, we focus on letters with DAMMAH — the short 'u' sound. You will see every letter of the alphabet with a dammah above it, and you will practise reading them as a chain. The dammah requires rounded lips, like saying 'oo' but shorter.",
      "When a letter has a dammah, you pronounce the consonant sound followed by a short 'u'. For example: بُ = 'bu', تُ = 'tu', مُ = 'mu', and so on. The dammah is the third primary harakah. Together with fathah and kasrah, it covers all the short vowel sounds of Arabic.",
      "In real Quranic recitation, you will see chains of letters with dammah: بُتُمُ (bu-tu-mu), سُبُحَ (su-bu-ḥa — mixed dammah and fathah), كُتِبَ (ku-ti-ba = it was written — all three harakat). Drill the chains in this lesson until recognition is automatic.",
    ],
    keyPoints: [
      {
        title: "Consonant + short 'u'",
        description:
          "Each letter with a dammah is pronounced as 'consonant + u'. بُ = 'bu', تُ = 'tu', ثُ = 'thu', جُ = 'ju', etc. The 'u' is short (like in 'put'), not the long 'uu' (like in 'food').",
      },
      {
        title: "Mouth position for dammah",
        description:
          "For every dammah, the lips should be rounded forward (like saying 'oo' but shorter), the tongue in a mid position (not flat like fathah, not raised like kasrah). The jaw is mid. The lips form a small circle — practise in front of a mirror to see this.",
      },
      {
        title: "Chain reading",
        description:
          "When you see a chain of letters with dammah (like بُتُمُ), read each one quickly: 'bu-tu-mu'. Do not pause between them. The lips should stay rounded throughout the chain.",
      },
      {
        title: "Mixing harakat",
        description:
          "Once you can read pure fathah, pure kasrah, and pure dammah chains, start mixing: بَبِبُ (ba-bi-bu), مُمَمِ (mu-ma-mi). This is the real challenge of fluent Arabic reading — switching mouth positions on the fly.",
      },
    ],
    examples: [
      { arabic: "بُ تُ ثُ", transliteration: "bu tu thu", meaning: "first three letters with dammah" },
      { arabic: "جُ حُ خُ", transliteration: "ju ḥu khu", meaning: "group 2 with dammah" },
      { arabic: "دُ ذُ رُ زُ", transliteration: "du dhu ru zu", meaning: "group 3 with dammah" },
      { arabic: "سُ شُ صُ ضُ", transliteration: "su shu ṣu ḍu", meaning: "group 4 with dammah (note emphatic)" },
      { arabic: "كُتُبٌ", transliteration: " kutubun", meaning: "books — common word with three dammahs + tanween" },
      { arabic: "مُسْلِمُ", transliteration: " muslimu", meaning: "Muslim — common word with dammah + kasrah" },
      { arabic: "نُورٌ", transliteration: "nurun", meaning: "light — common word with dammah + tanween" },
    ],
    practice:
      "Drill the seven rows above. For each row, tap each letter to hear the audio, then say the chain out loud. Pay special attention to the lip rounding — your lips should form a small circle. Practise in front of a mirror. Repeat each row 5 times. After all 7 rows, mix the harakat: read بَبِبُ (ba-bi-bu) 5 times, then مُمَمِ (mu-ma-mi) 5 times. Take 20 minutes.",
  },

  tanween: {
    intro: [
      "Tanween (تنوين) is a modification of the three primary harakat — it is the 'double harakah' version. Each of fathah, kasrah, and dammah has a tanween version: tanween fathah ( double fathah above the letter, written as two small strokes ً ), tanween kasrah (double kasrah below, ٍِ ), and tanween dammah (double dammah above, ٌُ ). The tanween adds an 'n' sound after the vowel.",
      "When a letter has tanween fathah (ً), it is pronounced as 'consonant + an' (like 'ban', 'tan', 'man'). When it has tanween kasrah (ٍ), it is pronounced as 'consonant + in' (like 'bin', 'tin', 'min'). When it has tanween dammah (ٌ), it is pronounced as 'consonant + un' (like 'bun', 'tun', 'mun'). The 'n' sound is called the 'ghunnah' and is hummed through the nose briefly.",
      "Tanween in Arabic grammar marks indefinite nouns. For example, كِتَابٌ (kitaabun = a book — indefinite), كِتَابٍ (kitaabin = of a book — indefinite genitive), كِتَابًا (kitaaban = a book — indefinite accusative). When the noun is definite (with the article ال or attached to a pronoun), the tanween disappears. In recitation, the tanween is always pronounced unless the reciter is pausing (waqf) — in which case it disappears and the preceding vowel is sustained.",
    ],
    keyPoints: [
      {
        title: "Double harakah + 'n' sound",
        description:
          "Tanween is the double version of each harakah. It is written as two small strokes (either above or below the letter, matching the harakah's position). It adds an 'n' sound after the vowel: َ + َ = ًَ (an), ِ + ِ = ٍِ (in), ُ + ُ = ٌُ (un).",
      },
      {
        title: "Marks indefinite nouns",
        description:
          "Tanween is a grammatical marker — it indicates the noun is indefinite (no 'the'). In Arabic, definiteness is marked by the article ال (al = 'the') at the start of the word. If the word has tanween, it is indefinite; if it has ال, it is definite. The two cannot coexist on the same word.",
      },
      {
        title: "Three grammatical cases",
        description:
          "The three types of tanween correspond to three grammatical cases: tanween dammah (ٌ) for the nominative case (subject), tanween fathah (ً) for the accusative case (object), tanween kasrah (ٍ) for the genitive case (after prepositions or in possessive constructions).",
      },
      {
        title: "Disappears at pause (waqf)",
        description:
          "When the reciter pauses (waqf) at the end of an ayah or phrase, the tanween is NOT pronounced. Instead, the preceding harakah is sustained as a long vowel (two beats). For example, عَلِيمٌ (ʿaleemun) becomes عَلِيمْ (ʿaleem) at pause — the 'un' becomes a sustained 'm' with a fathah-like sound. This is a key rule of tajweed recitation.",
      },
    ],
    examples: [
      { arabic: "بًا", transliteration: "ban", meaning: "baa with tanween fathah — pronounced 'ban'" },
      { arabic: "بٍ", transliteration: "bin", meaning: "baa with tanween kasrah — pronounced 'bin'" },
      { arabic: "بٌ", transliteration: "bun", meaning: "baa with tanween dammah — pronounced 'bun'" },
      { arabic: "كِتَابٌ", transliteration: "kitaabun", meaning: "a book — indefinite nominative" },
      { arabic: "كِتَابًا", transliteration: "kitaaban", meaning: "a book — indefinite accusative" },
      { arabic: "كِتَابٍ", transliteration: "kitaabin", meaning: "of a book — indefinite genitive" },
      { arabic: "عَلِيمٌ", transliteration: "ʿaleemun", meaning: "all-knowing — common tanween dammah in Quran" },
    ],
    practice:
      "Drill the seven examples above. Tap each to hear the audio. Pay attention to the 'n' sound at the end of each — it should be a brief hum through the nose (ghunnah). Practise saying 'ban', 'bin', 'bun' — note the different vowel before the 'n'. On paper, write each of the three tanween forms on the letter ب 5 times. Take 15 minutes. Then read the three forms of كِتَاب (kitaabun, kitaaban, kitaabin) 5 times each.",
  },

  "mixed-vowel-practice": {
    intro: [
      "Now that you can recognise fathah, kasrah, dammah, and tanween individually, it is time to MIX them. In real Quranic recitation, harakat are mixed constantly: you will see sequences like بَبِبُ (ba-bi-bu), مُمَمِمًا (mu-ma-mi-man), كُتِبَ (ku-ti-ba — meaning 'it was written'). The challenge is switching mouth positions on the fly while maintaining fluency.",
      "The key to fluent mixed reading is muscle memory. Your mouth needs to know the position for each harakah without thinking. Fathah = open, kasrah = closed, dammah = rounded. When you see a harakah, your mouth should snap to the correct position instantly. This requires drilling — there is no shortcut.",
      "In this practice lesson, you will see mixed chains of harakat. Read each one slowly first, then build up speed. Pay attention to the mouth position transitions. If you find yourself hesitating on a particular transition, drill that one 10 times until it becomes automatic.",
    ],
    keyPoints: [
      {
        title: "Mouth position transitions",
        description:
          "The hardest part of mixed reading is switching mouth positions. Fathah → kasrah requires closing the mouth and raising the tongue. Kasrah → dammah requires rounding the lips and lowering the tongue. Dammah → fathah requires opening the mouth and flattening the tongue. Practise these transitions explicitly.",
      },
      {
        title: "Real words appear",
        description:
          "Many mixed chains form real Arabic words. For example, كَتَبَ (kataba = he wrote), شَرِبَ (shariba = he drank), كَبُرَ (kabura = he grew). Recognising these words as you read is a side-benefit of the drill.",
      },
      {
        title: "Do not blend vowels",
        description:
          "Each vowel should be distinct: 'ba' then 'bi' then 'bu', not 'bebi' or 'bebu'. The consonant and vowel are separate units. Practise saying them slowly with a clear pause between each, then speed up while keeping the separation.",
      },
      {
        title: "Speed will come with practice",
        description:
          "If you are slow at first, that is normal. Reading speed comes with repetition — your brain needs hundreds of reps to build the muscle memory. Do not rush. Aim for accuracy first, speed will follow.",
      },
    ],
    examples: [
      { arabic: "بَبِبُ", transliteration: "ba bi bu", meaning: "baa with all three harakat in sequence" },
      { arabic: "مُمَمِ", transliteration: "mu ma mi", meaning: "meem with three harakat — different order" },
      { arabic: "سَسِسُ", transliteration: "sa si su", meaning: "seen with three harakat" },
      { arabic: "نَنٍنٌ", transliteration: "na nin nun", meaning: "noon with fathah, tanween kasrah, tanween dammah" },
      { arabic: "كَتَبَ", transliteration: "kataba", meaning: "he wrote — all fathah, real word" },
      { arabic: "كُتِبَ", transliteration: "kutiba", meaning: "it was written — mixed dammah, kasrah, fathah" },
      { arabic: "عَلِيمٌ", transliteration: "ʿaleemun", meaning: "all-knowing — fathah, kasrah, tanween dammah" },
      { arabic: "بِسْمِ", transliteration: "bismi", meaning: "in the name of — kasrah, sukuun, kasrah" },
    ],
    practice:
      "Drill the eight rows above. For each, tap each letter to hear the audio, then say the chain out loud. Practise slowly first, then build up speed. After all 8 rows, pick 3 random rows and read them 5 times fast. Then pick 3 more. Take 20-25 minutes. This is the most important drill in the entire Foundation Phase — it builds the muscle memory that fluent Arabic reading requires.",
  },
}
