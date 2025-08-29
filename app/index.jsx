import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ThemedText from "../components/Theme/ThemedText";
import ThemedLogo from "../components/Theme/ThemedLogo";
import ThemedView from "../components/Theme/ThemedView";
import AppButton from "../components/AppButton";
import RatingList from "./doctor/RatingList";

import HalfCard from "../components/HalfCard";

const Home = () => {
  const route = useRouter();
  const login = () => {
    route.replace("/login");
  };
  return (
    <ImageBackground
      style={styles.bg}
      // blurRadius={}
      fadeDuration={1000}
      source={{
        uri: "https://images.pexels.com/photos/7195422/pexels-photo-7195422.jpeg",
      }}
    >
      <View
        safe={true}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: StatusBar.currentHeight + 70,
        }}
      >
        {/* Uncomment the ThemedCard if you want to use it */}
        {/* <ThemedCard style={{padding:60}}> */}
        <View style={styles.logoContainer}>
          <ThemedLogo source={{}} style={[styles.image]}></ThemedLogo>
          <ThemedText
            style={{ fontSize: 18, fontWeight: "bold", color: "$fff" }}
          >
            Consult, Anytime , Anywhere
          </ThemedText>
        </View>

        <View style={styles.container}>
          <AppButton
            title="Log in using password"
            icon="log-in-outline"
            onPress={login}
          />
          <AppButton
            title="Log in with biometrics"
            icon="finger-print"
            outline={true}
          />
        </View>
        {/* </ThemedCard> */}
      </View>
    </ImageBackground>
  );
};

const Test = () => {
  const route = useRouter();
  const HandleClick = () => {
    route.replace("/login");
  };
  return (
    <View
      style={{
        flex: 1,

        // alignSelf: "flex-end",
      }}
    >
      <RatingList />
    </View>
  );
};

export default Home;
//https://coolors.co/012a4a-013a63-01497c-014f86-2a6f97-2c7da0-468faf-61a5c2-89c2d9-a9d6e5
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 90,
    marginBottom: 0,
    resizeMode: "contain",
  },
  logoContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2a6f97",
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    minWidth: "60%",
    minHeight: "7%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    border: 1,
    borderColor: "red",
    width: "70%",
  },
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "repeat",
  },
});
