import {Card, List, Text} from "@mantine/core";
import { RubyTextDisplayMode } from "@/enums/RubyTextDisplayMode";
import { JapaneseWordInformation } from '@/models/JapaneseWordInformation';
import {japaneseTextFactory} from "@/utils/japaneseTextFactory";


interface AlternativeReadWriteCardSectionProps {
  words: readonly JapaneseWordInformation[];
  displayMode: RubyTextDisplayMode;
}

/**
 * Display a list of alternative read/write.
 * (No display if words is empty)
 */
export function AlternativeReadWriteCardSection(
  {
    words,
    displayMode
  }: AlternativeReadWriteCardSectionProps
) {
  if (words.length === 0) {
    return (
      <></>
    );
  }

  return (
    <Card.Section mt="sm">
      <Text fw={700}>Alternative Readings/Writings</Text>
      <List>
        {words.map((word, index) =>
          <List.Item key={index}>
            {japaneseTextFactory(word, displayMode)}
          </List.Item>
        )}
      </List>
    </Card.Section>
  )
}