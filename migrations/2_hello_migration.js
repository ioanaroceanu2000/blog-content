const HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
  const yourName = "Ioana";
  deployer.deploy(HelloWorld, yourName);
};
