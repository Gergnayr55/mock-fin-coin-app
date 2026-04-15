import React from "react";
import { View, Text } from "react-native";
import { formatNumber } from "../../helpers/helpers.js";
import { colors } from "../../theme.js";
import { CHART_HEIGHT, TOOLTIP_LABEL_HEIGHT, TOOLTIP_TOP_OFFSET } from "./StockChart.config.js";

/**
 * Builds the pointerConfig object for the LineChart.
 * Accepts styles so the tooltip appearance stays co-located with the StyleSheet.
 */
export const buildPointerConfig = (chartData, styles) => ({
  pointerStripHeight: CHART_HEIGHT,
  pointerStripColor: colors.primaryLight,
  pointerStripWidth: 2,
  pointerColor: colors.primary,
  radius: 6,
  pointerLabelWidth: 100,
  pointerLabelHeight: TOOLTIP_LABEL_HEIGHT,
  activatePointersOnLongPress: false,
  autoAdjustPointerLabelPosition: true,
  pointerLabelComponent: (items) => {
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
