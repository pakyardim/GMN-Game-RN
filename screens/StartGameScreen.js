import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

export default function StartGameScreen(props) {
  const [enteredNum, setEnteredNum] = useState("");

  function inputHandler(enteredText) {
    setEnteredNum(enteredText);
  }

  function handleConfirmPress() {
    const chosenNum = parseInt(enteredNum);
    if(isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99){
      Alert.alert('Invalid Number!', 'Number has to be a number between 0 and 99.', [{ text: 'Okay', style: 'destructive', onPress: handleResetPress}])
      return; 
    }
    props.onPickNumber(chosenNum);
  }

  function handleResetPress() {
    setEnteredNum("");
  }

  return (
    <View style={styles.inputContainer}>
        <Title>Guess My Number</Title>
        <Text style={styles.inputLabel}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          value={enteredNum}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={inputHandler}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleResetPress}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirmPress}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    padding: 8,
    marginHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    height: 150,
    
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  inputLabel: {
    color: Colors.accent500,
    fontSize: 18,
    marginBottom: 16,
  },

  input: {
    borderBottomWidth: 2,
    fontSize: 24,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    borderBottomColor: Colors.accent500,
    height: 30,
    textAlign: "center",
    width: 50,
  },

  buttons: {
    flexDirection: "row",
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});
