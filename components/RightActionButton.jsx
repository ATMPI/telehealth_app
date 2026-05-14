import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";

export default function RightActionButton({ style, icon, iconColor }) {
  return (
    <TouchableWithoutFeedback>
      <View style={[style, { justifyContent: "center", alignItems: "center" }]}>
        <Ionicons name={icon} size={30} color={iconColor} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
