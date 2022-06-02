import { View, Text, TouchableOpacity } from "react-native";
import { Octicons, AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Headers = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        // width: "100%",
        flex: 1,
        alignItems: "center",
        marginRight: 20,
        justifyContent: "space-between",
        // borderColor: "green",
        // borderWidth: 1,
      }}
    >
      <View>
        <TouchableOpacity
          name="Signin"
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Octicons name="sign-in" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("explorer");
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
            HappyCow
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          name="Signup"
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <AntDesign name="adduser" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headers;
