export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export type RootStackParamList = {
  Coins: undefined;
  Details: { id: string };
};

export type TabParamList = {
  Watchlist: undefined;
  Coins: { screen: keyof RootStackParamList; params?: { id: string } };
};
