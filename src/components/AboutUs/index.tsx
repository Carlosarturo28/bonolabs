import { Container, Box, Text, Heading } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      bg="gray.100"
      py={10}
      px={[4, "auto"]}
      pt={[24, "auto"]}
      bgImage="/bg_figure.png"
      bgRepeat="no-repeat"
      bgPos="right"
    >
      <Container maxW="container.lg">
        <Heading as="h2" size="2xl" mb={6}>
          About Us
        </Heading>
        <Text fontSize="xl" mb={6}>
          Bono Labs is a software development company based in Colombia that was
          founded in 2022 by a group of friends who wanted to offer high-quality
          software development services to clients in the USA and Europe. The
          company specializes in customized software development and fractional
          teams.
        </Text>
        <Text fontSize="xl" mb={12}>
          The founders recognized the need for a company that could provide
          software development services with a focus on quality and a favorable
          time zone for the American market. With this vision in mind, they
          decided to start Bono Labs.
        </Text>
      </Container>
    </Box>
  );
};

export default AboutUs;
