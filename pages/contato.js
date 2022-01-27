import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import { ContainerApp, ContainerNonFixed, Fixed } from "../styles/style";
import {
  Box,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  AspectRatio,
  Heading,
  Icon,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai";

export default function Contato() {
  return (
    <ContainerApp>
      <ContainerNonFixed>
        <HeaderApp />
        <Box w="100%" display="block" mt={"60px"}>
          <Image
            src="/img/banner.png"
            layout="responsive"
            objectFit="contain"
            width={1500}
            height={399}
          />
        </Box>
      </ContainerNonFixed>

      <Container maxW="5xl" mt={10} mb={10}>
        <Breadcrumb fontSize={"xs"} textTransform={"uppercase"} mb={10}>
          <BreadcrumbItem>
            <Link href="/" passHref>
              <BreadcrumbLink>início</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Link href="/contato" passHref>
              <BreadcrumbLink>contato</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading mb={5} color="blue.500">
          Onde Estamos
        </Heading>

        <Box borderWidth="1px" borderRadius="lg" p={3} mb={10}>
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15350.058163681302!2d-48.0800549!3d-15.8820922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b78d6139019e60a!2sBraz%20Multim%C3%ADdia%20-%20Camiseteria!5e0!3m2!1spt-BR!2sbr!4v1643287585779!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </AspectRatio>
        </Box>

        <Heading mb={5} color="blue.500">
          Braz Multimídia
        </Heading>
        <Flex align="center" mb={2}>
          <Icon as={FaWhatsapp} fontSize="2xl" />
          <Text ml={2} fontSize="xl">
            (61) 99118-7898
          </Text>
        </Flex>

        <Flex align="center" mb={2}>
          <Icon as={AiOutlineMail} fontSize="2xl" />
          <Text ml={2} fontSize="xl">
            brazmultimidia@gmail.com
          </Text>
        </Flex>
        <Flex align="center" mb={2}>
          <Icon as={AiOutlineClockCircle} fontSize="2xl" />
          <Text ml={2} fontSize="xl">
            De Segunda a Sexta das 8:00 às 18:00hrs
          </Text>
        </Flex>
        <Flex align="center" mb={2}>
          <Icon as={AiOutlineClockCircle} fontSize="2xl" />
          <Text ml={2} fontSize="xl">
            Sábado das 8:00 às 12:00hrs
          </Text>
        </Flex>
      </Container>

      <ContainerNonFixed>
        <FooterApp />
      </ContainerNonFixed>
    </ContainerApp>
  );
}
