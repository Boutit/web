import { Box, BoxProps } from './Box';

type HStackProps = Omit<BoxProps, 'flexDirection'> &
  React.DOMAttributes<Element>;

export default function HStack({ children, ...props }: HStackProps) {
  return (
    <Box {...props} flexDirection="row">
      {children}
    </Box>
  );
}
