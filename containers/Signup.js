import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import axios from "axios";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Signup = () => {
  // Import des states
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [statut, setStatut] = useState("");
  const [location, setLocation] = useState("");
  const [birth, setBirth] = useState("");

  // State Pour gérer mes erreurs
  const [error, setError] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.block1}>
        <MaterialIcons
          style={{ fontSize: 40, marginRight: 10 }}
          name="email"
          size={24}
          color="#8359c7"
        />
        <TextInput style={styles.mail} placeholder="Email" type="email" />
      </View>
      <View style={styles.block1}>
        <FontAwesome
          style={{ fontSize: 40, marginRight: 10 }}
          name="user"
          size={24}
          color="#8359c7"
        />
        <TextInput style={styles.user} placeholder="Username" type="username" />
      </View>
      <View style={styles.block1}>
        <FontAwesome
          style={{ fontSize: 40, marginRight: 10 }}
          name="lock"
          size={24}
          color="#8359c7"
        />
        <TextInput style={styles.pass} placeholder="Password" type="password" />
      </View>
      <View style={styles.block1}>
        <MaterialCommunityIcons
          style={{ fontSize: 40, marginRight: 10 }}
          name="leaf"
          size={24}
          color="#8359c7"
        />
        <TextInput style={styles.stat} placeholder="Statut" type="statut" />
      </View>

      <View style={styles.block1}>
        <Ionicons
          style={{ fontSize: 40, marginRight: 10 }}
          name="location"
          size={24}
          color="#8359c7"
        />
        <TextInput style={styles.loc} placeholder="Location" type="location" />
      </View>

      <View style={styles.block1}>
        <FontAwesome5
          style={{ fontSize: 40, marginRight: 10 }}
          name="birthday-cake"
          size={24}
          color="#8359c7"
        />
        <TextInput style={styles.bir} placeholder="Birth" type="birth" />
      </View>

      <TouchableOpacity style={styles.touch} onPress={() => {}}>
        <Text style={{ fontSize: 20, color: "white" }}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  block1: {
    flexDirection: "row",
  },
  mail: {
    fontSize: 20,
    width: "80%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    marginBottom: 20,
  },

  user: {
    fontSize: 20,
    width: "80%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    marginBottom: 20,
  },
  pass: {
    fontSize: 20,
    width: "80%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    marginBottom: 20,
  },
  stat: {
    fontSize: 20,
    width: "80%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    marginBottom: 20,
  },
  loc: {
    fontSize: 20,
    width: "80%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    marginBottom: 20,
  },
  bir: {
    fontSize: 20,
    width: "80%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
    marginBottom: 20,
  },

  touch: {
    width: "70%",
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#8359c7",
  },
});
export default Signup;
