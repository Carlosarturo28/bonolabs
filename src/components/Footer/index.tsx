import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      py={12}
      direction="column"
      align="center"
      width="100%"
      borderTopWidth={1}
      zIndex={10}
    >
      <Image src="/logo.svg" w={230} alt="CraftedBlocks logo" />
      <Box>
        {/* Navegación */}
        <Flex direction="column" align="center" my={10}>
          <Text>Av. 5b Nte. #52N-58 - Cali, Valle, Colombia</Text>
          <Text mt={4}>Call us! <Button as="a" href="tel:+573152123311" variant="unstyled">+57 315 212 3311</Button></Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Footer;
