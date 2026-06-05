import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import ThemedView from "../../components/Theme/ThemedView";
import AppButton from "../../components/AppButton";
import { ConnectionLists } from "../../constants/Connection";
import ListView from "../../components/ListView";
import ListItemSeperator from "../../components/ListItemSeperator";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import Icon from "../../components/Icon";

const Connections = () => {
  const tabBarHeight = useBottomTabBarHeight();
  console.log(tabBarHeight);
  return (
    <ThemedView safe={true}>
      <View
        style={[
          styles.mainContainer,
          { paddingBottom: Platform.OS === "android" ? tabBarHeight + 30 : 0 },
        ]}
      >
        <AppButton
          title="Add Contact"
          outline={true}
          icon="person"
          style={styles.addConBtn}
        />
        <FlatList
          style={{ paddingVertical: 0 }}
          data={ConnectionLists}
          keyExtractor={(patient) => patient.id.toString()}
          renderItem={({ item }) => (
            <ListView
              name={item.name}
              title={item.id}
              status={item.status}
              IconComponent={<Icon name="person-outline"></Icon>}
              style={{ paddingVertical: 10 }}
            />
          )}
          ItemSeparatorComponent={<ListItemSeperator />}
        />
      </View>
    </ThemedView>
  );
};

export default Connections;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 30 : 0,

    paddingHorizontal: 10,
  },
  addConBtn: {
    alignSelf: "flex-start",
  },
});
