'use client';

interface BreadcrumbProps {
  address: string;
}

export function Breadcrumb({ address }: BreadcrumbProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-slate-400">
      <span className="text-slate-300">Wallet</span>
      <span className="mx-2">/</span>
      <span className="text-slate-300 font-mono">{address.slice(0, 8)}...{address.slice(-8)}</span>
    </div>
  );
}
