import React from 'react';
import { cx } from '@linaria/core';
import { SpacingStyles } from '../../shared/types/spacingTypes';
import { getSpacingStyles } from '../../shared/utils/getSpacingStyles';
import { TextAs } from '../../shared/types/asTypes';
import { PaletteForegroundAlias } from '../../shared/types/paletteTypes';
import { typographyClasses } from '../../shared/classes/typographyClasses';
import { TextComponent } from '../../shared/types/typographTypes';
import { foregroundAliases } from '../../shared/aliases/aliases';
import { FontType } from '../../shared/types/fontTypes';
import { fontClasses } from '../../shared/classes/fontClasses';

type TextComponentBaseProps = {
  color?: PaletteForegroundAlias;
  font?: FontType;
};

type TextComponentProps = TextComponentBaseProps &
  TextAs &
  SpacingStyles &
  React.DOMAttributes<Element>;

export const createTextComponent = (name: TextComponent) => {
  const TextComponent = (props: TextComponentProps) => {
    const {
      as,
      children,
      color = 'foreground-strong',
      font = 'primary',
      spacing,
      spacingTop,
      spacingBottom,
      spacingLeft,
      spacingRight,
      spacingVertical,
      spacingHorizontal,
      ...otherProps
    } = props;

    return React.createElement(
      as,
      {
        ...otherProps,
        className: cx(
          getSpacingStyles({
            spacing,
            spacingTop,
            spacingBottom,
            spacingLeft,
            spacingRight,
            spacingVertical,
            spacingHorizontal,
          }),
          typographyClasses[name],
          font && fontClasses[font],
        ),
        style: {
          color: foregroundAliases[color],
        },
      },
      children,
    );
  };

  return TextComponent;
};
