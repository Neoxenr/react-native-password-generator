import { getRandomValues } from 'expo-crypto';

export const generatePassword = (characters: string[], length: number) =>
  Array.from(getRandomValues(new Uint32Array(length)))
    .map((x) => characters[x % characters.length])
    .join('');
