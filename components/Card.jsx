import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors"; // Adjust the path as necessary

const Card = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme
  return (
    <View
      style={[
        styles.card,
        style,
        { backgroundColor: theme.uiBackground, borderLeftColor: theme.button },
      ]} // Use the theme's background color
      {...props}
    />
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    backgroundColor: "#fff",
    width: "100%",
    minHeight: 100, // let height grow if text is long
    borderRadius: 10,
    // flexDirection: "row",
    overflow: "hidden",
    marginVertical: 10,
    // borderLeftWidth: 3,
    // borderLeftColor: "#48a6a7",
  },
});
