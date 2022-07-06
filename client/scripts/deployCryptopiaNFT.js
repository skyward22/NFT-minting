const hre = require("hardhat");

async function main() {
  const CryptopiaNFT = await hre.ethers.getContractFactory("CryptopiaNFT");
  const cryptopiaNFT = await CryptopiaNFT.deploy();

  await cryptopiaNFT.deployed();

  console.log("CryptopiaNFT deployed to:", cryptopiaNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
