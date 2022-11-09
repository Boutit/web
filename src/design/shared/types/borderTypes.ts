import {
  borderColorClasses,
  borderRadiusClasses,
} from '../classes/borderClasses';
import { lineWidthClasses } from '../classes/typographyClasses';

export type BorderStyles = {
  bordered?: boolean;
  borderedTop?: boolean;
  borderedBottom?: boolean;
  borderedLeft?: boolean;
  borderedRight?: boolean;
  borderedVertical?: boolean;
  borderedHorizontal?: boolean;
  borderColor?: keyof typeof borderColorClasses;
  borderRadius?: keyof typeof borderRadiusClasses;
  borderWidth?: keyof typeof lineWidthClasses;
};
