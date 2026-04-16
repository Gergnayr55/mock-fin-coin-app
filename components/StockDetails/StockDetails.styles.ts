import { StyleSheet } from "react-native";
import { colors, typography } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  inner: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    paddingTop: 15,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  coinImage: {
    width: 35,
    height: 35,
  },
  nameCol: {
    paddingLeft: 15,
    flex: 1,
  },
  price: {
    ...typography.detailPrice,
    marginTop: 4,
  },
  backRow: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  backButton: {
    alignSelf: "flex-start",
    padding: 8,
  },
  starButton: {
    alignSelf: "center",
    padding: 8,
  },
});
