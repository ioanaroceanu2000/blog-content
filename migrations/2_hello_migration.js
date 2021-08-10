const HelloWorld = artifacts.require("HelloWorld");
const Token = artifacts.require("Token");

module.exports = function (deployer) {
  console.log("Migration 2");
  const yourName = "Ioana";
  deployer.deploy(HelloWorld, yourName);
  deployer.deploy(Token, "Tkn", "Tkn");
};
