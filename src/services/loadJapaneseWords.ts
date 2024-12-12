import { JSON_FILE_NAME } from "@/consts";
import { JapaneseWordInformation } from "@/models/JapaneseWordInformation";
import { loadJapaneseJson } from "@/services/loadJapaneseJson";
import {JapaneseWordBuilder} from "@/services/JapaneseWordBuilder";
import {isIterable} from "@/utils/isIterable";

/* eslint-disable dot-notation */

/**
 * Load japanese word from a target entry.
 * @param targetEntry E.X 'entries-50'.
 */
export async function loadJapaneseWords(targetEntry: string) {
  const jsonData = await loadJapaneseJson(JSON_FILE_NAME);

  console.log(`Loading Japanese Words. (${targetEntry})`)
  const targetEntryData: any[] = jsonData[targetEntry];
  const japaneseWords: JapaneseWordInformation[] = []
  for (const key in targetEntryData) {
    const data = targetEntryData[key];

    // If object type is dictionary (likely have traits, alternative write/reads, etc...)
    if (data !== undefined && typeof data === 'object' && data !== null) {
      const kanji: string = data["reference_writeRead"]["writing"];
      const hiragana: string = data["reference_writeRead"]["reading"];
      const wordBuilder = new JapaneseWordBuilder(kanji, hiragana);

      const jlptLevel: number = data["ksd_jlpt_level"];
      wordBuilder.setJlptLevel(jlptLevel)

      const alternativeWriteReadData: any[] = data["alt_writeReads"];
      wordBuilder.setAlternatives(alternativeWriteReadData);

      const traitMeaningsNoun: any[] = data["traitMeans-noun"];
      if (traitMeaningsNoun !== undefined && isIterable(traitMeaningsNoun) && traitMeaningsNoun.length > 0) {
        const traitsData: string[] = traitMeaningsNoun[0]["noun"];
        wordBuilder.setTraits(traitsData);

        const meaningsData: any[] = traitMeaningsNoun[0]["meanings"];
        wordBuilder.setMeanings(meaningsData);
      }

      const examplesData: any[] = data["encounter_examples-link"];
      wordBuilder.setExamples(examplesData);

      const currentWord = wordBuilder.build();
      japaneseWords.push(currentWord);
    } else {
      // Likely just a string
      const extractedData = extractText(key);

      if (extractedData == null) {
        console.warn(`Unexpected data format in (${targetEntry}): ${key}; Ignoring...`);
        continue;
      }

      const { kanji, hiragana } = extractedData!;
      japaneseWords.push(new JapaneseWordInformation(kanji, hiragana));
    }
  }

  return japaneseWords;
}

const extractText = (input: string): { kanji: string; hiragana: string } | null => {
  // Regular expression to match both patterns:
  // "* kanji hiragana" or "kanji hiragana"
  const match = input.match(/^\*?\s*(\S+)\s+(\S+)$/);

  if (match) {
    const [, kanji, hiragana] = match;
    return { kanji, hiragana };
  }

  // Return null if the string doesn't match the expected format
  return null;
};

