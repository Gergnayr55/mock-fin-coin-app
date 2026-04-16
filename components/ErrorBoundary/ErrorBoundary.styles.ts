import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: "center",
  },
});
