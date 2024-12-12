import {JapaneseWordInformation} from "@/models/JapaneseWordInformation";
import {JapaneseWord} from "@/models/JapaneseWord";

export class JapaneseWordRelation implements JapaneseWord {
  public word: JapaneseWordInformation;
  public relation: string;

  constructor(vocab: JapaneseWordInformation, relation: string) {
    this.word = vocab;
    this.relation = relation;
  }

  get hiragana(){
    return this.word.hiragana;
  }

  get kanji(){
    return this.word.kanji;
  }
}