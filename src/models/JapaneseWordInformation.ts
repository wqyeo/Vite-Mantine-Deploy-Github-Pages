import {JapaneseWordRelation} from "@/models/JapaneseWordRelation";
import {JapaneseWordExample} from "@/models/JapaneseWordExample";
import {JapaneseWord} from "@/models/JapaneseWord";

export class JapaneseWordInformation implements JapaneseWord {
  public kanji: string;
  public hiragana: string;

  private _alternativeWriteReads: JapaneseWordInformation[];

  public jlptLevel: number | undefined;

  /**
   * For 'see also' section.
   */
  private _wordRelations: JapaneseWordRelation[];

  private _traits: string[];
  private _meanings: string[];

  private _examples: JapaneseWordExample[];

  constructor(kanji: string, hiragana: string, jlptLevel?: number) {
    this.kanji = kanji;
    this.hiragana = hiragana;
    this.jlptLevel = jlptLevel;
    this._wordRelations = [];
    this._traits = [];
    this._meanings = [];
    this._examples = [];
    this._alternativeWriteReads = [];
  }

  public addAlternativeWriteRead(alternative: JapaneseWordInformation) {
    this._alternativeWriteReads.push(alternative);
  }

  public addVocabRelation(relation: JapaneseWordRelation) {
    this._wordRelations.push(relation);
  }

  public addTrait(trait: string) {
    this._traits.push(trait);
  }

  public addMeaning(meaning: string) {
    this._meanings.push(meaning);
  }

  public addExample(example: JapaneseWordExample) {
    this._examples.push(example);
  }

  get wordRelations(): readonly JapaneseWordRelation[] {
    return this._wordRelations;
  }

  get traits(): readonly string[] {
    return this._traits;
  }

  get meanings(): readonly string[] {
    return this._meanings;
  }

  get alternativeWriteRead() : readonly JapaneseWordInformation[] {
    return this._alternativeWriteReads;
  }

  get examples(): readonly JapaneseWordExample[] {
    return this._examples;
  }
}