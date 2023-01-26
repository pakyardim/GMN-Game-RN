import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

export default function GameScreen() {
  return (
    <View style={styles.outerContainer}>
      <Title>Opponent's Guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.guessText}>41</Text>
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Higher or Lower?</Text>
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <PrimaryButton>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton>+</PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.opponentGuessContainer}>
        <Text>#1</Text>
        <Text>Opponent's Guess: 41</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 80,
    flex: 1,
    alignItems: "center",
  },
  guessContainer: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "70%",
  },
  guessText: {
    fontSize: 36,
    fontWeight: "700",
    color: Colors.accent500,
  },
  questionContainer: {
    width: "70%",
    marginTop: 40,
    borderRadius: 8,
    backgroundColor: "#3b021f",
    padding: 8,
    marginHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    height: 124,

    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  questionText: {
    fontSize: 24,
    color: Colors.accent500,
  },
  buttons: {
    flexDirection: "row",
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  opponentGuessContainer:{
    backgroundColor: "yellow",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginTop: 32,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
