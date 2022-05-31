import { View, Text, Image } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View>
      <Image source={require("../assets/logo.png")} />
    </View>
  );
};

export default SplashScreen;
