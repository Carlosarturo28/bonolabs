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
  Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdCall } from "react-icons/md";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [navLinks, setNavLinks] = useState([
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about-us" },
  ]);
  const [height, setHeight] = useState(6);
  const [shadow, setShadow] = useState("none");
  const { push } = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const targetId = (event.target as HTMLElement).getAttribute("href");
    const targetElement = document.querySelector(`#${targetId?.split("#")[1]}`);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      push(`${targetId}`);
    }
    onClose();
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newHeight = scrollY > 0 ? 4 : 8;
    const newShadow = scrollY > 0 ? "0px 4px 10px rgba(3, 4, 28, 0.1)" : "none";
    setHeight(newHeight);
    setShadow(newShadow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={[8, 16, 32]}
      py={[4, 4, height]}
      w="100%"
      position="fixed"
      zIndex="100"
      bgColor="white"
      boxShadow={shadow}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={180} />
      </Link>

      {/* Nav Links */}
      <Flex
        as="nav"
        align="center"
        display={["none", "none", "flex"]}
        flexGrow={1}
        justifyContent="center"
      >
        {navLinks.map((link, index) => (
          <Box
            key={link.label}
            mx={8}
            borderBottom="2px solid transparent"
            _hover={{
              borderBottomColor: "orange.500",
              borderBottomWidth: "2px",
              transform: "translateY(-2px)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <a href={link.href} onClick={handleClick}>
              {link.label}
            </a>
          </Box>
        ))}
      </Flex>

      {/* Hamburger Icon */}
      <IconButton
        aria-label="Open navigation menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={["flex", "flex", "none"]}
        variant="unstyled"
        size="lg"
      />

      {/* Drawer Menu */}
      <Drawer
        autoFocus={false}
        returnFocusOnClose={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column">
              {navLinks.map((link) => (
                <Box key={link.label} py={4}>
                  <a href={link.href} onClick={handleClick}>
                    {link.label}
                  </a>
                </Box>
              ))}
              <Button
                mt={8}
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
      </Drawer>

      {/* CTA Button */}
      <Box display={["none", "flex", "flex"]}>
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
