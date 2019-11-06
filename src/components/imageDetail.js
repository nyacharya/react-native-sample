import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.text}>
        This is the image detail file with {title}
        Score = {score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ImageDetail;
