import { css } from 'linaria';
import { baseAliases } from '../aliases/aliases';
import { ElevationType } from '../types/elevationTypes';

export const elevationClasses: Record<ElevationType, string> = {
  1: css`
    box-shadow: 0px 0px 10px ${baseAliases.elevation1};
  `,
  2: css`
    box-shadow: 0px 0px 10px ${baseAliases.elevation1};
  `,
};
