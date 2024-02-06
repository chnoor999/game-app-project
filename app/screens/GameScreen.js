import { Alert, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
// isons
import { Ionicons } from "@expo/vector-icons";
// screens
import BackgroundScreen from "./BackgroundScreen";
import Title from "../components/Title";
import Card from "../components/Card";
import SubTitle from "../components/SubTitle";
import MyButton from "../components/MyButton";
import GuessedNumber from "../components/GuessedNumber";

export default function GameScreen({ route, navigation }) {
  // intial guesses number
  const [minGuess, setMinGuess] = useState(1);
  const [maxGuess, setMaxGuess] = useState(99);

  // guess number function
  const guessRndNumber = (min, max, number) => {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    if (number === num) {
      return guessRndNumber(min, max, number);
    } else {
      return num;
    }
  };
  // user guess
  const userGuess = route.params.userNumber;
  // initial guess
  const intialguess = guessRndNumber(minGuess, maxGuess, userGuess);
  // guess number state
  const [guessedNumber, setGuessedNumber] = useState(intialguess);

  // function for button to guess a number high or low
  const onGuess = (whichguess) => {
    console.log("pressed");
    //whichguess is high or low
    if (
      (whichguess === "low" && guessedNumber < userGuess) ||
      (whichguess === "high" && guessedNumber > userGuess)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    //condition for low
    else if (whichguess === "low") {
      setMaxGuess(guessedNumber - 1);
    }
    // condition for high
    else if (whichguess === "high") {
      setMinGuess(guessedNumber + 1);
    }
  };

  useEffect(() => {
    // this condition do not change the intial guess on first render
    if (minGuess != 1 || maxGuess != 99) {
      const rndNumberHigh = guessRndNumber(minGuess, maxGuess, guessedNumber);
      setGuessedNumber(rndNumberHigh);
      console.log("useeffect");
    }
  }, [minGuess, maxGuess]);

  // game over stuff
  useEffect(() => {
    if (userGuess == guessedNumber) {
      navigation.navigate("gameOverScreen");
    }
  }, [guessedNumber]);
  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Title>Opponent's Guess</Title>
        <Card>
          <View style={styles.cardContainer}>
            <SubTitle>Higher or lower?</SubTitle>
            <GuessedNumber>{guessedNumber}</GuessedNumber>
            <View style={styles.btnsContainer}>
              <View style={styles.btnContainer}>
                <MyButton onPress={() => onGuess("low")}>
                  <Ionicons name="remove" size={18} color="#fff" />
                </MyButton>
              </View>
              <View style={styles.btnContainer}>
                <MyButton onPress={() => onGuess("high")}>
                  <Ionicons name="add" size={18} color="#fff" />
                </MyButton>
              </View>
            </View>
          </View>
        </Card>
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
  cardContainer: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
