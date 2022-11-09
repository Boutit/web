import { css, cx } from 'linaria';
import { foregroundAliases } from '../../shared/aliases/aliases';
import { spinnerClasses } from '../../shared/classes/loadingClasses';
import { PaletteForegroundAlias } from '../../shared/types/paletteTypes';
import { SizeType } from '../../shared/types/sizeTypes';

const spinner = css`
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

type SpinnerProps = {
  size?: SizeType;
  color?: PaletteForegroundAlias;
};

export const Spinner = (props: SpinnerProps) => {
  const { size, color } = props;
  const defaultSizeVariant: SizeType = 'small';
  return (
    <span
      className={cx(spinner, spinnerClasses[size ?? defaultSizeVariant])}
      style={{ color: foregroundAliases[color ?? 'foreground'] }}
    />
  );
};
