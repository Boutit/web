import { css } from 'linaria';

export const backgroundColorClasses = {
  backgroundOverlay: css`
    background-color: rgba(var(--background-overlay), 0.5);
  `,
  filler: css`
    background-color: rgba(var(--grey));
  `,
  light: css`
    background-color: rgba(var(--light));
  `,
  negative: css`
    background-color: rgba(var(--negative));
  `,
  positive: css`
    background-color: rgba(var(--positive));
  `,
  primary: css`
    background-color: rgba(var(--primary));
  `,
  secondary: css`
    background-color: rgba(var(--secondary));
  `,
};
