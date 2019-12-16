import arrayChunk from "array-chunk";

export const chunkTextArray = (
  textArr: string[],
  columns: number
): string[] => {
  const text = textArr.join("");
  const textArrEvenly = text.split("");
  const size = Math.ceil(textArrEvenly.length / columns);
  const textArrChunked = arrayChunk(textArrEvenly, size);
  return textArrChunked.map(arr => arr.join(""));
};
