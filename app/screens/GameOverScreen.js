import { Image, StyleSheet, View } from "react-native";
//navigation
import { useNavigation, useRoute } from "@react-navigation/native";
// screens
import BackgroundScreen from "./BackgroundScreen";
import Title from "../components/Title";
import MyText from "../components/MyText";
import MyBoldText from "../components/MyBoldText";
import MyButton from "../components/MyButton";

export default function GameOverScreen({ setUserNumber }) {
  // navigation
  const navigation = useNavigation();
  const route = useRoute();

  const { userGuess } = route.params;
  const { totalGuessLength } = route.params;

  // re start game function
  const handleRestartGame = () => {
    navigation.navigate("gameStartScreen");
    setUserNumber(null);
  };
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
          Your phone needed <MyBoldText>{totalGuessLength}</MyBoldText> rounds
          to guess the number <MyBoldText>{userGuess}</MyBoldText>
        </MyText>
        <MyButton onPress={handleRestartGame}>Start New Game</MyButton>
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
