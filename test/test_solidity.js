const truffleAssert = require('truffle-assertions');
const Solidity = artifacts.require("Solidity");

contract("Solidity", accounts => {
 before(async () => {
   this.instance = await Solidity.deployed();
 })

})