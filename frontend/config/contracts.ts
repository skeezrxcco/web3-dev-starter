import { type Address } from 'viem'

export const HELLO_WORLD_ADDRESS = process.env.NEXT_PUBLIC_HELLO_WORLD_ADDRESS as Address

export const SUPPORTED_CHAINS = [
  {
    id: 1337,
    name: 'Localhost',
    network: 'localhost',
    nativeCurrency: {
      decimals: 18,
      name: 'ETH',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: { http: ['http://127.0.0.1:8545'] },
      public: { http: ['http://127.0.0.1:8545'] },
    },
  }
]
