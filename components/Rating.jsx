import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // install expo-vector-icons if not yet
import ThemedText from "./Theme/ThemedText";

const StarRating = ({
  rating = 4,
  totalStars = 5,
  reviews,
  onPressReviews = null,
}) => {
  return (
    <View style={styles.container}>
      {/* Stars */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.stars}>
          {Array.from({ length: totalStars }, (_, index) => {
            const starValue = index + 1;
            return (
              <Ionicons
                key={index}
                name={starValue <= rating ? "star" : "star-outline"}
                size={20}
                color={starValue <= rating ? "#facc15" : "#d1d5db"} // yellow / gray
                style={{ marginRight: 2 }}
              />
            );
          })}
        </View>

        {/* Reviews text */}
        {reviews > 0 && (
          <Text style={styles.reviewsText}>({reviews} reviews)</Text>
        )}
      </View>

      {/* See all reviews link */}
      {onPressReviews && (
        <TouchableOpacity onPress={onPressReviews}>
          <ThemedText textType="link" style={styles.linkText}>
            See all reviews
          </ThemedText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  stars: {
    flexDirection: "row",
    marginRight: 6,
  },
  reviewsText: {
    fontSize: 14,
    color: "#4b5563", // gray-600
    marginRight: 6,
  },
  linkText: {
    fontSize: 14,
    // color: "#3b82f6", // blue-500
  },
});
