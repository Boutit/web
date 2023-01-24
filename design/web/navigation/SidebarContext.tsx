import React, { useContext } from 'react';

export type SidebarContextType = {
  collapsed: boolean;
};

export const SidebarContext = React.createContext<SidebarContextType>({
  collapsed: false,
});

export const SidebarProvider = SidebarContext.Provider;

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  return context;
};
