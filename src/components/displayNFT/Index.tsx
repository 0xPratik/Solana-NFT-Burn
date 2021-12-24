import {
  Stack,
  HStack,
  Image,
  Box,
  Text,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

interface NFTProps {
  uri: string;
  name: string;
  mintAddress: string;
  burn: any;
}

export default function Index(props: NFTProps) {
  const wallet = useWallet();
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<string>();
  const [imageLoaded, setImageLoading] = useState<boolean>(false);
  //   const [imageError, setImageError] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getInfo = async () => {
    setLoading(true);
    const res = await axios.get(props.uri);
    console.log("MAIN DATA", res.data.image);
    setImage(res.data.image);
    setLoading(false);
  };

  const handleMintAddress = () => {
    console.log("inside the method");
    console.log("HANDLER MINT", props.mintAddress);
    props.burn(wallet.publicKey, props.mintAddress);
    onClose();
  };

  useEffect(() => {
    getInfo();
  }, []);

  console.log(imageLoaded);
  return (
    <>
      <Flex
        direction="column"
        border="2px"
        borderColor="gray.500"
        borderRadius={2}
        align="center"
        justify="center"
        p={2}
      >
        <Heading color="teal.900">{props.name}</Heading>
        <Box boxSize="sm" p={1}>
          {loading && <Text>LOADING</Text>}
          {!loading && (
            <img
              src={image}
              onLoad={() => setImageLoading(true)}
              alt={props.name}
            />
          )}
        </Box>
        <Button onClick={onOpen} colorScheme="teal" w="100%" mx={2}>
          Burn This NFT
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you Sure you want to burn this NFT?</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody>This is the Body of the Modal</ModalBody> */}

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="green" onClick={handleMintAddress}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
