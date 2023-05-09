import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { Flex, Container, Heading } from "@chakra-ui/react";
import Footer from "@bono/components/Footer";
import PostsGrid from "@bono/components/Blog/PostsGrid";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Header from "@bono/components/Header";
import { GridPost } from "@bono/components/Blog/PostsGrid";
import React from "react";
interface PostsPageProps {
  posts: GridPost[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const client = new ApolloClient({
    uri: "https://blog.bonolabs.co/index.php?graphql",
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
            tags {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
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

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>The Fractional Hub - Tools, Tips, and Tales for Successful Team Augmentation</title>
        <meta name="title" content="The Fractional Hub - Tools, Tips, and Tales for Successful Team Augmentation" />
        <meta name="description" content="Discover the power of fractional teams and agile software development. Get expert insights, tips, and strategies for successful team augmentation at our blog." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bonolabs.co/blog" />
        <meta
          property="og:title"
          content="We bring the best fractional teams for your startup"
        />
        <meta
          property="og:description"
          content="Discover the power of fractional teams and agile software development. Get expert insights, tips, and strategies for successful team augmentation at our blog."
        />
        <meta property="og:image" content="/meta.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.bonolabs.co/blog" />
        <meta
          property="twitter:title"
          content="The Fractional Hub - Tools, Tips, and Tales for Successful Team Augmentation"
        />
        <meta
          property="twitter:description"
          content="Discover the power of fractional teams and agile software development. Get expert insights, tips, and strategies for successful team augmentation at our blog."
        />
        <meta property="twitter:image" content="/meta.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="main" flexDir="column">
        <Header />

        <Flex
          marginTop={10}
          maxW="100%"
          flexDir="column"
          py={8}
          bgColor="white"
        >
          <Flex flexDir="column" px={[6, 24]} pt={[12, 32]} pb={[10, 20]} mb={[6, 16]} justifyContent="center" bgColor="blue.600">
          <Heading color="white" as="h1" fontSize={["2xl", "4xl"]} >
            The Fractional Hub
          </Heading>
          <Heading mt={[2, 4]} color="white" as="h2" fontWeight={400} fontSize={["lg", "xl"]} >
          Tools, Tips, and Tales for Successful Team Augmentation.
          </Heading>
          </Flex>
          <PostsGrid posts={posts} />
        </Flex>

        <Footer />
      </Flex>
    </>
  );
}
