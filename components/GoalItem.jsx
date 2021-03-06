import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

const GoalItem = ({ item, onDelete }) => {
  return (
    <TouchableNativeFeedback onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{item.value}</Text>
      </View>
    </TouchableNativeFeedback>
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
