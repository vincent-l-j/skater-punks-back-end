const hre = require("hardhat");

async function main() {
  const tokenName = "Skater Punks";
  const tokenSymbol = "SP";
  const cost = hre.ethers.utils.parseEther("0.01");
  const maxSupply = 10000;

  // We get the contract to deploy
  const SkaterPunksFactory = await hre.ethers.getContractFactory("SkaterPunks");
  const SkaterPunks = await SkaterPunksFactory.deploy(
    tokenName,
    tokenSymbol,
    cost,
    maxSupply,
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
