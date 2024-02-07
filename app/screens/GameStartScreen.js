import { Alert, StyleSheet, TextInput, View } from "react-native";
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

export default function GameStartScreen({ setUserNumber, userNumber }) {
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
              value={userNumber}
              onChangeText={(text) => setUserNumber(text)}
              onSubmitEditing={onConfirm}
              returnKeyType="done"
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
