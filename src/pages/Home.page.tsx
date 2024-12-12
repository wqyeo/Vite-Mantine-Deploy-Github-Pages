import React, {useEffect, useState} from "react";
import {JSON_FILE_NAME} from "@/consts";
import {loadJapaneseJson} from "@/services/loadJapaneseJson";
import {JapaneseWordInformation} from "@/models/JapaneseWordInformation";
import {loadJapaneseWords} from "@/services/loadJapaneseWords";
import {HomeNavbar} from "@/layouts/HomeLayout/HomeNavbar";
import {HomeLayout} from "@/layouts/HomeLayout/HomeLayout";
import {RubyTextDisplayMode} from "@/enums/RubyTextDisplayMode";
import {JapaneseWordGrid} from "@/components/JapaneseWordGrid/JapaneseWordGrid";

export function HomePage() {
  const [entries, setEntries] = useState<string[]>([]);
  const [japaneseWords, setJapaneseWords] = useState<JapaneseWordInformation[]>([])
  const [currentEntry, setCurrentEntry] = useState<string | undefined>(undefined);
  const [rubyDisplayMode, setRubyDisplayMode] = useState<RubyTextDisplayMode>(RubyTextDisplayMode.POPOVER_TEXT);

  useEffect(() => {
    // Load all possible entries from JSON File.
    loadJapaneseJson(JSON_FILE_NAME).then(jsonData => {
      const finalEntries: string[] = [];
      console.log("Loading entries from JSON File...");
      for (const data in jsonData) {
        const isEntry = Object.hasOwn(jsonData, data) && jsonData[data] !== undefined && Array.isArray(jsonData[data]);
        if (isEntry) {
          finalEntries.push(data);
        } else {
          console.warn(`Unknown entry format for ${data}; Ignoring...`);
        }
      }

      setEntries(finalEntries);
    }).catch(errorReason =>
      console.error(`Failed to load JSON file: ${errorReason}`)
    );
  }, [])

  const onEntryChange = async (entry: string) => {
    console.log(`Triggered loading ${entry}.`)
    setCurrentEntry(entry)
    setJapaneseWords([])
    const words = await loadJapaneseWords(entry)
    setJapaneseWords(words)
    console.log(`Loaded ${entry} finished. (${words.length} words)`)
  }

  const homeNavbar = (
    <HomeNavbar sections={entries} activeSection={currentEntry} onSectionChange={onEntryChange}/>
  )

  return (
    <HomeLayout
      navbar={homeNavbar}
      onRubyTextDisplayModeChange={setRubyDisplayMode}
    >
      <JapaneseWordGrid words={japaneseWords} displayMode={rubyDisplayMode}/>
    </HomeLayout>
  );
}
