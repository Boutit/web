import BoutitCard from '../../design/web/card/BoutitCard';
import HomeCard from '../../design/web/card/HomeCard';
import { Box } from '../../design/web/layout/Box';
import HStack from '../../design/web/layout/HStack';
import { TextHeadline } from '../../design/web/typography/TextHeadline';
import { TextSubtitle } from '../../design/web/typography/TextSubtitle';

const posts = [
  {
    id: '1',
    likesCount: 32,
    commentsCount: 3,
    subtitle: 'Toronto Raptors',
    username: 'timbo',
  },
  {
    id: '2',
    likesCount: 32,
    commentsCount: 3,
    subtitle: 'Toronto Raptors',
    username: 'timbo',
  },
  {
    id: '3',
    likesCount: 32,
    commentsCount: 3,
    subtitle: 'Toronto Raptors',
    username: 'timbo',
  },
];

const boutits = [
  {
    id: '1',
    boutItCount: 22,
    city: 'Toronto, ON, Canada',
    peopleCount: 234,
    postsCount: 46,
    title: 'Fresh Seafood Palace',
  },
  {
    id: '2',
    boutItCount: 45,
    city: 'Toronto, ON, Canada',
    peopleCount: 23,
    postsCount: 2,
    title: 'Toronto Raptors',
  },
  {
    id: '3',
    boutItCount: 45,
    city: 'Toronto, ON, Canada',
    peopleCount: 456,
    postsCount: 11,
    title: 'Toronto Raptors',
  },
  {
    id: '3',
    boutItCount: 45,
    city: 'Toronto, ON, Canada',
    peopleCount: 456,
    postsCount: 11,
    title: 'Toronto Raptors',
  },
  {
    id: '3',
    boutItCount: 45,
    city: 'Toronto, ON, Canada',
    peopleCount: 456,
    postsCount: 11,
    title: 'Toronto Raptors',
  },
  {
    id: '3',
    boutItCount: 45,
    city: 'Toronto, ON, Canada',
    peopleCount: 456,
    postsCount: 11,
    title: 'Toronto Raptors',
  },
];

export default function HomePage() {
  return (
    <HStack alignItems="center" justifyContent="center" overflowY="hidden">
      <HStack
        height="100%"
        justifyContent="center"
        overflowY="scroll"
        width="100%"
      >
        <Box width={200} spacing={4} height="70%">
          <Box spacingBottom={2}>
            <TextHeadline as="span" color="primary">
              boutIt
            </TextHeadline>
          </Box>
          <Box spacingBottom={2}>
            <TextHeadline as="span">following</TextHeadline>
          </Box>
        </Box>
        <Box spacingRight={6}>
          {posts.map(post => (
            <HomeCard
              key={post.id}
              commentsCount={post.commentsCount}
              likesCount={post.likesCount}
              subtitle={post.subtitle}
              username={post.username}
            />
          ))}
        </Box>
        <Box width={400} spacing={4} height="70%">
          <Box spacingBottom={1}>
            <TextSubtitle as="div">New</TextSubtitle>
          </Box>
          {boutits.map(boutit => (
            <BoutitCard key={boutit.id} />
          ))}
        </Box>
      </HStack>
    </HStack>
  );
}
