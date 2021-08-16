import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text>{item.value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default GoalItem;
