import {JapaneseWordInformation} from "@/models/JapaneseWordInformation";
import {RubyTextDisplayMode} from "@/enums/RubyTextDisplayMode";
import {Card, Group, Text} from "@mantine/core";
import {japaneseTextFactory} from "@/utils/japaneseTextFactory";

interface HeaderCardSectionProps {
  word: JapaneseWordInformation;
  displayMode: RubyTextDisplayMode;
}

export function HeaderCardSection(
  {
    word,
    displayMode
  }: HeaderCardSectionProps
) {
  const japaneseText = japaneseTextFactory(word, displayMode);

  if (word.jlptLevel === undefined) {
    return (
      <Card.Section withBorder mt="sm">
        {japaneseText}
      </Card.Section>
    )
  }

  return (
    <Card.Section>
      <Group justify="space-between">
        {japaneseText}
        <Text>JLPT Level {word.jlptLevel}</Text>
      </Group>
    </Card.Section>
  )
}