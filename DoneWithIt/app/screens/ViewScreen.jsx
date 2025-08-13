import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";

const ViewScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <View style={styles.delBtn}></View>
          <View style={styles.closeBtn}></View>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../assets/chair.jpg")}
          ></Image>
        </View>
      </View>
    </View>
  );
};

export default ViewScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  container: {
    marginTop: StatusBar.currentHeight + 10,
    justifyContent: "space-between",
  },
  delBtn: {
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
  closeBtn: {
    backgroundColor: "dodgerblue",
    width: 50,
    height: 50,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    paddingBlock: 10,
  },
  imgContainer: {
    height: "80%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
