import "./main.css";
import React, { useState, useEffect } from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import Minter from "../../List";
import Form from "../form";
import { publicKey } from "@project-serum/anchor/dist/cjs/utils";

export default function Main() {
  const [isMinter, setIsMinter] = useState<boolean>(false);
  const { publicKey, sendTransaction } = useWallet();

  useEffect(() => {
    const address = publicKey?.toString();
    console.log(address);
    const res = Minter.find((mint) => mint.holder == publicKey?.toString());
    if (res != undefined) {
      setIsMinter(true);
    }
  }, [isMinter]);

  return (
    <Box w="100vw" height="100vh" bg="gray.50">
      <Flex
        px={4}
        bg="gray.100"
        w="100vw"
        h="10vh"
        direction="row"
        align="center"
        justify="space-between"
      >
        <Box>
          <Text>Logo</Text>
        </Box>
        <Box>
          <WalletMultiButton />
        </Box>
      </Flex>
      <Box>
        <Heading>{isMinter ? <Form /> : "Sorry you are not a minter"}</Heading>
      </Box>
    </Box>
  );
}
