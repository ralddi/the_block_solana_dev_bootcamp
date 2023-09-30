import * as web3 from '@solana/web3.js';
import * as token from '@solana/spl-token'
import  'dotenv/config';
import bs58 from 'bs58';


const main = async () => {
   const connection = new web3.Connection(web3.clusterApiUrl('devnet'), "confirmed")
   const payer = web3.Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""))

  

   const tokenMintAccount = new web3.PublicKey( "uLBsPvpDH3yTHeqBWMXDgy8qBzsap2BwTHMAxLBWCiD")
   const tokenAccount = new web3.PublicKey( "13w5bKF3tgcQkSmYpAaSNWTFJNK2aHYn717kyiPwwZAt")
   const mintAccount = await token.mintTo(
       connection,
       payer,
       tokenMintAccount,
       tokenAccount,
       payer,
       web3.LAMPORTS_PER_SOL * .00000009
   )

       //Mint Account: 4G6ep7GoTLCUFUTgiu1DnxLEddpSpKksfStiYsCkwTYJ2sQ47vUg1HA7vxyWRSLmA9H8YacHUs7rsW9iygRVrut2
   console.log("Mint Account: ", mintAccount)

}

main()
   .then(d => {process.exit(0)})
   .catch(e => {
       console.log(e)
       process.exit(1)
   })