import "./main.css";
import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  Center,
  HStack,
  useToast,
} from "@chakra-ui/react";
import * as anchor from "@project-serum/anchor";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, programs } from "@metaplex/js";
import Minter from "../../List";
import Form from "../form";
import Burn from "../Burn/index";
import DisplayNFT from "../displayNFT/Index";
import { getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";
import { isError } from "util";

interface Data {
  mint: string;
  updateAuthority: string;
  data: {
    creators: any[];
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
  };
  key?: any;
  primarySaleHappened: boolean;
  isMutable: boolean;
  editionNonce: number;
  masterEdition?: string;
  edition?: string;
}

export default function Main() {
  const toast = useToast();
  const [isBurned, setIsBurned] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const wallet = useWallet();
  const [mintAddress, setMintAddress] = useState<string>();

  const connection = new Connection(
    "https://api.mainnet-beta.solana.com",
    "confirmed"
  );

  const burn = async (owner: anchor.web3.PublicKey, mintAddress: string) => {
    try {
      const mintpubKey = new anchor.web3.PublicKey(mintAddress);
      const tokenAccountDetails =
        await connection.getParsedTokenAccountsByOwner(owner, {
          mint: mintpubKey,
        });
      console.log(
        "TOKEN ACCOUNT",
        tokenAccountDetails.value[0].pubkey.toString()
      );
      const tokenAccountAddress = tokenAccountDetails.value[0].pubkey;

      let tx = new Transaction().add(
        Token.createBurnInstruction(
          TOKEN_PROGRAM_ID,
          mintpubKey, //mint address
          tokenAccountAddress, //token account
          owner,
          [],
          1
        )
      );

      const signature = await wallet.sendTransaction(tx, connection);
      console.log("SIGNATURE", signature);
      const res = await connection.confirmTransaction(signature, "processed");
      console.log("RES", res);
      setIsBurned(true);
    } catch (error) {
      console.log("ERROR BURN", error);
      setIsError(true);
    }
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: "Error",
        description: "Transaction Failed",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      setIsError(false);
    }
  }, [isError]);
  // const burn_function = async (
  //   ownerAddress: anchor.web3.PublicKey,
  //   tokenAddress: string,
  //   mint: string
  // ) => {
  //   try {
  //     const mint_address = new anchor.web3.PublicKey(mint);
  //     console.log("OWNER ADDRESS", ownerAddress.toString());
  //     console.log("TOKEN ADDRESS", tokenAddress);
  //     const mint_Token_Account_Address = new anchor.web3.PublicKey(
  //       tokenAddress
  //     );
  //     let tx = new Transaction().add(
  //       Token.createBurnInstruction(
  //         TOKEN_PROGRAM_ID,
  //         mint_address, //mint address
  //         mint_Token_Account_Address, //token account
  //         ownerAddress,
  //         [],
  //         1
  //       )
  //     );

  //     const signature = await wallet.sendTransaction(tx, connection);
  //     await connection.confirmTransaction(signature, "processed");
  //   } catch (error) {
  //     console.log("ERROR PRATIK", error);
  //   }
  // };

  // const getTokenAccount = async () => {
  //   const mintadd = new anchor.web3.PublicKey(
  //     "CZydB9kvf8gQhUDKEW2mCSocqcEboRnegHt9uA5ViBvs"
  //   );
  //   console.log(wallet.publicKey.toBase58());
  //   const ans = await connection.getParsedTokenAccountsByOwner(
  //     wallet.publicKey,
  //     {
  //       mint: mintadd,
  //     }
  //   );
  //   console.log("Answer", ans);
  // };

  const run = async () => {
    try {
      const tokenList = await getParsedNftAccountsByOwner({
        publicAddress: wallet.publicKey,
        connection: connection,
        sanitize: true,
        strictNftStandard: true,
        stringifyPubKeys: true,
        sort: true,
      });

      console.log("TOKENLIST", tokenList);
      setData(tokenList);
    } catch (error) {
      console.log("ERROR PRATIK", error);
    }
  };

  useEffect(() => {
    run();
  }, []);

  return (
    <Box w="100vw" height="100vh" bg="gray.50">
      <Flex
        px={4}
        bg="teal.200"
        w="100vw"
        h="10vh"
        direction="row"
        align="center"
        justify="space-between"
      >
        <Box>
          <Heading>Logo</Heading>
        </Box>
        <Box>
          <WalletMultiButton />
        </Box>
      </Flex>
      {!isBurned && (
        <Flex direction="column" align="center" justify="center">
          <Heading py={5}>Your NFTs</Heading>
          {!data && <Text>You Have No NFTs in your Wallet</Text>}
          {data && (
            <>
              <HStack spacing="24px" wrap="wrap">
                {data.map((item) => {
                  console.log(item.data);
                  console.log(item.data.uri);
                  return (
                    <DisplayNFT
                      uri={item.data.uri}
                      name={item.data.name}
                      mintAddress={item.mint}
                      burn={burn}
                    />
                  );
                })}
              </HStack>
            </>
          )}
        </Flex>
      )}
      {isBurned && <Form />}
    </Box>
  );
}
