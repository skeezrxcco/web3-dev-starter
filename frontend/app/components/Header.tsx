'use client';

import { Web3Auth } from '@components/Web3Auth';

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">Web3 App</div>
          <Web3Auth />
        </div>
      </div>
    </header>
  );
}
