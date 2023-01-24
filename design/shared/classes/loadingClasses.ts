import { css } from 'linaria';
import { SizeType } from '../types/sizeTypes';

export const spinnerClasses: Record<SizeType, string> = {
  small: css`
    border: 3px solid rgba(var(--white));
    height: 24px;
    width: 24px;
  `,
  medium: css`
    border: 4px solid rgba(var(--white));
    height: 36px;
    width: 36px;
  `,
  large: css`
    border: 6px solid rgba(var(--white));
    height: 48px;
    width: 48px;
  `,
};
