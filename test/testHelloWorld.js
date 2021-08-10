// to interact with the contract
const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', () => {

  // initialise the contract instance before running tests
  let contractInstance = null;
  before(async () => {
    contractInstance = await HelloWorld.deployed();
  });
/*
  // TEST 1
  it('initial name should be Ioana', async () => {
    // call contract's function
    const currentName = await contractInstance.getName();
    // check condition
    assert.equal(currentName, "Ioana", "the name is not Ioana");
  });

  // TEST 1
  it('initial name should be Ioana', async () => {
    // call contract's function
    const currentName = await contractInstance.getNameNoView.call();
    // check condition
    assert.equal(currentName, "Ioana", "the name is not Ioana");
  });

  // TEST 2
  it('should change name in John', async () => {
    // change name in contract
    await contractInstance.changeName("John");
    // get the current name
    const currentName = await contractInstance.getName.call();
    // check condition
    assert.equal(currentName, "John", "the name is not John");
  });

  // TEST 3
  it('should give zero', async () => {
    // get initial number
    const initialNumber = await contractInstance.getNumber();
    // check condition
    assert.equal(initialNumber, initialNumber, "initial number incorrect");
  });

  // TEST 3
  it('should give struct details', async () => { */
    // get initial number
    //const {0: variable_1, 1: variable_2} = await contractInstance.getStruct();
    /*contractInstance.getStruct().then(function(res){
      variable_1 = res[0];
      var variable_2 = res[1];
      // check condition
      assert.equal(variable_1, 3, "struct incorrect");
      assert.equal(variable_2, 4, "struct incorrect");
    })*/ /*
    const result = await contractInstance.getStruct();
    const {0: variable_1, 1: variable_2} = result;
    assert.equal(variable_1, 3, "struct incorrect");
    assert.equal(variable_2, 4, "struct incorrect");
  });

  // TEST 3
  it('should give struct details no param', async () => {
    const result = await contractInstance.getStructNoParam(20);
    const {0: variable_1, 1: variable_2} = result;
    assert.equal(variable_1, 3, "struct incorrect");
    assert.equal(variable_2, 20, "struct incorrect");
  }); */

  // TEST 3
  it('should give struct details', async () => {
    contractInstance.getStructNotModified().then(function(res){
      var variable_1 = res[0];
      var variable_2 = res[1];
      assert.equal(variable_1, 303, "struct incorrect");
      assert.equal(variable_2, 14, "struct incorrect");
    })
  });



});
