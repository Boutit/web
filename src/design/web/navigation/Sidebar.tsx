import { ReactElement, useMemo } from 'react';
import useWindowSize from '../layout/useWindowSize';
import { Box } from '../layout/Box';
import { breakpoints } from '../layout/breakpoints';
import { SidebarProvider } from './SidebarContext';
import { SidebarItemType } from './SidebarItem';
import React from 'react';
import Flows from '../../../components/modals/Flows';

type SidebarBaseProps = {
  collapsed?: boolean;
  footer?: ReactElement;
  logo?: ReactElement;
  sidebarItems?: SidebarItemType[];
  sidebarWidthExpanded: number;
  sidebarWidthCollapsed: number;
  Component: React.ComponentType<any>;
  title?: ReactElement;
};

type SidebarProps = SidebarBaseProps & React.DOMAttributes<Element>;

export default function Sidebar({
  collapsed,
  Component,
  footer,
  logo,
  sidebarItems,
  sidebarWidthCollapsed,
  sidebarWidthExpanded,
  title,
}: SidebarProps) {
  const { width } = useWindowSize();
  const collapse = useMemo(
    () => collapsed || width <= breakpoints.desktop,
    [width],
  );
  const sidebarWidth = useMemo(
    () => (collapse ? sidebarWidthCollapsed : sidebarWidthExpanded),
    [collapse],
  );
  const sidebarContext = useMemo(() => ({ collapsed: collapse }), [collapse]);
  const items = useMemo(() => {
    return sidebarItems?.map(item => <Component key={item.to} item={item} />);
  }, [sidebarItems]);
  return (
    <SidebarProvider value={sidebarContext}>
      <Flows>
        <Box height="100vh" maxWidth={sidebarWidth} width="100%" borderedRight>
          {(logo || title) && (
            <Box height={80} spacing={2}>
              {collapse && logo}
              {title && !collapse && title}
            </Box>
          )}
          <Box height="100%">{items}</Box>
          {footer}
        </Box>
      </Flows>
    </SidebarProvider>
  );
}
