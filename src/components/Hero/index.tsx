import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      align="center"
      justify="space-between"
      py={[8, 12, 16]}
      pl={[8, 16, 32]}
      pr={0}
      bgColor="brand.bg"
    >
      {/* Columna Izquierda */}
      <Box  pr={[8, 16, 32]} mb={[8, 8, 0]} w={["100%", "50%", "50%"]}>
        <Text as="h1" fontSize={["3xl", "3xl", "5xl"]} fontWeight="bold">
          We have the perfect <Text color="blue.500">fractional team</Text> for your idea
        </Text>
        <Text 
          as="h2"
          fontSize={["lg", "xl", "2xl"]}
          color="gray.500"
          my={4}
        >
          Bring essential roles and skills to your project for a fraction of the time and a fraction of the cost of full-time engagement.
        </Text>
        <Button as="a" href="mailto:hola@bonolabs.co" mt={4} mb={[4, 0, 0]} borderRadius={50} colorScheme="blue" size="lg">
          Tell me how
        </Button>
      </Box>

      {/* Columna Derecha */}
      <Flex justifyContent="flex-end" w={["100%", "100%", "50%"]}>
        <Image
        borderLeftRadius={50}
          src="https://images.pexels.com/photos/14863919/pexels-photo-14863919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen del Hero"
          objectFit="cover"
          w={600}
          h={[250, 380, 380]}
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
