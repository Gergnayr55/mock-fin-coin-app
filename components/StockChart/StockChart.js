import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const data = [
  { value: 100, label: "Jan" },
  { value: 110, label: "Feb" },
  { value: 90, label: "Mar" },
  { value: 130, label: "Apr" },
  { value: 80, label: "May" },
  { value: 103, label: "Jun" },
];

const StockChart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.chartContainer}>
          <LineChart
            data={data}
            width={300}
            height={250}
            color="black"
            thickness={2}
            yAxisColor="black"
            xAxisColor="black"
            yAxisTextStyle={{ color: "black" }}
            xAxisLabelTextStyle={{ color: "black" }}
            showPointer
            pointerConfig={{
              pointerStripHeight: 140,
              pointerStripColor: "lightgray",
              pointerStripWidth: 2,
              pointerColor: "black",
              radius: 6,
              pointerLabelWidth: 60,
              pointerLabelHeight: 40,
              activatePointersOnLongPress: false,
              autoAdjustPointerLabelPosition: true,
              pointerLabelComponent: (items) => (
                <View style={styles.tooltip}>
                  <Text style={styles.tooltipText}>{items[0].value}</Text>
                </View>
              ),
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  chartContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  tooltip: {
    backgroundColor: "black",
    padding: 6,
    borderRadius: 4,
  },
  tooltipText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default StockChart;
