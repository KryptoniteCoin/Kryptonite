const Kryptonite = artifacts.require("./Kryptonite.sol");

module.exports = function (deployer) {
  deployer.deploy(Kryptonite);
};
