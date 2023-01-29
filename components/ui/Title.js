import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function Title({ children }) {
  return (
      <Text style={styles.heading}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Open-Sans-Bold',
    width: "80%",
    borderWidth: 2,
    borderColor: "white",
    padding: 16,
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
});
