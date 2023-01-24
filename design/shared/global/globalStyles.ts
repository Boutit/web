import { css } from 'linaria';
import {
  borderRadiusVariables,
  paletteVariables,
  spacingVariables,
  typographyVariables,
} from '../variables/variables';

export const globalStyles = css`
  :global() {
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      margin: 0;
      padding: 0;
    }

    :root {
      ${paletteVariables}
      ${spacingVariables}
      ${borderRadiusVariables}
      ${typographyVariables}
    }
  }
`;
