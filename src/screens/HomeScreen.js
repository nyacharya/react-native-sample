import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate("FlatListSample")}>
        <Text style={styles.opacityStyle}>Go to list demo</Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
        title="Go to Image Screen"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Counter")}>
        <Text style={styles.opacityStyle}>Go to CounterScreen</Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          navigation.navigate("Color");
        }}
        title="Go to Image Screen"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Square")}>
        <Text style={styles.opacityStyle}>Go to Square Screen</Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          navigation.navigate("Text");
        }}
        title="Go to Text Sreen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  opacityStyle: {
    backgroundColor: "red",
    fontSize: 44
  }
});

export default HomeScreen;
