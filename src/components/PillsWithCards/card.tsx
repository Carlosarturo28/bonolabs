import { Flex, Text, Image } from "@chakra-ui/react";

const Card = ({ content, title, image } : { content: string, title: string, image: string }) => {
  return (
    <Flex
      w={["100%", "70%", "70%"]}
      textAlign="left"
      bgColor="brand.bg"
      m={[0, 4, 4]}
      mt={6}
      flexDir={["column", "row", "row"]}
    >
      <Flex w="100%" p={8} flexDir="column">
        <Text fontSize="3xl" fontWeight="bold" mb={4}>
          {title}
        </Text>
        <Text fontSize="md">{content}</Text>
      </Flex>
      <Flex w="100%">
        <Image
          src={image}
          alt="UX/UI Design"
          objectFit="cover"
          w="100%"
        />
      </Flex>
    </Flex>
  );
};

export default Card;
