import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { useState } from "react";
import Restaurants from "./RestaurantsScreen";

import { FontAwesome } from "@expo/vector-icons";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleTextInputChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.username}>
        <FontAwesome
          style={{ fontSize: 40, marginRight: 10 }}
          name="user"
          size={24}
          color="#8359c7"
        />
        <TextInput
          style={{ fontSize: 20 }}
          placeholder="Username"
          type="username"
          onChange={handleUsernameChange}
        />
      </View>

      <View style={styles.password}>
        <FontAwesome
          style={{ fontSize: 40, marginRight: 10 }}
          name="lock"
          size={24}
          color="#8359c7"
        />
        <TextInput
          style={{ fontSize: 20 }}
          placeholder="Password"
          type="password"
          onChange={handleTextInputChange}
        />
      </View>
      <TouchableOpacity
        style={{
          width: "70%",
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          padding: 10,
          backgroundColor: "#8359c7",
        }}
        onPress={() => {
          <Restaurants />;
        }}
      >
        <Text style={styles.button}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 30 }} onPress={() => {}}>
        <Text style={{ color: "#8359c7" }}>Forgot your password ?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    width: "80%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    marginBottom: 20,
  },
  password: {
    flexDirection: "row",
    width: "80%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  button: {
    fontSize: 20,
    color: "white",
  },
});
export default Signin;
