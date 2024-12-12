import {JapaneseWordInformation} from "@/models/JapaneseWordInformation";
import {Grid, Skeleton} from "@mantine/core";
import {JapaneseWordCard} from "@/components/JapaneseWordCard/JapaneseWordCard";
import {RubyTextDisplayMode} from "@/enums/RubyTextDisplayMode";

interface JapaneseWordGridProps {
  words: JapaneseWordInformation[]
  displayMode: RubyTextDisplayMode;
}

export function JapaneseWordGrid({
  words,
  displayMode
}: JapaneseWordGridProps) {
  if (words.length <= 0) {
    return (
      <Grid>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Grid.Col key={index} span={4}>
              <Skeleton/>
            </Grid.Col>
        ))}
      </Grid>
    )
  }


  return (
    <Grid>
      {words.map((word, index) => (
        <Grid.Col key={index} span={4}>
          <JapaneseWordCard word={word} displayMode={displayMode}/>
        </Grid.Col>
      ))}
    </Grid>
  )
}