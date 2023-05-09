import { Box, SimpleGrid, Heading, Text, Link } from '@chakra-ui/react';

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
}

interface PostsGridProps {
  posts: Post[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  return (
    <SimpleGrid columns={[1, null, 3]} spacing={10}>
      {posts.map((post) => (
         <Link key={post.id} href={`/blog/${post.slug}`}>
            <Box key={post.id} p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </Box>
         </Link>
      ))}
    </SimpleGrid>
  );
};

export default PostsGrid;
