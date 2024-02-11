import { StyleSheet, Text, TouchableOpacity } from "react-native";
// constant color
import Colors from "../config/Colors";

export default function MyButton({ children, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btnContainer}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.blue400,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 5,
    margin: 4,
    elevation: 4,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    maxWidth:500,
    width:"100%",
    alignSelf:"center"
  },
  btnText: {
    textAlign: "center",
    color: Colors.white500,
    fontFamily: "openSans-Regular",
  },
});
