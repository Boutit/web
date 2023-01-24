import {
  backgroundAliases,
  baseAliases,
  foregroundAliases,
} from '../aliases/aliases';

export type PaletteAlias = keyof typeof baseAliases;
export type PaletteBackgroundAlias = keyof typeof backgroundAliases;
export type PaletteForegroundAlias = keyof typeof foregroundAliases;
