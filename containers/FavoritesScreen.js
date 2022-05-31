import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";

const FavoritesScreen = ({ favoris, setFavoris }) => {
  useEffect(() => {
    const fetchFavoris = async () => {
      // // console.log(await AsyncStorage.getItem("favoris"));
      const newFav = await AsyncStorage.getItem("favoris");

      // console.log(newFav);

      const parseNewFav = JSON.parse(newFav);

      setFavoris(parseNewFav);
    };
    fetchFavoris();
  }, []);
  return (
    <View>
      {favoris &&
        favoris.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item.restaurantSelected.name}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default FavoritesScreen;
