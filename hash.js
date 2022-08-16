const { createHash } = require("crypto");
require("colors");

//function
function hash(input, method) {
  let response = "";
  switch (method) {
    case "base64":
      response = createHash("sha256").update(input).digest("base64");
      break;
    case "hex":
      response = createHash("sha256").update(input).digest("hex");
      break;
  }
  console.log(`Response: ${response}`);
  return response;
}

//test
let password = "randompassword";
let hashed = hash(password, "base64");

//test match
let password2 = "randompassword";
let hashed2 = hash(password2, "base64");
let match = hashed === hashed2;
console.log(match ? "🌈 Good password".bgGreen : "💀 Bad password".bgRed);
