import React, { useState, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
} from "react-native";
import { StockContext } from "../State/StockContext";
import { formatDecimals } from "../../helpers/helpers.js";
import CurrencyInput from "react-native-currency-input";
import StockChart from "../StockChart";
const StockDetails = (id) => {
  const { stockDetails } = useContext(StockContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(null);
  console.log(stockDetails);
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
                        stockDetails?.price_change_percentage_24h < 0
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

      <View
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: "91px",
        }}
      >
        <Pressable
          style={{
            width: "100%",
            color: "blue",
            textAlign: "center",
          }}
          onPress={() => {
            console.log("trade button clicked");
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={{ color: "white" }}>Trade</Text>
        </Pressable>
      </View>
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 22,
            }}
          >
            <View
              style={{
                margin: 20,
                backgroundColor: "white",
                borderRadius: 20,
                padding: 55,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                justifyContent: "space-around",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: 20,
                }}
              >
                Buy ${value || "0.00"}
              </Text>
              <CurrencyInput
                style={{ padding: 10 }}
                value={value}
                onChangeValue={setValue}
                unit="$"
                delimiter=","
                separator="."
                precision={2}
                onChangeText={(formattedValue) => {
                  console.log(formattedValue);
                }}
              />
              <Pressable
                style={{
                  width: "100%",
                  textAlign: "center",
                  margin: 20,
                  borderRadius: 8,
                  padding: 10,
                  elevation: 2,
                  backgroundColor: "blue",
                }}
                onPress={() => {
                  console.log("buy button clicked");
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={{ color: "white" }}>Buy Now</Text>
              </Pressable>

              <TextInput
                style={{
                  flex: 1,
                  width: "100%",
                  height: 70,
                  color: "black",
                }}
                onChangeText={() => console.log("changing text")}
              />
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};
export default StockDetails;
