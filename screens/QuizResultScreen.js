import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const QuizResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log("Route params:", route.params); // Add this line to debug route parameters

  const {
    totalQuestions,
    correctAnswers,
    answeredQuestions,
    questions,
    userAnswers,
  } = route.params;

  // Calculate percentage score
  const score = ((correctAnswers / totalQuestions) * 100).toFixed(2);

  // Determine message based on performance
  let message, imageSource;
  if (score >= 50) {
    message = "Congratulations! You passed the quiz!";
    imageSource = require("../assets/icon.png");
  } else {
    message = "Sorry, you didn't pass the quiz. Better luck next time!";
    imageSource = require("../assets/splash.png");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Quiz Result</Text>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.scoreText}>Score: {score}%</Text>
      <Text style={styles.messageText}>{message}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { marginTop: 20 }]}
        onPress={() =>
          navigation.navigate("Review", {
            questions: questions,
            userAnswers: userAnswers,
          })
        }
      >
        <Text style={styles.btnText}>Review Answers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#132A13",
  },
  resultText: {
    fontSize: 30,
    color: "white",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 25,
    color: "white",
    marginBottom: 20,
  },
  messageText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#4F772D",
    borderRadius: 9,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btnText: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
});
