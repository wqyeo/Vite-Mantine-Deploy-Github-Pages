import {Card, List, Text} from "@mantine/core";
import { RubyTextDisplayMode } from "@/enums/RubyTextDisplayMode";
import {JapaneseWordRelation} from "@/models/JapaneseWordRelation";
import {japaneseTextFactory} from "@/utils/japaneseTextFactory";


interface SeeAlsoCardSectionProps {
  seeAlsoWords: readonly JapaneseWordRelation[];
  displayMode: RubyTextDisplayMode;
}

export function SeeAlsoCardSection(
  {
    seeAlsoWords,
    displayMode
  }: SeeAlsoCardSectionProps
) {
  if (seeAlsoWords.length === 0) {
    return (<></>)
  }

  return (
    <Card.Section>
      <Text fw={500}>See Also</Text>
      <List listStyleType="disc">
        {seeAlsoWords.map((word, index) => {
          const displayText = japaneseTextFactory(word, displayMode);
          if (word.relation == null) {
            return (<List.Item key={index}>{displayText}</List.Item>)
          }

          // Display relationship in a nested list if provided.
          return (
            <List.Item key={index}>
              {displayText}
              <List withPadding listStyleType="disc">
                <List.Item>{word.relation}</List.Item>
              </List>
            </List.Item>
          )
        })}
      </List>
    </Card.Section>
  )
}