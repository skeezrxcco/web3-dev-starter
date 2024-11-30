// context/index.tsx
'use client'

import { wagmiAdapter, projectId } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react' 
import { mainnet, arbitrum, avalanche, base, optimism, polygon, hardhat } from '@reown/appkit/networks'
import React, { type ReactNode, useState, useEffect } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'
import Head from 'next/head'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

const metadata = {
  name: 'Propulsion',
  description: 'Propulsion App',
  url: 'localhost:3001',
  icons: ['']
}

// Create the modal
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum, avalanche, base, optimism, polygon, hardhat],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  }
})

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const [mounted, setMounted] = React.useState(false)
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {mounted && children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta name="darkreader-lock" />
      </Head>
      {children}
    </>
  )
}

export default ContextProvider