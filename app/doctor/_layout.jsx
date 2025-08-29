import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../../constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const DoctorLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "Doctor Details",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#f8f9fa" }, // Example color
        headerTintColor: "#343a40", // Example color for the title
      }}
    >
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
      <Stack.Screen name="RatingList" options={{ headerShown: false }} />
      <Stack.Screen name="schedule" options={{ headerShown: true }} />
    </Stack>
  );
};

export default DoctorLayout;

const styles = StyleSheet.create({});
