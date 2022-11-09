import { PaletteForegroundAlias } from '../../shared/types/paletteTypes';
import { icons } from '../icons/icons';
import { IconContext } from 'react-icons';
import { TextBody } from '../typography/TextBody';
import { Box } from '../layout/Box';
import { colorClasses } from '../../shared/classes/colorClasses';

type IconBaseProps = {
  active?: boolean;
  count?: number;
  name?: keyof typeof icons;
  size?: number;
  color?: PaletteForegroundAlias;
};

type IconProps = IconBaseProps & React.DOMAttributes<Element>;

export default function Icon({
  active = false,
  color,
  name,
  size,
  count,
}: IconProps) {
  const IconComponent = icons[name ?? 'RiFlashlightLine'];
  // const iconClass = active ? navClasses.active : navClasses.inactive;
  const iconClass = colorClasses[color ?? 'foreground-strong'];
  return (
    <Box alignItems="center" flexDirection="row">
      <IconContext.Provider value={{ className: iconClass }}>
        <IconComponent size={size} className={iconClass} />
      </IconContext.Provider>
      {count && (
        <Box spacingLeft={1}>
          <TextBody as="span">{count}</TextBody>
        </Box>
      )}
    </Box>
  );
}
