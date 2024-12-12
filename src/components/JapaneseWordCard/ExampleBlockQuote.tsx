import {JapaneseWordExample} from "@/models/JapaneseWordExample";
import {IconCircleDottedLetterE} from "@tabler/icons-react";
import {Blockquote, Text} from "@mantine/core";

interface ExampleBlockQuoteProps {
  example: JapaneseWordExample;
  exampleSentence: string;
}

export function ExampleBlockQuote({
  example,
  exampleSentence
}: ExampleBlockQuoteProps) {
  const icon = <IconCircleDottedLetterE/>
  const cite = (
    <Text>
      <a href={example.link} target="_blank" rel="noopener noreferrer">
        {example.source}
      </a>
    </Text>
  )

  return (
    <Blockquote color="green" radius="xl" iconSize={30} cite={cite} icon={icon} mt="xl">
      {exampleSentence}
    </Blockquote>
  );
}