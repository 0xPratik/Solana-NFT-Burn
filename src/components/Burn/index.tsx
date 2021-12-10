import "./index.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { getNftsForOwner } from "../../getNFTOwner";
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

  const call_fun = async () => {
    const val = await getNftsForOwner(connection, wallet.publicKey);
    console.log(val);
  };

  const burn_function = async (ownerAddress: anchor.web3.PublicKey) => {
    const t = new anchor.web3.PublicKey(
      "6EGcJiW3auRJaf87anphw9FBiNLqhyjLG544c4pTTWxb"
    );
    const token = await connection.getParsedTokenAccountsByOwner(ownerAddress, {
      mint: t,
    });
    console.log("TOKEN ACCOUNTS", token.value);
    let arr = token.value;
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].pubkey.toString());
    }

    // let tx = new Transaction().add(
    //   Token.createBurnInstruction(
    //     TOKEN_PROGRAM_ID, // always TOKEN_PROGRAM_ID
    //     t, // mint
    //     val, // from (should be a token account)
    //     wallet.publicKey, // owner of token account
    //     [], // for multisig account, leave empty.
    //     1e8 // amount, if your deciamls is 8, 10^8 for 1 token
    //   )
    // );

    // const signature = await wallet.sendTransaction(tx, connection);
    // await connection.confirmTransaction(signature, "processed");
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

  //   const transferNFT = async() => {
  //     let mint = new Token(
  //         connection,token,TOKEN_PROGRAM_ID,wallet.publicKey
  //     )
  //   }
  const getAccounts = async () => {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      wallet.publicKey,
      {
        programId: TOKEN_PROGRAM_ID,
      }
    );

    console.log("TOKEN Accounts", tokenAccounts);
    const allTokens: any = [];

    for (let index = 0; index < tokenAccounts.value.length; index++) {
      const tokenAccount = tokenAccounts.value[index];
      const tokenAmount = tokenAccount.account.data.parsed.info.tokenAmount;

      if (tokenAmount.amount == "1" && tokenAmount.decimals == "0") {
        allTokens.push(tokenAccount);
      }
    }
  };
  return (
    <div>
      <Button onClick={getAccounts}>Click me</Button>
      <Button onClick={getTokenAccount}>Click to get</Button>
      <Button onClick={() => burn_function(wallet.publicKey)}>
        Burn Token
      </Button>
      <Button onClick={call_fun}>See the Magic</Button>
    </div>
  );
}
