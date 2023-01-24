import Icon from '../../../design/web/icons/Icon';
import { TextInput } from '../../../design/web/interactive/TextInput';
import { Box } from '../../../design/web/layout/Box';

export default function ExplorePage() {
  return (
    <Box height="100%" alignItems="center" position="relative">
      <Box width="100%" alignItems="center" position="absolute" spacingTop={1}>
        <TextInput
          placeholder="Search"
          bordered
          width="70%"
          font="primary"
          borderRadius="round"
          padding={2}
          background="light"
          endNode={
            <Box cursor="pointer">
              <Icon name="BiSliderAlt" size={22} />
            </Box>
          }
        />
      </Box>
    </Box>
  );
}
