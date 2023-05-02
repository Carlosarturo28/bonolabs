import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { MdCall } from "react-icons/md";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [navLinks, setNavLinks] = useState([
    { label: "Link 1", href: "#" },
    { label: "Link 2", href: "#" },
    { label: "Link 3", href: "#" },
  ]);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={[8, 16, 32]}
      py={10}
      w="100%"
    >
      {/* Logo */}
      <Box>
        <Image src="/logo.svg" alt="Logo" width={180} />
      </Box>

      {/* Nav Links */}
{/*       <Flex
        as="nav"
        align="center"
        display={["none", "none", "flex"]}
        flexGrow={1}
        justifyContent="center"
      >
        {navLinks.map((link) => (
          <Box key={link.label} mx={8}>
            <a href={link.href}>{link.label}</a>
          </Box>
        ))}
      </Flex> */}

      {/* Hamburger Icon */}
{/*       <IconButton
        aria-label="Open navigation menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={["flex", "flex", "none"]}
        variant="unstyled"
        size="lg"
      /> */}

      {/* Drawer Menu */}
  {/*     <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column">
              {navLinks.map((link) => (
                <Box
                  key={link.label}
                  py={2}
                  borderBottom="1px solid"
                  borderColor="gray.200"
                >
                  <a href={link.href}>{link.label}</a>
                </Box>
              ))}
              <Button
                as="a"
                href="tel:+573152123311"
                px={[2, 4, 6]}
                rightIcon={<MdCall />}
                borderRadius={50}
                colorScheme="orange"
              >
                Let&apos;s talk
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}

      {/* CTA Button */}
      <Box display="flex">
        <Button
          as="a"
          href="tel:+573152123311"
          px={[4, 4, 6]}
          rightIcon={<MdCall />}
          borderRadius={50}
          colorScheme="orange"
        >
          Let&apos;s talk
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
