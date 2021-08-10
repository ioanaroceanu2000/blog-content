const Vote = artifacts.require("Vote");
const Favourite = artifacts.require("Favourite");
const Token = artifacts.require("Token");

module.exports = function (deployer) {
  deployer.deploy(Favourite, "0xa79b684e24Bd85fa5784c598c3690b68Dc93a058").then(async () => {
    console.log("Migration 3");
    // get instance of deployed Favourite contract
    const fInstance = await Favourite.deployed();
    // deploy and pass arguments
    await deployer.deploy(Vote, fInstance.address);
    // get instance of deployed Vote contract
    const vInstance = await Vote.deployed();
    // set Vote address in Favourite
    await fInstance.setVoteAddress(vInstance.address);
    const tInstance = await Token.deployed();
    console.log(tInstance.address);
  });
};
