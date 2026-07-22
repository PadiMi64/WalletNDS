'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [address, setAddress] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      router.push(`/wallet/${address}`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Wallet NDS
          </h1>
          <div className="text-sm text-slate-400">Premium Blockchain Wallet Explorer</div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto pt-32">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Explore Your
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Blockchain Wallet
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 mb-12 animate-fade-in">
          Secure, private, and premium wallet verification for blockchain networks. 
          Enter any wallet address to view detailed information.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-16 animate-slide-up">
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter wallet address (0x...)"
              className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition transform hover:scale-105 whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </form>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold text-white mb-2">Instant Lookup</h3>
            <p className="text-slate-400 text-sm">
              Search any wallet address and get detailed information instantly
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
            <div className="text-3xl mb-3">🔐</div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure & Private</h3>
            <p className="text-slate-400 text-sm">
              Your data is never stored. All queries are anonymous and encrypted
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Data</h3>
            <p className="text-slate-400 text-sm">
              Get live blockchain data with transactions, tokens, and more
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-16">
          <div>
            <p className="text-3xl font-bold text-blue-400">100K+</p>
            <p className="text-slate-400 text-sm">Wallets Verified</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-cyan-400">99.9%</p>
            <p className="text-slate-400 text-sm">Uptime</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-400">24/7</p>
            <p className="text-slate-400 text-sm">Available</p>
          </div>
        </div>

        {/* Example Searches */}
        <div className="text-slate-500 text-sm">
          <p className="mb-3">Or try an example address:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setAddress('0x1234567890123456789012345678901234567890');
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition font-mono text-xs"
            >
              0x1234...7890
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center text-slate-400 text-sm">
          © 2026 Wallet NDS. Premium Blockchain Wallet Explorer.
        </div>
      </footer>
    </main>
  );
}
