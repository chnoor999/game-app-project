import { StyleSheet, Text } from "react-native";

export default function MyText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "openSans-Regular",
    fontSize: 20,
    textAlign: "center",
  },
});
