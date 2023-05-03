import { Box, Flex, Image, Link, Text, Button } from "@chakra-ui/react";

const CallToAction = () => {
  return (
<Flex
      direction={["column", "column", "row"]}
      align="center"
      justify="space-between"
      py={[8, 12, 16]}
      pl={[8, 16, 32]}
      pr={0}
      bgColor="blue.500"
      bgImage="/bg_figure_2.png"
      bgRepeat="no-repeat"
      bgPosition="left"
    >
      {/* Columna Izquierda */}
      <Box  pr={[8, 16, 32]} mb={[8, 8, 0]} w={["100%", "50%", "50%"]}>
      <Text fontWeight="bold" color="white">
          GET IN TOUCH
        </Text>
        <Text color="white" as="h2" fontSize={["3xl", "3xl", "5xl"]} fontWeight="bold">
          Ready to get started?
        </Text>
        <Button as="a" href="mailto:hello@bonolabs.co" mt={4} mb={[4, 0, 0]} borderRadius={50} colorScheme="orange" size="lg">
          Contact Us
        </Button>
      </Box>

      {/* Columna Derecha */}
      <Flex justifyContent="flex-end" w={["100%", "100%", "50%"]}>
        <Image
        borderLeftRadius={50}
          src="https://images.pexels.com/photos/3184427/pexels-photo-3184427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Imagen del Hero"
          objectFit="cover"
          w={650}
          h={[250, 380, 380]}
        />
      </Flex>
    </Flex>
  );
}

export default CallToAction
