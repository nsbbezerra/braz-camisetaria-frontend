import { useEffect } from "react";
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import { ContainerApp, Fixed, ContainerNonFixed } from "../styles/style";
import Banner from "../components/Banner";
import {
  Grid,
  Box,
  Flex,
  Icon,
  Text,
  Heading,
  Button,
  Container,
  Center,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaPaintBrush, FaCreditCard, FaTruck, FaCheck } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
import config from "../configs/index";
import Carousel from "react-elastic-carousel";
import Link from "next/link";
import Pixel from "../pixel/index";

import { useFooter } from "../context/footer";
import { useHeader } from "../context/header";

export default function Home({ info }) {
  const { footerItens, setFooterItens } = useFooter();
  const { headerItens, setHeaderItens } = useHeader();

  useEffect(() => {
    setFooterItens(info.productsFooter);
    setHeaderItens(info.category);
  }, [info]);

  const route = useRouter();

  function goTo(e, href) {
    e.preventDefault();
    route.push(href);
  }

  const CustomArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === "PREV" ? <IoIosArrowBack /> : <IoIosArrowForward />;
    return (
      <IconButton
        onClick={onClick}
        disabled={isEdge}
        aria-label="Search database"
        icon={pointer}
        fontSize="3xl"
        variant="link"
        _focus={{ outline: "none" }}
      />
    );
  };

  const { category, products, comments, urlPhoto } = info;

  return (
    <ContainerApp>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <ContainerNonFixed>
        <HeaderApp />
        <Banner />
        <Box
          bg="linear-gradient( 180deg, rgba(252,252,252,1) 0%, rgba(238,238,238,1) 49%, rgba(252,252,252,1) 100% )"
          display={["none", "none", "none", "flex", "flex"]}
          alignItems="center"
          justifyContent="center"
          p="5px"
        >
          <Grid
            templateColumns="repeat(4, 1fr)"
            justifyContent="center"
            gap="15px"
          >
            <Flex align="center">
              <Icon as={FaCreditCard} fontSize="5xl" mr="10px" />
              <Text fontSize={"sm"}>Pague no Boleto ou Cartão de Crédito</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaTruck} fontSize="5xl" mr="10px" />
              <Text fontSize={"sm"}>Entregamos para todo o Brasil</Text>
            </Flex>
            <Flex align="center">
              <Icon as={RiMoneyDollarCircleFill} fontSize="5xl" mr="10px" />
              <Text fontSize={"sm"}>Cobrimos 40% do valor do Frete</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaPaintBrush} fontSize="4xl" mr="10px" />
              <Text fontSize={"sm"}>Criamos sua arte 100% grátis</Text>
            </Flex>
          </Grid>
        </Box>
        <Flex
          justify="center"
          display={["none", "none", "none", "flex", "flex"]}
        >
          <Image
            src="/img/shadow-web.png"
            width={1350}
            height={50}
            layout="fixed"
          />
        </Flex>
      </ContainerNonFixed>
      <Container maxW={"6xl"}>
        <Box mt={10} textAlign="center">
          <Heading color="blue.500">CONFIRA NOSSOS PRODUTOS</Heading>
          <Text color="blue.500" fontSize={["xs", "sm", "sm", "sm", "sm"]}>
            UNIFORMES PARA DIFERENTES UTILIDADES, ESCOLHA O QUE MELHOR LHE
            ATENDER
          </Text>
        </Box>

        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 250px))"
          gap={"30px"}
          justifyContent="center"
          mt={10}
        >
          {JSON.stringify(category) === "{}" ? (
            <Box h={"350px"}>
              <Text fontSize="5xl" fontWeight="">
                Nenhum dado para mostrar!
              </Text>
            </Box>
          ) : (
            category.map((cat) => (
              <Box
                borderWidth="1px"
                w="250px"
                shadow="lg"
                borderRadius="lg"
                overflow="hidden"
                key={cat._id}
              >
                <Image
                  src={`${urlPhoto}/${cat.thumbnail}`}
                  alt={cat.imageDescription}
                  width={250}
                  height={250}
                  layout="intrinsic"
                />

                <Flex
                  p={4}
                  direction="column"
                  justify="center"
                  align="center"
                  h="80px"
                >
                  <Text
                    fontSize="md"
                    fontWeight="700"
                    textAlign="center"
                    w="100%"
                    bg="blue.500"
                    color="white"
                    p={1}
                  >
                    {cat.name}
                  </Text>
                  <Link href={`/produtos/${cat._id}`}>
                    <Button
                      size="sm"
                      variant="link"
                      colorScheme="yellow"
                      mt={2}
                      _focus={{ boxShadow: "none", outline: "none" }}
                      p={1}
                    >
                      Veja Mais
                    </Button>
                  </Link>
                </Flex>
              </Box>
            ))
          )}
        </Grid>
      </Container>
      <Box
        bgGradient="linear(to-l, blue.500, blue.900)"
        mt={20}
        backgroundPosition="bottom"
        p={[5, 20, 20, 20, 20]}
        w="100%"
      >
        <Container maxW={"6xl"}>
          <Center>
            <Heading color="white" textAlign="center" fontSize={"5xl"}>
              QUEM SOMOS
            </Heading>
          </Center>
          <Grid
            templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
            justifyContent="center"
            maxWidth={"100%"}
            mt={[5, 10, 10, 10, 10]}
            gap={10}
          >
            <Flex align="center" direction={"column"} gap={5}>
              <Text color="white" textAlign="justify">
                A Braz Multimídia é uma empresa especializada na fabricação e
                comercialização de uniformes.
              </Text>
              <Text color="white" textAlign="justify">
                Com fábricas situadas na região de Brasília - DF, a Braz
                Multimídia atua em todo o território brasileiro e veste diversas
                empresas, eventos, times, alunos e etc, no país.
              </Text>
              <Text color="white" textAlign="justify">
                A qualidade estampada em nossos produtos é resultado de um
                constante trabalho de pesquisa que busca inovações, tecnologias
                e tendências do mercado, para que, interagindo com os clientes,
                possamos oferecer o que há de melhor em uniformes e
                personalizados no Brasil.
              </Text>
            </Flex>
            <Flex>
              <Box
                w="100%"
                rounded={"xl"}
                overflow={"hidden"}
                h="min-content"
                shadow={"dark-lg"}
              >
                <Image
                  src="/img/breadcrumb.jpg"
                  width={500}
                  height={280}
                  objectFit="cover"
                  layout="responsive"
                />
              </Box>
            </Flex>
          </Grid>
        </Container>
      </Box>
      <Box
        bgGradient="linear(to-t, gray.100, white)"
        p={[5, 20, 20, 20, 20]}
        w="100%"
        zIndex={"100"}
      >
        <Container maxW={"6xl"}>
          <Center>
            <Heading color="blue.500" textAlign="center" fontSize={"5xl"}>
              NOSSA ESTRUTURA
            </Heading>
          </Center>
          <Text mt={5} color={"blue.500"} textAlign={"center"} fontSize={"lg"}>
            A Braz Multimídia orgulha-se de empregar em seus processos
            produtivos e administrativos, tecnologias e equipamentos de ponta no
            mercado, a fim de tornar sua operação mais rápida, ágil e
            principalmente eficiente. Desde o primeiro contato, os dados do
            cliente e de seu pedido são inseridos em um sistema de gestão online
            que é acessado pela equipe interna em todos os setores.
          </Text>
          <Text mt={3} color={"blue.500"} textAlign={"center"} fontSize={"lg"}>
            Desta forma, são minimizados as chances de desencontro de
            informações e consequentemente, erros nos pedidos. Na produção o
            cliente conta com mais tecnologia. Nossa fábrica trabalha com os
            equipamentos mais modernos dentre os quais se destacam os de
            impressão digital para sublimação, bordado, corte, costura e
            serigrafia. Além disso, emprega insumos de primeira qualidade em
            todos os componentes das peças, aliando assim, beleza e conforto em
            todos os produtos.
          </Text>
        </Container>
      </Box>
      <Container maxW="6xl">
        <Box mt={20} textAlign="center" mb={10}>
          <Heading>PORTIFÓLIO DE ARTES</Heading>
          <Text>Nosso Portifólio de Artes</Text>
        </Box>
        {JSON.stringify(products) === "{}" ? (
          <Box h={"350px"}>
            <Text fontSize="5xl" fontWeight="">
              Nenhum dado para mostrar!
            </Text>
          </Box>
        ) : (
          <Carousel
            breakPoints={config.carousel}
            renderArrow={CustomArrow}
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <Flex mt={3}>
                  {pages.map((page) => {
                    const isActivePage = activePage === page;
                    return (
                      <Box
                        w="15px"
                        h="15px"
                        shadow="sm"
                        bg={isActivePage ? "yellow.400" : "white"}
                        key={page}
                        onClick={() => onClick(page)}
                        borderRadius="50%"
                        mr={1}
                        borderWidth="1px"
                        borderColor="gray.500"
                      />
                    );
                  })}
                </Flex>
              );
            }}
          >
            {products.map((prod) => (
              <Box w={"200px"} h={"250px"} p={1} key={prod._id}>
                <Box
                  w={"195px"}
                  borderWidth="1px"
                  borderRadius="lg"
                  shadow="md"
                  overflow="hidden"
                >
                  <Image
                    src={`${urlPhoto}/${prod.thumbnail}`}
                    alt={prod.imageDescription}
                    width={195}
                    height={195}
                    layout="intrinsic"
                  />
                  <Flex>
                    <Button
                      size="md"
                      variant="ghost"
                      colorScheme="yellow"
                      isFullWidth
                      _focus={{ boxShadow: "none", outline: "none" }}
                      p={1}
                      onClick={(e) => goTo(e, `/catalogo/${prod._id}`)}
                    >
                      Veja Mais
                    </Button>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Carousel>
        )}
      </Container>

      <Box mt={20} bg="gray.900" pt={10} pb={20} w="100%">
        <Container maxW={"6xl"}>
          <Box textAlign="center" mb={10}>
            <Heading color="yellow.400">DEPOIMENTOS</Heading>
          </Box>
          {JSON.stringify(comments) === "{}" ? (
            <Box h={"100px"}>
              <Text fontSize="5xl" fontWeight="">
                Nenhum dado para mostrar!
              </Text>
            </Box>
          ) : (
            <Carousel
              breakPoints={config.depoiments}
              renderArrow={CustomArrow}
              renderPagination={({ pages, activePage, onClick }) => {
                return (
                  <Flex mt={3}>
                    {pages.map((page) => {
                      const isActivePage = activePage === page;
                      return (
                        <Box
                          w="15px"
                          h="15px"
                          shadow="sm"
                          bg={isActivePage ? "yellow.400" : "gray.500"}
                          key={page}
                          onClick={() => onClick(page)}
                          borderRadius="50%"
                          mr={1}
                        />
                      );
                    })}
                  </Flex>
                );
              }}
            >
              {comments.map((com) => (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  w="255px"
                  key={com._id}
                >
                  <Flex
                    bg="gray.200"
                    borderRadius="lg"
                    w={"250px"}
                    h={"150px"}
                    direction="column"
                    align="center"
                    p={2}
                  >
                    <Text fontSize="11px" textAlign="center">
                      {com.text}
                    </Text>
                  </Flex>
                  <Box
                    w={"83px"}
                    h="83px"
                    borderRadius="50%"
                    borderWidth="2px"
                    borderColor="yellow.400"
                    overflow="hidden"
                    mt={-10}
                  >
                    <Image
                      src={`${urlPhoto}/${com.avatar}`}
                      width={83}
                      height={83}
                      layout="intrinsic"
                      alt="Palmieri Uniformes Avatar"
                    />
                  </Box>

                  <Text color="gray.200" fontSize="sm">
                    {com.author}
                  </Text>
                </Box>
              ))}
            </Carousel>
          )}
        </Container>
      </Box>

      <Box w="100%">
        <FooterApp />
      </Box>
    </ContainerApp>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${config.general.urlApi}/home`);
  const data = await response.json();
  return {
    props: {
      info: data,
    },
    revalidate: 30,
  };
};
