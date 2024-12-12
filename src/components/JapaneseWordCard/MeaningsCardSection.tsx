import {Card, List, Text} from "@mantine/core";

interface MeaningsCardSectionProps {
  meanings: readonly string[];
}

export function MeaningsCardSection({
  meanings,
}: MeaningsCardSectionProps) {
  if (meanings.length === 0) {
    return (<></>);
  }

  return (
    <Card.Section>
      <Text fw={500}>Meanings</Text>
      <List>
        {meanings.map((meaning, index) =>
          <List.Item key={index}>{meaning}</List.Item>
        )}
      </List>
    </Card.Section>
  )
}