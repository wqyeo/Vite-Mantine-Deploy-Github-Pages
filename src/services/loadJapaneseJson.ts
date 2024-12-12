/**
 * @param filePath Relative to 'public' folder.
 */
export async function loadJapaneseJson(filePath: string) {
  try {
    console.log(`Attempting to load JSON. (${filePath})`)
    const response = await fetch(filePath);

    if (response.status !== 200) {
      console.error(`Error loading JSON. (${response.status} : ${response.statusText})`);
      throw new Error(`Error loading JSON. (${response.status} : ${response.statusText})`);
    }

    console.log(`Received JSON file, attempting to parse...`)
    const jsonData = await response.json();

    const debugData = JSON.stringify(jsonData).slice(0, 50);
    console.log(`Parsed JSON data. (${debugData}...)`);

    return jsonData;
  } catch (error) {
    console.error('Error loading JSON:', error);
    throw error;
  }
}