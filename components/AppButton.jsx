import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const AppButton = ({
  title,
  onPress,
  color,
  icon,
  iconSize = 24,
  style,
  outline = false,
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: outline
            ? "transparent"
            : color
            ? color
            : theme.button,
          borderWidth: outline ? 2 : 0,
          borderColor: outline ? theme.button : "transparent",
        },
        style,
      ]}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={iconSize}
            color={outline ? theme.button : theme.buttonText}
          />
        )}
        {title && (
          <Text
            style={{
              color: outline ? theme.button : theme.buttonText,
              marginLeft: 10,
            }}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBlock: 5,
    paddingVertical: 15,
  },
});
