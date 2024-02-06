import { Alert, BackHandler, FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
//navigation
import { useNavigation, useRoute } from "@react-navigation/native";
// isons
import { Ionicons } from "@expo/vector-icons";
// screens
import BackgroundScreen from "./BackgroundScreen";
import Title from "../components/Title";
import Card from "../components/Card";
import SubTitle from "../components/SubTitle";
import MyButton from "../components/MyButton";
import GuessedNumber from "../components/GuessedNumber";
import GuessList from "../components/GuessList";

export default function GameScreen() {
  // navigation
  const navigation = useNavigation();
  const route = useRoute();

  // prevent going back
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

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
  // total guess
  const [totalGuess, setTotalGuess] = useState([guessedNumber]);
  //length of total guess
  const totalGuessLength = totalGuess.length;

  // function for button to guess a number high or low
  const onGuess = (whichguess) => {
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
      const rndNumber = guessRndNumber(minGuess, maxGuess, guessedNumber);
      setGuessedNumber(rndNumber);
      setTotalGuess((preGuess) => [rndNumber, ...preGuess]);
    }
  }, [minGuess, maxGuess]);

  // game over stuff
  useEffect(() => {
    if (userGuess == guessedNumber) {
      navigation.navigate("gameOverScreen", {
        userGuess,
        totalGuessLength,
      });
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
        <View style={styles.listContainer}>
          <FlatList
            data={totalGuess}
            renderItem={({ item, index }) => {
              return (
                <GuessList
                  ListGuess={item}
                  listNumber={totalGuessLength - index}
                />
              );
            }}
          />
        </View>
      </View>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 35,
    gap: 35,
    flex: 1,
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
  listContainer: {
    flex: 1,
  },
});
