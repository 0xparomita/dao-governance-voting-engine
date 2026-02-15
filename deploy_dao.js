const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("GovernanceToken");
  const token = await Token.deploy();
  await token.waitForDeployment();

  const Governor = await hre.ethers.getContractFactory("GovernorCore");
  const governor = await Governor.deploy(await token.getAddress());

  await governor.waitForDeployment();

  console.log(`Gov Token: ${await token.getAddress()}`);
  console.log(`Governor Engine: ${await governor.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
