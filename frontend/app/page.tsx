'use client';

import Header from '@components/Header';
import { Web3Auth } from '@components/Web3Auth';
import { HelloWorld } from '@components/HelloWorld';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
          <Web3Auth />
          <HelloWorld />
        </div>
      </main>
    </div>
  );
}
