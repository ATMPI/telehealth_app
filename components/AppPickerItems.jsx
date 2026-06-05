import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ThemedText from "./Theme/ThemedText";

const AppPickerItems = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, { padding: 15 }]}>
      <ThemedText>{label}</ThemedText>
    </TouchableOpacity>
  );
};

export default AppPickerItems;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
});
