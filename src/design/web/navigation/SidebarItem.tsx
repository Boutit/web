import { icons } from '../icons/icons';
import { Box } from '../layout/Box';
import { TextBody } from '../typography/TextBody';
import { useSidebarContext } from './SidebarContext';
import { isPathActive } from '../../../utils/navigation';
import Icon from '../icons/Icon';

export type SidebarItemType = {
  icon?: keyof typeof icons;
  iconSize?: number;
  onClick: () => void;
  title?: string;
  to: string;
};

export default function SidebarItem({ item }: { item: SidebarItemType }) {
  const { icon, iconSize, to, title } = item;
  const { collapsed } = useSidebarContext();
  const active = to ? isPathActive(to) : false;
  const color = active ? 'primary' : 'foreground-strong';

  return (
    <Box flexDirection="row">
      <Box
        justifyContent="center"
        width="100%"
        spacingHorizontal={2}
        spacingVertical={2}
      >
        <Box
          alignItems="center"
          flexDirection="row"
          width="100%"
          onClick={item.onClick}
          cursor="pointer"
        >
          <Icon size={iconSize} name={icon} color={color} />
          {!collapsed && (
            <Box spacingLeft={1}>
              <TextBody as="span" color={color}>
                {title}
              </TextBody>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
