import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    padding: deviceWidth < 450 ? 12 : 24, 
    margin: deviceWidth < 450 ? 18 : 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 250,
  },
  numberText: {
    fontSize: deviceWidth < 450 ? 36 : 48,
    fontFamily: 'Open-Sans-Bold',
    color: Colors.accent500,
  },
});
