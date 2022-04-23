const hre = require("hardhat");

const Config = require("../config/config");

async function main() {
  // We get the contract to deploy
  const SkaterPunksFactory = await hre.ethers.getContractFactory("SkaterPunks");
  const SkaterPunks = await SkaterPunksFactory.deploy(
    Config.tokenName,
    Config.tokenSymbol,
    Config.cost,
    Config.maxSupply,
    Config.maxMintAmountPerTx,
  );
  await SkaterPunks.deployed();
  console.log("SkaterPunks deployed to:", SkaterPunks.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
