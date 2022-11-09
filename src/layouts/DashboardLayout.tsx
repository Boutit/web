import { Outlet } from 'react-router-dom';
import { Box } from '../design/web/layout/Box';
import Sidebar from '../design/web/navigation/Sidebar';
import SidebarItem, {
  SidebarItemType,
} from '../design/web/navigation/SidebarItem';
import { TextTitle3 } from '../design/web/typography/TextTitle3';
import { useMemo } from 'react';
import { Z_INDEX_MAP } from '../utils/zIndex';
import FullscreenModal from '../design/web/overlays/modal/FullscreenModal';
import { useNavigate } from 'react-router-dom';

const ICON_SIZE = 28;

export default function DashboardLayout() {
  const navigate = useNavigate();

  const sidebarItems: SidebarItemType[] = useMemo(
    () => [
      {
        icon: 'RiHome6Line',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/home'),
        title: 'Home',
        to: '/home',
      },
      {
        icon: 'RiSearchLine',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/explore'),
        title: 'Explore',
        to: '/explore',
      },
      {
        icon: 'RiPulseFill',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/activity'),
        title: 'Activity',
        to: '/activity',
      },
      {
        icon: 'RiUser3Line',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/profile'),
        title: 'Profile',
        to: '/profile',
      },
      {
        icon: 'RiChat3Line',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/chat'),
        title: 'Chat',
        to: '/chat',
      },
      {
        icon: 'RiAddCircleLine',
        iconSize: ICON_SIZE,
        onClick: () => navigate('/home'),
        title: 'Create',
        to: '/create',
      },
    ],
    [navigate],
  );

  return (
    <Box height="100vh" flexDirection="row" width="100vw">
      <Sidebar
        Component={SidebarItem}
        sidebarItems={sidebarItems}
        sidebarWidthCollapsed={64}
        sidebarWidthExpanded={240}
        title={
          <TextTitle3 as="div" font="logo">
            boutIt
          </TextTitle3>
        }
        logo={<TextTitle3 as="div">b</TextTitle3>}
      />
      <Box width="100%">
        <Outlet />
      </Box>
      <FullscreenModal visible={false} zIndex={Z_INDEX_MAP.FullscreenModal} />
    </Box>
  );
}
