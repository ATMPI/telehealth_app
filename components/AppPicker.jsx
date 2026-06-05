import React, { useState } from "react";
import { FlatList, Modal, useColorScheme } from "react-native";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-web";
import { Pressable } from "react-native";
import ThemedButton from "./Theme/ThemedButton";
import ThemedText from "./Theme/ThemedText";
import AppPickerItems from "./AppPickerItems";
const AppPicker = ({
  label,
  style,
  icon,
  items,
  selectedItem,
  onSelectItem,
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme
  const [isShown, setIsShown] = useState(false);
  const selectedItemLabel =
    items.find((item) => item.value === selectedItem)?.label || label;
  const styles = {
    container: {
      position: "relative",
      marginVertical: 10,
      width: "100%",
      height: 50,
      boxSizing: "border-box",
      backgroundColor: "#f0f0f0",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 15,
    },
    label: {
      // position: "absolute",
      // left: icon ? 15 : 0,
      // top: 15,
      // fontSize: 16,
      // color: "#888",
      // zIndex: 1,
      //   flex: 1,
      flex: 1,
    },

    icon: {
      marginRight: 10,
      zIndex: 2,
      color: "#888",
    },
  };

  return (
    <>
      <Pressable onPress={() => setIsShown(true)}>
        <View style={[styles.container, style]}>
          {icon && <Ionicons name={icon} style={[styles.icon]} size={16} />}
          <Text style={[styles.label]}>
            {selectedItem ? selectedItemLabel : label}
          </Text>
          <Ionicons name="chevron-down-outline" size={16} />
        </View>
      </Pressable>
      <Modal visible={isShown} animationType="slide">
        <Button title="Close" onPress={() => setIsShown(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <AppPickerItems
              label={item.label}
              onPress={() => {
                console.log("Selected item:", item);
                onSelectItem(item.value);
                setIsShown(false);
              }}
            >
              {item.label}
            </AppPickerItems>
          )}
        />
      </Modal>
    </>
  );
};

export default AppPicker;
