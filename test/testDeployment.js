// to interact with the contract
const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', () => {

  // initialise the contract instance before running tests
  let contractInstance = null;
  before(async () => {
    contractInstance = await HelloWorld.deployed();
  });
  
  // TEST 1
  it('should do something, deploy, do something', async () => {
    // call contract's function
    const currentName = await contractInstance.getName();
    // check condition
    assert.equal(currentName, "Ioana", "the name is not Ioana");
  });



});
