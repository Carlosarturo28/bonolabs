import { GetServerSidePropsContext } from 'next';
import Head from "next/head";
import { Flex, Container, Heading } from "@chakra-ui/react";
import Footer from "@bono/components/Footer";
import PostsGrid from "@bono/components/Blog/PostsGrid";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Header from "@bono/components/Header";
import { GridPost } from '@bono/components/Blog/PostsGrid';

interface Post {
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
  }
}

interface PostsPageProps {
  posts: GridPost[];
}


export async function getServerSideProps(context:GetServerSidePropsContext) {
  const client = new ApolloClient({
    uri: 'http://blog.bonolabs.co/index.php?graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        posts {
          nodes {
            id
            title
            excerpt
            slug
            guid
            status
            date
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts.nodes,
    },
  };
}

export default function PostsPage({ posts }:PostsPageProps) {
  return (
    <>
      <Head>
        <title>The best blog 4 ever</title>
        <meta name="title" content="The best blog 4 ever" />
        <meta name="description" content="The best blog 4 ever" />

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

        <Container marginTop={100} maxW="container.xl" py={8} backgroundColor="gray.100">
          <Heading as="h1" mb={6}>
            Publicaciones
          </Heading>
          <PostsGrid posts={posts} />
        </Container>       
        
        <Footer />
      </Flex>
    </>
  );
}