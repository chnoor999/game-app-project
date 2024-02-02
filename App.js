import { StyleSheet } from "react-native";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
// custom fonts
import { useFonts } from "expo-font";
//screens
import GameStartScreen from "./app/screens/GameStartScreen";
import GameScreen from "./app/screens/GameScreen";
import BackgroundScreen from "./app/screens/BackgroundScreen";
import GameOverScreen from "./app/screens/GameOverScreen";

export default function App() {
  // custom fonts stuff
  const [fontLoading] = useFonts({
    "openSans-Bold": require("./app/assets/fonts/OpenSans-Bold.ttf"),
    "openSans-Regular": require("./app/assets/fonts/OpenSans-Regular.ttf"),
  });

  {
    return fontLoading ? (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
        >
          <Stack.Screen name="gameStartScreen" component={GameStartScreen} />
          <Stack.Screen name="gameScreen" component={GameScreen} />
          <Stack.Screen name="gameOverScreen" component={GameOverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    ) : (
      // splash screen till fontloading
      <BackgroundScreen />
    );
  }
}

const styles = StyleSheet.create({});
