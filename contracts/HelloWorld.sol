pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {

  string public name;
  uint public number;

  struct MyStruct {
      uint variable_1;
      uint variable_2;
  }
  MyStruct structInstance;

  constructor(string memory yourName){
    name = yourName;
    number = 0;
    structInstance = MyStruct(3,4);
  }

  function getStructNotModified() public returns(uint,uint){
    structInstance.variable_1 +=300;
    return (structInstance.variable_1, structInstance.variable_2 + 10);
  }

}
