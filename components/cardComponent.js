import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title } from "react-native-elements";

const CardComponent = ({ title, body, footer }) => {
  return (
    <Card containerStyle={styles.cardParent}>
      <Card.Title>{title}</Card.Title>
      <TouchableOpacity>
        <Text>{body}</Text>
      </TouchableOpacity>
      <Card.Divider />
      <TouchableOpacity>
        <View style={styles.cardFooter}>
          <Text>{footer}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  cardParent: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 5,
  },
});
