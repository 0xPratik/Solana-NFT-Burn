import * as anchor from "@project-serum/anchor"
import {TOKEN_PROGRAM_ID,} from "@solana/spl-token"
import { programs } from '@metaplex/js';
import axios from "axios";
import {fetchHashTable} from "./hashTable"
const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
  );

  const { metadata: { Metadata } } = programs
export async function getNftsForOwner(connection: anchor.web3.Connection, ownerAddress: anchor.web3.PublicKey) {
    const candy_machine_address = new anchor.web3.PublicKey("6yfa5zYoqNEWqWQAtSpSxeM1vqDzqpkWnymrhpzPxCj2")
    const allMintsCandyMachine = await fetchHashTable("6yfa5zYoqNEWqWQAtSpSxeM1vqDzqpkWnymrhpzPxCj2");
    console.log("HASH TABLE",allMintsCandyMachine);
    const allTokens: any = []
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(ownerAddress, {
      programId: TOKEN_PROGRAM_ID
    });
    console.log("TOKEN ACOOUNTS",tokenAccounts);
    // const t =new anchor.web3.PublicKey("6EGcJiW3auRJaf87anphw9FBiNLqhyjLG544c4pTTWxb");
    // const token = await connection.getParsedTokenAccountsByOwner(ownerAddress, {
    //   mint: t
    // });
    // console.log("TOKEN",token.value[0].pubkey.toString());
  
    for (let index = 0; index < tokenAccounts.value.length; index++) {
      const tokenAccount = tokenAccounts.value[index];
      const tokenAmount = tokenAccount.account.data.parsed.info.tokenAmount;
  
      if (tokenAmount.amount == "1" && tokenAmount.decimals == "0" && allMintsCandyMachine.includes(tokenAccount.account.data.parsed.info.mint)) {
        console.log("Tokeen a",tokenAmount)
        let [pda] = await anchor.web3.PublicKey.findProgramAddress([
          Buffer.from("metadata"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          (new anchor.web3.PublicKey(tokenAccount.account.data.parsed.info.mint)).toBuffer(),
        ], TOKEN_METADATA_PROGRAM_ID);
        const accountInfo: any = await connection.getParsedAccountInfo(pda);
        console.log("PDA",pda)
        const metadata: any = new Metadata(ownerAddress.toString(), accountInfo.value);
        const { data }: any = await axios.get(metadata.data.data.uri)
  
        const entireData = { ...data, id: Number(data.name.replace( /^\D+/g, '').split(' - ')[0]) }
        console.log("ENTIRE DATA",entireData)
        allTokens.push({ ...entireData })
      }
      allTokens.sort(function (a: any, b: any) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      })
    }
    return allTokens
  }
  