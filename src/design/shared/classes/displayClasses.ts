import { css } from 'linaria';
import { DisplayValue } from '../types/displayTypes';

export const displayClasses: Record<DisplayValue, string> = {
  block: css`
    display: block;
  `,
  'inline-block': css`
    display: inline-block;
  `,
  flex: css`
    display: flex;
  `,
  none: css`
    display: none;
  `,
  'inline-flex': css`
    display: inline-flex;
  `,
  contents: css`
    display: contents;
  `,
};
