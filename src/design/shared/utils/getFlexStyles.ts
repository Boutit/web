import { cx } from 'linaria';
import { displayClasses } from '../classes/displayClasses';
import {
  alignContentClasses,
  alignItemsClasses,
  alignSelfClasses,
  flexDirectionClasses,
  justifyContentClasses,
} from '../classes/flexClasses';
import { DisplayType } from '../types/displayTypes';
import { FlexStyles } from '../types/flexTypes';

export const getFlexStyles = ({
  display = 'flex',
  ...props
}: FlexStyles & DisplayType) => {
  const classes: string[] = [];

  classes.push(displayClasses[display]);

  if (props.alignContent) {
    classes.push(alignContentClasses[props.alignContent]);
  }

  if (props.alignItems) {
    classes.push(alignItemsClasses[props.alignItems]);
  }

  if (props.alignSelf) {
    classes.push(alignSelfClasses[props.alignSelf]);
  }

  if (props.justifyContent) {
    classes.push(justifyContentClasses[props.justifyContent]);
  }

  if (props.flexDirection) {
    classes.push(flexDirectionClasses[props.flexDirection]);
  }

  return cx(...classes);
};
