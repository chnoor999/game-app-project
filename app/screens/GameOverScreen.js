import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
// screens
import BackgroundScreen from "./BackgroundScreen";
import Title from "../components/Title";
import MyText from "../components/MyText";
import MyBoldText from "../components/MyBoldText";
import MyButton from "../components/MyButton";
import Screen from "./Screen";
import { useUserNumberContext } from "../store/userNumber-context";

// width of mobile window
const windowWidth = Dimensions.get("window").width;

export default function GameOverScreen({ navigation, route }) {
  const { setUserNumber } = useUserNumberContext();

  const { userGuess } = route.params;
  const { totalGuessLength } = route.params;

  // re start game function
  const handleRestartGame = () => {
    navigation.navigate("gameStartScreen");
    setUserNumber(null);
  };

  // mobile width
  const { width } = useWindowDimensions();

  return (
    <BackgroundScreen>
      <Screen style={{}}>
        <Title>Game Over!</Title>
        <View
          style={[
            styles.imageContainer,
            {
              width:
                windowWidth < 380
                  ? width > 500
                    ? 150
                    : 280
                  : width > 500
                  ? 170
                  : 350,
              height:
                windowWidth < 380
                  ? width > 500
                    ? 150
                    : 280
                  : width > 500
                  ? 170
                  : 350,
            },
          ]}
        >
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
      </Screen>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 300,
    borderWidth: 2,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
});
