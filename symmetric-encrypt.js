const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");
require("colors");

//message to encrypt
const message = "Operandus dei";
//generate random key and .. for cipher
const key = randomBytes(32);
const iv = randomBytes(16);
//create cipher
const cipher = createCipheriv("aes256", key, iv);

//Encrypt message
const encryptedMessage =
  cipher.update(message, "utf-8", "base64") + cipher.final("base64");
console.log(`Encrypted: ${encryptedMessage}`.bgRed);

//decrypt message
const decipher = createDecipheriv("aes256", key, iv);

const decryptedMessage =
  decipher.update(encryptedMessage, "base64", "utf-8") +
  decipher.final("utf-8");
console.log(`Decrypted: ${decryptedMessage.toString("utf-8")}`.bgGreen);
