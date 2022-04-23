const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Skater Punks", function () {
  const tokenName = "Skater Punks";
  const tokenSymbol = "SP";
  const cost = hre.ethers.utils.parseEther("0.01");
  const maxSupply = 10000;

  it("Should deploy the contract successfully", async function () {
    const SkaterPunksFactory = await ethers.getContractFactory("SkaterPunks");
    const SkaterPunks = await SkaterPunksFactory.deploy(
      tokenName,
      tokenSymbol,
      cost,
      maxSupply,
    );
    await SkaterPunks.deployed();

    expect(await SkaterPunks.name()).to.equal(tokenName);
    expect(await SkaterPunks.symbol()).to.equal(tokenSymbol);
    expect(await SkaterPunks.cost()).to.equal(cost);
    expect(await SkaterPunks.maxSupply()).to.equal(maxSupply);
  });
});
