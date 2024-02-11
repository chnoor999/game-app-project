import { StyleSheet, View } from "react-native";
// constant color
import Colors from "../config/Colors";

export default function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue500,
    borderRadius: 8,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
    width:"100%",
    maxWidth:500,
    alignSelf:"center"
  },
});
