import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../../components/Card";
import ListView from "../../components/ListView";
import Rating from "../../components/Rating";

const reviews = [
  {
    id: "1",
    name: "John Doe",
    rating: 5,
    comment: "Excellent service!",
    date: "Aug 10, 2025",
  },
  {
    id: "2",
    name: "Jane Williams",
    rating: 4,
    comment: "Great experience, but waiting was long.",
    date: "Aug 5, 2025",
  },
  {
    id: "3",
    name: "Michael Brown",
    rating: 5,
    comment: "Explained clearly and was very kind.",
    date: "Jul 30, 2025",
  },
  {
    id: "4",
    name: "Chris Evans",
    rating: 3,
    comment: "Average, could be better.",
    date: "Jul 15, 2025",
  },
  {
    id: "5",
    name: "Sophia Lee",
    rating: 2,
    comment: "Not satisfied with the consultation.",
    date: "Jul 1, 2025",
  },
];

export default function ReviewsScreen() {
  const [selectedTab, setSelectedTab] = useState(0); // 0 = All, 1-5 = rating

  const renderStars = (rating) => (
    <View style={{ flexDirection: "row", marginVertical: 2 }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Ionicons
          key={index}
          name={index < rating ? "star" : "star-outline"}
          size={18}
          color={index < rating ? "#facc15" : "#d1d5db"} // yellow / gray
          style={{ marginRight: 2 }}
        />
      ))}
    </View>
  );

  const filteredReviews =
    selectedTab === 0
      ? reviews
      : reviews.filter((r) => r.rating === selectedTab);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Patient Reviews</Text>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {[0, 1, 2, 3, 4, 5].map((num) => (
          <TouchableOpacity
            key={num}
            style={[styles.tab, selectedTab === num && styles.activeTab]}
            onPress={() => setSelectedTab(num)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === num && styles.activeTabText,
              ]}
            >
              {num === 0 ? "All" : `${num} Star`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Reviews List */}
      {filteredReviews.length === 0 ? (
        <Text style={styles.noReviews}>No reviews for this rating</Text>
      ) : (
        <FlatList
          data={filteredReviews}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card>
              <ListView
                name={item.name}
                title={<Rating rating={4} totalStars={5} />}
                details={{ detail1: item.comment, detail2: item.date }}
              />
            </Card>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa", padding: 16 },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#111827",
  },

  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 2,
    borderRadius: 8,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
  },
  activeTab: { backgroundColor: "#3b82f6" },
  tabText: { fontSize: 14, color: "#374151" },
  activeTabText: { color: "#fff", fontWeight: "600" },

  reviewCard: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  name: { fontSize: 16, fontWeight: "600", color: "#1f2937" },
  comment: { marginTop: 6, fontSize: 14, color: "#374151" },
  date: { marginTop: 6, fontSize: 12, color: "#6b7280" },

  noReviews: {
    textAlign: "center",
    color: "#6b7280",
    marginTop: 30,
    fontSize: 14,
  },
});
