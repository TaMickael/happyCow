import { Image, Text, View } from "react-native";

const Logo = () => {
  return (
    <View>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
};

export default Logo;
