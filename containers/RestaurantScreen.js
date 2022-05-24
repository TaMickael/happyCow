import { useRoute } from "@react-navigation/core";
import { Text, View } from "react-native";

const RestaurantScreen = () => {
  const { params } = useRoute();
  console.log(item);
  return <Text>Allo</Text>;
};

export default RestaurantScreen;
