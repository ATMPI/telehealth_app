import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ListItemSeperator = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.seperator, { backgroundColor: theme.seperator }]} />
  );
};

export default ListItemSeperator;

const styles = StyleSheet.create({
  seperator: { width: "100%", height: 1 },
});
