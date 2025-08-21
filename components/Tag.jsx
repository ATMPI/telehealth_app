import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
const sizeMap = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 16,
};

const Tag = ({ color, title, size }) => {
  const fontsize = sizeMap[size] ?? 8; // fallback if size not found
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      style={[styles.tag, { backgroundColor: color ? color : theme.secondary }]}
    >
      <Text style={{ fontSize: fontsize, color: "white" }}>{title}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    // marginLeft: 10,
    borderRadius: 5,
    elevation: 1,
    alignSelf: "flex-start", // prevents stretching with parent flex
  },
});
