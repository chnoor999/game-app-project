import { StyleSheet } from "react-native";
import React from "react";
//screens
import GameStartScreen from "./app/screens/GameStartScreen";
import Screen from "./app/screens/Screen";

export default function App() {
  return (
    <Screen>
      <GameStartScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({});
