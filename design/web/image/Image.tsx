import React, { ForwardedRef, forwardRef } from 'react';
import { cx } from '@linaria/core';
import { getBorderStyles } from '../../shared/utils/getBorderStyles';
import { BorderStyles } from '../../shared/types/borderTypes';
import { SpacingStyles } from '../../shared/types/spacingTypes';
import { DimensionStyles } from '../../shared/types/dimensionTypes';
import { FlexStyles } from '../../shared/types/flexTypes';
import { getFlexStyles } from '../../shared/utils/getFlexStyles';
import { DisplayType } from '../../shared/types/displayTypes';
import { ElevationProps } from '../../shared/types/elevationTypes';
import { BackgroundColor } from '../../shared/types/colorTypes';
import { elevationClasses } from '../../shared/classes/elevationClasses';
import { Cursor } from '../../shared/types/cursorTypes';
import { cursorClasses } from '../../shared/classes/cursorClasses';
import { borderRadiusClasses } from '../../shared/classes/borderClasses';

type ImageBaseProps = {
  cursor?: Cursor;
  src?: string;
};

type ImageProps = ImageBaseProps &
  Pick<BorderStyles, 'bordered' | 'borderRadius'> &
  Pick<DimensionStyles, 'height' | 'width'> &
  FlexStyles &
  React.DOMAttributes<Element> &
  SpacingStyles &
  DisplayType &
  ElevationProps &
  BackgroundColor;

export const Image = forwardRef(
  (props: ImageProps, ref: ForwardedRef<HTMLElement>) => {
    const {
      alignContent,
      alignItems,
      alignSelf,
      bordered,
      borderRadius,
      children,
      cursor,
      display,
      elevation,
      flexDirection = 'column',
      height,
      justifyContent,
      src,
      width,
      ...otherProps
    } = props;
    return React.createElement(
      'img',
      {
        ...otherProps,
        src: src,
        className: cx(
          getFlexStyles({
            alignContent,
            alignItems,
            alignSelf,
            display,
            flexDirection,
            justifyContent,
          }),
          borderRadius && borderRadiusClasses[borderRadius],
          elevation && elevationClasses[elevation],
          cursor && cursorClasses[cursor],
          getBorderStyles({
            bordered,
          }),
        ),
        ref,
        style: {
          height,
          width,
        },
      },
      children,
    );
  },
);
