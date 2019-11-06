import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return <Text style={styles.text}>This is the component screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponentsScreen;
