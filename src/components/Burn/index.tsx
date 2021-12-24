import "./index.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import {
  Keypair,
  SystemProgram,
  Transaction,
  PublicKey,
} from "@solana/web3.js";
import { Token, TOKEN_PROGRAM_ID, MintLayout } from "@solana/spl-token";
import { Button } from "@chakra-ui/react";
import { publicKey } from "@project-serum/anchor/dist/cjs/utils";
export default function Burn() {
  const { connection } = useConnection();
  const wallet = useWallet();

  const burn_function = async (
    ownerAddress: anchor.web3.PublicKey,
    tokenAddress: string,
    mint: string
  ) => {
    try {
      const mint_address = new anchor.web3.PublicKey(mint);
      console.log("OWNER ADDRESS", ownerAddress.toString());
      console.log("TOKEN ADDRESS", tokenAddress);
      const mint_Token_Account_Address = new anchor.web3.PublicKey(
        tokenAddress
      );
      let tx = new Transaction().add(
        Token.createBurnInstruction(
          TOKEN_PROGRAM_ID,
          mint_address, //mint address
          mint_Token_Account_Address, //token account
          ownerAddress,
          [],
          1
        )
      );

      const signature = await wallet.sendTransaction(tx, connection);
      await connection.confirmTransaction(signature, "processed");
    } catch (error) {
      console.log("ERROR PRATIK", error);
    }
  };

  const getTokenAccount = async () => {
    const mintadd = new anchor.web3.PublicKey(
      "CZydB9kvf8gQhUDKEW2mCSocqcEboRnegHt9uA5ViBvs"
    );
    console.log(wallet.publicKey.toBase58());
    const ans = await connection.getParsedTokenAccountsByOwner(
      wallet.publicKey,
      {
        mint: mintadd,
      }
    );
    console.log("Answer", ans);
  };
  return (
    <div>
      {/* <Button onClick={getAccounts}>Click me</Button> */}
      <Button onClick={getTokenAccount}>Click to get</Button>
      <Button>Burn Token</Button>
    </div>
  );
}
