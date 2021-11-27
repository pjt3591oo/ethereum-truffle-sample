const Mung = artifacts.require("Mung");

module.exports = function (deployer) {
  deployer.deploy(Mung, "Hello Mung~");
};