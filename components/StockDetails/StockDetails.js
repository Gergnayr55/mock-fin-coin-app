import React, { useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { StockContext } from "../State/StockContext";
import { formatDecimals } from "../../helpers/helpers.js";
const StockDetails = (id) => {
  const { stockDetails } = useContext(StockContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingTop: 10 }}>
          <>
            {stockDetails && Object.keys(stockDetails).length > 0 && (
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 15,
                  paddingHorizontal: 15,
                  justifyContent: "space-between",
                  paddingBottom: 20,
                }}
              >
                <View>
                  <Image
                    source={{ uri: stockDetails?.image }}
                    style={{ width: 35, height: 35 }}
                  />
                </View>
                <View style={{ paddingLeft: 15, flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: "400" }}>
                    {stockDetails?.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "400",
                      color: "#5d616d",
                    }}
                  >
                    {stockDetails?.symbol.toUpperCase()}
                  </Text>
                </View>
                <View style={{ paddingLeft: 15 }}>
                  <Text style={{ fontSize: 16 }}>
                    ${formatDecimals(stockDetails?.current_price)}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color:
                        stock?.price_change_percentage_24h < 0
                          ? "red"
                          : "black",
                    }}
                  >
                    {stockDetails.price_change_percentage_24h}%
                  </Text>
                </View>
              </View>
            )}
          </>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: "91px",
        }}
        onPress={() => {
          console.log("trade button clicked");
        }}
      >
        <Text style={{ color: "white" }}> Trade</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default StockDetails;
