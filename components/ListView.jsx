import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors"; // Adjust the path as necessary
import ThemedText from "./Theme/ThemedText";
import Tag from "./Tag";
import AppStatus from "./AppStatus";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
const ListView = ({
  style,
  avatar,
  name,
  title,
  details,
  status,
  price,
  onPress,
  renderRightActions,
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  return (
    // <Card
    //   style={[
    //     styles.card,
    //     style,
    //     { backgroundColor: theme.uiBackground, borderLeftColor: theme.button },
    //   ]} // Use the theme's background color
    // >
    <Swipeable overshootRight={false} renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={theme.underlayColor} onPress={onPress}>
        <View style={styles.container}>
          {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
          <View style={styles.details}>
            <View>
              <ThemedText style={[styles.name, { color: theme.primary }]}>
                {name}
              </ThemedText>
              <ThemedText
                textType="primary"
                numberOfLines={2}
                style={[styles.title]}
              >
                {title}
              </ThemedText>
            </View>
            {details &&
              ["detail1", "detail2"].map(
                (key) =>
                  details[key] && (
                    <ThemedText
                      textType="secondary"
                      key={key}
                      style={styles.desc}
                    >
                      {details[key]}
                    </ThemedText>
                  )
              )}
          </View>
          {price && (
            <View style={styles.price}>
              <Tag title={price} size="sm" />
            </View>
          )}
          {status && (
            <View style={styles.statusView}>
              <AppStatus type={status} />
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
    // </Card>
  );
};
export default ListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 40,
  },
  details: {
    flex: 1, // take remaining space
    padding: 10,
    // justifyContent: "center",
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 18,
    flexWrap: "wrap", // wrap long text
    fontWeight: "600",
  },
  title: {
    fontSize: 14,
    flexWrap: "wrap",
  },
  desc: {
    fontSize: 12,
    flexWrap: "wrap", // ✅ wrap to next line
    // alignSelf: "",
    // backgroundColor: "dodgerblue",
    // marginTop: 20,
  },
  price: {
    position: "absolute",
    margin: 10,
    right: 0,
    bottom: 0,
  },
  statusView: {
    alignItems: "flex-start",
    margin: 10,
  },
});
