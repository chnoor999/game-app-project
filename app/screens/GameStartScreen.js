import {
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useEffect } from "react";
//navigation
import { useNavigation } from "@react-navigation/native";
// screens
import BackgroundScreen from "./BackgroundScreen";
// constant color
import Colors from "../config/Colors";
// components
import Card from "../components/Card";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import MyButton from "../components/MyButton";
import Screen from "./Screen";

export default function GameStartScreen({ setUserNumber, userNumber }) {
  // prevent to going back
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit App", "Are you sure you want to exit", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Exit",
          style: "destructive",
          onPress: () => {
            BackHandler.exitApp();
            setUserNumber(null);
          },
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  // navigation
  const navigation = useNavigation();

  // on reset function
  const onReset = () => {
    setUserNumber(null);
  };

  // on confirm function
  const onConfirm = () => {
    const num = parseInt(userNumber);
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99. ",
        [{ text: "Okay", style: "destructive" }]
      );
    } else {
      navigation.navigate("gameScreen", { userNumber });
    }
  };

  return (
    <BackgroundScreen>
      <ScrollView>
        <Screen>
          <Title>Guess My Number</Title>
          <KeyboardAvoidingView behavior="position" >
            <Card>
              <View style={styles.cardContainer}>
                <SubTitle>Enter a Number</SubTitle>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  maxLength={2}
                  autoCapitalize="none"
                  value={userNumber}
                  onChangeText={(text) => setUserNumber(text)}
                  returnKeyType="done"
                  disableFullscreenUI={true}
                />
                <View style={styles.btnsContainer}>
                  <View style={styles.btnContainer}>
                    <MyButton onPress={onReset}>Reset</MyButton>
                  </View>
                  <View style={styles.btnContainer}>
                    <MyButton onPress={onConfirm}>Confirm</MyButton>
                  </View>
                </View>
              </View>
            </Card>
          </KeyboardAvoidingView>
        </Screen>
      </ScrollView>
    </BackgroundScreen>
  );
}

const styles = StyleSheet.create({
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
    gap:10
  },
  btnContainer: {
    flex: 1,
  },
});
