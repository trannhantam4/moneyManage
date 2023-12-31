import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../constant/styles";

export default function LogIn({ children }) {
  return (
    <View style={styles.screen}>
      <Image
        source={require("../assets/splash.png")}
        resizeMode="contain"
        style={{ width: "50%", height: "30%" }}
      />
      <Text style={styles.text}>Log in with</Text>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 16,
    color: GlobalStyles.colors.primary500,
  },
});
