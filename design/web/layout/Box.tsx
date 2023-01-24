import React, { ForwardedRef, forwardRef } from 'react';
import { cx } from '@linaria/core';
import { getBorderStyles } from '../../shared/utils/getBorderStyles';
import { BorderStyles } from '../../shared/types/borderTypes';
import { SpacingStyles } from '../../shared/types/spacingTypes';
import { getSpacingStyles } from '../../shared/utils/getSpacingStyles';
import { DimensionStyles } from '../../shared/types/dimensionTypes';
import { FlexStyles } from '../../shared/types/flexTypes';
import { getFlexStyles } from '../../shared/utils/getFlexStyles';
import { DisplayType } from '../../shared/types/displayTypes';
import {
  borderColorClasses,
  borderRadiusClasses,
} from '../../shared/classes/borderClasses';
import { ElevationProps } from '../../shared/types/elevationTypes';
import { BoxAs } from '../../shared/types/asTypes';
import { BackgroundColor } from '../../shared/types/colorTypes';
import { backgroundColorClasses } from '../../shared/classes/backgroundColorClasses';
import { elevationClasses } from '../../shared/classes/elevationClasses';
import { Cursor } from '../../shared/types/cursorTypes';
import { cursorClasses } from '../../shared/classes/cursorClasses';
import { Overflow } from '../../shared/types/overflowTypes';
import { Position, Positions } from '../../shared/types/positionTypes';

type BoxBaseProps = {
  cursor?: Cursor;
  position?: Position;
};

export type BoxProps = BoxBaseProps &
  BoxAs &
  BorderStyles &
  DimensionStyles &
  FlexStyles &
  React.DOMAttributes<Element> &
  SpacingStyles &
  DisplayType &
  ElevationProps &
  BackgroundColor &
  Overflow &
  Positions;

export const Box = forwardRef(function Box(
  props: BoxProps,
  ref: ForwardedRef<HTMLElement>,
) {
  const {
    as = 'div',
    alignContent,
    alignItems,
    alignSelf,
    background,
    borderColor,
    borderRadius,
    bordered,
    borderedTop,
    borderedBottom,
    borderedLeft,
    borderedRight,
    borderedVertical,
    borderedHorizontal,
    borderWidth = 1,
    bottom,
    children,
    cursor,
    display,
    elevation,
    flexDirection = 'column',
    height,
    justifyContent,
    left,
    maxHeight,
    minHeight,
    maxWidth,
    minWidth,
    overflow,
    overflowX,
    overflowY,
    position,
    right,
    spacing,
    spacingTop,
    spacingBottom,
    spacingLeft,
    spacingRight,
    spacingVertical,
    spacingHorizontal,
    top,
    width,
    zIndex,
    ...otherProps
  } = props;
  return React.createElement(
    as,
    {
      ...otherProps,
      className: cx(
        getFlexStyles({
          alignContent,
          alignItems,
          alignSelf,
          display,
          flexDirection,
          justifyContent,
        }),
        background && backgroundColorClasses[background],
        borderColor && borderColorClasses[borderColor],
        borderRadius && borderRadiusClasses[borderRadius],
        elevation && elevationClasses[elevation],
        cursor && cursorClasses[cursor],
        getBorderStyles({
          bordered,
          borderedTop,
          borderedBottom,
          borderedLeft,
          borderedRight,
          borderedHorizontal,
          borderedVertical,
          borderWidth,
        }),
        getSpacingStyles({
          spacing,
          spacingTop,
          spacingBottom,
          spacingLeft,
          spacingRight,
          spacingVertical,
          spacingHorizontal,
        }),
      ),
      ref,
      style: {
        height,
        minHeight,
        maxHeight,
        width,
        minWidth,
        maxWidth,
        overflow: overflow,
        overflowX: overflowX,
        overflowY: overflowY,
        position: position,
        right,
        left,
        top,
        bottom,
        zIndex,
      },
    },
    children,
  );
});
