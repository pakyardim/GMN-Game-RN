import { StyleSheet, Image, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlights}>{roundsNumber}</Text> rounds to guess the number{" "}
        <Text style={styles.highlights}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a new game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText:{
    fontFamily: "Open-Sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlights: {
    fontFamily: "Open-Sans-Bold",
    color: Colors.primary500
  }
});
