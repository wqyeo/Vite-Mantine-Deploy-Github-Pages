import {Card} from "@mantine/core";
import { RubyTextDisplayMode } from "@/enums/RubyTextDisplayMode";
import { JapaneseWordInformation } from "@/models/JapaneseWordInformation";
import {AlternativeReadWriteCardSection} from "@/components/JapaneseWordCard/AlternativeReadWriteCardSection";
import {HeaderCardSection} from "@/components/JapaneseWordCard/HeaderCardSection";
import {SeeAlsoCardSection} from "@/components/JapaneseWordCard/SeeAlsoCardSection";
import {MeaningsCardSection} from "@/components/JapaneseWordCard/MeaningsCardSection";
import {TraitsCardSection} from "@/components/JapaneseWordCard/TraitsCardSection";


interface JapaneseWordCardProps {
  word: JapaneseWordInformation;
  displayMode: RubyTextDisplayMode
}

export function JapaneseWordCard(
  {
    word,
    displayMode
  }: JapaneseWordCardProps
) {
  return (
    <Card withBorder shadow="sm" radius="md">
      <HeaderCardSection word={word} displayMode={displayMode}/>

      <AlternativeReadWriteCardSection words={word.alternativeWriteRead} displayMode={displayMode}/>

      <SeeAlsoCardSection seeAlsoWords={word.wordRelations} displayMode={displayMode}/>

      <MeaningsCardSection meanings={word.meanings}/>

      <TraitsCardSection traits={word.traits}/>
    </Card>
  )
}

