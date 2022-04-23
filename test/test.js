const { expect } = require("chai");
const { ethers } = require("hardhat");

const Config = require("../config/config");

describe("Collection NFT", function () {
  it("Should deploy the contract successfully", async function () {
    const CollectionNFTFactory = await ethers.getContractFactory("CollectionNFT");
    const CollectionNFT = await CollectionNFTFactory.deploy(
      Config.tokenName,
      Config.tokenSymbol,
      Config.cost,
      Config.maxSupply,
      Config.maxMintAmountPerTx,
    );
    await CollectionNFT.deployed();

    expect(await CollectionNFT.name()).to.equal(Config.tokenName);
    expect(await CollectionNFT.symbol()).to.equal(Config.tokenSymbol);
    expect(await CollectionNFT.cost()).to.equal(Config.cost);
    expect(await CollectionNFT.maxSupply()).to.equal(Config.maxSupply);
  });
});
