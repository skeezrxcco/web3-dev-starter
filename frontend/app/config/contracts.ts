// Contract addresses and ABIs for different networks
import { localhost, sepolia } from '@reown/appkit/networks'

interface ContractConfig {
  address: `0x${string}`
  abi: Record<string, unknown>[]
}

interface NetworkConfig {
  [key: string]: {
    [contractName: string]: ContractConfig
  }
}

export const contracts: NetworkConfig = {
  [localhost.id]: {
    HelloWorld: {
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      abi: [
        {
          inputs: [
            {
              internalType: "string",
              name: "initialMessage",
              type: "string"
            }
          ],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [],
          name: "getMessage",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "newMessage",
              type: "string"
            }
          ],
          name: "setMessage",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    },
  },
  [sepolia.id]: {
    // Add your Sepolia contract addresses here after deployment
  }
}

// Helper function to get contract config for current network
export function getContractConfig(networkId: number, contractName: string): ContractConfig | undefined {
  return contracts[networkId]?.[contractName]
}
