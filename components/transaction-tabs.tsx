'use client';

import { useState } from 'react';

interface TransactionTabsProps {
  transactions: any[];
  tokens: any[];
  collectibles: any[];
}

export function TransactionTabs({ transactions, tokens, collectibles }: TransactionTabsProps) {
  const [activeTab, setActiveTab] = useState<'transactions' | 'tokens' | 'collectibles'>('transactions');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-slate-800 rounded-lg border border-slate-700">
        <div className="flex border-b border-slate-700">
          <button
            onClick={() => setActiveTab('transactions')}
            className={`flex-1 px-4 py-3 font-medium ${
              activeTab === 'transactions'
                ? 'text-white border-b-2 border-blue-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Transactions ({transactions.length})
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`flex-1 px-4 py-3 font-medium ${
              activeTab === 'tokens'
                ? 'text-white border-b-2 border-blue-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tokens ({tokens.length})
          </button>
          <button
            onClick={() => setActiveTab('collectibles')}
            className={`flex-1 px-4 py-3 font-medium ${
              activeTab === 'collectibles'
                ? 'text-white border-b-2 border-blue-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Collectibles ({collectibles.length})
          </button>
        </div>
        <div className="p-6">
          {activeTab === 'transactions' && (
            <div className="text-slate-400 text-center py-8">
              {transactions.length === 0 ? 'No transactions found' : `${transactions.length} transactions`}
            </div>
          )}
          {activeTab === 'tokens' && (
            <div className="text-slate-400 text-center py-8">
              {tokens.length === 0 ? 'No tokens found' : `${tokens.length} tokens`}
            </div>
          )}
          {activeTab === 'collectibles' && (
            <div className="text-slate-400 text-center py-8">
              {collectibles.length === 0 ? 'No collectibles found' : `${collectibles.length} collectibles`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
