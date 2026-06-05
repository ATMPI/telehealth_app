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
import { DoctorList } from "../../constants/Doctors";
import ListView from "../../components/ListView";
import ListItemSeperator from "../../components/ListItemSeperator";
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import RightActionButton from "../../components/RightActionButton";
import { useState } from "react";

const Appointments = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  const [appointments, setAppointments] = useState(AppointmentLists);
  const [doctors, setDoctors] = useState(DoctorList);
  const [refresh, setRefresh] = useState(false);
  return (
    <ThemedView safe={false} style={ListStyle.container}>
      <FlatList
        style={{ paddingHorizontal: 10 }}
        data={appointments}
        keyExtractor={(appointment) => appointment.id.toString()}
        renderItem={({ item }) => (
          <ListView
            name={item.name}
            title={`MD - ${item.specification}`}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            price={`PHP ${item.price}`}
            status={item.status}
            details={{ detail1: item.date, detail2: item.time }}
            onPress={() => console.log("Appointment pressed")}
            renderRightActions={() => (
              <>
                <RightActionButton
                  style={{
                    backgroundColor: Colors.completed,
                    width: 70,
                  }}
                  icon="enter-outline"
                  iconColor="#fff"
                />
                <RightActionButton
                  style={{
                    backgroundColor: "orange",
                    width: 70,
                  }}
                  icon="pencil"
                  iconColor="#fff"
                />
              </>
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refresh}
        onRefresh={() => {
          setRefresh(true);
          const updatedAppointments = appointments.map((appointment) => {
            const doctor = doctors.find((doc) => doc.id === appointment.id);
            return doctor
              ? { ...appointment, avatar: doctor.avatar }
              : appointment;
          });
          setRefresh(false);
          setAppointments(updatedAppointments);
        }}
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
