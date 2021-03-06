import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
  Icon,
  Text,
  Collapse,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  Spinner,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Heading,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ContainerApp, Fixed, ContainerNonFixed } from "../../styles/style";
import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  FaTags,
  FaTshirt,
  FaImages,
  FaTag,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import config from "../../configs/index";

export default function Produtos({ prods }) {
  const { query, push, isFallback } = useRouter();

  if (isFallback) {
    return (
      <Box w="100vw" h="100vh" p={3}>
        <Grid templateRows={"40px 1fr"} h="100%">
          <Flex>
            <Box w="40px" h="40px" mr={"15px"}>
              <Image
                src="/img/icone.svg"
                width={40}
                height={40}
                quality={100}
              />
            </Box>
            <Box w="100px" h="40px">
              <Image src="/img/logo.png" width={95} height={35} quality={100} />
            </Box>
          </Flex>
          <Flex h={"100%"} align="center" justify="center" direction="column">
            <Spinner size="xl" color="yellow.400" mb={10} />
            <Text fontSize={"xl"}>Buscando Informações...</Text>
          </Flex>
        </Grid>
      </Box>
    );
  }

  const categories = prods.category;
  const products = prods.products;
  const [route, setRoute] = useState("");
  const [idOpen, setIdOpen] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [idRouter, setIdRouter] = useState("");
  const [productShow, setProductShow] = useState([]);

  async function setRouteName() {
    const { produto } = query;
    const result = await categories.find((obj) => obj._id === produto);
    setRoute(result.name.toLowerCase());
    setIdRouter(produto);
  }

  async function handleProductsToShow(id) {
    const res = await products.filter((obj) => obj.category === id);
    await setProductShow(res);
  }

  useEffect(() => {
    handleProductsToShow(idRouter);
  }, [idRouter]);

  useEffect(() => {
    setRouteName();
  }, [query]);

  function handleToogle(e, id) {
    e.preventDefault();
    if (idOpen === id) {
      setIdOpen("");
    } else {
      setIdOpen(id);
    }
    push(`/produtos/${id}`);
  }

  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
        <Flex
          w="100%"
          mt={"60px"}
          bgGradient="linear(to-l, blue.500, blue.900)"
          justify={"center"}
          align={"center"}
          h="60"
          color={"white"}
        >
          <Heading>PRODUTOS</Heading>
        </Flex>
      </ContainerNonFixed>
      <Fixed>
        <Container maxW="7xl" mt={10} mb={10}>
          <Flex align="center" justify="space-between" px={3}>
            <Box>
              <Breadcrumb fontSize={"xs"} textTransform={"uppercase"}>
                <BreadcrumbItem>
                  <Link href="/" passHref>
                    <BreadcrumbLink>início</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link href={`/produtos/${query.produto}`} passHref>
                    <BreadcrumbLink>produtos</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <Link
                    href={`/produtos/${encodeURIComponent(query.produto)}`}
                    passHref
                  >
                    <BreadcrumbLink>{route}</BreadcrumbLink>
                  </Link>
                </BreadcrumbItem>
              </Breadcrumb>
            </Box>
            <Box display={["block", "block", "block", "none", "none"]}>
              <IconButton
                aria-label="Search database"
                icon={menuOpen === false ? <FaBars /> : <FaTimes />}
                fontSize={"20px"}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </Box>
          </Flex>

          <Grid
            templateColumns={["100%", "100%", "100%", "230px 1fr", "230px 1fr"]}
            gap={10}
            mt={10}
          >
            <Box display={["none", "none", "none", "block", "block"]}>
              <Flex
                bg={"blue.500"}
                p={3}
                align="center"
                borderRadius={"md"}
                shadow="md"
                color="white"
              >
                <Icon as={FaTags} mr={3} />
                <Text fontSize={"sm"} fontWeight="700">
                  TODOS OS PRODUTOS
                </Text>
              </Flex>

              <Box
                shadow="md"
                borderWidth={".5px"}
                borderRadius="md"
                mt={2}
                pt={2}
                pr={2}
                pl={2}
              >
                {categories.map((cat) => (
                  <Box key={cat._id}>
                    <Box
                      as={"button"}
                      display="flex"
                      alignItems="center"
                      w="100%"
                      fontSize={"sm"}
                      h="30px"
                      bg={"blue.100"}
                      borderRadius="md"
                      pl={3}
                      pr={3}
                      onClick={(e) => handleToogle(e, cat._id)}
                      mb={2}
                    >
                      <Icon as={FaTshirt} mr={2} />
                      {cat.name}
                    </Box>
                    <Collapse
                      in={idOpen === cat._id ? true : false}
                      animateOpacity
                    >
                      <Box
                        pt={3}
                        pl={5}
                        pr={3}
                        pb={2}
                        color="white"
                        rounded="md"
                        borderWidth="1px"
                        mb={2}
                      >
                        {products
                          .filter((obj) => obj.category === cat._id)
                          .map((pr) => (
                            <Link href={`/catalogo/${pr._id}`} key={pr._id}>
                              <Flex
                                align="center"
                                color="gray.800"
                                cursor="pointer"
                                _hover={{ textDecoration: "underline" }}
                                mb={2}
                              >
                                <Icon as={FaTag} fontSize={`xs`} />
                                <Text ml={2} fontSize="xs">
                                  {pr.name}
                                </Text>
                              </Flex>
                            </Link>
                          ))}
                      </Box>
                    </Collapse>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box>
              <Grid
                templateColumns={[
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                  "repeat(4, 1fr)",
                  "repeat(4, 1fr)",
                  "repeat(4, 1fr)",
                ]}
                gap={5}
                justifyContent="center"
              >
                {productShow.map((ps) => (
                  <Box
                    borderWidth="1px"
                    w="100%"
                    shadow="lg"
                    borderRadius="lg"
                    overflow="hidden"
                    h={"max-content"}
                    key={ps._id}
                  >
                    <Box w="100%">
                      <Image
                        src={`${prods.urlPhoto}/${ps.thumbnail}`}
                        width={250}
                        height={250}
                        layout="responsive"
                        alt={ps.imageDescription}
                        objectFit="cover"
                      />
                    </Box>

                    <Flex
                      p={2}
                      direction="column"
                      justify="center"
                      align="center"
                    >
                      <Text
                        fontSize={["xx-small", "sm", "sm", "sm", "sm"]}
                        fontWeight="700"
                        textAlign="center"
                        noOfLines={2}
                      >
                        {ps.name}
                      </Text>
                      <Text
                        fontSize={["xx-small", "sm", "xs", "xs", "xs"]}
                        textAlign="center"
                        noOfLines={2}
                        isTruncated
                      >
                        {ps.description}
                      </Text>
                      <Link href={`/catalogo/${ps._id}`}>
                        <Button
                          variant="solid"
                          colorScheme="blue"
                          mt={1}
                          _focus={{ boxShadow: "none", outline: "none" }}
                          isFullWidth
                          size={"sm"}
                        >
                          Saiba Mais
                        </Button>
                      </Link>
                    </Flex>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Fixed>
      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
      <Drawer
        isOpen={menuOpen}
        placement="left"
        onClose={() => setMenuOpen(false)}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color="white" />
            <DrawerHeader bg="blue.500">
              <Flex align="center" color={"white"}>
                <Icon as={FaTags} fontSize={"20px"} mr={5} />
                <Heading size="md">TODOS OS PRODUTOS</Heading>
              </Flex>
            </DrawerHeader>

            <DrawerBody overflow="auto" p={2}>
              <Box>
                <Box borderRadius="md" mt={2} pt={2} pr={2} pl={2}>
                  {categories.map((cat) => (
                    <Box key={cat._id}>
                      <Box
                        as={"button"}
                        display="flex"
                        alignItems="center"
                        w="100%"
                        fontSize={"sm"}
                        h="30px"
                        bg={"blue.100"}
                        borderRadius="md"
                        pl={3}
                        pr={3}
                        onClick={(e) => handleToogle(e, cat._id)}
                        mb={2}
                      >
                        <Icon as={FaTshirt} mr={2} />
                        {cat.name}
                      </Box>
                      <Collapse
                        in={idOpen === cat._id ? true : false}
                        animateOpacity
                      >
                        <Box
                          pt={3}
                          pl={5}
                          pr={3}
                          pb={2}
                          color="white"
                          rounded="md"
                          borderWidth="1px"
                          mb={2}
                        >
                          {products
                            .filter((obj) => obj.category === cat._id)
                            .map((pr) => (
                              <Link href={`/catalogo/${pr._id}`} key={pr._id}>
                                <Flex
                                  align="center"
                                  color="gray.800"
                                  cursor="pointer"
                                  _hover={{ textDecoration: "underline" }}
                                  mb={2}
                                >
                                  <Icon as={FaTag} fontSize={`xs`} />
                                  <Text ml={2} fontSize="xs">
                                    {pr.name}
                                  </Text>
                                </Flex>
                              </Link>
                            ))}
                        </Box>
                      </Collapse>
                    </Box>
                  ))}
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </ContainerApp>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch(`${config.general.urlApi}/findCategory`);
  const data = await response.json();
  const paths = await data.category.map((category) => {
    return { params: { produto: category._id } };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async () => {
  const response = await fetch(`${config.general.urlApi}/productPage`);
  const data = await response.json();
  return {
    props: {
      prods: data,
    },
    revalidate: 30,
  };
};
