import ActivityCard from '../../design/web/card/ActivityCard';
import { Box } from '../../design/web/layout/Box';
import { TextBody } from '../../design/web/typography/TextBody';

const activities = [
  {
    id: '1',
    action: 'like' as const,
    user: {
      username: 'Tim',
    },
  },
  {
    id: '2',
    action: 'post' as const,
    user: {
      username: 'Jimbo',
    },
  },
  {
    id: '3',
    action: 'post' as const,
    user: {
      username: 'Jimbo',
    },
  },
  {
    id: '4',
    action: 'post' as const,
    user: {
      username: 'Jimbo',
    },
  },
  {
    id: '5',
    action: 'post' as const,
    user: {
      username: 'Jimbo',
    },
  },
  {
    id: '6',
    action: 'post' as const,
    user: {
      username: 'Jimbo',
    },
  },
  {
    id: '7',
    action: 'post' as const,
    user: {
      username: 'Jimbo',
    },
  },
  {
    id: '8',
    action: 'post' as const,
    user: {
      username: 'Jimbo',
    },
  },
];

export default function ActivityPage() {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      overflowY="hidden"
      position="relative"
      width="100%"
    >
      <Box width="100%" overflowY="scroll" alignItems="center">
        <Box alignItems="center" spacingBottom={2} maxWidth={600}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            <Box
              width="50%"
              alignItems="center"
              justifyContent="center"
              spacingVertical={4}
            >
              <TextBody as="span" color="primary">
                Actions
              </TextBody>
            </Box>
            <Box height={40} width={1} background="filler" />
            <Box width="50%" alignItems="center" justifyContent="center">
              <TextBody as="span">History</TextBody>
            </Box>
          </Box>

          {activities.map(activity => (
            <ActivityCard key={activity.id} item={activity} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
