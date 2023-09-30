import {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
} from "@solana/web3.js"

import bs58 from "bs58";
import "dotenv/config";

const to = new PublicKey("7tabfn7purpDYV6K9G9DSjouHqkyrmsi4km86HdaqDqp");
const keyPair = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""));

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const getWalletBalance = async (address: PublicKey) => {
    try {
        const walletBalance = await connection.getBalance(address);
        console.log(
            `address ${address.toString()} has ${walletBalance / LAMPORTS_PER_SOL} SOL`
        );
    }catch (err: any) {}
};

const main = async () => {
    const transaction = new Transaction().add(
        SystemProgram.transfer({fromPubkey: keyPair.publicKey, toPubkey: to, lamports: LAMPORTS_PER_SOL / 1,
    })
    );
}
