import { generateSymbols } from '../utils/generate-symbols';
import { ALPHABET_LENGTH, ALPHABET_NUMBERS_LENGTH } from './alphabet-info';
import {
  LOWERCASE_ASCII_SYM_START_CODE,
  NUMBER_ASCII_SYM_START_CODE,
  UPPERCASE_ASCII_SYM_START_CODE,
} from './ascii-info';

export const PASSWORD_UPPERCASE_LETTERS_SET = generateSymbols(
  UPPERCASE_ASCII_SYM_START_CODE,
  ALPHABET_LENGTH
);

export const PASSWORD_LOWERCASE_LETTERS_SET = generateSymbols(
  LOWERCASE_ASCII_SYM_START_CODE,
  ALPHABET_LENGTH
);

export const PASSWORD_NUMBERS_SET = generateSymbols(
  NUMBER_ASCII_SYM_START_CODE,
  ALPHABET_NUMBERS_LENGTH
);

export const PASSWORD_SYMBOLS_SET = ['~', '!', '@', '-', '#', '$'];
