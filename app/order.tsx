import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Two For Tuesday");
  const [currentScreen, setCurrentScreen] = useState("Home"); // Track current screen

  const sliderImages = [
    require("../assets/slider.png"),
    require("../assets/s2.jpg"),
  ];

  const tabs = [
    "Two For Tuesday",
    "New Arrivals",
    "Crazy Value Deals",
    "Premium Deals",
    "Special Pizza",
    "Kids Meal",
    "Appetizer | Wings",
    "Pasta | Sandwich | Calzone",
    "Desserts",
    "Pizza Flavours",
    "Beverages and Extracts",
  ];

  const deals = [
    {
      title: "Promo Campaigns",
      items: [
        {
          image: require("../assets/2.jpg"),
          discount: "Save 50%",
          price: "Rs 1599",
          name: "TFT Medium",
        },
        {
          image: require("../assets/1.jpg"),
          discount: "Save 50%",
          price: "Rs 2199",
          name: "TFT Large",
        },
      ],
    },
    {
      title: "New Arrivals",
      items: [
        {
          image: require("../assets/shawarma.jpg"),
          discount: "Save 50%",
          price: "Rs 1599",
          name: "TFT Medium",
        },
        {
          image: require("../assets/3.jpeg"),
          discount: "Save 50%",
          price: "Rs 2199",
          name: "TFT Large",
        },
      ],
    },
    {
      title: "Crazy Value Deals",
      items: [
        {
          image: require("../assets/medium.jpg"),
          discount: "Save 50%",
          price: "Rs 1599",
          name: "TFT Medium",
        },
        {
          image: require("../assets/large.jpg"),
          discount: "Save 50%",
          price: "Rs 2199",
          name: "TFT Large",
        },
      ],
    },
    {
      title: "Kids Meal",
      items: [
        {
          image: require("../assets/kids.jpg"),
          discount: "Save 50%",
          price: "Rs 1599",
          name: "TFT Medium",
        },
        {
          image: require("../assets/kids2.jpg"),
          discount: "Save 50%",
          price: "Rs 2199",
          name: "TFT Large",
        },
      ],
    },
    {
      title: "Special Offers",
      items: [
        {
          image: require("../assets/special.jpg"),
          discount: "Save 50%",
          price: "Rs 1599",
          name: "TFT Medium",
        },
        {
          image: require("../assets/special1.jpg"),
          discount: "Save 50%",
          price: "Rs 2199",
          name: "TFT Large",
        },
      ],
    },

    {
      title: "Desserts",
      items: [
        {
          image: require("../assets/dess.jpg"),
          discount: "Save 50%",
          price: "Rs 1599",
          name: "TFT Medium",
        },
        {
          image: require("../assets/brownie.jpg"),
          discount: "Save 50%",
          price: "Rs 2199",
          name: "TFT Large",
        },
      ],
    },
    {
      title: "Beverages & Extras",
      items: [
        {
          image: require("../assets/bev.jpg"),
          discount: "Save 50%",
          price: "Rs 1599",
          name: "TFT Medium",
        },
        {
          image: require("../assets/extra.jpg"),
          discount: "Save 50%",
          price: "Rs 2199",
          name: "TFT Large",
        },
      ],
    },
  ];

  const renderHomeScreen = () => (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>BROADWAY PIZZA</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={styles.slider}
      >
        {sliderImages.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedTab(tab)}
            style={[
              styles.tab,
              selectedTab === tab && { backgroundColor: "#FFC107" },
            ]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && { color: "#fff" },
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {deals.map((deal, index) => (
        <View key={index} style={styles.dealSection}>
          <Text style={styles.dealTitle}>{deal.title}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {deal.items.map((item, idx) => (
              <View style={styles.card} key={idx}>
                <Image
                  source={item.image}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.cardDetails}>
                  <Text style={styles.cardDiscount}>{item.discount}</Text>
                  <Text style={styles.cardPrice}>{item.price}</Text>
                  <Text style={styles.cardName}>{item.name}</Text>
                </View>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => setCurrentScreen("Order")} // Navigate to Order Screen
                >
                  <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );

  const renderOrderScreen = () => (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>BROADWAY PIZZA</Text>
        <TouchableOpacity
          onPress={() => setCurrentScreen("Home")} // Navigate back to Home Screen
          style={styles.cartButton}
        >
          <Text style={styles.cartButtonText}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orderContent}>
        <Text style={styles.contentText}>
          This is the Order Screen content for tab: {selectedTab}.
        </Text>
        <Text style={styles.contentText}>
          You can explore deals and customize your order here!
        </Text>
      </View>
    </ScrollView>
  );

  return currentScreen === "Home" ? renderHomeScreen() : renderOrderScreen();
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 4,
  },
  
  logo: { 
    fontSize: 30, 
    fontWeight: "bold", 
    color: "#333",
    marginTop: 20, // Fine-tune this value
  },
  
  slider: { marginVertical: 10 },
  sliderImage: {
    width: width - 20,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  
  tab: { padding: 10, backgroundColor: "#eee", marginHorizontal: 5, borderRadius: 20 },
  tabText: { fontSize: 14, color: "#333" },
  dealSection: { margin: 16 },
  dealTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  card: { width: 150, backgroundColor: "#fff", borderRadius: 10, padding: 10, marginRight: 10 },
  cardImage: { width: "100%", height: 100, borderRadius: 10 },
  cardDetails: { marginTop: 10 },
  cardDiscount: { fontSize: 12, color: "#FF5722" },
  cardPrice: { fontSize: 14, fontWeight: "bold" },
  cardName: { fontSize: 12, color: "#333" },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#FFC107",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: { color: "#fff", fontSize: 20 },
  cartButton: { backgroundColor: "#FFC107", padding: 10, borderRadius: 5 },
  cartButtonText: { color: "#fff", fontWeight: "bold" },
  orderContent: { padding: 20, alignItems: "center" },
  contentText: { marginTop: 20, fontSize: 16, textAlign: "center" },
});