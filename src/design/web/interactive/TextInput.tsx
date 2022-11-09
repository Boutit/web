import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useRef,
  useState,
} from 'react';
import { css, cx } from 'linaria';
import { BorderStyles } from '../../shared/types/borderTypes';
import { SpacingStyles } from '../../shared/types/spacingTypes';
import { DimensionStyles } from '../../shared/types/dimensionTypes';
import { FlexStyles } from '../../shared/types/flexTypes';
import { DisplayType } from '../../shared/types/displayTypes';
import { ElevationProps } from '../../shared/types/elevationTypes';
import { Box } from '../layout/Box';
import { baseAliases } from '../../shared/aliases/aliases';
import { fontClasses } from '../../shared/classes/fontClasses';
import { BackgroundColor } from '../../shared/types/colorTypes';
import { FontType } from '../../shared/types/fontTypes';

const baseStyles = css`
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
`;

const focusedStyles = css`
  border-color: ${baseAliases.primary};
`;

type TextInputBaseProps = {
  endNode?: React.ReactNode;
  font?: FontType;
  label?: React.ReactNode | 'string';
  onBlur?: React.InputHTMLAttributes<HTMLInputElement>['onBlur'];
  onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
  onClick?: React.MouseEventHandler;
  onFocus?: React.InputHTMLAttributes<HTMLInputElement>['onFocus'];
  startNode?: React.ReactNode;
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
};

type TextInputProps = TextInputBaseProps &
  BorderStyles &
  DimensionStyles &
  FlexStyles &
  SpacingStyles &
  DisplayType &
  ElevationProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  BackgroundColor;

export const TextInput = forwardRef(
  (props: TextInputProps, ref: ForwardedRef<HTMLElement>) => {
    const {
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
      endNode,
      font,
      height,
      label,
      onBlur,
      onChange,
      onClick,
      onFocus,
      padding,
      placeholder,
      spacing,
      spacingBottom,
      spacingHorizontal,
      spacingLeft,
      spacingTop,
      spacingVertical,
      startNode,
      width = '100%',
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const [focused, setFocused] = useState<boolean>(false);

    const handleNodeClick = useCallback(
      (e: React.MouseEvent<HTMLInputElement>) => {
        setFocused(true);
        inputRef.current?.focus();
      },
      [onChange],
    );

    const handleOnBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur?.(e);
        setFocused(false);
      },
      [onBlur],
    );

    const handleOnChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e);
      },
      [onChange],
    );

    const handleOnClick = useCallback(
      (e: React.MouseEvent<HTMLInputElement>) => {
        onClick?.(e);
        setFocused(true);
      },
      [onClick],
    );

    const handleOnFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        onFocus?.(e);
        setFocused(true);
      },
      [onChange],
    );

    return (
      <Box
        flexDirection="column"
        height={height}
        width={width}
        spacing={spacing}
        spacingBottom={spacingBottom}
        spacingHorizontal={spacingHorizontal}
        spacingLeft={spacingLeft}
        spacingTop={spacingTop}
        spacingVertical={spacingVertical}
      >
        {label}
        <Box
          alignItems="center"
          background={background}
          borderColor={focused ? 'primary' : borderColor}
          borderRadius={borderRadius}
          bordered={bordered}
          borderedTop={borderedTop}
          borderedBottom={borderedBottom}
          borderedLeft={borderedLeft}
          borderedRight={borderedRight}
          borderedVertical={borderedVertical}
          borderedHorizontal={borderedHorizontal}
          flexDirection="row"
          justifyContent="center"
          spacing={padding}
          cursor="text"
          onClick={handleNodeClick}
        >
          {startNode ?? startNode}
          <input
            className={cx(
              baseStyles,
              focused && focusedStyles,
              font && fontClasses[font],
            )}
            onClick={handleOnClick}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            placeholder={placeholder}
            ref={inputRef}
          />
          {endNode ?? endNode}
        </Box>
      </Box>
    );
  },
);
