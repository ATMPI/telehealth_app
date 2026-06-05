import { StyleSheet, View, Platform, StatusBar } from "react-native";
import React from "react";
import Icon from "../../components/Icon";
import ThemedView from "../../components/Theme/ThemedView";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import ListView from "../../components/ListView";
import Card from "../../components/Card";

const Services = () => {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <ThemedView safe={true}>
      <View
        style={[
          styles.mainContainer,
          { paddingBottom: Platform.OS === "android" ? tabBarHeight + 30 : 0 },
        ]}
      >
        <Card>
          <ListView
            avatar="https://avatar.iran.liara.run/public/boy"
            name="Dr. Angelica Marie Atienza"
            title="Pediatrician"
            details={{ detail1: "May 17 2023 6:00 PM" }}
          />
        </Card>
      </View>
    </ThemedView>
  );
};

export default Services;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 30 : 0,
    backgroundColor: "dodgerblue",
    // paddingHorizontal: 10,

    flex: 1,
  },
});
