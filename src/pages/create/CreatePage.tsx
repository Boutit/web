import Icon from '../../design/web/icons/Icon';
import { Box } from '../../design/web/layout/Box';
import HStack from '../../design/web/layout/HStack';
import { TextHeadline } from '../../design/web/typography/TextHeadline';

export default function CreatePage() {
  return (
    <Box height="100vh">
      <HStack
        justifyContent="space-between"
        height={100}
        alignItems="center"
        spacingHorizontal={4}
      >
        <TextHeadline as="span">What would you like to create?</TextHeadline>
      </HStack>
      <Box height="100%" alignItems="center" justifyContent="center">
        <HStack justifyContent="center" alignItems="center">
          <Box
            height={200}
            width={200}
            bordered
            spacingHorizontal={2}
            alignItems="center"
            justifyContent="center"
          >
            <Box spacingBottom={2}>
              <Icon name="RiFlashlightLine" size={30} />
            </Box>
            <TextHeadline as="span">boutIt</TextHeadline>
          </Box>
          <Box spacingHorizontal={4}>
            <TextHeadline as="span">or</TextHeadline>
          </Box>
          <Box
            height={200}
            width={200}
            bordered
            spacingHorizontal={2}
            alignItems="center"
            justifyContent="center"
          >
            <Box spacingBottom={2}>
              <Icon name="RiImageLine" size={30} />
            </Box>
            <TextHeadline as="span">post</TextHeadline>
          </Box>
        </HStack>
      </Box>
      <HStack
        justifyContent="space-between"
        height={100}
        alignItems="center"
        spacingHorizontal={4}
      />
    </Box>
  );
}
