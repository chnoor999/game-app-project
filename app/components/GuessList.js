import { Dimensions, StyleSheet, Text, View } from "react-native";
// constant colors
import Colors from "../config/Colors";

export default function GuessList({ listNumber, ListGuess }) {
  return (
    <View style={styles.container}>
      <Text>#{listNumber}</Text>
      <Text>Opponent's Guess : {ListGuess}</Text>
    </View>
  );
}

// width of mobile window
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: windowWidth < 380 ? 10 : 12,
    backgroundColor: Colors.yellow500,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    marginVertical: 10,
    width:"100%",
    maxWidth:500,
    alignSelf:'center'
  },
});
