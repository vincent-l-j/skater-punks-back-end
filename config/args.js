const { utils } = require("ethers");

const ContractArgs = [
  "Collection NFT",
  "CN",
  utils.parseEther("0.01"),
  10000,
  1,
  "",
];

module.exports = ContractArgs;
