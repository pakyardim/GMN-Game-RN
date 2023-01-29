import { Alert, StyleSheet, Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "YOU'RE A LIAR.",
        "YOU LIED TO THE GAME, YOU LIED TO THE HOLY SPIRIT, YOU LIED TO THE WORLD PEACE.",
        [{ text: "I'll be more careful sir", style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") {
      console.log("zombaa1");
      maxBoundary = currentGuess;
    } else {
      console.log("zombaa2");
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    setGuessRounds((prevGuessRound) => [newRndNum, ...prevGuessRound]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.outerContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>Higher or Lower?</Text>
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.opponentGuessContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
          keyExtractor={(item) => item}
        />
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
  questionContainer: {
    width: "70%",
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
    fontFamily: "Open-Sans",
    color: Colors.accent500,
  },
  buttons: {
    flexDirection: "row",
    margin: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  opponentGuessContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  
});
