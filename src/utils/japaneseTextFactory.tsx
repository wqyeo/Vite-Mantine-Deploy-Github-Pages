import {RubyTextDisplayMode} from "@/enums/RubyTextDisplayMode";
import {JapaneseRubyText} from "@/components/JapaneseRubyText";
import {JapaneseTextRubyAsTooltip} from "@/components/JapaneseTextRubyAsTooltip";
import {JapaneseWord} from "@/models/JapaneseWord";

export function japaneseTextFactory(word: JapaneseWord, displayMode: RubyTextDisplayMode) {
  if (displayMode === RubyTextDisplayMode.RUBY_TEXT) {
    return (
      <JapaneseRubyText
        hiragana={word.hiragana}
        kanji={word.kanji}
      />
    )
  }
  return (
    <JapaneseTextRubyAsTooltip
      hiragana={word.hiragana}
      kanji={word.kanji}
    />
  )
}