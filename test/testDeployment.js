const fs = require("fs");
const Web3 = require("web3");

const web3  = new Web3("http://localhost:7545");
const SimpleContract = artifacts.require("SimpleContract");
const Vote = artifacts.require("Vote");

contract('TestWithDeployment', () => {

  it('should do something, deploy, do something', async () => {

    // get the abi and bytecode after compilation of Token
    var content = JSON.parse(fs.readFileSync("build/contracts/SimpleContract.json"));
    var abi = content['abi'];
    var bytecode = content['bytecode'];

    //create contract and depoly
    var ContractInit = new web3.eth.Contract(abi);
    var ContractTx = ContractInit.deploy({data: bytecode, arguments: ["Josh"]});

    // send transaction from the 1st account
    var accounts = await web3.eth.getAccounts();
    var instance = await ContractTx.send({from: accounts[0], gas: 5000000});
    // get address
    var contractAddress = instance.options.address;
    console.log(contractAddress);

  });
});

contract('Vote', () => {

  let contractInstance = null;
  before(async () => {
    contractInstance = await Vote.deployed();
  });

  it('should vote', async () => {
    const vote_address = web3.utils.toChecksumAddress('0xa79b684e24Bd85fa5784c598c3690b68Dc93a058');
    await contractInstance.vote(vote_address);
    // check condition
    const votes = await contractInstance.winner_votes();
    assert.equal(votes, 2, "votes not correct");

  });
});
