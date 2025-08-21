import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedText from "./Theme/ThemedText";
import { Colors } from "../constants/Colors";
// const statusColorMap = {
//     online: Colors.online,

// }
const AppStatus = ({ type }) => {
  return (
    <View style={styles.statusContainer}>
      <ThemedText style={[styles.statusName, { color: "#999" }]}>
        {type}
      </ThemedText>
      <View
        style={[
          styles.statusColor,
          {
            backgroundColor: Colors[type.toLowerCase()],
            shadowColor: Colors[type.toLowerCase()],
          },
        ]}
      ></View>
    </View>
  );
};

export default AppStatus;

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8, // needs RN 0.71+, otherwise use marginLeft
  },
  statusName: {
    fontSize: 14,
    marginRight: -5,
  },
  statusColor: {
    width: 12,
    height: 12,
    borderRadius: 6, // half of width/height → circle

    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 8, // Android glow
  },
});
