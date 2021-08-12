import React from "react";
import { Button, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{ paddingTop: 60, paddingHorizontal: 40 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder={"Enter Course Goals!!"}
          style={{
            borderColor: "#121212",
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        />
        <Button title={"Add"} onPress={() => {}} />
      </View>
      <View />
    </View>
  );
}
