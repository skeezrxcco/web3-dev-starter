import { ethers } from "hardhat";

async function main() {
  const initialMessage = "Hello, Web3 World!";
  
  const helloWorld = await ethers.deployContract("HelloWorld", [initialMessage]);
  await helloWorld.waitForDeployment();
  
  console.log(`HelloWorld deployed to ${await helloWorld.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
