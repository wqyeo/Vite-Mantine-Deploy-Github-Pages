
interface JapaneseRubyTextProps {
  kanji: string;
  hiragana: string;
}

export function JapaneseRubyText(
  {
    kanji,
    hiragana,
  }: JapaneseRubyTextProps
) {
  return (
    <ruby>{kanji}<rt>{hiragana}</rt></ruby>
  )
}