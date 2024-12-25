import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

const ProfileScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const router = useRouter(); // Navigation hook for Expo Router

  // Allowed values
  const validNames = ["maryam", "mahnoor", "minal"];
  const validPhones = ["1234", "2345", "3456"];
  const validEmails = ["maryam@gmail.com", "mahnoor@gmail.com", "minal@gmail.com"];
  const validIds = ["153", "021", "037"];

  const handleContinue = () => {
    const isNameValid = validNames.includes(name.toLowerCase());
    const isPhoneValid = validPhones.includes(phone);
    const isEmailValid = validEmails.includes(email.toLowerCase());
    const isIdValid = validIds.includes(id);

    if (isNameValid && isPhoneValid && isEmailValid && isIdValid) {
      Alert.alert("Success", "You are authenticated!", [
        { text: "OK", onPress: () => router.push("/order") }, // Navigate to Orders page
      ]);
    } else {
      Alert.alert("Error", "Invalid details. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Account</Text>
      <Text style={styles.subtitle}>
        Please provide us with your contact details for updates, exclusive
        offers, and an easy ordering experience right at your fingertips.
      </Text>

      <Text style={styles.inputLabel}>Your Name (*)</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your full name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.inputLabel}>Your Phone (*)</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.inputLabel}>Your Email (*)</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your email address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.inputLabel}>Student/Employee ID (*)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ID here"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f7ff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 38,
    color: "#000",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "left",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ffc107",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ProfileScreen;