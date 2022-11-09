import { Box } from '../../design/web/layout/Box';
import Sidebar from '../../design/web/navigation/Sidebar';
import SidebarItem, {
  SidebarItemType,
} from '../../design/web/navigation/SidebarItem';

export default function ChatPage() {
  const sidebarItems: SidebarItemType[] = [];
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      overflowY="hidden"
      width="100%"
      height="100%"
    >
      <Box width="90%" height="90%" bordered borderRadius="standard">
        <Sidebar
          Component={SidebarItem}
          sidebarItems={sidebarItems}
          sidebarWidthCollapsed={70}
          sidebarWidthExpanded={300}
        />
        <Box width="100%"></Box>
      </Box>
    </Box>
  );
}
