import { SettingsItem } from '../types/settings-item';
import {
  PASSWORD_LOWERCASE_LETTERS_SET,
  PASSWORD_NUMBERS_SET,
  PASSWORD_SYMBOLS_SET,
  PASSWORD_UPPERCASE_LETTERS_SET,
} from './password-characters';

export const SETTINGS_ITEMS: SettingsItem[] = [
  {
    label: 'Uppercase letters',
    isSelected: false,
    characters: PASSWORD_UPPERCASE_LETTERS_SET,
  },
  {
    label: 'Lowercase letters',
    isSelected: false,
    characters: PASSWORD_LOWERCASE_LETTERS_SET,
  },
  {
    label: 'Numbers',
    isSelected: false,
    characters: PASSWORD_NUMBERS_SET,
  },
  {
    label: 'Symbols',
    isSelected: false,
    characters: PASSWORD_SYMBOLS_SET,
  },
];
