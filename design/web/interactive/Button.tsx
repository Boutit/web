import React, { forwardRef, useCallback } from 'react';
import { BorderStyles } from '../../shared/types/borderTypes';
import { SpacingStyles } from '../../shared/types/spacingTypes';
import { DimensionStyles } from '../../shared/types/dimensionTypes';
import { FlexStyles } from '../../shared/types/flexTypes';
import { DisplayType } from '../../shared/types/displayTypes';
import { ElevationProps } from '../../shared/types/elevationTypes';
import { Box } from '../layout/Box';
import { Spinner } from '../loading/Spinner';
import {
  ButtonVariant,
  getButtonStyles,
} from '../../shared/utils/getButtonStyles';
import { foregroundAliases } from '../../shared/aliases/aliases';
import { cx } from 'linaria';
import { TextBody } from '../typography/TextBody';
import { fontClasses } from '../../shared/classes/fontClasses';

type ButtonBaseProps = {
  endNode?: React.ReactNode;
  loading?: boolean;
  onClick?: React.MouseEventHandler;
  startNode?: React.ReactNode;
  variant?: ButtonVariant;
  text: string;
};

type ButtonProps = ButtonBaseProps &
  BorderStyles &
  DimensionStyles &
  FlexStyles &
  SpacingStyles &
  DisplayType &
  ElevationProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Button = forwardRef(function Button(props: ButtonProps) {
  const {
    borderRadius = 'none',
    endNode,
    height,
    loading,
    onClick,
    padding,
    spacing,
    spacingBottom,
    spacingHorizontal,
    spacingLeft,
    spacingRight,
    spacingTop,
    spacingVertical,
    startNode,
    text,
    variant,
    width,
  } = props;

  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      onClick?.(e);
    },
    [onClick],
  );

  const { color, backgroundColor } = getButtonStyles(variant ?? 'primary');

  return (
    <Box
      flexDirection="column"
      height={height}
      width={width}
      spacing={spacing}
      spacingBottom={spacingBottom}
      spacingHorizontal={spacingHorizontal}
      spacingLeft={spacingLeft}
      spacingRight={spacingRight}
      spacingTop={spacingTop}
      spacingVertical={spacingVertical}
    >
      <Box
        alignItems="center"
        background={backgroundColor}
        borderRadius={borderRadius}
        flexDirection="row"
        justifyContent="center"
        spacing={padding}
        cursor="pointer"
        onClick={handleOnClick}
      >
        {loading ? (
          <Spinner color={color} />
        ) : (
          <span>
            {startNode ?? startNode}
            <span
              style={{
                color: foregroundAliases[color],
              }}
              className={cx(fontClasses['primary-bold'])}
            >
              <TextBody color={color} as="div">
                {text}
              </TextBody>
            </span>
            {endNode ?? endNode}
          </span>
        )}
      </Box>
    </Box>
  );
});
