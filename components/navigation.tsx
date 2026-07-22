'use client';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Wallet NDS</h1>
        <div className="text-sm text-slate-400">Premium Wallet Explorer</div>
      </div>
    </nav>
  );
}
