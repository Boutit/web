import { css } from 'linaria';

export const borderColorClasses = {
  line: css`
    border-color: rgba(var(--grey));
  `,
  primary: css`
    border-color: rgba(var(--primary));
  `,
  secondary: css`
    border-color: rba(var(--secondary));
  `,
};

export const borderRadiusClasses = {
  input: css`
    border-radius: var(--radius-input);
  `,
  none: css`
    border-radius: var(--radius-none);
  `,
  round: css`
    border-radius: var(--radius-round);
  `,
  standard: css`
    border-radius: var(--radius-standard);
  `,
};
