import React, { useContext } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { useWatchlist } from "../State/WatchlistContext";
import { StockContext } from "../State/StockContext";
import CoinRow from "../CoinRow";
import styles from "./Portfolio.styles.js";

const Portfolio = () => {
  const { watchlist } = useWatchlist();
  const { setStockDetails } = useContext(StockContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.inner}>
          <Text style={styles.title}>Watchlist</Text>
          {watchlist.length === 0 ? (
            <Text style={styles.emptyText}>No coins added yet. Tap the star on a coin to add it.</Text>
          ) : (
            <View style={styles.listWrapper}>
              {watchlist.map((coin) => (
                <CoinRow
                  key={coin.id}
                  coin={coin}
                  onPress={() => {
                    setStockDetails(coin);
                    navigation.navigate("Coins", { screen: "Details", params: { id: coin.id } });
                  }}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Portfolio;
