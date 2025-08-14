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
import ThemedView from "../components/ThemedView";
import TelehealthLogo from "../assets/images/logoTelehealth.png";
import ThemedButton from "../components/ThemedButton";
import { Link } from "expo-router";
import ThemedCard from "../components/ThemedCard";
import ThemedText from "../components/ThemedText";
import ThemedLogo from "../components/ThemedLogo";
import { useEvent } from "expo";
import { useVideoPlayer, VideoView } from "expo-video";

const videoSource =
  "https://videos.pexels.com/video-files/7195606/7195606-uhd_1440_2732_25fps.mp4";
const videosrc = require("../assets/video/consult1.mp4");
const Home = () => {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", {
    isPlaying: player.playing,
  });
  const videoRef = React.useRef(null);
  return (
    // <ImageBackground
    //   style={styles.bg}
    //   source={require("../assets/images/telehealthBG-light.jpg")}
    // >
    <View style={{ flex: 1 }}>
      {/* Video Background */}
      <VideoView
        style={StyleSheet.absoluteFillObject}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />

      {/* Optional dark overlay */}
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: "rgba(0,0,0,0.4)" },
        ]}
      />

      {/* Foreground Content */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          //   justifyContent: "center",
          paddingTop: StatusBar.currentHeight + 60,
        }}
      >
        <ThemedLogo source={TelehealthLogo} style={styles.image} />
        <ThemedText style={{ color: "white" }}>
          Consult, Anytime, Anywhere
        </ThemedText>

        <View style={styles.container}>
          <Link href="/login" style={styles.button}>
            <Text style={{ color: "white", fontFamily: "Ubuntu Bold Italic" }}>
              Login
            </Text>
          </Link>
          <Link href="/register" style={styles.button}>
            <Text style={{ color: "white" }}>Register</Text>
          </Link>
        </View>
      </View>
    </View>
    // </ImageBackground>
  );
};

export default Home;
//https://coolors.co/012a4a-013a63-01497c-014f86-2a6f97-2c7da0-468faf-61a5c2-89c2d9-a9d6e5
const styles = StyleSheet.create({
  image: {
    width: 155,
    height: 127,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2a6f97",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    minWidth: "40%",
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
  video: {
    width: 350,
    height: 300,
  },
});
