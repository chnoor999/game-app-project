import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
// components
import MyButton from "../components/MyButton";

export default function GameStartScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.myTextInput}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="#"
        placeholderTextColor={"#34a0a471"}
      />
      <View style={styles.btnsContainer}>
        <View style={styles.btnContainer}>
          <MyButton>Remove</MyButton>
        </View>
        <View style={styles.btnContainer}>
          <MyButton>Confirm</MyButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: "#184e77",
    borderRadius: 8,
    alignItems: "center",
    gap: 10,
    elevation: 5,
  },
  myTextInput: {
    fontSize: 25,
    color: "#d9ed92",
    borderBottomWidth: 2,
    borderBottomWidth: 1,
    borderColor: "#d9ed92",
    width: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  btnsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
