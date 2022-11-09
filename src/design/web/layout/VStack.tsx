import { Box, BoxProps } from './Box';

type VStackProps = Omit<BoxProps, 'flexDirection'> &
  React.DOMAttributes<Element>;

export default function VStack({ children, ...props }: VStackProps) {
  return (
    <Box {...props} flexDirection="column">
      {children}
    </Box>
  );
}
