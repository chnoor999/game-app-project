import { Dimensions, StyleSheet, Text } from "react-native";

export default function MyText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

// width of mobile window 
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  text: {
    fontFamily: "openSans-Regular",
    fontSize: windowWidth < 380 ? 18 : 20,
    textAlign: "center",
  },
});
