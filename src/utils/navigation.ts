import { Location, useLocation } from 'react-router-dom';

export const isPathActive = (route: string) => {
  const { pathname } = useLocation();
  return pathname === route;
};
