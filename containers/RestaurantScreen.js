import { useRoute } from "@react-navigation/core";
import { Text, View, Image, FlatList, SafeAreaView } from "react-native";

import data from "../restaurants.json";
// console.log(data[0].pictures);

const RestaurantScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={data[0].pictures} style={{ width: 200, height: 200 }} />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;
