import Head from "next/head";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Icon,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Collapse,
  DrawerCloseButton,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FaHome,
  FaTags,
  FaInfoCircle,
  FaPhone,
  FaQuestionCircle,
  FaBars,
  FaTimes,
  FaTshirt,
} from "react-icons/fa";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

import { useHeader } from "../context/header";

export default function HeaderApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { headerItens } = useHeader();

  return (
    <>
      <Head>
        <title>
          Braz Camiseteria | Uniforme Empresarial, Uniforme Esportivo, Uniforme
          Promocional, Abadás
        </title>
        <link rel="icon" href="/img/icone.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Uniformes para todos os segmentos, uniformes esportivos, para academia, para formandos, para eventos, para empresas, abadás para festas, máscadas e muito mais"
        />
        <meta
          name="keywords"
          content="uniformes, abadá, uniforme, esportivo, esportivos, academia, formandos, eventos, máscara, empresas, serigrafia, malha"
        />
        <meta name="robots" content="index,nofollow" />
        <meta name="author" content="Natanael Bezerra - NK Informática" />
        <meta name="googletboot" content="index,nofollow" />
        <meta httpEquiv="content-language" content="pt-br" />
        <meta content="Global" name="distribution" />
      </Head>

      {/** MENU NORMAL */}
      <Box
        bg="rgba(255,255,255,.98)"
        h="60px"
        pos={"fixed"}
        top={0}
        right={0}
        left={0}
        zIndex={500}
        shadow={"lg"}
        borderBottomWidth={"2px"}
        borderBottomColor={"blue.500"}
      >
        <Container maxW={"6xl"}>
          <Flex pr={10} pl={10} justify={"space-between"}>
            <Flex h="60px" align="center">
              <Box h="50px" cursor="pointer">
                <Link href="/">
                  <Image
                    src="/img/logo.svg"
                    width={115}
                    height={50}
                    alt="Braz Multimídia"
                  />
                </Link>
              </Box>
            </Flex>
            <Flex
              w={"70%"}
              h="60px"
              justify="flex-end"
              align="center"
              display={["flex", "flex", "flex", "none", "none"]}
            >
              <IconButton
                aria-label="Search database"
                icon={menuOpen === false ? <FaBars /> : <FaTimes />}
                fontSize="28px"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </Flex>
            <Flex
              w={"70%"}
              h="60px"
              justify="flex-end"
              align="center"
              display={["none", "none", "none", "flex", "flex"]}
            >
              <Link href="/">
                <Button
                  size="lg"
                  borderRadius="sm"
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<FaHome />}
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                  }}
                  color="blue.500"
                  _hover={{ bg: "blue.500", color: "white" }}
                  fontSize="sm"
                  h="100%"
                >
                  Início
                </Button>
              </Link>
              <Menu colorScheme="yellow">
                <MenuButton
                  as={Button}
                  size="lg"
                  borderRadius="sm"
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<FaTags />}
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                  }}
                  color="blue.500"
                  _hover={{ bg: "blue.500", color: "white" }}
                  h="100%"
                  fontSize="sm"
                  onClick={() => {}}
                  rightIcon={<BiChevronDown />}
                >
                  Produtos
                </MenuButton>
                <MenuList shadow="lg">
                  {headerItens.map((item) => (
                    <Link key={item._id} href={`/produtos/${item._id}`}>
                      <MenuItem
                        icon={<FaTshirt />}
                        _hover={{
                          bg: "blue.500",
                          outline: "none",
                          color: "gray.100",
                        }}
                        _focus={{
                          bg: "blue.500",
                          outline: "none",
                          color: "gray.100",
                        }}
                      >
                        {item.name}
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </Menu>

              <Link href={"/contato"}>
                <Button
                  size="lg"
                  borderRadius="sm"
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<FaPhone />}
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                  }}
                  color="blue.500"
                  _hover={{ bg: "blue.500", color: "white" }}
                  h="100%"
                  fontSize="sm"
                >
                  Fale Conosco
                </Button>
              </Link>
              <Link href="/#comofunciona">
                <Button
                  size="lg"
                  borderRadius="sm"
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<FaQuestionCircle />}
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                  }}
                  color="blue.500"
                  _hover={{ bg: "blue.500", color: "white" }}
                  fontSize="sm"
                  h="100%"
                >
                  Como Funciona
                </Button>
              </Link>
              <Link href="/#quemsomos">
                <Button
                  size="lg"
                  borderRadius="sm"
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<FaInfoCircle />}
                  _focus={{
                    boxShadow: "none",
                    outline: "none",
                  }}
                  color="blue.500"
                  _hover={{ bg: "blue.500", color: "white" }}
                  h="100%"
                  fontSize="sm"
                >
                  Quem Somos
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
      {/** MENU MOBILE */}

      <Drawer
        isOpen={menuOpen}
        placement="left"
        onClose={() => setMenuOpen(false)}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color={"white"} />
            <DrawerHeader bg="blue.500">
              <Flex align="center" color="white">
                <Icon as={FaBars} fontSize={"25px"} mr={5} />
                <Heading size="lg">MENU</Heading>
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <Link href="/">
                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme="gray"
                  leftIcon={<FaHome />}
                  fontSize="sm"
                  isFullWidth
                  mb={3}
                  mt={2}
                >
                  Início
                </Button>
              </Link>

              <Button
                size="lg"
                borderRadius="lg"
                colorScheme="gray"
                leftIcon={<FaTags />}
                rightIcon={<BiChevronDown />}
                fontSize="sm"
                isFullWidth
                mb={3}
                onClick={() => setIsOpen(!isOpen)}
              >
                Produtos
              </Button>
              <Collapse in={isOpen} animateOpacity>
                <Box
                  p="10px"
                  color="white"
                  mb={3}
                  borderWidth="1px"
                  borderRadius="md"
                >
                  {headerItens.map((itm) => (
                    <Link href={`/produtos/${itm._id}`} key={itm._id}>
                      <Flex
                        color="gray.900"
                        fontSize="xs"
                        align="center"
                        mb={2}
                      >
                        <Icon as={FaTshirt} mr={2} />
                        {itm.name}
                      </Flex>
                    </Link>
                  ))}
                </Box>
              </Collapse>
              <Link href="/">
                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme="gray"
                  leftIcon={<FaPhone />}
                  fontSize="sm"
                  isFullWidth
                  mb={3}
                >
                  Fale Conosco
                </Button>
              </Link>
              <Link href="/#comofunciona">
                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme="gray"
                  leftIcon={<FaQuestionCircle />}
                  fontSize="sm"
                  isFullWidth
                  mb={3}
                >
                  Como Funciona
                </Button>
              </Link>
              <Link href="/#quemsomos">
                <Button
                  size="lg"
                  borderRadius="lg"
                  colorScheme="gray"
                  leftIcon={<FaInfoCircle />}
                  fontSize="sm"
                  isFullWidth
                  mb={3}
                >
                  Quem Somos
                </Button>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
