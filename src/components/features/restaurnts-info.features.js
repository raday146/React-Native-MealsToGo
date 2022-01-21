import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

import { Card } from "react-native-paper";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon = "",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "some address",
    isOpen = true,
    rating = 3,
    isCloseTemporarily = false,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};
export default RestaurantInfo;
