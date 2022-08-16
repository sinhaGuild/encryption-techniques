const { publicEncrypt, privateDecrypt } = require("crypto");
const { publicKey, privateKey } = require("./keypair");
require("colors");

const message = "Jai Ganesh Deva";

//encrypt data using public key
const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(
  `Encrypted Message: ${encryptedData.toString("base64")}`.bgCyan.italic
);

//data can only be decrypted using private key
const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(
  `Decrypted Message: ${decryptedData.toString("utf-8")}`.bgMagenta.italic
);
