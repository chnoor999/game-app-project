import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
// screens
import BackgroundScreen from "./BackgroundScreen";
// constant color
import Colors from "../config/Colors";
// component
import Card from "../components/Card";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import MyButton from "../components/MyButton";

export default function GameStartScreen() {
  // user number state
  const [userNumber,setuserNumber] = useState ()

  return (
    <BackgroundScreen>
      <View style={styles.container}>
        <Title>Guess My Number</Title>
        <Card>
          <View style={styles.cardContainer}>
            <SubTitle>Enter a Number</SubTitle>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={2}
              autoCapitalize="none"
            />
            <View style={styles.btnsContainer}>
              <View style={styles.btnContainer}>
                <MyButton>Reset</MyButton>
              </View>
              <View style={styles.btnContainer}>
                <MyButton>Confirm</MyButton>
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
  input: {
    borderWidth: 2,
    borderColor: Colors.yellow500,
    fontSize: 30,
    color: Colors.yellow500,
    textAlign: "center",
    width: 80,
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
