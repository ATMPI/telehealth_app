import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  useColorScheme,
  Dimensions,
  Pressable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import ThemedView from "../../components/Theme/ThemedView";
import ThemedCard from "../../components/Theme/ThemedCard";
import ThemedText from "../../components/Theme/ThemedText";
import { DoctorList } from "../../constants/Doctors";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";
import ListView from "../../components/ListView";
import Card from "../../components/Card";

const screenWidth = Dimensions.get("window").width;

const Doctors = () => {
  const route = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const doctorElement = DoctorList.map((doctor, index) => {
    return (
      <View key={index} style={DoctorStyles.cardContainer}>
        <ThemedCard
          style={[
            DoctorStyles.card,
            {
              borderColor: theme.border,
              borderLeftColor: theme.secondary,
              borderLeftWidth: 5,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => route.push(`../doctor/${doctor.id}`)}
          >
            <Image
              source={{ uri: doctor.avatar }}
              style={[DoctorStyles.avatar, { borderColor: theme.uiBackground }]}
            />
            <ThemedText
              style={[DoctorStyles.cardTitle, { color: theme.secondary }]}
            >
              {doctor.name}
            </ThemedText>
            <ThemedText style={DoctorStyles.cardDescription}>
              If you run this code, you will see a screen with an empty
              navigation bar and a grey content area containing your HomeScreen
              component (shown above).
            </ThemedText>
          </TouchableOpacity>
        </ThemedCard>
      </View>
    );
  });

  return (
    <ThemedView safe={true} style={DoctorStyles.container}>
      <ScrollView contentContainerStyle={DoctorStyles.scrollView}>
        {doctorElement}
      </ScrollView>
    </ThemedView>
  );
};

const List = () => {
  const route = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const doctorDetails = (id) => {
    route.push(`../doctor/${id}`);
  };
  return (
    <ThemedView safe={false} style={ListStyle.container}>
      <FlatList
        style={{ paddingHorizontal: 10 }}
        data={DoctorList}
        keyExtractor={(doctor) => doctor.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => doctorDetails(item.id)}>
            <Card>
              <ListView
                avatar={item.avatar}
                name={item.name}
                title={`MD - ${item.specification}`}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                details={{
                  detail1: item.graduatedAt,
                  detail2: `${item.experience} year(s) of experience`,
                }}
                price={`PHP ${item.price}`}
                status={item.status}
                onPress={() => doctorDetails(item.id)}
              />
            </Card>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
};

export default List;

const DoctorStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 50,
    height: "100%",
  },
  scrollView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 30,
    alignItems: "center",
    paddingBottom: 100,
  },
  cardContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 24,
  },
  card: {
    width: "100%",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: -4,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginTop: 0, // Leave space for avatar
    marginLeft: "auto",
  },
  cardDescription: {
    marginTop: 12,
    fontSize: 14,
    textAlign: "center",
  },
  avatar: {
    position: "absolute",
    top: -35,
    left: -10,
    width: 70,
    height: 70,
    borderWidth: 7,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: -4,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    // elevation: 2,
    boxSizing: "border-box",
    backgroundColor: "#fff",
  },
});

const ListStyle = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 50 : 50,
    // paddingHorizontal: ,
  },
});
