// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.9; 

contract Mung {
    string public text; 

    constructor(string memory _text) { 
        text = _text;
    }
    
    function setText(string memory _text) public{
        text = _text;
    }

    function errorOccur(uint a) public pure returns (uint) {
        require(a != 0, "hello world error");
        return a;
    }
}