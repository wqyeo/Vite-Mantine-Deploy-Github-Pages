import { JSON_FILE_NAME } from '@/consts';
import { JapaneseWordInformation } from '@/models/JapaneseWordInformation';
import { JapaneseWordBuilder } from '@/services/JapaneseWordBuilder';
import { loadJapaneseJson } from '@/services/loadJapaneseJson';
import { isIterable } from '@/utils/isIterable';

/* eslint-disable dot-notation */

/**
 * Load japanese word from a target entry.
 * @param targetEntry E.X 'entries-50'.
 */
export async function loadJapaneseWords(targetEntry: string) {
  const jsonData = await loadJapaneseJson(JSON_FILE_NAME);

  console.log(`Loading Japanese Words. (${targetEntry})`);
  const targetEntryData: any[] = jsonData[targetEntry];
  const japaneseWords: JapaneseWordInformation[] = [];
  for (const data in targetEntryData) {
    try {
      const currentWord = buildWordFromData(data);
      japaneseWords.push(currentWord);
    } catch (error) {
      console.error(error);
    }
  }

  return japaneseWords;
}

function buildWordFromData(data: any) {
  // If object type is dictionary (likely have traits, alternative write/reads, etc...)
  if (data !== undefined && typeof data === 'object' && data !== null) {
    const kanji: string = data['reference_writeRead']['writing'];
    const hiragana: string = data['reference_writeRead']['reading'];
    const wordBuilder = new JapaneseWordBuilder(kanji, hiragana);

    const jlptLevel: number = data['ksd_jlpt_level'];
    wordBuilder.setJlptLevel(jlptLevel);

    const alternativeWriteReadData: any[] = data['alt_writeReads'];
    wordBuilder.setAlternatives(alternativeWriteReadData);

    const traitMeaningsNoun: any[] = data['traitMeans-noun'];
    if (
      traitMeaningsNoun !== undefined &&
      isIterable(traitMeaningsNoun) &&
      traitMeaningsNoun.length > 0
    ) {
      const traitsData: string[] = traitMeaningsNoun[0]['traits'];
      wordBuilder.setTraits(traitsData);

      const meaningsData: any[] = traitMeaningsNoun[0]['meanings'];
      wordBuilder.setMeanings(meaningsData);
    }

    const examplesData: any[] = data['encounter_examples-link'];
    wordBuilder.setExamples(examplesData);

    return wordBuilder.build();
  }
  // Likely just a string
  const extractedData = extractText(data);

  if (extractedData == null) {
    throw new Error(`Unexpected data format in JSON (${data}); Ignoring...`);
  }

  const { kanji, hiragana } = extractedData!;
  return new JapaneseWordInformation(kanji, hiragana);
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
