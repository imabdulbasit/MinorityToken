const MinorityToken = artifacts.require("Minority");
// const MinorityCrowdsale = artifacts.require("MinorityCrowdsale")

module.exports = async function (deployer) {
  await deployer.deploy(MinorityToken);
  const minorityToken = MinorityToken.deployed();

  // await deployer.deploy(MinorityCrowdsale);
  // const minorityCrowdsale = MinorityCrowdsale.deployed();
};
