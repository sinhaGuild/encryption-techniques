const { createSign, createVerify } = require("crypto");
const { publicKey, privateKey } = require("./keypair");
require("colors");

const message = "this data must be signed";

/// 1. SIGN (server side)
//create signer
const signer = createSign("rsa-sha256");
//sign message
signer.update(message);
//create signature using private key
const signature = signer.sign(privateKey, "hex");
console.log(`Signature: ${signature}`.bgRed);

/// 2. VERIFY (client side)
//create verifier
const verifier = createVerify("rsa-sha256");
//prepare message for verification
verifier.update(message);
//check using public key
const isVerified = verifier.verify(publicKey, signature, "hex");

console.log(`Verified: ${isVerified}`.bgGreen);
