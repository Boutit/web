import Icon from '../icons/Icon';
import { Box } from '../layout/Box';
import VStack from '../layout/VStack';
import { TextBody } from '../typography/TextBody';

type HomeCardProps = {
  avatar?: string;
  commentsCount: number;
  likesCount: number;
  mediaUrl?: string;
  subtitle: string;
  subpic?: string;
  text?: string;
  username: string;
};

export default function HomeCard({}: HomeCardProps) {
  return (
    <Box spacing={4}>
      <Box justifyContent="space-between" flexDirection="row" spacingBottom={1}>
        <Box flexDirection="row" alignItems="center">
          <Box
            background="primary"
            borderRadius="standard"
            bordered
            borderWidth={2}
            height={40}
            width={30}
          />
          <TextBody as="span" spacingLeft={1}>
            timbo
          </TextBody>
        </Box>
        <Box flexDirection="row" alignItems="center">
          <TextBody as="span" spacingRight={1} font="logo">
            Toronto Raptors
          </TextBody>
          <Box
            background="primary"
            borderRadius="input"
            bordered
            borderWidth={2}
            height={40}
            width={30}
          />
        </Box>
      </Box>
      <Box
        bordered
        height={534}
        width={300}
        alignItems="center"
        justifyContent="center"
        borderRadius="input"
        position="relative"
      >
        <Box
          spacingBottom={2}
          flexDirection="row"
          justifyContent="space-between"
        >
          <VStack position="absolute" bottom={0} right={20}>
            <Box spacingBottom={2}>
              <Icon name="RiHeartLine" size={30} />
            </Box>
            <Box spacingBottom={2}>
              <Icon name="RiChat3Line" size={30} />
            </Box>
            <Box spacingBottom={2}>
              <Icon name="RiSendPlaneLine" size={30} />
            </Box>
            <Box spacingBottom={2}>
              <Icon name="RiArrowDownCircleLine" size={30} />
            </Box>
            <Box spacingBottom={2}>
              <Icon name="RiMoreFill" size={30} />
            </Box>
          </VStack>
        </Box>
      </Box>
      <Box spacingTop={3}>
        <TextBody as="span">When you're born in the country</TextBody>
      </Box>
      <Box spacingTop={2}>
        <TextBody as="span">kev you're crazy man</TextBody>
      </Box>
      <Box spacingTop={2}>
        <TextBody as="span">View comments</TextBody>
      </Box>
    </Box>
  );
}
