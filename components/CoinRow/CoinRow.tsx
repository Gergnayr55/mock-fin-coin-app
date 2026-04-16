import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { formatNumber } from "../../helpers/helpers";
import { colors } from "../../theme";
import { Coin } from "../../types/api";
import styles from "./CoinRow.styles";

interface Props {
  coin: Coin;
  onPress: () => void;
}

const CoinRow = ({ coin, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.row}>
      <Image source={{ uri: coin.image }} style={styles.coinImage} />
      <View style={styles.nameCol}>
        <Text style={styles.coinName}>{coin.name}</Text>
        <Text style={styles.coinSymbol}>{coin.symbol.toUpperCase()}</Text>
      </View>
      <View style={styles.priceCol}>
        <Text style={styles.price}>${formatNumber(coin.current_price)}</Text>
        <Text style={[styles.change, { color: coin.price_change_percentage_24h < 0 ? colors.negative : colors.positive }]}>
          {formatNumber(coin.price_change_percentage_24h)}%
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default CoinRow;
