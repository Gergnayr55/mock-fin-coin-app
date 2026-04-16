import React, { ComponentProps, useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Portfolio from "./components/Portfolio";
import StockContainer from "./components/StockContainer";
import StockContextProvider from "./components/State/StockContext";
import WatchlistProvider from "./components/State/WatchlistContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { colors } from "./theme";
import styles, { TAB_ICONS, tabNavigatorOptions } from "./App.styles";
import { TabParamList } from "./types/api";

SplashScreen.preventAutoHideAsync();

type IoniconsName = ComponentProps<typeof Ionicons>["name"];

const Tab = createBottomTabNavigator<TabParamList>();

interface TabIconProps {
  focused: boolean;
  label: keyof typeof TAB_ICONS;
}

const TabIcon = ({ focused, label }: TabIconProps) => {
  const iconName = (focused ? TAB_ICONS[label].focused : TAB_ICONS[label].unfocused) as IoniconsName;
  const iconColor = focused ? colors.tabActive : colors.tabInactive;
  return (
    <View style={styles.tabIcon}>
      <Ionicons name={iconName} size={22} color={iconColor} />
      <Text style={[styles.tabLabel, { color: iconColor }]}>{label}</Text>
    </View>
  );
};

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setAppReady(true);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) await SplashScreen.hideAsync();
  }, [appReady]);

  if (!appReady) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ErrorBoundary>
        <WatchlistProvider>
          <StockContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={tabNavigatorOptions}>
                <Tab.Screen
                  name="Watchlist"
                  component={Portfolio}
                  options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} label="Watchlist" /> }}
                />
                <Tab.Screen
                  name="Coins"
                  component={StockContainer}
                  options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} label="Coins" /> }}
                  listeners={({ navigation }) => ({
                    tabPress: () => {
                      navigation.navigate("Coins", { screen: "Coins" });
                    },
                  })}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </StockContextProvider>
        </WatchlistProvider>
      </ErrorBoundary>
    </View>
  );
}
