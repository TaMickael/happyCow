import { View, Text } from "react-native";
import { useState } from "react";
import axios from "axios";

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
    <View>
      <Text>Signup</Text>
    </View>
  );
};
export default Signup;
