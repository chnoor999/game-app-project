import { Image, StyleSheet, View } from "react-native";
// screens
import BackgroundScreen from "./BackgroundScreen";
import Title from "../components/Title";
import MyText from "../components/MyText";
import MyBoldText from "../components/MyBoldText";
import MyButton from "../components/MyButton";

export default function GameOverScreen({ navigation }) {
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <MyText>
          Your phone needed <MyBoldText>x</MyBoldText> rounds to guess the
          number <MyBoldText>y</MyBoldText>
        </MyText>
        <MyButton onPress={() => navigation.navigate("gameStartScreen")}>
          Start New Game
        </MyButton>
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 35,
    gap: 35,
  },
  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 300,
    alignSelf: "center",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
});
