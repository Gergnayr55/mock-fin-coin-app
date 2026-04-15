import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import axios from "axios";
import { StockContext } from "../State/StockContext";
import { isTooManyRequests } from "../../helpers/helpers.js";
import { colors } from "../../theme.js";
import { PERIODS, VISIBLE_LABELS, CHART_WIDTH, CHART_HEIGHT, formatLabel } from "./StockChart.config.js";
import { buildPointerConfig } from "./StockChart.helpers.js";
import styles from "./StockChart.styles.js";

const StockChart = () => {
  const { stockDetails } = useContext(StockContext);
  const [chartData, setChartData] = useState({ points: [], minValue: 0, maxValue: 0 });
  const [xLabels, setXLabels] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(PERIODS[0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!stockDetails?.id) return;
    setLoading(true);
    setError(null);

    const url = selectedPeriod.interval
      ? `https://api.coingecko.com/api/v3/coins/${stockDetails.id}/market_chart?vs_currency=usd&days=${selectedPeriod.days}&interval=${selectedPeriod.interval}`
      : `https://api.coingecko.com/api/v3/coins/${stockDetails.id}/market_chart?vs_currency=usd&days=${selectedPeriod.days}`;

    axios.get(url)
      .then((response) => {
        const raw = response.data.prices;
        const lastIndex = raw.length - 1;
        const labelIndices = Array.from({ length: VISIBLE_LABELS }, (_, i) =>
          Math.round((i / (VISIBLE_LABELS - 1)) * lastIndex)
        );
        setXLabels(labelIndices.map((idx) => formatLabel(raw[idx][0], selectedPeriod.days)));
        const values = raw.map((p) => p[1]);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const padding = (max - min) * 0.05;
        setChartData({
          points: raw.map((point) => ({ value: point[1] })),
          minValue: min - padding,
          maxValue: max + padding,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(isTooManyRequests(err) ? "Too many requests. Please wait a moment and try again." : "Failed to load chart data.");
        setLoading(false);
      });
  }, [stockDetails?.id, selectedPeriod]);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const dataWidth = CHART_WIDTH - 40;
  const pointCount = chartData.points.length || 30;
  const spacing = dataWidth / Math.max(pointCount - 1, 1);

  return (
    <View style={styles.chartContainer}>
      <LineChart
        data={chartData.points}
        yAxisOffset={chartData.minValue}
        width={dataWidth}
        height={CHART_HEIGHT}
        thickness={2}
        hideDataPoints
        hideRules
        spacing={spacing}
        initialSpacing={0}
        endSpacing={12}
        yAxisLabelWidth={40}
        hideYAxisText
        color={colors.primary}
        yAxisColor="transparent"
        xAxisColor={colors.axisColor}
        xAxisLabelTextStyle={styles.xLabelText}
        showPointer
        pointerConfig={buildPointerConfig(chartData, styles)}
      />
      <View style={[styles.xLabelsRow, { width: CHART_WIDTH }]}>
        {xLabels.map((label, i) => (
          <Text key={i} style={styles.xLabelText}>{label}</Text>
        ))}
      </View>
      <View style={[styles.periodsRow, { width: CHART_WIDTH }]}>
        {PERIODS.map((period) => (
          <TouchableOpacity
            key={period.label}
            onPress={() => setSelectedPeriod(period)}
            style={[styles.periodButton, selectedPeriod.label === period.label && styles.periodButtonActive]}
          >
            <Text style={[styles.periodText, selectedPeriod.label === period.label && styles.periodTextActive]}>
              {period.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default StockChart;
