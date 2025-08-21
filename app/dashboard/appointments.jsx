import {
  StyleSheet,
  Platform,
  StatusBar,
  TouchableHighlight,
  FlatList,
  useColorScheme,
} from "react-native";
import React from "react";
import ThemedView from "../../components/Theme/ThemedView";

import { AppointmentLists } from "../../constants/Appointments";

import ListView from "../../components/ListView";
import ListItemSeperator from "../../components/ListItemSeperator";
import { Colors } from "../../constants/Colors";

const Appointments = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  return (
    <ThemedView safe={false} style={ListStyle.container}>
      <FlatList
        style={{ paddingHorizontal: 10 }}
        data={AppointmentLists}
        keyExtractor={(doctor) => doctor.id.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={theme.uiBackground}
            onPress={() => console.log(item.id)}
          >
            <ListView
              avatar={item.avatar}
              name={item.name}
              title={`MD - ${item.specification}`}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              price={`PHP ${item.price}`}
              status={item.status}
              details={{ detail1: item.date, detail2: item.time }}
            />
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={<ListItemSeperator />}
      />
    </ThemedView>
  );
};

export default Appointments;

const ListStyle = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 50 : 50,
    // paddingHorizontal: ,
  },
});
