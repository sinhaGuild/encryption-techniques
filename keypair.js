//generate keypair public key and private key for asymmetric-encryption

const { generateKeyPairSync } = require("crypto");
require("colors");

const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki", // recommended to be 'spki' by the Node.js docs
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8", // recommended to be 'pkcs8' by the Node.js docs
    format: "pem",
    // cipher: 'aes-256-cbc',
    // passphrase: 'top secret'
  },
});

console.log(`${publicKey}`.green.italic);
console.log(`${privateKey}`.magenta.italic);

module.exports = {
  privateKey,
  publicKey,
};
