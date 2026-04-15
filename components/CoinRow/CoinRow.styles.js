import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme.js";

export default StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  coinImage: {
    width: 35,
    height: 35,
  },
  nameCol: {
    paddingLeft: 15,
    flex: 1,
  },
  coinName: typography.coinName,
  coinSymbol: typography.coinSymbol,
  priceCol: {
    paddingLeft: 15,
    alignItems: "flex-end",
  },
  price: typography.price,
  change: typography.change,
});
