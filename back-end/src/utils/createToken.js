require("dotenv");
const jwt = require("jsonwebtoken");
const jwtKey = require("fs").readFileSync("../../jwt.evaluation.key", {
  encoding: "utf-8",
});

const createToken = (data) => {
  const token = jwt.sign({ data }, jwtKey, {
    expiresIn: "15d",
    algorithm: "HS256",
  });

  return token;
};

module.exports = createToken;
