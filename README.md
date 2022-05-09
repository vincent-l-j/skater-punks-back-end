# Skater Punks Smart Contract

This project implements the ERC721a standard to deploy the Skater Punk NFT collection.

## Setup

1. Install [node.js](https://nodejs.org/en/download/)
2. Clone this repo
3. Copy [.env.example](.env.example) and save it as `.env`
4. Fill in your api keys in `.env`
5. `npm install`

## Deployment

```bash
# deploy the contract on rinkeby
npx hardhat run scripts/deploy.js --network rinkeby
```

## Verification

[hardhat-etherscan](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html#complex-arguments) was used to verify the source code on Rinkeby etherscan:

```
npx hardhat verify --constructor-args config/args.js DEPLOYED_CONTRACT_ADDRESS
```

See the code of the deployed contract [here](https://rinkeby.etherscan.io/address/0x1591E3cDB0360ABDb764B6c9F8F61F9794fdf12c#code).
