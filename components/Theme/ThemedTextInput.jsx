import React, { useState } from "react";
import { useColorScheme } from "react-native";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
const ThemedTextInput = ({ label, style, icon, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const styles = {
    container: {
      position: "relative",
      marginVertical: 10,
      width: "100%",
      boxSizing: "border-box",
    },
    label: {
      position: "absolute",
      left: icon ? 35 : 15,
      top: 15,
      fontSize: 16,
      color: "#888",
      zIndex: 1,
    },
    labelFocused: {
      top: 7,
      left: icon ? 15 : 15,
      fontSize: 12,
      display: icon ? "none" : "flex",
      // color: "green",
    },
    textInput: {
      paddingLeft: icon ? 35 : 15,
      paddingTop: 20, // extra space for label
      backgroundColor: "#f0f0f0",
      borderRadius: 5,
      // borderWidth: 1,
      borderColor: "#ccc",
      fontSize: 18,
      boxSizing: "border-box",
    },
    inputFocused: {
      borderBottomWidth: 2,
      borderBottomColor: theme.button,
    },
    icon: {
      position: "absolute",
      left: 15,
      top: 20,
      zIndex: 2,
      color: "#888",
    },
    iconFocused: {
      top: 20,
      left: 15,
      fontSize: 16,
      // color: "green",
    },
  };

  return (
    <View style={[styles.container, style]}>
      {/* Label */}
      <Text
        style={[
          styles.label,
          (isFocused || value) && styles.labelFocused, // Move label when focused or has text
        ]}
      >
        {label}
      </Text>

      {/* Input */}
      <View style={styles.inputGroup}>
        {icon && (
          <Ionicons
            name={icon}
            style={[styles.icon, (isFocused || value) && styles.iconFocused]}
            size={16}
          />
        )}
        <TextInput
          style={[styles.textInput, isFocused && styles.inputFocused]}
          value={value}
          onChangeText={setValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>
    </View>
  );
};

export default ThemedTextInput;

// const styles = StyleSheet.create({
//   container: {
//     position: "relative",
//     marginVertical: 10,
//     width: "100%",
//     boxSizing:"border-box"
//   },
//   label: {
//     position: "absolute",
//     left: 15,
//     top: 15,
//     fontSize: 16,
//     color: "#888",
//     zIndex: 1,
//   },
//   labelFocused: {
//     top: 7,
//     fontSize: 12,
//     // color: "green",
//   },
//   textInput: {
//     padding: 15,
//     paddingTop: 20, // extra space for label
//     backgroundColor: "#f0f0f0",
//     borderRadius: 5,
//     // borderWidth: 1,
//     borderColor: "#ccc",
//   },
//   inputFocused: {
//     borderBottomWidth: 2,
//     borderBottomColor: Colors.primary,
//   },
// });
