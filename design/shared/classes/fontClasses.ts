import { css } from 'linaria';
import { FontType } from '../types/fontTypes';

export const fontClasses: Record<FontType, string> = {
  logo: css`
    font-family: var(--font-logo);
  `,
  primary: css`
    font-family: var(--font-primary);
  `,
  'primary-bold': css`
    font-family: var(--font-primary-bold);
  `,
  secondary: css`
    font-family: var(--font-primary);
  `,
};
