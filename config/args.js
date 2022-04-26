const { utils } = require("ethers");

const ContractArgs = [
  "Skater Punks",
  "SP",
  utils.parseEther("0.01"),
  10000,
  1,
  "",
];

module.exports = ContractArgs;
