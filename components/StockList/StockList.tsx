import React, { useState, useEffect, useContext, useCallback } from "react";
import { View, Text, FlatList, SafeAreaView, ActivityIndicator, TextInput } from "react-native";
import axios from "axios";
import { StockContext } from "../State/StockContext";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { isTooManyRequests } from "../../helpers/helpers";
import { Coin, RootStackParamList } from "../../types/api";
import CoinRow from "../CoinRow";
import styles from "./StockList.styles";

const StockList = () => {
  const { setStockDetails } = useContext(StockContext);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Coin[]>([]);
  const [searchVal, setSearchVal] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(isTooManyRequests(err) ? "Too many requests. Please wait a moment and try again." : "Failed to load coins.");
        setLoading(false);
      });
  }, []);

  const filtered = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  const renderItem = useCallback(({ item: coin }: { item: Coin }) => (
    <CoinRow
      coin={coin}
      onPress={() => {
        setStockDetails(coin);
        navigation.navigate("Details", { id: coin.id });
      }}
    />
  ), [setStockDetails, navigation]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" style={styles.loader} />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <View style={styles.header}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search here..."
              onChangeText={setSearchVal}
            />
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No coins found for "{searchVal}"</Text>
        }
        contentContainerStyle={styles.listContent}
        style={styles.listWrapper}
      />
    </SafeAreaView>
  );
};

export default StockList;
