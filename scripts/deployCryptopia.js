
const hre = require("hardhat");

async function main() {

  const Cryptopia = await hre.ethers.getContractFactory("Cryptopia");
  const cryptopia = await Cryptopia.deploy(); 

  await cryptopia.deployed();

  console.log("Cryptopia deployed to:", cryptopia.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
