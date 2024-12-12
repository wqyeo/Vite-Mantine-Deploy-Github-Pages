import { Card, Stack } from '@mantine/core';
import { JapaneseWordExample } from "@/models/JapaneseWordExample";
import {ExampleBlockQuote} from "@/components/JapaneseWordCard/ExampleBlockQuote";


interface ExamplesCardSectionProps {
  examples: readonly JapaneseWordExample[];
}

/**
 * Display a list of alternative read/write.
 * (No display if words is empty)
 */
export function ExamplesCardSection(
  {
    examples
  }: ExamplesCardSectionProps
) {
  if (examples.length === 0) {
    return (
      <></>
    );
  }

  return (
    <Card.Section withBorder mt="sm">
      <Stack
        align="stretch"
        justify="flex-start"
        gap="lg"
      >
        {
          examples.map((example, index1) =>
            example.examples.map((exampleText, index2) => (
              <ExampleBlockQuote key={`${index1}-${index2}`} example={example} exampleSentence={exampleText}/>
            ))
          )
        }
      </Stack>
    </Card.Section>
  )
}