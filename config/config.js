const { utils } = require("ethers");

const Config = {
  tokenName: "Skater Punks",
  tokenSymbol: "SP",
  cost: utils.parseEther("0.01"),
  maxSupply: 10000,
  maxMintAmountPerTx: 1,
  hiddenMetadataUri: "",
};

module.exports = Config;
