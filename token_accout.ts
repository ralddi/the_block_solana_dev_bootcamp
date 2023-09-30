import * as web3 from '@solana/web3.js';
import * as token from '@solana/spl-token'
import {config} from 'dotenv'
import bs58 from 'bs58';

config()

const main = async () => {
   const connection = new web3.Connection(web3.clusterApiUrl('devnet'), "confirmed")
   const payer = web3.Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""))

   // TOKEN MINT FROM token-mint.ts
   const tokenMintAccount = new web3.PublicKey("uLBsPvpDH3yTHeqBWMXDgy8qBzsap2BwTHMAxLBWCiD")

   const tokenAccount = await token.createAccount(
       connection,
       payer,
       tokenMintAccount,
       payer.publicKey
   )

   // Token Account: 13w5bKF3tgcQkSmYpAaSNWTFJNK2aHYn717kyiPwwZAt
   // Copy token account to mint-token.ts
   console.log("Token Account: ", tokenAccount.toString())

}

main()
   .then(d => {process.exit(0)})
   .catch(e => {process.exit(1)})