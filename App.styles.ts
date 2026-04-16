import { StyleSheet } from "react-native";
import { colors } from "./theme";

export const TAB_ICONS = {
  Watchlist: { focused: "star", unfocused: "star-outline" },
  Coins: { focused: "trending-up", unfocused: "trending-up-outline" },
};

export const tabNavigatorOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    position: "absolute" as const,
    elevation: 0,
    backgroundColor: colors.background,
    borderRadius: 5,
    height: 90,
  },
};

export default StyleSheet.create({
  container: {
    flex: 1,
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
