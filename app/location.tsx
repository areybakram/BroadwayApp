


import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function LocationScreen() {
  const router = useRouter(); 
  const cities = [
    {
      name: "Sukkur",
      address: "100 Feet Road, Sukkur Cooperative Housing Society, Sukkur, Sindh",
      image: "https://services.broadwaypizza.com.pk/img/locations/Sukkur.jpg",
    },
    {
      name: "Sialkot",
      address: "Broadway Pizza Outlet, Sialkot Center, Punjab, Pakistan",
      image: "https://services.broadwaypizza.com.pk/img/locations/Sialkot.jpg",
    },
    {
      name: "Rawalpindi",
      address: "Broadway Pizza Outlet, Saddar Rawalpindi, Punjab, Pakistan",
      image: "https://services.broadwaypizza.com.pk/img/locations/Rawalpindi.jpg",
    },
    {
      name: "Multan",
      address: "Broadway Pizza Outlet, Bosan Road, Multan, Punjab, Pakistan",
      image: "https://services.broadwaypizza.com.pk/img/locations/Multan.jpg",
    },
    {
      name: "Lahore",
      address: "Broadway Pizza Outlet, Gulberg, Lahore, Punjab, Pakistan",
      image: "https://services.broadwaypizza.com.pk/img/locations/Lahore.jpg",
    },
    {
      name: "Karachi",
      address: "Broadway Pizza Outlet, Clifton, Karachi, Sindh, Pakistan",
      image: "https://services.broadwaypizza.com.pk/img/locations/Karachi.jpg",
    },
    {
      name: "Jhelum",
      address: "Broadway Pizza Outlet, Civil Lines, Jhelum, Punjab, Pakistan",
      image: "https://services.broadwaypizza.com.pk/img/locations/Jhelum.jpg",
    },
    {
      name: "Islamabad",
      address: "Broadway Pizza Outlet, Blue Area, Islamabad, Pakistan",
      image: "https://services.broadwaypizza.com.pk/img/locations/Islamabad.jpg",
    },
    {
      name: "Hyderabad",
      address: "Broadway Pizza Outlet, Autobahn Road, Hyderabad, Sindh, Pakistan",
      image: "https://services.broadwaypizza.com.pk/img/locations/Hyderabad.jpg",
    },
    {
      name: "Faisalabad",
      address: "Broadway Pizza Outlet, D-Ground, Faisalabad, Punjab, Pakistan",
      image: "https://services.broadwaypizza.com.pk/img/locations/Faisalabad.jpg",
    },
  ];

  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/menu")} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Go to Menu</Text>
        </TouchableOpacity>
      </View>

      
      <Text style={styles.subHeader}>Locations</Text>

    
      <FlatList
        data={cities}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.cityButton,
              selectedCity === item.name ? styles.selectedButton : null,
            ]}
            onPress={() => setSelectedCity(item.name)}
          >
            <Image source={{ uri: item.image }} style={styles.cityImage} />
            <View style={styles.overlay}>
              <Text style={styles.cityName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      
      {selectedCity && (
        <View style={styles.addressContainer}>
          <Text style={styles.addressHeading}>Broadway Pizza {selectedCity}</Text>
          <Text style={styles.addressDetails}>
            {cities.find((city) => city.name === selectedCity)?.address}
          </Text>
          <TouchableOpacity style={styles.directionButton}>
            <Text style={styles.directionButtonText}>Get Directions</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 16 },
  header: { flexDirection: "row", justifyContent: "flex-end", padding: 16 },
  menuButton: { backgroundColor: "#FFC107", padding: 10, borderRadius: 5 },
  menuButtonText: { color: "#fff", fontWeight: "bold" },
  subHeader: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  cityButton: {
    width: 120,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 8,
    backgroundColor: "#ddd",
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: "#00A300",
  },
  cityImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    alignItems: "center",
  },
  cityName: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  addressContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addressHeading: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  addressDetails: { fontSize: 14, color: "#555", marginBottom: 15 },
  directionButton: {
    backgroundColor: "#ffb700",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  directionButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
