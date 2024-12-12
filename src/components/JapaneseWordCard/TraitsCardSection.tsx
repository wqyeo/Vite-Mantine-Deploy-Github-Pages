import {Badge, Card, Group, Text} from '@mantine/core';


interface TraitsCardSectionProps {
  traits: readonly string[];
}

export function TraitsCardSection({
  traits,
}: TraitsCardSectionProps) {
  if (traits.length === 0) {
    return (<></>);
  }

  return (
    <Card.Section withBorder mt="sm">
      <Group gap="xs">
        {traits.map((trait, index) =>
          <Badge key={index} variant="light" color="blue" size="lg">
            {trait}
          </Badge>
        )}
      </Group> 
    </Card.Section>
  )
}