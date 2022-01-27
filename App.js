import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StockChart from "./components/StockChart";
import Portfolio from "./components/Portfolio";
import StockContainer from "./components/StockContainer";
import menuIcon from "./assets/favicon.png";
import suitcase from "./assets/suitcase.png";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 5,
            height: 90,
          },
        }}
      >
        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={menuIcon}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                  Portfolio
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Watchlist"
          component={StockContainer}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={menuIcon}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                  Watchlist
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Stock Chart"
          component={StockChart}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={menuIcon}
                  resizeMode="contain"
                  style={{
                    width: 17,
                    height: 17,
                    tintColor: focused ? "blue" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
                >
                  Stock Chart
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
