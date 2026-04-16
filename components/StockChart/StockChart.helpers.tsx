import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { formatNumber } from "../../helpers/helpers";
import { colors } from "../../theme";
import { CHART_HEIGHT, TOOLTIP_LABEL_HEIGHT, TOOLTIP_TOP_OFFSET } from "./StockChart.utils";

export interface ChartData {
  points: { value: number }[];
  minValue: number;
  maxValue: number;
}

interface TooltipStyles {
  tooltip: ViewStyle;
  tooltipText: TextStyle;
}

export const buildPointerConfig = (chartData: ChartData, styles: TooltipStyles) => ({
  pointerStripHeight: CHART_HEIGHT,
  pointerStripColor: colors.primaryLight,
  pointerStripWidth: 2,
  pointerColor: colors.primary,
  radius: 6,
  pointerLabelWidth: 100,
  pointerLabelHeight: TOOLTIP_LABEL_HEIGHT,
  activatePointersOnLongPress: false,
  autoAdjustPointerLabelPosition: true,
  pointerLabelComponent: (items: { value: number }[]) => {
    const val = items[0].value;
    const { minValue, maxValue } = chartData;
    const approxY = CHART_HEIGHT * (1 - (val - minValue) / (maxValue - minValue));
    const marginTop = Math.round(TOOLTIP_TOP_OFFSET + TOOLTIP_LABEL_HEIGHT - approxY);
    return (
      <View style={[styles.tooltip, { marginTop }]}>
        <Text style={styles.tooltipText}>${formatNumber(val)}</Text>
      </View>
    );
  },
});
