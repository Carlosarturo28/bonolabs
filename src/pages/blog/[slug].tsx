import { GetServerSidePropsContext } from 'next';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";

import Header from "@bono/components/Header";
import Footer from "@bono/components/Footer";

interface PostProps {
  post: {
    id: string;
    title: string;
    content: string;
    date: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
  };
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (!context.params || typeof context.params.slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const slug = context.params.slug;

  const client = new ApolloClient({
    uri: "http://blog.bonolabs.co/index.php?graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetPost($id: ID!) {
        post(id: $id, idType: SLUG) {
          title
          content
          excerpt
          date
          tags {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              link
              sourceUrl
            }
          }
        }
      }
    `,
    variables: {
      id: slug,
    },
  });

  return {
    props: {
      post: data.post,
    },
  };
}

export default function PostPage({ post } : PostProps) {
  return (
    <>
    <Head>
      <title>{post.title}</title>
      <meta name="title" content="{post.title}" />
      <meta name="description" content="{post.exceprt}" />

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.bonolabs.co/"/>
      <meta property="og:title" content="We bring the best fractional teams for your startup"/>
      <meta property="og:description" content="Get affordable software development with BonoLabs' fractional teams. Our part-time expert developers from Colombia provide the benefits of a dedicated team. Choose us today!" />
      <meta property="og:image" content="/meta.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.bonolabs.co/" />
      <meta property="twitter:title" content="We bring the best fractional teams for your startup" />
      <meta property="twitter:description" content="Get affordable software development with BonoLabs' fractional teams. Our part-time expert developers from Colombia provide the benefits of a dedicated team. Choose us today!"/>
      <meta property="twitter:image" content="/meta.png" />
      <meta property="og:type" content="website"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex as="main" flexDir="column">
      <Header />
      
      <Box maxW="80%" marginTop={100} mx="auto" p={8}>
        <Heading as="h1" mb={4}>
          {post.title}
        </Heading>
        <Text fontSize="lg" mb={4}>
          Publicado el {post.date}
        </Text>
        {post.featuredImage && (
          <Box mb={4}>
            <Image src={post.featuredImage.node.sourceUrl} alt={post.title} />
          </Box>
        )}
        <Box
          dangerouslySetInnerHTML={{ __html: post.content }}
          bg="white"
          p={4}
          borderRadius="md"
          shadow="md"
        />
      </Box>
      
      <Footer />
    </Flex>
  </>
   
  );
}
