import React, { useState } from "react";
import {
  Button,
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
            setGoals([...goals, text]);
            setText("");
            Keyboard.dismiss();
          }}
        />
      </View>
      <View>
        {goals.map((goal, i) => (
          <Text key={i}>{goal}</Text>
        ))}
      </View>
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
});
