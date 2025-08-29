import {
  StyleSheet,
  Platform,
  StatusBar,
  TouchableHighlight,
  FlatList,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import ThemedView from "../../components/Theme/ThemedView";

import { AppointmentLists } from "../../constants/Appointments";

import ListView from "../../components/ListView";
import ListItemSeperator from "../../components/ListItemSeperator";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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
          <ListView
            avatar={item.avatar}
            name={item.name}
            title={`MD - ${item.specification}`}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            price={`PHP ${item.price}`}
            status={item.status}
            details={{ detail1: item.date, detail2: item.time }}
            onPress={() => console.log("Appointment pressed")}
            renderRightActions={() => (
              <>
                <View
                  style={{
                    backgroundColor: Colors.completed,
                    width: 70,
                  }}
                >
                  <Ionicons
                    name="enter-outline"
                    size={30}
                    color="#fff"
                    style={{ alignSelf: "center", marginTop: 30 }}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "orange",
                    width: 70,
                  }}
                >
                  <Ionicons
                    name="pencil"
                    size={30}
                    color="#fff"
                    style={{ alignSelf: "center", marginTop: 30 }}
                  />
                </View>
              </>
            )}
          />
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
