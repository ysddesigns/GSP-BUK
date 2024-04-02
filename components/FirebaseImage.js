import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import storage from "@react-native-firebase/storage";

const FirebaseImage = ({ imagePath }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        const url = await storage().ref(imagePath).getDownloadURL();
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    getImageUrl();
  }, [imagePath]);

  return (
    <View style={styles.container}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

export default FirebaseImage;
