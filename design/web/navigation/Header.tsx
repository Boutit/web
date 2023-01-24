import { ReactElement } from 'react';
import { Box } from '../layout/Box';

const HEIGHT = 80;

type HeaderProps = {
  end?: ReactElement;
  middle?: ReactElement;
  start?: ReactElement;
};

export default function Header({ end, middle, start }: HeaderProps) {
  return (
    <Box
      alignItems="center"
      borderedBottom
      maxHeight={HEIGHT}
      flexDirection="row"
      height="100%"
      justifyContent="space-between"
      spacingHorizontal={2}
    >
      <Box>{start}</Box>
      <Box>{middle}</Box>
      <Box>{end}</Box>
    </Box>
  );
}
