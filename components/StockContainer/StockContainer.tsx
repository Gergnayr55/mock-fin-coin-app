import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StockList from "../StockList";
import StockDetails from "../StockDetails";
import { RootStackParamList } from "../../types/api";

const Stack = createStackNavigator<RootStackParamList>();

const StockContainer = () => (
  <Stack.Navigator>
    <Stack.Screen name="Coins" component={StockList} />
    <Stack.Screen name="Details" component={StockDetails} />
  </Stack.Navigator>
);

export default StockContainer;
