import { useState } from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Flex,
  IconButton,
  Center,
  Container,
  Input,
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiSendPlaneFill, RiWhatsappLine } from "react-icons/ri";
import axios from "axios";
import configs from "../configs/index";

export default function Message() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [qtd, setQtd] = useState("");
  const [message, setMessage] = useState("");
  const [loadingModal, setLoadingModal] = useState(false);
  const [titleModal, setTitleModal] = useState("Atenção!");
  const [modalMessage, setModalMessage] = useState("");
  const [sendLoading, setSendLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [complete, setComplete] = useState(false);

  function allClear() {
    setName("");
    setPhone("");
    setEmail("");
    setQtd("");
    setMessage("");
    setDisable(false);
    setComplete(false);
    setModalMessage("");
  }

  async function sendBitrix() {
    if (name === "") {
      setTitleModal("Atenção!");
      setModalMessage("O Nome está em Branco");
      setLoadingModal(true);
      return false;
    }
    if (phone === "") {
      setTitleModal("Atenção!");
      setModalMessage("O Telefone está em Branco");
      setLoadingModal(true);
      return false;
    }
    if (email === "") {
      setTitleModal("Atenção!");
      setModalMessage("O Email está em Branco");
      setLoadingModal(true);
      return false;
    }
    if (qtd === "") {
      setTitleModal("Atenção!");
      setModalMessage("A Quantidade de Camisetas está em Branco");
      setLoadingModal(true);
      return false;
    }
    if (message === "") {
      setTitleModal("Atenção!");
      setModalMessage("Digite uma mensagem");
      setLoadingModal(true);
      return false;
    }
    setDisable(true);
    setSendLoading(true);
    await axios
      .post("/api/messages", {
        name: name,
        message: message,
        qtd: qtd,
        phone: phone,
        email: email,
      })
      .then((response) => {
        setComplete(true);
        setModalMessage("Mensagem Enviada!");
        setDisable(false);
      })
      .catch((error) => {
        setComplete(true);
        setModalMessage("Ocorreu um erro ao enviar a Mensagem!");
        setDisable(false);
      });
  }

  function handleClose() {
    setSendLoading(false);
    allClear();
  }

  return (
    <>
      <Box pt={5} pb={5}>
        <Container maxW="5xl">
          <Box textAlign="center">
            <Heading
              color={"blue.500"}
              fontSize={["2xl", "3xl", "4xl", "4xl", "4xl"]}
            >
              ENTRE EM CONTATO
            </Heading>
          </Box>
          <Grid
            templateColumns={["1fr", "1fr", "1fr", "1fr 1fr", "1fr 1fr"]}
            gap={"30px"}
            alignItems={"center"}
          >
            <Box p={10}>
              <Text fontSize="sm" fontWeight="700" mb={2} color={"blue.500"}>
                Envie sua Mensagem
              </Text>
              <Input
                placeholder="Nome"
                focusBorderColor="blue.500"
                bg={"white"}
                borderColor="gray.400"
                mb={2}
                size="sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Telefone"
                type="number"
                focusBorderColor="blue.500"
                bg={"white"}
                borderColor="gray.400"
                mb={2}
                size="sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                placeholder="Email"
                type="email"
                focusBorderColor="blue.500"
                bg={"white"}
                borderColor="gray.400"
                mb={2}
                size="sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Quantidade de Camisetas"
                type="number"
                focusBorderColor="blue.500"
                bg={"white"}
                borderColor="gray.400"
                mb={2}
                size="sm"
                value={qtd}
                onChange={(e) => setQtd(e.target.value)}
              />
              <Textarea
                placeholder="Sua mensagem aqui"
                focusBorderColor="blue.500"
                bg={"white"}
                borderColor="gray.400"
                rows={4}
                mb={2}
                size="sm"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                isFullWidth
                colorScheme="blue"
                leftIcon={<RiSendPlaneFill />}
                onClick={() => sendBitrix()}
              >
                ENVIAR MENSAGEM
              </Button>
            </Box>
            <Box>
              <Center>
                <Text fontSize="sm" fontWeight="700" mb={2} color={"blue.500"}>
                  Solicite um orçamento via Whatsapp
                </Text>
              </Center>
              <Center>
                <Link href={"/whatsapp"} passHref>
                  <a style={{ textDecoration: "none" }}>
                    <Button
                      leftIcon={<RiWhatsappLine />}
                      colorScheme="green"
                      size="lg"
                      fontSize="4xl"
                      h={20}
                      textDecoration="none"
                    >
                      Clique Aqui
                    </Button>
                  </a>
                </Link>
              </Center>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Modal isOpen={loadingModal} onClose={() => setLoadingModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{titleModal}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalMessage}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={() => setLoadingModal(false)}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={sendLoading}
        closeOnOverlayClick={false}
        onClose={() => handleClose()}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aguarde!</ModalHeader>
          <ModalBody>
            {complete === false ? (
              <Flex align="center" justify="center" direction="column">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="yellow.400"
                  size="xl"
                />
                <Text mt={5}>Enviando a Mensagem...</Text>
              </Flex>
            ) : (
              <Text>{modalMessage}</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              disabled={disable}
              onClick={() => handleClose()}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
