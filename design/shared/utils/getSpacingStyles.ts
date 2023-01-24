import { cx } from 'linaria';
import {
  spacingClasses,
  spacingTopClasses,
  spacingBottomClasses,
  spacingRightClasses,
  spacingLeftClasses,
} from '../classes/spacingClasses';
import { SpacingStyles } from '../types/spacingTypes';

export const getSpacingStyles = (props: SpacingStyles) => {
  const classes: string[] = [];

  if (props.spacing) {
    classes.push(spacingClasses[props.spacing]);
  }

  if (props.spacingTop) {
    classes.push(spacingTopClasses[props.spacingTop]);
  }

  if (props.spacingBottom) {
    classes.push(spacingBottomClasses[props.spacingBottom]);
  }

  if (props.spacingLeft) {
    classes.push(spacingLeftClasses[props.spacingLeft]);
  }

  if (props.spacingRight) {
    classes.push(spacingRightClasses[props.spacingRight]);
  }

  if (props.spacingVertical) {
    classes.push(spacingTopClasses[props.spacingVertical]);
    classes.push(spacingBottomClasses[props.spacingVertical]);
  }

  if (props.spacingHorizontal) {
    classes.push(spacingLeftClasses[props.spacingHorizontal]);
    classes.push(spacingRightClasses[props.spacingHorizontal]);
  }

  return cx(...classes);
};
