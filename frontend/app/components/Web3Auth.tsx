'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';

export function Web3Auth() {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const connector = connectors[0]; // Use the first available connector

  return (
    <button
      onClick={() => isConnected ? disconnect() : connect({ connector })}
      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
    >
      {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
    </button>
  );
}
