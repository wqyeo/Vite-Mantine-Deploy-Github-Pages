import {JapaneseWordInformation} from "@/models/JapaneseWordInformation";
import {isArrayOfString} from "@/utils/isArrayOfString";
import {JapaneseWordExample} from "@/models/JapaneseWordExample";
import {isIterable} from "@/utils/isIterable";

/* eslint-disable dot-notation */

export class JapaneseWordBuilder {
  private _word: JapaneseWordInformation;

  constructor(kanji: string, hiragana: string) {
    this._word = new JapaneseWordInformation(kanji, hiragana);
  }

  public setJlptLevel(level: number): void {
    this._word.jlptLevel = level;
  }

  public setTraits(traits: string[]): void {
    if (!isIterable(traits)) {
      console.warn("Invalid traits to build upon, ignoring...");
      return;
    }

    for (const trait of traits) {
      this._word.addTrait(trait);
    }
  }

  /**
   * @param meaningsData Either an array of string, or an array containing arrays of strings.
   */
  public setMeanings(meaningsData: any[]): void {
    if (!isIterable(meaningsData)) {
      console.warn("Invalid meaningsData to build upon, ignoring...");
      return;
    }

    if (isArrayOfString(meaningsData)) {
      for (const meaning of meaningsData) {
        this._word.addMeaning(meaning);
      }
    } else {
      for (const subData of meaningsData) {
        for (const meaning of subData) {
          this._word.addMeaning(meaning);
        }
      }
    }
  }

  public setExamples(examplesData: any[]): void {
    if (!isIterable(examplesData)) {
      console.warn("Invalid examplesData to build upon, ignoring...");
      return;
    }

    for (const exampleData of examplesData) {
      const exampleSource = exampleData["source_title"];
      const exampleLink = exampleData["link"];

      const exampleWord = new JapaneseWordExample(exampleSource, exampleLink);

      const exampleSentence = exampleData["sentence"];
      if (!isIterable(exampleSentence)) {
        // No example sentence...
        continue;
      }

      for (const sentence of exampleData["sentence_examples"]) {
        exampleWord.addExample(sentence);
      }

      this._word.addExample(exampleWord);
    }
  }

  public setAlternatives(alternativeWriteReadData: any[]): void {
    if (!isIterable(alternativeWriteReadData)) {
      console.warn("Invalid alternativeWriteReadData to build upon, ignoring...");
      return;
    }

    for (const altData of alternativeWriteReadData) {
      const altKanji: string = altData["writing"];
      const altHiragana: string = altData["reading"];

      const altWord = new JapaneseWordInformation(altKanji, altHiragana);
      this._word.addAlternativeWriteRead(altWord);
    }
  }

  public build(): JapaneseWordInformation {
    return this._word;
  }
}