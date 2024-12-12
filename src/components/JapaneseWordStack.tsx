import { Grid, Skeleton, Stack } from "@mantine/core";
import { JapaneseWordCard } from '@/components/JapaneseWordCard/JapaneseWordCard';
import { RubyTextDisplayMode } from "@/enums/RubyTextDisplayMode";
import { JapaneseWordInformation } from "@/models/JapaneseWordInformation";


interface JapaneseWordGridProps {
  words: JapaneseWordInformation[]
  displayMode: RubyTextDisplayMode;
}

export function JapaneseWordStack({
  words,
  displayMode
}: JapaneseWordGridProps) {
  if (words.length <= 0) {
    return (
      <Stack
        align="stretch"
        justify="flex-start"
        gap="xl"
      >
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} height={250}/>
        ))}
      </Stack>
    )
  }

  return (
    <Stack
      align="stretch"
      justify="flex-start"
      gap="xl"
    >
      {words.map((word, index) => (
        <JapaneseWordCard key={index} word={word} displayMode={displayMode}/>
      ))}
    </Stack>
  )
}