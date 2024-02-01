import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// isons
import { Ionicons } from "@expo/vector-icons";
// screens
import BackgroundScreen from "./BackgroundScreen";
import Title from "../components/Title";
import Card from "../components/Card";
import SubTitle from "../components/SubTitle";
import MyButton from "../components/MyButton";
import GuessedNumber from "../components/GuessedNumber";

export default function GameScreen({ route }) {
  // guess number function
  const guessRndNumber = (min, max, number) => {
    const num = Math.floor(Math.random() * max + min);
    if (number === num) {
      return guessRndNumber(min, max, number);
    } else {
      return num;
    }
  };

  // intial guess
  const intialguess = guessRndNumber(1, 99, route.params.userNumber);
  // guess number state
  const [guessedNumber, setGuessedNumber] = useState(intialguess);

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
                <MyButton>
                  <Ionicons name="remove" size={18} color="#fff" />
                </MyButton>
              </View>
              <View style={styles.btnContainer}>
                <MyButton>
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
