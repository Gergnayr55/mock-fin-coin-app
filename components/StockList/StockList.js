import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { StockContext } from "../State/StockContext";
import { useNavigation } from "@react-navigation/core";
import { formatDecimals } from "../../helpers/helpers.js";
const StockList = () => {
  const { setStockDetails } = useContext(StockContext);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  //   const filterStocks = (arr) => {
  //     if (arr.length > 0 && searchVal.length) {
  //       return arr.filter((coin) =>
  //         coin.name.toLowerCase().includes(searchVal.toLowerCase())
  //       );
  //     }
  //   };
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then(function (response) {
        // console.log(response);
        setData(response.data);
        console.log("data is ", data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log("data");
  console.log(data);
  console.log("loading");
  console.log(loading);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingTop: 10 }}>
          <View
            style={{
              height: 420,
              width: "100%",
              borderWidth: 0.5,
              borderRadius: 10,
              borderColor: "#ddd",
            }}
          >
            <TextInput
              style={{
                flex: 1,
                width: "100%",
                height: 50,
                color: "black",
                textAlignVertical: "top", // android fix for centering it at the top-left corner
              }}
              onChangeText={(search) => setSearchVal(search)}
            />
            {loading ? (
              <ActivityIndicator
                size="large"
                style={{ paddingTop: "50%", paddingHorizontal: 20 }}
              />
            ) : (
              <View>
                {data &&
                  data.length &&
                  data
                    .filter((coin) =>
                      coin.name.toLowerCase().includes(searchVal.toLowerCase())
                    )
                    .map((stock) => (
                      <View
                        style={{ flex: 1, flexDirection: "column" }}
                        key={stock.id}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            console.log(stock.id);
                            setStockDetails(stock);
                            navigation.navigate("Details", { id: stock.id });
                          }}
                        >
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
                                source={{ uri: stock.image }}
                                style={{ width: 35, height: 35 }}
                              />
                            </View>
                            <View style={{ paddingLeft: 15, flex: 1 }}>
                              <Text style={{ fontSize: 16, fontWeight: "400" }}>
                                {stock.name}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: "400",
                                  color: "#5d616d",
                                }}
                              >
                                {stock.symbol.toUpperCase()}
                              </Text>
                            </View>
                            <View style={{ paddingLeft: 15 }}>
                              <Text style={{ fontSize: 16 }}>
                                ${formatDecimals(stock.current_price)}
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
                                {stock.price_change_percentage_24h}%
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StockList;
