import React, { useState, createContext } from "react";
import { Coin } from "../../types/api";

interface StockContextType {
  stockDetails: Coin | null;
  setStockDetails: (coin: Coin) => void;
}

export const StockContext = createContext<StockContextType>({
  stockDetails: null,
  setStockDetails: () => {},
});

const StockContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [stockDetails, setStockDetails] = useState<Coin | null>(null);
  return (
    <StockContext.Provider value={{ stockDetails, setStockDetails }}>
      {children}
    </StockContext.Provider>
  );
};

export default StockContextProvider;
