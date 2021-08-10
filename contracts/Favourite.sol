// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Favourite {

  address private favouriteWinner;
  address voteAddress;
  address owner;

  modifier onlyVote() {
      require(msg.sender == voteAddress, "Only Vote.sol can use");
      _;
  }

  modifier onlyOwner() {
      require(msg.sender == owner, "Only owner can use");
      _;
  }

  constructor(address _favouriteWinner){
    favouriteWinner = _favouriteWinner;
    owner = msg.sender;
  }

  function isFavourite(address user) public view onlyVote returns(bool){
    return (favouriteWinner == user);
  }

  function setVoteAddress(address _voteAddress) public onlyOwner{
    voteAddress = _voteAddress;
  }

}
