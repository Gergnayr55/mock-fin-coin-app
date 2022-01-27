import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StockList from "../StockList";
import StockDetails from "../StockDetails";
import StockContextProvider from "../State/StockContext";
const Stack = createStackNavigator();
const StockContainer = () => (
  <StockContextProvider>
    <Stack.Navigator>
      <Stack.Screen
        name="Coins"
        component={StockList}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Details" component={StockDetails} />
    </Stack.Navigator>
  </StockContextProvider>
);
export default StockContainer;
