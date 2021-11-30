const Solidity = artifacts.require("Solidity");

module.exports = function (deployer) {
  deployer.deploy(Solidity);
};