import { useState } from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Flex,
  IconButton,
  Icon,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import { TiArrowRightOutline } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineClockCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { RiWhatsappLine } from "react-icons/ri";
import configs from "../configs/index";

export default function FooterApp() {
  return (
    <>
      <Link href={"/whatsapp"} passHref>
        <a>
          <IconButton
            colorScheme="green"
            aria-label="Call Segun"
            size="xl"
            icon={<RiWhatsappLine />}
            position="fixed"
            right={5}
            bottom={7}
            borderRadius={"50%"}
            fontSize="4xl"
            p={3}
            _active={{ outline: "none" }}
            zIndex={9000}
            shadow="xl"
            className="ball"
          />
        </a>
      </Link>

      <Box bg={"blue.600"} px={10} w="100%" py={20}>
        <Grid
          templateColumns={"repeat(auto-fit, minmax(250px, 250px))"}
          gap={`10px`}
          justifyContent="center"
        >
          <Box>
            <Heading color="blue.100" size="md" mb={5}>
              INSTITUCIONAL
            </Heading>
            <Link href="/contato">
              <Flex
                align="center"
                color="gray.200"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                mb={2}
              >
                <Icon as={TiArrowRightOutline} />

                <Text ml={2} fontSize="sm">
                  Onde Estamos
                </Text>
              </Flex>
            </Link>
            <Link href="/comofunciona">
              <Flex
                align="center"
                color="gray.200"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                mb={2}
              >
                <Icon as={TiArrowRightOutline} />
                <Text ml={2} fontSize="sm">
                  Fretes e Entrega
                </Text>
              </Flex>
            </Link>
          </Box>

          <Box>
            <Heading color="blue.100" size="md" mb={5}>
              PRECISA DE AJUDA?
            </Heading>
            <Link href="/contato">
              <Flex
                align="center"
                color="gray.200"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                mb={2}
              >
                <Icon as={TiArrowRightOutline} />
                <Text ml={2} fontSize="sm">
                  Fale Conosco
                </Text>
              </Flex>
            </Link>
            <Link href="/#quemsomos">
              <Flex
                align="center"
                color="gray.200"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                mb={2}
              >
                <Icon as={TiArrowRightOutline} />
                <Text ml={2} fontSize="sm">
                  Quem Somos
                </Text>
              </Flex>
            </Link>

            <Link href="/#comofunciona">
              <Flex
                align="center"
                color="gray.200"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                mb={2}
              >
                <Icon as={TiArrowRightOutline} />
                <Text ml={2} fontSize="sm">
                  Como Comprar
                </Text>
              </Flex>
            </Link>
          </Box>

          <Box>
            <Heading color="blue.100" size="md" mb={5}>
              REDES SOCIAIS
            </Heading>
            <Flex mt={5}>
              <Link
                href="https://www.instagram.com/braz.multimidia/?hl=pt-br"
                passHref
              >
                <a target="_blank">
                  <IconButton
                    aria-label="Search database"
                    icon={<AiOutlineInstagram />}
                    fontSize={"55px"}
                    variant="link"
                    colorScheme="yellow"
                    color="blue.100"
                    mr={5}
                  />
                </a>
              </Link>
              <Link href="https://www.facebook.com/brazmultimidia" passHref>
                <a target="_blank">
                  <IconButton
                    aria-label="Search database"
                    icon={<AiOutlineFacebook />}
                    fontSize={"55px"}
                    variant="link"
                    colorScheme="yellow"
                    color="blue.100"
                  />
                </a>
              </Link>
            </Flex>
          </Box>

          <Box>
            <Heading color="blue.100" size="md" mb={5}>
              ATENDIMENTO
            </Heading>
            <Link href={"/whatsapp"} passHref>
              <a>
                <Flex
                  align="center"
                  color="gray.200"
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                  mb={2}
                >
                  <Icon as={FaWhatsapp} />
                  <Text ml={2} fontSize="sm">
                    (61) 99118-7898
                  </Text>
                </Flex>
              </a>
            </Link>

            <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=brazmultimidia@gmail.com">
              <a target="_blank">
                <Flex
                  align="center"
                  color="gray.200"
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                  mb={2}
                >
                  <Icon as={AiOutlineMail} />

                  <Text ml={2} fontSize="sm">
                    brazmultimidia@gmail.com
                  </Text>
                </Flex>
              </a>
            </Link>
            <Flex align="center" color="gray.200" mt={2}>
              <Icon as={AiOutlineClockCircle} />

              <Text ml={2} fontSize="sm">
                8:00 - 18:00hrs de Segunda a Sexta
              </Text>
            </Flex>
            <Flex align="center" color="gray.200" mt={2}>
              <Icon as={AiOutlineClockCircle} />

              <Text ml={2} fontSize="sm">
                8:00 - 12:00hrs Sábado
              </Text>
            </Flex>
          </Box>
        </Grid>
      </Box>
      <Box p={5}>
        <Center>
          <Text fontSize="sm" color="blue.500">
            © Braz Multimídia desde 2007 - Todos os direitos reservados
          </Text>
        </Center>
      </Box>
    </>
  );
}
