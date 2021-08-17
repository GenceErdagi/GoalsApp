import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const CButton = ({ title, onPress, color }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      padding: 20,
      color: color,
      fontSize: 16,
      textAlign: "center",
    },
  });
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CButton;
