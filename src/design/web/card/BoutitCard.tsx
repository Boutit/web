import { Box } from '../layout/Box';
import { TextBody } from '../typography/TextBody';
import { Image } from '../image/Image';
import { TextSubtitle } from '../typography/TextSubtitle';

type BoutitType =
  | 'like'
  | 'post'
  | 'comment'
  | 'follow'
  | 'done'
  | 'poll'
  | 'availability'
  | 'payment'
  | 'bout';

type Boutit = {};

type BoutitCardProps = {};

export default function BoutitCard({}: BoutitCardProps) {
  return (
    <Box
      width="100%"
      borderRadius="input"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      spacingBottom={1}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box spacingRight={1} flexDirection="row">
          <Image height={70} width={50} bordered borderRadius="standard" />
          <Box flexDirection="row" alignItems="center" spacingLeft={1}>
            <Box spacingRight={1} justifyContent="center">
              <TextBody as="div">Toronto, Raptors</TextBody>
              <Box spacingVertical={1}>
                <TextSubtitle as="div">Toronto, ON, Canada</TextSubtitle>
              </Box>
              <TextSubtitle as="div">Today</TextSubtitle>
            </Box>
          </Box>
        </Box>
        <TextSubtitle as="div" color="primary">
          boutIt
        </TextSubtitle>
      </Box>
    </Box>
  );
}
