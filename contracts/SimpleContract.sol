pragma solidity >=0.4.22 <0.9.0;

contract SimpleContract {

  string public name;
  
  constructor(string memory yourName) public{
    name = yourName;
  }
}
