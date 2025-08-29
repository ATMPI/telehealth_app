import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ThemedText from "./Theme/ThemedText";
// import icon2 from "../assets/images/icons/embryo-pregnancy-icon.png"; // Adjust the path as necessary

const Category = ({ title, icon, color, size, grid = false }) => {
  return (
    <View style={styles.categoryContainer}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: color || "dodgerblue" },
        ]}
      >
        <Image source={icon} style={styles.icon} />
      </View>
      <ThemedText textType="secondary" style={styles.title}>
        {title}
      </ThemedText>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgray", // Adjust the border color as necessary
    borderRadius: 20,
    padding: 7,
    flex: 1,
    flexWrap: "nowrap",
  },
  iconContainer: {
    minHeight: 45,
    minWidth: 45,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 10,
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  title: {
    // fontSize: 14,
    // fontWeight: "bold",
    padding: 10,
    flexShrink: 1, // Allow the text to shrink if needed
    flexWrap: "wrap", // Enable wrapping
  },
});
