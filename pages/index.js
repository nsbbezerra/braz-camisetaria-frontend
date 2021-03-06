import { useEffect } from "react";
import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import { ContainerApp, ContainerNonFixed } from "../styles/style";
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
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaPaintBrush, FaCreditCard, FaTruck } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";
import config from "../configs/index";
import Carousel from "react-elastic-carousel";
import Link from "next/link";
import Pixel from "../pixel/index";
import Message from "../components/Message";

import { useFooter } from "../context/footer";
import { useHeader } from "../context/header";
import { BiArrowFromLeft } from "react-icons/bi";

export default function Home({ info }) {
  const { setFooterItens } = useFooter();
  const { setHeaderItens } = useHeader();

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
          p="7px"
        >
          <Container maxW="6xl">
            <Grid
              templateColumns="repeat(4, 1fr)"
              justifyContent="center"
              gap={20}
            >
              <Flex align="center" color="blue.500">
                <Icon as={FaCreditCard} fontSize="4xl" mr="10px" />
                <Text fontSize={"sm"} fontWeight={"semibold"}>
                  Pague no Boleto ou Cart??o de Cr??dito
                </Text>
              </Flex>
              <Flex align="center" color="blue.500">
                <Icon as={FaTruck} fontSize="4xl" mr="10px" />
                <Text fontSize={"sm"} fontWeight={"semibold"}>
                  Entregamos para todo o Brasil
                </Text>
              </Flex>
              <Flex align="center" color="blue.500">
                <Icon as={RiMoneyDollarCircleFill} fontSize="4xl" mr="10px" />
                <Text fontSize={"sm"} fontWeight={"semibold"}>
                  Cobrimos 40% do valor do Frete
                </Text>
              </Flex>
              <Flex align="center" color="blue.500">
                <Icon as={FaPaintBrush} fontSize="4xl" mr="10px" />
                <Text fontSize={"sm"} fontWeight={"semibold"}>
                  Criamos sua arte 100% gr??tis
                </Text>
              </Flex>
            </Grid>
          </Container>
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
      <Container maxW={"5xl"}>
        <Box mt={10} textAlign="center">
          <Heading
            color="blue.500"
            fontSize={["2xl", "3xl", "4xl", "4xl", "4xl"]}
          >
            CONFIRA NOSSOS PRODUTOS
          </Heading>
          <Text color="blue.500" fontSize={["xs", "sm", "sm", "sm", "sm"]}>
            UNIFORMES PARA DIFERENTES UTILIDADES, ESCOLHA O QUE MELHOR LHE
            ATENDER
          </Text>
        </Box>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={[5, 5, 5, 7, 7]}
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
                w="100%"
                shadow="lg"
                borderRadius="lg"
                overflow="hidden"
                key={cat._id}
              >
                <Box w="100%">
                  <Image
                    src={`${urlPhoto}/${cat.thumbnail}`}
                    alt={cat.imageDescription}
                    width={250}
                    height={250}
                    layout="responsive"
                  />
                </Box>

                <Flex
                  p={[2, 2, 2, 3, 3]}
                  direction="column"
                  justify="center"
                  align="center"
                >
                  <Text
                    fontSize={["sm", "md", "md", "md", "md"]}
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

      <Container maxW={"6xl"} id="comofunciona">
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          mt={20}
          mb={10}
        >
          <Divider opacity={0.3} />
          <Box
            w="30px"
            h="30px"
            bg="white"
            borderWidth={"1px"}
            borderColor={"blue.100"}
            rounded={"full"}
            mt={"-17px"}
            zIndex={1}
          />
        </Flex>
        <Box textAlign="center">
          <Heading
            color="blue.500"
            fontSize={["2xl", "3xl", "4xl", "4xl", "4xl"]}
          >
            PROCESSO DE COMPRA
          </Heading>
          <Text color="blue.500" fontSize={["xs", "sm", "sm", "sm", "sm"]}>
            VEJA PASSO A PASSO DESDE O MOMENTO DA ESCOLHA AT?? O RECEBIMENTO EM
            SUA CASA
          </Text>
        </Box>

        <Grid
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(5, 1fr)",
            "repeat(5, 1fr)",
            "repeat(5, 1fr)",
          ]}
          mt={10}
          justifyContent={"center"}
          gap={5}
        >
          <Flex
            direction={"column"}
            align={"center"}
            borderRightWidth={"1px"}
            px={5}
            pos={"relative"}
          >
            <Box w="15px" pos={"absolute"} right={-4} top={10}>
              <Image
                src="/img/arrow.svg"
                width={50}
                height={100}
                objectFit="cover"
                layout="responsive"
                alt="Braz Camiseteira"
              />
            </Box>
            <Box w="100%">
              <Image
                src="/img/1.svg"
                width={500}
                height={410}
                objectFit="cover"
                layout="responsive"
                alt="Braz Camiseteira"
              />
            </Box>
            <Text textAlign={"center"} mt={2} fontSize={"xs"}>
              VOC?? ESCOLHE O MODELO OU NOS ENVIE AS INFORMA????ES
            </Text>
            <Button
              size={"xs"}
              colorScheme={"orange"}
              variant="link"
              leftIcon={<BiArrowFromLeft />}
              mt={2}
            >
              Nossos Modelos
            </Button>
            <Button
              size={"xs"}
              colorScheme={"orange"}
              variant="link"
              leftIcon={<BiArrowFromLeft />}
            >
              Cat??logos
            </Button>
          </Flex>
          <Flex
            direction={"column"}
            align={"center"}
            borderRightWidth={"1px"}
            px={5}
            pos={"relative"}
          >
            <Box w="15px" pos={"absolute"} right={-4} top={10}>
              <Image
                src="/img/arrow.svg"
                width={50}
                height={100}
                objectFit="cover"
                layout="responsive"
                alt="Braz Camiseteira"
              />
            </Box>
            <Box w="70%">
              <Image
                src="/img/2.svg"
                width={252}
                height={280}
                objectFit="cover"
                layout="responsive"
                alt="Braz Camiseteira"
              />
            </Box>
            <Text textAlign={"center"} mt={2} fontSize={"xs"}>
              ALINHA SEU PEDIDO COM UM CONSULTOR
            </Text>
            <Button
              size={"xs"}
              colorScheme={"orange"}
              variant="link"
              leftIcon={<BiArrowFromLeft />}
              mt={2}
            >
              Fale Conosco
            </Button>
          </Flex>
          <Flex
            direction={"column"}
            align={"center"}
            borderRightWidth={"1px"}
            px={5}
            pos={"relative"}
          >
            <Box w="15px" pos={"absolute"} right={-4} top={10}>
              <Image
                src="/img/arrow.svg"
                width={50}
                height={100}
                objectFit="cover"
                layout="responsive"
                alt="Braz Camiseteira"
              />
            </Box>
            <Box w="60%">
              <Image
                src="/img/3.svg"
                width={252}
                height={300}
                objectFit="cover"
                layout="responsive"
                alt="Braz Camiseteira"
              />
            </Box>
            <Text textAlign={"center"} mt={5} fontSize={"xs"}>
              EFETUA O PAGAMENTO
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"xs"}
              color="orange.500"
              fontWeight={"semibold"}
              mt={1}
            >
              Via Dep??sito banc??rio ou Cart??es de Cr??ditos
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            align={"center"}
            borderRightWidth={"1px"}
            px={5}
            pos={"relative"}
          >
            <Box w="15px" pos={"absolute"} right={-4} top={10}>
              <Image
                src="/img/arrow.svg"
                width={50}
                height={100}
                objectFit="cover"
                layout="responsive"
                alt="Braz Camiseteira"
              />
            </Box>
            <Box w="100%">
              <Image
                src="/img/4.svg"
                width={350}
                height={300}
                objectFit="cover"
                layout="responsive"
                alt="Braz Camiseteira"
              />
            </Box>
            <Text textAlign={"center"} mt={5} fontSize={"xs"}>
              PRODUZIMOS E PREPARAMOS SEU PEDIDO
            </Text>
          </Flex>
          <Flex direction={"column"} align={"center"} px={5} pos={"relative"}>
            <Box w="100%">
              <Image
                src="/img/5.svg"
                width={370}
                height={315}
                objectFit="cover"
                layout="responsive"
                alt="Braz Camiseteira"
              />
            </Box>
          </Flex>
        </Grid>
      </Container>

      <Box
        bgGradient="linear(to-l, blue.500, blue.900)"
        mt={20}
        backgroundPosition="bottom"
        p={[5, 20, 20, 20, 20]}
        w="100%"
        id="quemsomos"
      >
        <Container maxW={"6xl"}>
          <Center>
            <Heading
              color="white"
              textAlign="center"
              fontSize={["2xl", "3xl", "4xl", "4xl", "4xl"]}
            >
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
                A Braz Multim??dia ?? uma empresa especializada na fabrica????o e
                comercializa????o de uniformes.
              </Text>
              <Text color="white" textAlign="justify">
                Com f??bricas situadas na regi??o de Bras??lia - DF, a Braz
                Multim??dia atua em todo o territ??rio brasileiro e veste diversas
                empresas, eventos, times, alunos e etc, no pa??s.
              </Text>
              <Text color="white" textAlign="justify">
                A qualidade estampada em nossos produtos ?? resultado de um
                constante trabalho de pesquisa que busca inova????es, tecnologias
                e tend??ncias do mercado, para que, interagindo com os clientes,
                possamos oferecer o que h?? de melhor em uniformes e
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
            <Heading
              color="blue.500"
              textAlign="center"
              fontSize={["2xl", "3xl", "4xl", "4xl", "4xl"]}
            >
              NOSSA ESTRUTURA
            </Heading>
          </Center>
          <Text mt={5} color={"blue.500"} textAlign={"center"}>
            A Braz Multim??dia orgulha-se de empregar em seus processos
            produtivos e administrativos, tecnologias e equipamentos de ponta no
            mercado, a fim de tornar sua opera????o mais r??pida, ??gil e
            principalmente eficiente. Desde o primeiro contato, os dados do
            cliente e de seu pedido s??o inseridos em um sistema de gest??o online
            que ?? acessado pela equipe interna em todos os setores.
          </Text>
          <Text mt={3} color={"blue.500"} textAlign={"center"}>
            Desta forma, s??o minimizados as chances de desencontro de
            informa????es e consequentemente, erros nos pedidos. Na produ????o o
            cliente conta com mais tecnologia. Nossa f??brica trabalha com os
            equipamentos mais modernos dentre os quais se destacam os de
            impress??o digital para sublima????o, bordado, corte, costura e
            serigrafia. Al??m disso, emprega insumos de primeira qualidade em
            todos os componentes das pe??as, aliando assim, beleza e conforto em
            todos os produtos.
          </Text>
        </Container>
      </Box>

      <Container maxW={"6xl"}>
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Divider opacity={0.3} />
          <Box
            w="30px"
            h="30px"
            bg="white"
            borderWidth={"1px"}
            borderColor={"blue.100"}
            rounded={"full"}
            mt={"-17px"}
            zIndex={100}
          />
        </Flex>
      </Container>

      <Message />

      <Container maxW={"6xl"} mb={-4}>
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Divider opacity={0.3} />
          <Box
            w="30px"
            h="30px"
            bg="white"
            borderWidth={"1px"}
            borderColor={"blue.100"}
            rounded={"full"}
            mt={"-17px"}
            zIndex={100}
          />
        </Flex>
      </Container>

      <Box bg="gray.100" pt={10} pb={20} w="100%">
        <Container maxW={"6xl"}>
          <Box textAlign="center" mb={10}>
            <Heading
              color="blue.500"
              fontSize={["2xl", "3xl", "4xl", "4xl", "4xl"]}
            >
              DEPOIMENTOS
            </Heading>
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
                          bg={isActivePage ? "blue.500" : "gray.500"}
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
                    bg="gray.300"
                    borderRadius="lg"
                    w={"250px"}
                    h={"150px"}
                    direction="column"
                    align="center"
                    p={2}
                    shadow={"md"}
                  >
                    <Text fontSize="11px" textAlign="center">
                      {com.text}
                    </Text>
                  </Flex>
                  <Box
                    w={"83px"}
                    h="83px"
                    borderRadius="50%"
                    overflow="hidden"
                    mt={-10}
                    shadow={"md"}
                  >
                    <Image
                      src={`${urlPhoto}/${com.avatar}`}
                      width={83}
                      height={83}
                      layout="intrinsic"
                      alt="Braz Multim??dia Avatar"
                    />
                  </Box>

                  <Text color="blue.500" fontSize="sm">
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
