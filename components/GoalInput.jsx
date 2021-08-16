import React, { useState } from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ setGoals, goals }) => {
  const [text, setText] = useState("");
  return (
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
  );
};
const styles = StyleSheet.create({
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
});
export default GoalInput;
