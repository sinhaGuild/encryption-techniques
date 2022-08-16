const { publicEncrypt, privateDecrypt } = require("crypto");
const { publicKey, privateKey } = require("./keypair");
require("colors");

const message = "Jai Ganesh Deva";

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(
  `Encrypted Message: ${encryptedData.toString("base64")}`.bgCyan.italic
);

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(
  `Decrypted Message: ${decryptedData.toString("utf-8")}`.bgMagenta.italic
);
