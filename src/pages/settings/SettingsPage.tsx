import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '../../design/web/layout/Box';
import Sidebar from '../../design/web/navigation/Sidebar';
import SidebarItem, {
  SidebarItemType,
} from '../../design/web/navigation/SidebarItem';

const ICON_SIZE = 28;

export default function SettingsPage() {
  const navigate = useNavigate();

  const sidebarItems: SidebarItemType[] = useMemo(
    () => [
      {
        icon: 'RiEditBoxFill',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/settings/edit_profile'),
        title: 'Edit Profile',
        to: '/settings/edit_profile',
      },
      {
        icon: 'RiLockFill',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/settings/password'),
        title: 'Password',
        to: '/settings/password',
      },
      {
        icon: 'RiShieldUserFill',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/settings/privacy'),
        title: 'Privacy',
        to: '/settings/privacy',
      },
      {
        icon: 'RiUserFollowFill',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/settings/connections'),
        title: 'Connections',
        to: '/settings/connections',
      },
      {
        icon: 'RiLogoutBoxFill',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/settings/logout'),
        title: 'Logout',
        to: '/settings/logout',
      },
    ],
    [],
  );

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      overflowY="hidden"
      width="100%"
      height="100%"
    >
      <Box width="90%" height="90%" bordered>
        <Sidebar
          Component={SidebarItem}
          sidebarItems={sidebarItems}
          sidebarWidthCollapsed={64}
          sidebarWidthExpanded={240}
        />
        <Box width="100%"></Box>
      </Box>
    </Box>
  );
}
