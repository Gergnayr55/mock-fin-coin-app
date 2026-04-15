import { StyleSheet } from "react-native";
import { colors } from "../../theme.js";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loader: {
    marginTop: "50%",
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  searchInput: {
    height: 44,
    paddingHorizontal: 14,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
  },
  listWrapper: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginTop: 40,
  },
  errorText: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
