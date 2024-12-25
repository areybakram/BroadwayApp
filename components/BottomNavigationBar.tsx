import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter, useSegments } from "expo-router";

const BottomNavigationBar: React.FC = () => {
  const router = useRouter();
  const segments = useSegments();

  
  const activeScreen = segments[segments.length - 1];

  return (
    <View style={styles.navBar}>
      {["menu", "order", "cart", "profile", "location"].map((screen) => (
        <TouchableOpacity
          key={screen}
          style={[
            styles.navButton,
            activeScreen === screen && styles.activeButton,
          ]}
          onPress={() => router.push(`/${screen}`)} 
        >
          <Text
            style={[
              styles.navButtonText,
              activeScreen === screen && styles.activeText,
            ]}
          >
            {screen.charAt(0).toUpperCase() + screen.slice(1)} 
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navButton: {
    padding: 10,
  },
  activeButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#FFC107", 
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  activeText: {
    color: "#FFC107", 
  },
});

export default BottomNavigationBar;
