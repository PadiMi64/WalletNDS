import { useState } from 'react';

export function useWalletDetails(address: string) {
  const [data] = useState({
    wallet: {
      address,
      balance: '0',
      transactions: 0,
    },
    transactions: [],
    tokens: [],
    collectibles: [],
  });

  return {
    data,
    isLoading: false,
    error: null,
  };
}
