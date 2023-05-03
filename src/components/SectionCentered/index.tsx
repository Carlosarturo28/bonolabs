import React, { ReactNode } from "react";
import { Flex, Heading, Text, Icon } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  title: [string, string];
  description: string;
  bgColor?: string;
  id: string;
}

const SectionCentered: React.FC<Props> = ({
  children,
  title,
  description,
  bgColor,
  id,
}) => {
  return (
    <Flex
      id={id}
      w="100%"
      py={[20, 24]}
      bgColor={bgColor ? bgColor : "white"}
      mx="auto"
      px={[4, 8]}
      direction="column"
      align="center"
    >
      <Flex
        mb={8}
        alignItems="center"
        maxW="800px"
        textAlign="center"
        flexDir="column"
      >
        <Flex flexDir={["column", "row"]}>
          <Heading as="h3" size="xl">
            {title[0]}
          </Heading>
          <Heading ml={[0, 0, 2]} as="h3" size="xl">
            {title[1]}
          </Heading>
        </Flex>
        <Text color="brand.gray" mt={4} fontSize="lg">
          {description}
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="space-between"
        align="center"
        w={"100%"}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default SectionCentered;
