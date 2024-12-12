import {Card} from "@mantine/core";
import { RubyTextDisplayMode } from "@/enums/RubyTextDisplayMode";
import { JapaneseWordInformation } from "@/models/JapaneseWordInformation";
import {AlternativeReadWriteCardSection} from "@/components/JapaneseWordCard/AlternativeReadWriteCardSection";
import {HeaderCardSection} from "@/components/JapaneseWordCard/HeaderCardSection";
import {SeeAlsoCardSection} from "@/components/JapaneseWordCard/SeeAlsoCardSection";
import {MeaningsCardSection} from "@/components/JapaneseWordCard/MeaningsCardSection";
import {TraitsCardSection} from "@/components/JapaneseWordCard/TraitsCardSection";
import {ExamplesCardSection} from "@/components/JapaneseWordCard/ExamplesCardSection";


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
    <Card withBorder shadow="sm" radius="md" padding="md">
      <HeaderCardSection word={word} displayMode={displayMode}/>

      <AlternativeReadWriteCardSection words={word.alternativeWriteRead} displayMode={displayMode}/>

      <MeaningsCardSection meanings={word.meanings}/>
      
      <ExamplesCardSection examples={word.examples}/>
      
      <SeeAlsoCardSection seeAlsoWords={word.wordRelations} displayMode={displayMode}/>


      <TraitsCardSection traits={word.traits}/>
    </Card>
  )
}

