import { Dimensions, StyleSheet, Text, View } from "react-native";
// constant color
import Colors from "../config/Colors";

export default function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

// width of mobile window 
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: Colors.white500,
  },
  text: {
    fontSize: windowWidth<380?22:26,
    textAlign: "center",
    fontFamily: "openSans-Bold",
    color: Colors.white500,
  },
});
