import { StyleSheet, Text } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
const ThemedText = ({
  style,
  link = false,
  textType = "primary",
  ...props
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  if (textType === "secondary") {
    return (
      <Text
        style={[
          {
            color: Colors.textSecondary,
            fontSize: 14,
            fontFamily: "Poppins Regular",
            textDecorationColor: Colors.textSecondary,
          },
          style,
        ]}
        {...props}
      />
    );
  } else if (textType === "link") {
    return (
      <Text
        style={[
          {
            color: Colors.textInfo,
            fontSize: 16,
            fontFamily: "Poppins Regular",
          },
          style,
        ]}
        {...props}
      />
    );
  }

  return (
    <Text
      style={[
        {
          color: theme.textPrimary,
          fontSize: 18,
          fontWeight: 800,
          fontFamily: "Poppins Regular",
          textDecorationColor: link ? theme.link : theme.text,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedText;

const styles = StyleSheet.create({});
