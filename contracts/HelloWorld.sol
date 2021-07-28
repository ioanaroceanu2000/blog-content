pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {

  string public name;
  uint public number;

  struct MyStruct {
      uint variable_1;
      uint variable_2;
  }
  MyStruct structInstance;

  constructor(string memory yourName) public{
    name = yourName;
    number = 0;
    structInstance = MyStruct(3,4);
  }
  
  function changeName(string memory yourName) public{
    name = yourName;
  }

  function getName() public view returns(string memory){
    return name;
  }

  function getNameNoView() public returns(string memory){
    return name;
  }


  function getNumber() public returns(uint){
    return number;
  }

  function chageNumber(uint no) public{
    number = no;
  }

  function getStruct() public view returns(uint,uint){
    return (structInstance.variable_1, structInstance.variable_2);
  }

  function getStructNoView(string memory yourName) public returns(uint,uint){
    name = yourName;
    return (structInstance.variable_1, structInstance.variable_2);
  }

  function getStructNoParam(uint no) public view returns(uint,uint){
    return (structInstance.variable_1, no);
  }

}
