import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  const [enteredNum, setEnteredNum] = useState("");
  const [number, setNumber] = useState("");

  function inputHandler(e) {
    setEnteredNum(e);
  }

  function handleConfirmPress() {
    setNumber(enteredNum);
  }

  function handleResetPress() {
    setEnteredNum("");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Guess My Number</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          value={enteredNum}
          onChangeText={inputHandler}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton onPress={handleResetPress}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={handleConfirmPress}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#1e085a",
  },

  heading: {
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 16,
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 50,
  },

  inputContainer: {
    borderRadius: 8,
    backgroundColor: "brown",
    width: "80%",
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    height: 150,
  },

  inputLabel: {
    color: "white",
    fontSize: 18,
    marginBottom: 16,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    width: 48,
  },

  buttons: {
    flexDirection: "row",
    margin: 10,
  },

  button: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    overflow: "hidden",
  },
});
