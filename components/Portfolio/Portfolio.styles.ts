import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  inner: {
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 90,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  listWrapper: {
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: colors.border,
  },
});
