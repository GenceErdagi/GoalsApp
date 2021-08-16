import React, { useState } from "react";
import {
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  return (
    <View style={styles.screen}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={"Enter Course Goals!!"}
          style={styles.textInput}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Button
          title={"Add"}
          onPress={() => {
            setGoals([...goals, { id: Math.random().toString(), value: text }]);
            setText("");
            Keyboard.dismiss();
          }}
        />
      </View>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { paddingTop: 60, paddingHorizontal: 40 },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#3b3b3b",
    width: "80%",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
});
