const hre = require("hardhat");

async function main() {
  const tokenName = "Collection NFT";
  const tokenSymbol = "SP";
  const cost = hre.ethers.utils.parseEther("0.01");
  const maxSupply = 10000;
  const maxAmountPerTx = 1;

  // We get the contract to deploy
  const CollectionNFTFactory = await hre.ethers.getContractFactory("CollectionNFT");
  const CollectionNFT = await CollectionNFTFactory.deploy(
    tokenName,
    tokenSymbol,
    cost,
    maxSupply,
    maxAmountPerTx,
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
