import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/screenWall.jpg")}
    >
      <View style={styles.mainContainer}>
        <View
          style={[
            styles.logoContainer,
            { paddingTop: StatusBar.currentHeight + 10 },
          ]}
        >
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text>Sell What you dont need</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <View style={styles.button1} />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button2} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  background: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  button1: {
    width: "100%",
    height: 50,
    backgroundColor: "dodgerblue",
  },
  button2: {
    width: "100%",
    height: 50,
    backgroundColor: "gold",
  },
});
