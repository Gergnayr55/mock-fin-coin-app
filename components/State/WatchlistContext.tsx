import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Coin } from "../../types/api";

const STORAGE_KEY = "@watchlist";

interface WatchlistContextType {
  watchlist: Coin[];
  addToWatchlist: (coin: Coin) => Promise<void>;
  removeFromWatchlist: (coinId: string) => Promise<void>;
  isInWatchlist: (coinId: string) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType>({
  watchlist: [],
  addToWatchlist: async () => {},
  removeFromWatchlist: async () => {},
  isInWatchlist: () => false,
});

const WatchlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [watchlist, setWatchlist] = useState<Coin[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored) setWatchlist(JSON.parse(stored));
    });
  }, []);

  const addToWatchlist = async (coin: Coin): Promise<void> => {
    const updated = [...watchlist, coin];
    setWatchlist(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const removeFromWatchlist = async (coinId: string): Promise<void> => {
    const updated = watchlist.filter((c) => c.id !== coinId);
    setWatchlist(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const isInWatchlist = (coinId: string): boolean =>
    watchlist.some((c) => c.id === coinId);

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);

export default WatchlistProvider;
