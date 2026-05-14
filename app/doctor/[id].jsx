import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemedView from "../../components/Theme/ThemedView";
import ThemedText from "../../components/Theme/ThemedText";
import AppButton from "../../components/AppButton";
import Rating from "../../components/Rating";
import { isTablet } from "../../constants/IsTablet";
import { DoctorList } from "../../constants/Doctors";

const DoctorDetails = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const { id } = useLocalSearchParams();
  const route = useRouter();
  const selectedDoctor = DoctorList.find((doc) => doc.id === id);
  console.log(selectedDoctor.name);

  return (
    <ThemedView safe={true} style={styles.mainContainer}>
      <Image source={{ uri: selectedDoctor.avatar }} style={styles.cover} />

      <ThemedView
        style={[styles.content, { backgroundColor: theme.background }]}
      >
        <View style={styles.personalInfoContainer}>
          <View style={[styles.row]}>
            <View style={styles.personalInfo}>
              <ThemedText textType="primary" style={{ fontSize: 24 }}>
                {selectedDoctor.name}
              </ThemedText>
              <ThemedText textType="secondary">
                {selectedDoctor.specification}
              </ThemedText>
            </View>
            <View
              style={[
                styles.buttonContainer,
                styles.row,
                {
                  gap: 10,
                  //   borderWidth: 1,
                  paddingTop: 0,
                  //   width: "40%",
                  width: 130,
                },
              ]}
            >
              <AppButton
                //   title=""
                icon="mail"
                iconSize={26}
                color={Colors.textWarning}
                style={{
                  borderRadius: 10,
                  flexShrink: 1,
                  marginVertical: 0,
                  padding: 10,
                }}
              />

              <AppButton
                //   title=""
                icon="call"
                iconSize={26}
                color={Colors.textSuccess}
                style={{
                  borderRadius: 10,
                  flexShrink: 1,
                  marginVertical: 0,
                  padding: 10,
                }}
              />
            </View>
          </View>
          <View style={[styles.row, { paddingTop: 10 }]}>
            <Rating
              reviews={100}
              onPressReviews={() => route.push("/doctor/RatingList")}
            />
          </View>
        </View>

        <View style={{ marginTop: 20, flexShrink: 1 }}>
          <ThemedText textType="primary" style={{ marginBottom: 10 }}>
            About
          </ThemedText>

          <ThemedText
            numberOfLines={isTablet() ? 10 : 2}
            textType="secondary"
            style={{ lineHeight: 20 }}
          >
            Dr. Ivan Smith is a highly skilled cardiologist with over 15 years
            of experience in diagnosing and treating heart conditions. He is
            dedicated to providing personalized care and staying updated with
            the latest advancements in cardiology. Over the years, he has
            successfully managed complex cases ranging from coronary artery
            disease to heart rhythm disorders. Dr. Smith is also an active
            contributor to medical research and has published several papers in
            leading cardiology journals. He believes in empowering patients
            through education, ensuring they understand their condition and
            treatment options. Known for his compassionate approach, Dr. Smith
            strives to build strong doctor-patient relationships that foster
            trust and long-term health outcomes.
          </ThemedText>
          {!isTablet() && (
            <ThemedText
              textType="link"
              style={{ alignSelf: "flex-end", fontSize: 14 }}
            >
              See more
            </ThemedText>
          )}
        </View>
        <View style={{ marginTop: 20, flexShrink: 1 }}>
          <ThemedText textType="primary" style={{ marginBottom: 10 }}>
            Working Hours
          </ThemedText>
          {!isTablet() ? (
            <View style={styles.row}>
              <ThemedText
                numberOfLines={2}
                textType="secondary"
                style={{ lineHeight: 20 }}
              >
                Mon - Fri: 9:00 AM - 5:00 PM
              </ThemedText>
              <ThemedText textType="link" style={{ fontSize: 14 }}>
                See all Schedule
              </ThemedText>
            </View>
          ) : (
            <View style={{}}>
              <ThemedText
                numberOfLines={2}
                textType="secondary"
                style={{ lineHeight: 20 }}
              >
                Mon - Fri: 9:00 AM - 5:00 PM
              </ThemedText>
              <ThemedText
                numberOfLines={2}
                textType="secondary"
                style={{ lineHeight: 20 }}
              >
                Tue - Fri: 9:00 AM - 5:00 PM
              </ThemedText>
              <ThemedText
                numberOfLines={2}
                textType="secondary"
                style={{ lineHeight: 20 }}
              >
                Wed - Fri: 9:00 AM - 5:00 PM
              </ThemedText>
              <ThemedText
                numberOfLines={2}
                textType="secondary"
                style={{ lineHeight: 20 }}
              >
                Thu - Fri: 9:00 AM - 5:00 PM
              </ThemedText>
              <ThemedText
                numberOfLines={2}
                textType="secondary"
                style={{ lineHeight: 20 }}
              >
                Fri - Fri: 9:00 AM - 5:00 PM
              </ThemedText>
            </View>
          )}
        </View>
        <View style={{ marginTop: 20, flex: 1 }}>
          <ThemedText textType="primary" style={{ marginBottom: 10 }}>
            Stats
          </ThemedText>
          <View style={[styles.row, { paddingHorizontal: 50 }]}>
            <View style={{ alignItems: "center" }}>
              <ThemedText textType="primary">385</ThemedText>
              <ThemedText textType="secondary">Patients</ThemedText>
            </View>
            <View style={{ alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <ThemedText textType="primary">15</ThemedText>
                <ThemedText
                  style={{ fontSize: 10, alignSelf: "flex-end", marginLeft: 2 }}
                  textType="primary"
                >
                  Years
                </ThemedText>
              </View>
              <ThemedText textType="secondary">Experience</ThemedText>
            </View>
            <View style={{ alignItems: "center" }}>
              <ThemedText textType="primary">10</ThemedText>
              <ThemedText textType="secondary">Consultation</ThemedText>
            </View>
          </View>
        </View>
        <AppButton title="Make an appointment" style={{ marginTop: 30 }} />
      </ThemedView>
    </ThemedView>
  );
};

export default DoctorDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingTop: 0,
  },
  cover: {
    // flex: 1,
    width: "100%",
    height: "33%",
    backgroundColor: "#ccc",
    zIndex: 1,
    resizeMode: "cover",
  },
  content: {
    // flex: 2,
    padding: 20,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    width: "100%",
    position: "absolute",
    top: "30%",
    zIndex: 2,
    flexGrow: 1,
    height: "70%",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
