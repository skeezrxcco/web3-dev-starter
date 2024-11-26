import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, hardhat } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

// Your WalletConnect project ID
const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ''

export const config = createConfig({
  chains: [mainnet, sepolia, hardhat],
  connectors: [
    injected(),
    walletConnect({ 
      projectId,
      showQrModal: true,
      metadata: {
        name: 'Propulsion',
        description: 'Your Propulsion App',
        url: 'http://localhost:3001',
        icons: ['https://avatars.githubusercontent.com/u/37784886']
      }
    })
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [hardhat.id]: http('http://127.0.0.1:8545'),
  },
})
