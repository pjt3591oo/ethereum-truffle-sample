// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract openErc20 is ERC20 {
    constructor (string memory name, string memory symbol, uint8 decimals, uint totalSupply) 
    ERC20 (name, symbol) public {
        _mint(msg.sender, totalSupply);
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {}

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {}
}