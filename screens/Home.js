import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import QuizScreen from "./QuizScreen";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = (item) => {
    navigation.navigate("QuizScreen", { category: item.title });
  };

  const swiperData = [
    {
      id: 1,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/buk-gsp.appspot.com/o/Images%2Fsmart1.png?alt=media&token=8bd2ad43-a911-4645-b524-d29cb1318053",
    },
    {
      id: 2,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/buk-gsp.appspot.com/o/Images%2Fyusuff%201.png?alt=media&token=46d698f7-ddaa-40fb-92dc-e05588c3d627",
    },
    {
      id: 3,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/buk-gsp.appspot.com/o/Images%2FScreenshot_20230417-124840.png?alt=media&token=09d6828e-2ede-4540-950b-3450bc789111",
    },
    {
      id: 4,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/buk-gsp.appspot.com/o/Images%2Freal%20friends.png?alt=media&token=9519b569-81ba-4dbc-a6d4-3263be504cb8",
    },
    {
      id: 3,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/buk-gsp.appspot.com/o/Images%2FKhaLeed.jpg?alt=media&token=049da549-4cc5-4024-8e6b-f01e8f540e26",
    },
    {
      id: 4,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/buk-gsp.appspot.com/o/Images%2FNura.jpg?alt=media&token=7a57b3f0-6023-4953-bfeb-471adf6b53f2",
    },
    {
      id: 4,
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/buk-gsp.appspot.com/o/Images%2FsmartKishore.jpg?alt=media&token=66eabf0b-5d64-4846-bad6-106ac0f94626",
    },
    // Add more items as needed
  ];

  const renderSwiperItem = ({ item }) => (
    <TouchableOpacity style={styles.swiperItem} onPress={handlePress}>
      <Image source={{ uri: item.imageUrl }} style={styles.swiperImage} />
    </TouchableOpacity>
  );

  // Sample data for the FlatList
  const quizCategories = [
    {
      id: 1,
      title: "Use of English",
      image:
        "https://img.freepik.com/free-photo/selective-focus-shot-beautiful-butterfly-sitting-branch-with-small-pink-flowers_181624-14352.jpg?size=626&ext=jpg&ga=GA1.2.1394327056.1709572725&semt=sph",
    },
    {
      id: 2,
      title: "Use of Library",
      image:
        "https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-812.jpg?w=740",
    },
    {
      id: 3,
      title: "Foundation of Nigerian Culture",
      image:
        "https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-812.jpg?w=740",
    },
    {
      id: 4,
      title: "Peace Conflict",
      image:
        "https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-812.jpg?w=740",
    },
    {
      id: 5,
      title: "Philosophy and Logic",
      image:
        "https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-812.jpg?w=740",
    },
    {
      id: 6,
      title: "Science & Technology",
      image:
        "https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-812.jpg?w=740",
    },
  ];

  const renderQuizCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handlePress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <View style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={swiperData}
        renderItem={renderSwiperItem}
        sliderWidth={300}
        itemWidth={300}
        loop={true}
        autoplay={true} // Enable autoplay
        autoplayInterval={4000} // Set autoplay interval to 4000 milliseconds (4 seconds)
        onSnapToItem={(index) => setCurrentIndex(index)}
      />
      <Pagination
        dotsLength={swiperData.length}
        activeDotIndex={currentIndex}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <FlatList
        data={quizCategories}
        renderItem={renderQuizCategory}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 35,
  },
  swiperItem: {
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
  },
  swiperImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  paginationDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "blue",
    marginHorizontal: 5,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  categoryItem: {
    margin: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: 150,
    height: 200,
  },
  categoryImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  startButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Home;
