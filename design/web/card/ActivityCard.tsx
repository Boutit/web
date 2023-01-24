import Icon from '../icons/Icon';
import { Box } from '../layout/Box';
import { TextBody } from '../typography/TextBody';
import { Image } from '../image/Image';

type ActivityType =
  | 'like'
  | 'post'
  | 'comment'
  | 'follow'
  | 'done'
  | 'poll'
  | 'availability'
  | 'payment'
  | 'bout';

type Activity = {
  action: ActivityType;
  user: {
    username: string;
  };
};

type ActivityCardProps = {
  item: Activity;
};

export default function ActivityCard({ item }: ActivityCardProps) {
  return (
    <Box
      width="100%"
      borderRadius="input"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      spacingBottom={2}
    >
      <Box flexDirection="row" alignItems="center">
        <Box spacing={2}>
          <Image height={70} width={50} bordered borderRadius="standard" />
        </Box>
        <Box spacingRight={1}>
          <Box flexDirection="row" alignItems="center">
            <Box spacingRight={1} justifyContent="center">
              <TextBody as="span">Tim is bout Toronto Maple Leafs</TextBody>
            </Box>
            <TextBody as="span">9m</TextBody>
          </Box>
        </Box>
      </Box>
      <Box spacing={1}>
        <Image height={90} width={70} bordered borderRadius="standard" />
      </Box>
    </Box>
  );
}
