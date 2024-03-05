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
// context
import { UserNumberContextProvider } from "./app/store/userNumber-context";

export default function App() {
  // custom fonts stuff
  const [fontLoading] = useFonts({
    "openSans-Bold": require("./app/assets/fonts/OpenSans-Bold.ttf"),
    "openSans-Regular": require("./app/assets/fonts/OpenSans-Regular.ttf"),
  });

  return fontLoading ? (
    <UserNumberContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "fade_from_bottom",
          }}
          initialRouteName="gameStartScreen"
        >
          {/* screen One .............................................. */}
          <Stack.Screen name="gameStartScreen" component={GameStartScreen} />
          {/* screen two........................................................ */}
          <Stack.Screen name="gameScreen" component={GameScreen} />
          {/* screen three ............................................................ */}
          <Stack.Screen name="gameOverScreen" component={GameOverScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserNumberContextProvider>
  ) : (
    // splash screen till fontloading
    <BackgroundScreen />
  );
}
