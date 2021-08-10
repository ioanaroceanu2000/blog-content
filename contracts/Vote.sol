// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Favourite.sol";

contract Vote {

  mapping (address => uint) public votes;
  address winner;
  address owner;
  uint public winner_votes;
  Favourite favouriteContract;


  constructor(address _favouriteAddress){
    owner = msg.sender;
    // bonus poins for the favourite player
    favouriteContract = Favourite(_favouriteAddress);
  }

  function vote(address user) public{
    // favourite player has a head start
    if(favouriteContract.isFavourite(user) && votes[user] == 0){
      votes[user] = 1;
    }
    votes[user] = SafeMath.add(votes[user], 1);
    // user wins if it has the most votes
    if(votes[user] > winner_votes){
      winner_votes = votes[user];
      winner = user;
    }
  }


}
