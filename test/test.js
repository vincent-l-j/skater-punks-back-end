const { expect } = require("chai");
const { ethers } = require("hardhat");

const Config = require("../config/config");

describe("Skater Punks", function () {
  it("Should deploy the contract successfully", async function () {
    const SkaterPunksFactory = await ethers.getContractFactory("SkaterPunks");
    const SkaterPunks = await SkaterPunksFactory.deploy(
      Config.tokenName,
      Config.tokenSymbol,
      Config.cost,
      Config.maxSupply,
      Config.maxMintAmountPerTx,
      Config.hiddenMetadataUri,
    );
    await SkaterPunks.deployed();

    expect(await SkaterPunks.name()).to.equal(Config.tokenName);
    expect(await SkaterPunks.symbol()).to.equal(Config.tokenSymbol);
    expect(await SkaterPunks.cost()).to.equal(Config.cost);
    expect(await SkaterPunks.maxSupply()).to.equal(Config.maxSupply);
  });
});
