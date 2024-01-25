import { ImageBackground, StyleSheet } from "react-native";
// linear gradiant expo
import { LinearGradient } from "expo-linear-gradient";

export default function Screen({ children }) {
  return (
    <LinearGradient colors={["#1e6091", "#d9ed92"]} style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/dice2.jpg")}
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.1 }}
      >
        {children}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
