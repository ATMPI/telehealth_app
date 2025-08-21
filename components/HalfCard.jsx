import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HalfCard = ({ style }) => {
  return (
    <View style={[styles.halfCardContainer, style]}>
      <Text>HalfCard</Text>
    </View>
  );
};

export default HalfCard;

const styles = StyleSheet.create({
  halfCardContainer: {
    // flex: 1,
    // flexDirection: "row-reverse",
    backgroundColor: "lightgray",
    height: 200,
    // alignSelf: "flex-end",
  },
});
