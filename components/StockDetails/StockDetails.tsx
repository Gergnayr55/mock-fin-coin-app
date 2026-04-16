import React, { useContext } from "react";
import { Text, View, Image, SafeAreaView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StockContext } from "../State/StockContext";
import { useWatchlist } from "../State/WatchlistContext";
import { formatNumber } from "../../helpers/helpers";
import { colors, typography } from "../../theme";
import StockChart from "../StockChart";
import styles from "./StockDetails.styles";

const StockDetails = () => {
  const { stockDetails } = useContext(StockContext);
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

  const inWatchlist = stockDetails?.id ? isInWatchlist(stockDetails.id) : false;

  const toggleWatchlist = () => {
    if (!stockDetails) return;
    if (inWatchlist) {
      removeFromWatchlist(stockDetails.id);
    } else {
      addToWatchlist(stockDetails);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        {stockDetails && (
          <>
            <View style={styles.header}>
              <Image source={{ uri: stockDetails.image }} style={styles.coinImage} />
              <View style={styles.nameCol}>
                <Text style={typography.coinName}>{stockDetails.name}</Text>
                <Text style={typography.coinSymbol}>{stockDetails.symbol.toUpperCase()}</Text>
                <Text style={styles.price}>${formatNumber(stockDetails.current_price)}</Text>
                <Text style={[typography.change, { color: stockDetails.price_change_percentage_24h < 0 ? colors.negative : colors.positive }]}>
                  {formatNumber(stockDetails.price_change_percentage_24h)}%
                </Text>
              </View>
              <Pressable onPress={toggleWatchlist} style={styles.starButton}>
                <Ionicons
                  name={inWatchlist ? "star" : "star-outline"}
                  size={28}
                  color={inWatchlist ? colors.star : colors.starInactive}
                />
              </Pressable>
            </View>
            <StockChart />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StockDetails;
