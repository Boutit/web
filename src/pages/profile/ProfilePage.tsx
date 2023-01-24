import { Box } from '../../../design/web/layout/Box';
import { Image } from '../../../design/web/image/Image';
import { TextTitle4 } from '../../../design/web/typography/TextTitle4';
import { Button } from '../../../design/web/interactive/Button';
import HStack from '../../../design/web/layout/HStack';
import VStack from '../../../design/web/layout/VStack';
import { TextSubtitle } from '../../../design/web/typography/TextSubtitle';
import { TextHeadline } from '../../../design/web/typography/TextHeadline';
import Icon from '../../../design/web/icons/Icon';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function ProfilePage() {
  const navigate = useNavigate();
  const navigateToSettings = useCallback(
    () => navigate('/settings/edit_profile'),
    [navigate],
  );

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      overflowY="hidden"
      position="relative"
      width="100%"
    >
      <Box width="100%" overflowY="scroll" alignItems="center">
        <HStack spacing={4} width="100%">
          <Image height={300} width={250} background="primary" />
          <VStack spacing={4} width="100%">
            <HStack width="100%" justifyContent="space-between">
              <TextTitle4 as="span" spacingBottom={1}>
                tim
              </TextTitle4>
              <Box onClick={navigateToSettings}>
                <Icon name="RiSettings5Line" size={30} />
              </Box>
            </HStack>
            <TextSubtitle as="span" spacingBottom={2}>
              Software Engineer @ Coinbase
            </TextSubtitle>
            <TextSubtitle as="span" spacingBottom={2}>
              Toronto, ON, Canada
            </TextSubtitle>
            <HStack spacingBottom={2}>
              <Button
                text="Follow"
                width={120}
                padding={1}
                spacingRight={1}
                borderRadius="input"
              />
              <Button
                text="Message"
                width={120}
                padding={1}
                borderRadius="input"
              />
            </HStack>
            <HStack>
              <VStack alignItems="center" spacingRight={4}>
                <TextHeadline as="span">12</TextHeadline>
                <TextSubtitle as="span">boutIt</TextSubtitle>
              </VStack>
              <VStack alignItems="center">
                <TextHeadline as="span">12</TextHeadline>
                <TextSubtitle as="span">posts</TextSubtitle>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
        <VStack
          alignItems="center"
          width="90%"
          justifyContent="space-between"
          spacing={2}
        >
          <HStack alignItems="center">
            <HStack justifyContent="center" spacingRight={4} borderedRight>
              <Icon name="RiFlashlightLine" size={30} />
            </HStack>
            <HStack justifyContent="center" spacingLeft={4}>
              <Icon name="RiImageLine" size={30} />
            </HStack>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
