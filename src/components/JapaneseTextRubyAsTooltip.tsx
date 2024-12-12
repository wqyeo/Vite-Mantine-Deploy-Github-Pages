import { Tooltip, Text } from '@mantine/core';

interface JapaneseTextRubyAsTooltipProps {
  kanji: string;
  hiragana: string;
}

/**
 * Regular Japanese text, showing hiragana as popover.
 */
export function JapaneseTextRubyAsTooltip(
  {
    kanji,
    hiragana,
  }: JapaneseTextRubyAsTooltipProps
) {
  return (
    <Tooltip label={hiragana}>
      <Text>{kanji}</Text>
    </Tooltip>
  )
}