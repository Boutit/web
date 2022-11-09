import { css } from 'linaria';
import { paletteVariables } from '../variables/variables';

export const colorClasses = {
  foreground: css`
    color: rgba(255, 255, 255);
  `,
  'foreground-strong': css`
    color: rgba(0, 0, 0);
  `,
  grey: css`
    color: rgba(211, 211, 211);
  `,
  primary: css`
    color: rgba(252, 68, 140);
  `,
  secondary: css`
    color: rgba(227, 187, 36, 128);
  `,
  elevation: css`
    color: rgba(0, 0, 0);
  `,
  white: css`
    color: rgba(255, 255, 255);
  `,
  light: css`
    color: rgba(250, 250, 250);
  `,
  positive: css`
    color: rgba(46, 204, 113);
  `,
  negative: css`
    color: rgba(255, 76, 48);
  `,
};
