export const generateSymbols = (startCharCode: number, count: number) =>
  [...Array(count).keys()].map((i) => String.fromCharCode(i + startCharCode));
