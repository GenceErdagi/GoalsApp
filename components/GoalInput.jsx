import React, { useState } from "react";
import { Keyboard, Modal, StyleSheet, TextInput, View } from "react-native";
import CButton from "./CButton";

const GoalInput = ({ setGoals, open, handleModal, goals }) => {
  const [text, setText] = useState("");
  const handleAddGoal = () => {
    setGoals([...goals, { id: Math.random().toString(), value: text }]);
    setText("");
    Keyboard.dismiss();
    handleModal();
  };
  return (
    <Modal animationType={"fade"} visible={open}>
      <View style={styles.modal}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder={"Enter Course Goals!!"}
            style={styles.textInput}
            onChangeText={(text) => setText(text)}
            value={text}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <CButton color={"blue"} title={"Add"} onPress={handleAddGoal} />
          <CButton color={"red"} title={"Close"} onPress={handleModal} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
  },
  buttonWrapper: {
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#3b3b3b",
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
export default GoalInput;
