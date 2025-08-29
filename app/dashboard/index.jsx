import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  FlatList,
  Button,
  useColorScheme,
  ScrollView,
} from "react-native";
import React from "react";
import ThemedView from "../../components/Theme/ThemedView";
import ThemedTextInput from "../../components/Theme/ThemedTextInput";
import ListView from "../../components/ListView";
import Card from "../../components/Card";
import Category from "../../components/Category";
import Categories from "../../constants/Categories";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemedText from "../../components/Theme/ThemedText";
import { isTablet } from "../../constants/IsTablet";
const home = () => {
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
          <View style={styles.headerContainer}>
            <View style={styles.greetingContainer}>
              <ThemedText textStyle="secondary" style={styles.greeting}>
                Hello,
              </ThemedText>
              <ThemedText
                textType="primary"
                style={[styles.name, { color: theme.primary }]}
              >
                John Doe
              </ThemedText>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/user.jpg")}
                width={100}
                height={100}
                style={styles.img}
              />
            </View>
          </View>
          <ThemedTextInput label="Search" icon="search" />
          <View style={styles.appointmentsContainer}>
            <ThemedText style={{ marginBottom: 10 }}>
              Upcoming Appointments
            </ThemedText>
            <Card>
              <ListView
                avatar="https://avatar.iran.liara.run/public/boy"
                name="Dr. Angelica Marie Atienza"
                title="Pediatrician"
                details={{ detail1: "May 17 2023 6:00 PM" }}
              />
            </Card>
          </View>
          <View style={styles.categoriesContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ThemedText style={{ marginBottom: 10 }}>Categories</ThemedText>
              <Link href="/dashboard/categories">
                <ThemedText textType="link">View All</ThemedText>
              </Link>
            </View>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 10,
                // borderWidth: 1,
                // borderColor: "#ccc",
                // borderRadius: 10,
              }}
            >
              <FlatList
                data={chunkArray(Categories, isTablet() ? 7 : 2)} // 👈 groups into 2 per column
                horizontal
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={true}
                renderItem={({ item }) => (
                  <View style={{ marginRight: 12 }}>
                    {item.map((cat) => (
                      <View
                        key={cat.id}
                        style={{
                          minWidth: 170,
                          minHeight: 70,
                          marginBottom: 10,
                        }}
                      >
                        <Category
                          title={cat.name}
                          icon={cat.icon}
                          color={cat.color}
                          grid={false}
                        />
                      </View>
                    ))}
                  </View>
                )}
                // keyExtractor={(item) => item.id.toString()}
                // numColumns={2}
                showsVerticalScrollIndicator={false}
              />
              {/* <Category title="Pediatrician" />
            <Category title="General Practitioner" /> */}
            </View>
          </View>
        </View>
        <View
          style={[
            styles.topDoctorContainer,
            { backgroundColor: theme.navBackground },
          ]}
        >
          <View style={styles.topDoctorHeader}>
            <ThemedText>Top Doctors</ThemedText>
            <Link href="/dashboard/top-doctors">
              <ThemedText textType="link" link={true}>
                View All
              </ThemedText>
            </Link>
          </View>
          <Card>
            <ListView
              avatar="https://avatar.iran.liara.run/public/girl"
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

export default home;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 20,
  },
  mainContainer: {
    paddingBottom: 0,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 40 : 0,
    paddingHorizontal: 20,
    flex: 1,
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
