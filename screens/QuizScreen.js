import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import UseOfEnglish from "./UseOfEnglish.json";
import UseOfLibrary from "./UseOfLibrary.json";
import FoundationOfNigerianCulture from "./FoundationOfNigerianCulture.json";
import PeaceConflict from "./PeaceConflict.json";
import PhilosophyAndLogic from "./PhilosophyAndLogic.json";
import ScienceAndTechnology from "./ScienceAndTechnology.json";

const QuizScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { category } = route.params;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  // const [answeredQuestions, setAnswerQuestions] = useState(0);
  const [correctOptions, setCorrectOptions] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  // Map category to its respective JSON data
  const dataMap = {
    "Use of English": UseOfEnglish,
    "Use of Library": UseOfLibrary,
    "Foundation of Nigerian Culture": FoundationOfNigerianCulture,
    "Peace Conflict": PeaceConflict,
    "Philosophy and Logic": PhilosophyAndLogic,
    "Science & Technology": ScienceAndTechnology,
  };

  useEffect(() => {
    // Set the questions and correct options based on the selected category
    if (category in dataMap) {
      setQuestions(dataMap[category]);
      setCorrectOptions(dataMap[category].correctOptions); // Update correctOptions here
    } else {
      console.error("Invalid category:", category);
    }
  }, [category]);

  const handleAnswer = (selectedOption) => {
    if (!questions.length) {
      console.error("Question Array is empty");
      return;
    }
    // Update userAnswers state with the selected option
    setUserAnswers((prevUserAnswers) => {
      const updatedAnswers = [...prevUserAnswers];
      updatedAnswers[currentQuestionIndex] = selectedOption || ""; // Store selected option or an empty string if skipped
      return updatedAnswers;
    });
    // Update correctAnswers if the selected option is correct
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    // Move to the next question
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate("QuizResultScreen", {
        totalQuestions: questions.length,
        correctAnswers: correctAnswers,
        correctOptions: correctOptions,
        questions: questions,
        userAnswers: userAnswers,
        answeredQuestions: currentQuestionIndex + 1,
      });
    }
  };

  const handleSubmit = () => {
    if (!questions.length) {
      console.error("Question array is empty.");
      return;
    }
    setSubmitted(true);
    navigation.navigate("QuizResultScreen", {
      totalQuestions: questions.length,
      correctAnswers: correctAnswers,
      answeredQuestions: answeredQuestions,
      correctOptions: correctOptions,
      questions: questions,
      userAnswers: userAnswers,
    });
  };

  if (!questions.length) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {questions.length > 0 && questions[currentQuestionIndex]?.options && (
          <View style={styles.quizContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>{`${currentQuestionIndex + 1}. ${
                questions[currentQuestionIndex].question
              }`}</Text>
            </View>

            <View style={styles.optionsContainer}>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => handleAnswer(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAnswer(null)}
              >
                <Text style={styles.btnText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.btnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#132A13",
  },
  quizContainer: {
    flex: 1,
  },
  questionContainer: {
    marginVertical: 30,
    alignItems: "center",
  },
  question: {
    fontSize: 30,
    color: "white",
  },
  optionsContainer: {
    flex: 1,
    padding: 12,
  },
  option: {
    backgroundColor: "#31572C",
    borderRadius: 12,
    marginVertical: 12,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontSize: 29,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    padding: 12,
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
