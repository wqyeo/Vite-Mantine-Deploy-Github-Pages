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
    <Card.Section withBorder mt="sm">
      <Text fw={700}>Meanings</Text>
      <List>
        {meanings.map((meaning, index) =>
          <List.Item key={index}>{meaning}</List.Item>
        )}
      </List>
    </Card.Section>
  )
}