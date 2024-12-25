
import React from "react";
import { Stack } from "expo-router";
import BottomNavigationBar from "../components/BottomNavigationBar"; 
import { CartProvider } from "../context/cartcontext"; 
import { View, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <CartProvider>
      <View style={styles.container}>
        <Stack
          initialRouteName="order" 
          screenOptions={{
            headerShown: false, 
          }}
        >
          <Stack.Screen name="profile" />
          <Stack.Screen name="order" />
          <Stack.Screen name="menu" />
          <Stack.Screen name="cart" />
          <Stack.Screen name="location" />
        </Stack>
        <BottomNavigationBar />
      </View>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
