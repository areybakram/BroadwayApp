import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

// Replace image URLs with local paths
const cartData = [
  {
    id: "1",
    name: "King Crust Large",
    flavors: "King Crust Beef",
    extraDip: "Garlic Ranch x 1",
    price: 2540,
    quantity: 1,
    image: require("../assets/medium.jpg"), // Local image
  },
  {
    id: "2",
    name: "Chocolate Brownie",
    price: 349,
    discountedPrice: 499,
    suggested: true,
    image: require("../assets/brownie.jpg"), // Local image
  },
  {
    id: "3",
    name: "Beverages",
    price: 265,
    discountedPrice: 379,
    suggested: true,
    image: require("../assets/bev.jpg"), // Local image
  },
];

export default function CartScreen() {
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      {/* Left: Product Image */}
      <Image source={item.image} style={styles.productImage} />

      {/* Center: Product Details */}
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        {item.flavors && <Text style={styles.extraText}>King Flavors: {item.flavors}</Text>}
        {item.extraDip && <Text style={styles.extraText}>Extra Dips: {item.extraDip}</Text>}
        {item.suggested ? (
          <View style={styles.suggestedContainer}>
            <Text style={styles.suggestedTag}>Suggested</Text>
          </View>
        ) : null}
      </View>

      {/* Right: Price and Quantity */}
      <View style={styles.priceAndControls}>
        <Text style={styles.productPrice}>Rs {item.price}</Text>
        {item.quantity && (
          <View style={styles.quantityControls}>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <Text style={styles.deliveryAddress}>Selected Delivery: 3 No Stop Moon Market, Lahore</Text>
      </View>

      {/* Cart Items */}
      <FlatList
        data={cartData}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
      />

      {/* Voucher Input */}
      <View style={styles.voucherContainer}>
        <Text style={styles.voucherTitle}>Have a voucher?</Text>
        <TextInput
          style={styles.voucherInput}
          placeholder="Add your voucher to apply discount"
        />
      </View>

      {/* Order Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Subtotal: Rs 2133</Text>
        <Text style={styles.summaryText}>GST (16%): Rs 406</Text>
        <Text style={styles.summaryText}>Delivery: Rs 79</Text>
        <Text style={styles.totalText}>Total: Rs 2618</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eaeaea",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  deliveryAddress: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  cartItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
    alignItems: "center",
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  extraText: {
    fontSize: 12,
    color: "#666",
  },
  suggestedContainer: {
    marginTop: 5,
    backgroundColor: "#28a745",
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  suggestedTag: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  priceAndControls: {
    justifyContent: "center",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  voucherContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },
  voucherTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  voucherInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
  },
  summaryContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  summaryText: {
    fontSize: 16,
    marginVertical: 2,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});
