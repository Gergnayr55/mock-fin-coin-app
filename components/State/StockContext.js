import React, { useState, createContext } from "react";

export const StockContext = createContext();

const StockContextProvider = (props) => {
  const [stockDetails, setStockDetails] = useState({});
  return (
    <StockContext.Provider value={{ stockDetails, setStockDetails }}>
      {props.children}
    </StockContext.Provider>
  );
};

export default StockContextProvider;
