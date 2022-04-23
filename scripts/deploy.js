const hre = require("hardhat");

const Config = require("../config/config");

async function main() {
  // We get the contract to deploy
  const CollectionNFTFactory = await hre.ethers.getContractFactory("CollectionNFT");
  const CollectionNFT = await CollectionNFTFactory.deploy(
    Config.tokenName,
    Config.tokenSymbol,
    Config.cost,
    Config.maxSupply,
    Config.maxMintAmountPerTx,
    Config.hiddenMetadataUri,
  );
  await CollectionNFT.deployed();
  console.log("CollectionNFT deployed to:", CollectionNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
