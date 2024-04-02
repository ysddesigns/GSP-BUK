import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const PastQScreen = () => {
  // Sample data for past questions
  const pastQuestions = [
    { id: 1, title: "Past Question 1", category: "coming soon" },
    {
      id: 2,
      title: "Past Question 2",
      category: "Coming Soon",
    },
    { id: 3, title: "Past Question 3", category: "Coming Soon" },
    { id: 4, title: "Past Question 4", category: "Coming Soon" },
    {
      id: 5,
      title: "Past Question 5",
      category: "coming soon",
    },
    { id: 6, title: "Past Question 6", category: "coming soon" },

    // Add more past questions as needed
  ];

  const renderQuestionItem = ({ item }) => (
    <TouchableOpacity style={styles.questionItem}>
      <Text style={styles.questionTitle}>{item.title}</Text>
      <Text style={styles.questionCategory}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pastQuestions}
        renderItem={renderQuestionItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Displaying two items per row
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#FFFFFF",
  },
  listContainer: {
    alignItems: "center",
  },
  questionItem: {
    width: "45%", // Adjust width to leave space between items
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: "center",
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  questionCategory: {
    fontSize: 16,
    color: "#666666",
  },
});

export default PastQScreen;
