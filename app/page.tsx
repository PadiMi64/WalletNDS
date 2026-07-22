'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [address, setAddress] = useState('');
  const [gramPrice, setGramPrice] = useState('$1.43');
  const [marketCap, setMarketCap] = useState('$3.64B');
  const [tps, setTps] = useState('43.43');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      router.push(`/wallet/${address}`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {/* Star Icon */}
          <svg className="w-6 h-6 text-slate-400 hover:text-white cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          
          {/* Settings Icon */}
          <svg className="w-6 h-6 text-slate-400 hover:text-white cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        {/* Connect Wallet Button */}
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
          Connect Wallet
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
        
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
              ◆
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">Wallet NDS</h1>
          <p className="text-slate-400 text-lg">Premium Blockchain Wallet Explorer</p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-12">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center bg-slate-800/50 border-2 border-blue-500/30 rounded-2xl px-6 py-4 hover:border-blue-500/60 transition focus-within:border-blue-500">
              <svg className="w-5 h-5 text-slate-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Search by address, name or transaction"
                className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-lg"
              />
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
          </form>
        </div>

        {/* Stats Grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {/* Gram Price */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition">
            <p className="text-slate-400 text-sm mb-2">Gram (prev. Toncoin) Price</p>
            <p className="text-white text-3xl font-bold">{gramPrice}</p>
            <div className="mt-4 h-12 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg flex items-center px-3">
              <svg className="w-full h-full text-blue-500/30" viewBox="0 0 100 40" preserveAspectRatio="none">
                <polyline points="0,20 10,18 20,22 30,16 40,24 50,14 60,26 70,12 80,28 90,10 100,30" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Market Cap */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition">
            <p className="text-slate-400 text-sm mb-2">Market Cap</p>
            <p className="text-white text-3xl font-bold">{marketCap}</p>
          </div>

          {/* Current TPS */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition">
            <p className="text-slate-400 text-sm mb-2">Current TPS</p>
            <p className="text-white text-3xl font-bold">{tps}</p>
          </div>

          {/* Network Status */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition">
            <p className="text-slate-400 text-sm mb-2">Network Status</p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <p className="text-white font-semibold">Healthy</p>
            </div>
          </div>
        </div>

        {/* Apps Section */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tonkeeper */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-slate-800/70 transition cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">T</span>
              </div>
              <h3 className="text-white font-semibold">Tonkeeper</h3>
            </div>
            <p className="text-slate-400 text-sm">
              The leading non-custodial wallet on TON, delivering the best set of features
            </p>
          </div>

          {/* Tonkeeper Pro */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-slate-800/70 transition cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-300 to-slate-400 rounded-xl flex items-center justify-center">
                <span className="text-slate-900 text-lg font-bold">T</span>
              </div>
              <h3 className="text-white font-semibold">Tonkeeper Pro</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Your personal wallet on desktop. Receive, buy and spend crypto with ease
            </p>
          </div>

          {/* TonViewer */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-slate-800/70 transition cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-bold">V</span>
              </div>
              <h3 className="text-white font-semibold">Wallet NDS</h3>
            </div>
            <p className="text-slate-400 text-sm">
              Premium blockchain explorer for wallet verification and transaction analysis
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-6 px-4 text-center text-slate-500 text-sm mt-12">
        © 2026 Wallet NDS. All rights reserved.
      </footer>
    </main>
  );
}
