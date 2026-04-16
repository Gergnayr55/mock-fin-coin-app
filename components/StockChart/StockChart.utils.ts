import { Dimensions } from "react-native";

export const MAX_CHART_WIDTH = 600;
export const VISIBLE_LABELS = 3;
export const TOOLTIP_LABEL_HEIGHT = 30;
export const TOOLTIP_TOP_OFFSET = 8;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
export const CHART_WIDTH = Math.min(SCREEN_WIDTH - 60, MAX_CHART_WIDTH);
export const CHART_HEIGHT = Math.round(SCREEN_HEIGHT * 0.25);

export interface Period {
  label: string;
  days: number;
  interval: string | null;
}

export const PERIODS: Period[] = [
  { label: "1D", days: 1, interval: null },
  { label: "1W", days: 7, interval: "daily" },
  { label: "1M", days: 30, interval: "daily" },
  { label: "3M", days: 90, interval: "daily" },
  { label: "1Y", days: 365, interval: "daily" },
];

export const formatLabel = (timestamp: number, days: number): string => {
  const date = new Date(timestamp);
  if (days === 1) return date.toLocaleTimeString("en-US", { hour: "numeric", hour12: true });
  if (days >= 365) return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};
