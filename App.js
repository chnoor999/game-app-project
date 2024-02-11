import { useState } from "react";
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
  // userNumber state
  const [userNumber, setUserNumber] = useState();

  // custom fonts stuff
  const [fontLoading] = useFonts({
    "openSans-Bold": require("./app/assets/fonts/OpenSans-Bold.ttf"),
    "openSans-Regular": require("./app/assets/fonts/OpenSans-Regular.ttf"),
  });

  return fontLoading ? (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
        initialRouteName="gameStartScreen"
      >
        {/* screen One .............................................. */}
        <Stack.Screen name="gameStartScreen">
          {() => (
            <GameStartScreen
              setUserNumber={setUserNumber}
              userNumber={userNumber}
            />
          )}
        </Stack.Screen>
        {/* screen two........................................................ */}
        <Stack.Screen name="gameScreen">
          {() => <GameScreen setUserNumber={setUserNumber} />}
        </Stack.Screen>
        {/* screen three ............................................................ */}
        <Stack.Screen name="gameOverScreen">
          {() => <GameOverScreen setUserNumber={setUserNumber} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    // splash screen till fontloading
    <BackgroundScreen />
  );
}
