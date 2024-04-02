import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const Review = ({ route }) => {
  const { questions, userAnswers } = route.params;

  return (
    <ScrollView style={styles.container}>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>
            {`${index + 1}. ${question.question}`}
          </Text>
          <Text style={styles.correctAnswer}>
            Correct Answer: {question.answer}
          </Text>
          <Text style={styles.userAnswer}>
            Your Answer: {userAnswers[index] || "Not answered"}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#132A13",
    padding: 12,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 20,
    color: "white",
  },
  correctAnswer: {
    fontSize: 16,
    color: "green",
  },
  userAnswer: {
    fontSize: 16,
    color: "red",
  },
});
