import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@watchlist";

export const WatchlistContext = createContext();

const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored) setWatchlist(JSON.parse(stored));
    });
  }, []);

  const addToWatchlist = async (coin) => {
    const updated = [...watchlist, coin];
    setWatchlist(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const removeFromWatchlist = async (coinId) => {
    const updated = watchlist.filter((c) => c.id !== coinId);
    setWatchlist(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const isInWatchlist = (coinId) => watchlist.some((c) => c.id === coinId);

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);

export default WatchlistProvider;
