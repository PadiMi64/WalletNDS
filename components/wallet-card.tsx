'use client';

interface WalletCardProps {
  wallet: {
    address: string;
    balance: string;
    transactions: number;
  };
}

export function WalletCard({ wallet }: WalletCardProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Wallet Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-slate-400 text-sm mb-2">Address</p>
            <p className="text-white font-mono text-sm break-all">{wallet.address}</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-2">Balance</p>
            <p className="text-white text-lg font-semibold">{wallet.balance}</p>
          </div>
          <div>
            <p className="text-slate-400 text-sm mb-2">Transactions</p>
            <p className="text-white text-lg font-semibold">{wallet.transactions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
