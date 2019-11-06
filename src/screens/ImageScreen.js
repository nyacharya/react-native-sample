import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/imageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../images/forest.jpg")}
        score={2}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../images/beach.jpg")}
        score={5}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../images/mountain.jpg")}
        score={6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageScreen;
