import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export default StyleSheet.create({
  chartContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  loader: {
    marginVertical: 40,
  },
  xLabelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    paddingLeft: 40,
  },
  xLabelText: {
    color: colors.textMuted,
    fontSize: 11,
  },
  periodsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  periodButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
  },
  periodButtonActive: {
    backgroundColor: colors.primary,
  },
  periodText: {
    fontSize: 13,
    color: colors.textMuted,
  },
  periodTextActive: {
    color: colors.white,
    fontWeight: "bold",
  },
  tooltip: {
    backgroundColor: colors.primary,
    padding: 6,
    borderRadius: 4,
    alignSelf: "center",
    zIndex: 999,
    elevation: 999,
  },
  tooltipText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  errorText: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginVertical: 40,
    paddingHorizontal: 16,
  },
});
