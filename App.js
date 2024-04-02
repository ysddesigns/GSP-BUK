const firebase = require("firebase/app");
require("firebase/auth");

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import Home from "./screens/Home";
import ResultScreen from "./screens/QuizScreen";
import ReviewScreen from "./screens/PastQScreen";
import ProfileScreen from "./screens/AboutUsScreen";
import QuizScreen from "./screens/QuizScreen";
import QuizResultScreen from "./screens/QuizResultScreen";
import Review from "./screens/Review";

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDOlIhOC1aJ2o5--FYPLXdzrUxFfu1-gko",
  authDomain: "buk-gsp.firebaseapp.com",
  projectId: "buk-gsp",
  storageBucket: "buk-gsp.appspot.com",
  messagingSenderId: "809329997553",
  appId: "1:809329997553:web:eb725a57a34661be6adb50",
  measurementId: "G-D6VXSWCVK1",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Quiz" component={Home} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="QuizResultScreen" component={QuizResultScreen} />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
