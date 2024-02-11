import { ImageBackground, View } from "react-native";
// expo linear gradiant
import { LinearGradient } from "expo-linear-gradient";
// constant colors
import Colors from "../config/Colors";
// expo constant
import Constants from "expo-constants";

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
        <View style={{ paddingTop: Constants.statusBarHeight ,flex:1 }}>
          {children}
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}
