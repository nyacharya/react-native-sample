import React from "react";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const myList = [
  { name: "Friend 1", age: 21 },
  { name: "Friend 2", age: 12 },
  { name: "Friend 3", age: 2 },
  { name: "Friend 4", age: 1 },
  { name: "Friend 5", age: 22 },
  { name: "Friend 6", age: 25 },
  { name: "Friend 7", age: 12 },
  { name: "Friend 8", age: 25 },
  { name: "Friend 9", age: 26 },
  { name: "Friend 10", age: 30 }
];

const FlatListSample = () => {
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={myList}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {" "}
            {item.name} - {item.age}{" "}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default FlatListSample;
