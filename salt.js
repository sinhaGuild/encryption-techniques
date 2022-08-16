const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

const users = [];

function signup(email, password) {
  //create salt
  const salt = randomBytes(16).toString("base64");
  const salt2 =
    "[L1]fS+:Ax5rmb`;hKn@-D;ZoNN+gq5x(m1M?g#S+H@$8,tp%I|&oWEI+mcm_Ij@";

  //generate hashed pwd with salt, and keylen and toString to base64
  const hashedpassword = scryptSync(password, salt, 64).toString("base64");

  //save as a combo
  const user = {
    email,
    password: `${salt}:${hashedpassword}`,
  };
  //save in db
  users.push(user);
  console.log(`New used added: ${JSON.stringify(user, null, 2)}`);
  return user;
}

function login(email, password) {
  //retrieve user
  const user = users.find((v) => v.email === email);

  //get salt and key
  const [salt, key] = user.password.split(":");

  //regenerate hash with provided pwd
  const hashedpassword = scryptSync(password, salt, 64);
  //retreive stored hash
  const bufferpassword = Buffer.from(key, "base64");
  //match using inbuild timingSafeEqual func
  const match = timingSafeEqual(bufferpassword, hashedpassword);

  console.log(
    match ? "Login Sucessful! 🌈  " : "Login failed! Bad password 💀 "
  );
}

signup("skull@skullnation.com", "randompassword");
signup("flower@flowernation.com", "randompassword2");
login("flower@flowernation.com", "randompassword2");
login("flower@flowernation.com", "randompassword");
