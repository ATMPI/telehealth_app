import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  useColorScheme,
  ScrollView,
} from "react-native";
import React from "react";
import ThemedView from "../../components/Theme/ThemedView";
import ListView from "../../components/ListView";
import Card from "../../components/Card";
import { Colors } from "../../constants/Colors";
const consultations = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };
  return (
    <ThemedView safe={true} style={styles.mainContainer}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Card>
            <ListView
              avatar="https://avatar.iran.liara.run/public/boy"
              name="Dr. Angelica Marie Atienza"
              title="Pediatrician"
              details={{ detail1: "May 17 2023 6:00 PM" }}
            />
          </Card>
        </View>
      </ScrollView>
    </ThemedView>
  );
};

export default consultations;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 20,
  },
  mainContainer: {
    paddingBottom: 0,
    flex: 1,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 40 : 0,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "blue",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignSelf: "flex-end",
    resizeMode: "contain",
  },
  greeting: {
    fontSize: 24,
    color: "gray",
  },
  name: {
    fontSize: 26,
    fontWeight: "800",
    // color: "black",
  },
  appointmentsContainer: {
    // borderWidth: 1,
    // borderColor: "#ccc",
    minHeight: 150,
  },
  topDoctorContainer: {
    flex: 1,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 20,
    marginTop: 20,

    // height: 500,
  },
  topDoctorHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});
