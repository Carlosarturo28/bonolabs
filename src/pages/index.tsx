import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@bono/styles/Home.module.css";
import Header from "@bono/components/Header";
import Hero from "@bono/components/Hero";
import { Flex } from "@chakra-ui/react";
import SectionCentered from "@bono/components/SectionCentered";
import PillsWithCards from "@bono/components/PillsWithCards";
import Footer from "@bono/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <!-- Primary Meta Tags -->
<title>We bring the best fractional teams for your startup</title>
<meta name="title" content="We bring the best fractional teams for your startup" />
<meta name="description" content="Looking to supercharge your software development efforts without breaking the bank? BonoLabs' fractional teams have got you covered! Our expert developers from Colombia can join your project on a part-time basis, giving you all the benefits of a dedicated team without the high costs. Don't settle for less – choose BonoLabs and experience the power of fractional teams today!" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.bonolabs.co/"/>
<meta property="og:title" content="We bring the best fractional teams for your startup"/>
<meta property="og:description" content="Looking to supercharge your software development efforts without breaking the bank? BonoLabs' fractional teams have got you covered! Our expert developers from Colombia can join your project on a part-time basis, giving you all the benefits of a dedicated team without the high costs. Don't settle for less – choose BonoLabs and experience the power of fractional teams today!" />
<meta property="og:image" content="/meta.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.bonolabs.co/" />
<meta property="twitter:title" content="We bring the best fractional teams for your startup" />
<meta property="twitter:description" content="Looking to supercharge your software development efforts without breaking the bank? BonoLabs' fractional teams have got you covered! Our expert developers from Colombia can join your project on a part-time basis, giving you all the benefits of a dedicated team without the high costs. Don't settle for less – choose BonoLabs and experience the power of fractional teams today!"/>
<meta property="twitter:image" content="/meta.png" />
        <meta property="og:type" content="website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="main" flexDir="column">
        <Header />
        <Hero />
        <SectionCentered
          id="features"
          title={["Pay less,", "achieve more"]}
          description="In a volatile market, don't get stuck with permanent hires. Boost your business growth and efficiency with our on-demand fractional teams at Bono."
        >
          <PillsWithCards />
        </SectionCentered>
        <Footer />
      </Flex>
    </>
  );
}
