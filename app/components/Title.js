import { StyleSheet, Text, View } from "react-native";
// constant color
import Colors from "../config/Colors";

export default function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: Colors.white500,
  },
  text: {
    fontSize: 26,
    textAlign: "center",
    fontFamily: "openSans-Bold",
    color: Colors.white500,
  },
});
