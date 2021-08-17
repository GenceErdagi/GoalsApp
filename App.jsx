import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import CButton from "./components/CButton";

export default function App() {
  const [modalState, setModalState] = useState(false);
  const [goals, setGoals] = useState([]);
  const onDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };
  const handleModal = () => {
    setModalState((prev) => !prev);
  };
  return (
    <View style={styles.screen}>
      <CButton
        style={styles.modalButton}
        color={"blue"}
        title={"Add New Goal"}
        onPress={handleModal}
      />
      <GoalInput
        setGoals={setGoals}
        handleModal={handleModal}
        open={modalState}
        goals={goals}
      />
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <GoalItem
              onDelete={() => onDelete(itemData.item.id)}
              item={itemData.item}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { paddingTop: 60, paddingHorizontal: 40 },
  modalButton: { margin: 40 },
});
