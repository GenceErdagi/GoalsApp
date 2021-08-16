import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  return (
    <View style={styles.screen}>
      <GoalInput setGoals={setGoals} goals={goals} />
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return <GoalItem item={itemData.item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { paddingTop: 60, paddingHorizontal: 40 },
});
