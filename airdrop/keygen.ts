import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58'
// import * as prompt from 'prompt-sync

//Generate a new keypair
let kp = Keypair.generate()
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`secretkey: ${kp.secretKey}`)

// Base58 to wallet
// function base58ToWallet(base58: string) {
//     const wallet = bs58.decode(base58);
//     console.log(wallet);
// }


// Test the functions
// base58ToWallet('gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt');
// walletToBase58(new Uint8Array([34,46,55,124,141,190,24,204,134,91,70,184,161,181,44,122,15,172,63,62,153,150,99,255,202,89,105,77,41,89,253,130,27,195,134,14,66,75,242,7,132,234,160,203,109,195,116,251,144,44,28,56,231,114,50,131,185,168,138,61,35,98,78,53]));
  