import { StyleSheet } from "react-native";
import { colors } from "./theme.js";

export const TAB_ICONS = {
  Watchlist: { focused: "star", unfocused: "star-outline" },
  Coins: { focused: "trending-up", unfocused: "trending-up-outline" },
};

export default StyleSheet.create({
  tabNavigator: {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: "absolute",
      elevation: 0,
      backgroundColor: colors.background,
      borderRadius: 5,
      height: 90,
    },
  },
  tabIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 2,
  },
});
