import { ImageBackground } from "react-native";
// expo linear gradiant
import { LinearGradient } from "expo-linear-gradient";
// constant colors
import Colors from "../config/Colors";
// screen
import Screen from "./Screen";

export default function BackgroundScreen({ children }) {
  return (
    <LinearGradient
      colors={[Colors.blue500, Colors.yellow500]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../assets/images/dice2.jpg")}
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.1 }}
      >
        <Screen>{children}</Screen>
      </ImageBackground>
    </LinearGradient>
  );
}
