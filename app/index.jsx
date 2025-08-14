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
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ThemedBiometrics from "../components/ThemedBiometrics";
import TelehealthLogo from "../assets/images/logoTelehealth.png";
import ehealthcareLogo from "../assets/images/ehrLogo.png";
import ThemedButton from "../components/ThemedButton";
import ThemedCard from "../components/ThemedCard";
import ThemedText from "../components/ThemedText";
import ThemedLogo from "../components/ThemedLogo";

const Home = () => {
  return (
    <ImageBackground
      style={styles.bg}
      //   blurRadius={}
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
          <ThemedText style={{ fontSize: 18, fontWeight: "bold" }}>
            Consult, Anytime , Anywhere
          </ThemedText>
        </View>

        <View style={styles.container}>
          <Link href="/login" style={styles.button}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontFamily: "Ubuntu Bold Italic",
                alignSelf: "center",
              }}
            >
              Log in using password
            </Text>
          </Link>
          <ThemedBiometrics
            biometricStyle={{ width: "60%", justifyContent: "center" }}
            style={[styles.button, { marginTop: 20 }]}
          ></ThemedBiometrics>
        </View>
        {/* </ThemedCard> */}
      </View>
    </ImageBackground>
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
  },
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "repeat",
  },
});
