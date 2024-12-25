

import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const MenuScreen: React.FC = () => {
  const router = useRouter(); 

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.header}>
        <Text style={styles.heading}>Menu</Text>
      </View>

      <View style={styles.downloadContainer}>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Menu</Text>
        </TouchableOpacity>
      </View>

    
      <View style={styles.imageContainer}>
      <Image
  source={require("../assets/menuimage.jpg")} // Local path to your image
  style={styles.menuImage}
  resizeMode="contain"
/>

      </View>

      
      <View style={styles.orderContainer}>
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => router.push("/order")} 
        >
          <Text style={styles.orderButtonText}>Go to Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  heading: {
    fontSize: 40,
    color: "#000",
    textAlign: "justify",
  },
  downloadContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  downloadButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#28A745", 
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  downloadButtonText: {
    color: "#28A745", 
    fontSize: 14,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
  },
  menuImage: {
    width: "300%",
    height: 600,
    borderRadius: 8,
  },
  orderContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  orderButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  orderButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MenuScreen;
