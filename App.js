import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Portfolio from "./components/Portfolio";
import StockContainer from "./components/StockContainer";
import StockContextProvider from "./components/State/StockContext";
import WatchlistProvider from "./components/State/WatchlistContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { colors } from "./theme.js";
import styles, { TAB_ICONS } from "./App.styles.js";

const Tab = createBottomTabNavigator();

const TabIcon = ({ focused, label }) => {
  const iconName = focused ? TAB_ICONS[label].focused : TAB_ICONS[label].unfocused;
  const iconColor = focused ? colors.tabActive : colors.tabInactive;
  return (
    <View style={styles.tabIcon}>
      <Ionicons name={iconName} size={22} color={iconColor} />
      <Text style={[styles.tabLabel, { color: iconColor }]}>{label}</Text>
    </View>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <WatchlistProvider>
        <StockContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={styles.tabNavigator}>
              <Tab.Screen
                name="Watchlist"
                component={Portfolio}
                options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} label="Watchlist" /> }}
              />
              <Tab.Screen
                name="Coins"
                component={StockContainer}
                options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} label="Coins" /> }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </StockContextProvider>
      </WatchlistProvider>
    </ErrorBoundary>
  );
}
