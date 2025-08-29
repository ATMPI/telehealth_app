import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#f8f9fa" }, // Example color
          headerTintColor: "#343a40", // Example color for the title
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
        <Stack.Screen
          name="doctor"
          options={{
            headerShown: true,
            title: "",
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerTintColor: theme.textPrimary,
          }}
        />
        <Stack.Screen
          name="doctor/RatingList"
          options={{
            headerShown: false,
            title: "",
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerTintColor: theme.textPrimary,
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "card",
            animation: "slide_from_right",
            headerShown: false,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
