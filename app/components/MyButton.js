import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function MyButton({ children }) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.btnContainer}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#1a759f",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 5,
    margin: 4,
    elevation: 4,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
});
