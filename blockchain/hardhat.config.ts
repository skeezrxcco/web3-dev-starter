import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const { MAINNET_RPC_URL, MAINNET_BLOCK_NUMBER } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: MAINNET_RPC_URL || '',
        blockNumber: MAINNET_BLOCK_NUMBER ? parseInt(MAINNET_BLOCK_NUMBER) : undefined
      }
    },
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
};

export default config;