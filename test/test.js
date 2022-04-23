const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Collection NFT", function () {
  const tokenName = "Collection NFT";
  const tokenSymbol = "SP";
  const cost = hre.ethers.utils.parseEther("0.01");
  const maxSupply = 10000;

  it("Should deploy the contract successfully", async function () {
    const CollectionNFTFactory = await ethers.getContractFactory("CollectionNFT");
    const CollectionNFT = await CollectionNFTFactory.deploy(
      tokenName,
      tokenSymbol,
      cost,
      maxSupply,
    );
    await CollectionNFT.deployed();

    expect(await CollectionNFT.name()).to.equal(tokenName);
    expect(await CollectionNFT.symbol()).to.equal(tokenSymbol);
    expect(await CollectionNFT.cost()).to.equal(cost);
    expect(await CollectionNFT.maxSupply()).to.equal(maxSupply);
  });
});
