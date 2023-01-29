import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
  },
  numberText: {
    fontSize: 36,
    fontFamily: 'Open-Sans-Bold',
    color: Colors.accent500,
  },
});
