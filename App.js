import { StyleSheet } from "react-native";
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
