import {
  Badge,
  SimpleGrid,
  Heading,
  Text,
  Link,
  Image,
  Flex
} from "@chakra-ui/react";
import React from "react";

interface Tags {
  name: string
}
export interface GridPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  tags: {
    nodes: Tags[]
  }
}

interface PostsGridProps {
  posts: GridPost[];
}

const excerptFormatting = (excerpt: string) => {
  const words = excerpt.split(" ");
  const maxWords = 15;
  const truncatedWords = words.slice(0, maxWords);
  return truncatedWords.join(" ") + (words.length > maxWords ? "..." : "");
};

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  return (
    <SimpleGrid mx={[0, 0, 20]} columns={[1, null, 3]} spacing={6}>
      {posts.map((post) => (
        <Link
          borderRadius={20}
          p={5}
          key={post.id}
          href={`/blog/${post.slug}`}
          cursor="pointer"
          _hover={{ textDecor: "none", bgColor: "gray.100", transition: "background-color .3s linear" }}
        >
          <Image
            h={350}
            w="100%"
            objectFit="cover"
            borderRadius={10}
            mb={4}
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
          />
          <Flex flexDir="column" justifyContent="space-between">
            <Flex>
            {post.tags.nodes.map((tag, index) => (
               <Badge mr={2} mt={2} key={index} variant='solid' colorScheme='orange'>
               {tag.name}
             </Badge>
            ))}
            </Flex>
            <Heading fontSize="xl" mt={2}>
              {post.title}
            </Heading>
            <Text mt={4}>
              {excerptFormatting(
                post.excerpt.replace(/(<([^>]+)>|&#8217;|&\w+;)/gi, "")
              )}
            </Text>
          </Flex>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default PostsGrid;
