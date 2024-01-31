import { StyleSheet, Text, View } from "react-native";
// constant colors
import Colors from "../config/Colors";

export default function SubTitle({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "openSans-Regular",
    color: Colors.yellow500,
  },
});
