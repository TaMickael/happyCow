import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

import { AntDesign } from "@expo/vector-icons";

const stars = (nbEtoile) => {
  const array = [];
  for (let i = 0; i < 5; i++) {
    if (i < nbEtoile) {
      array.push(<AntDesign name="star" size={15} color="#FFB100" key={i} />);
    } else {
      array.push(<AntDesign name="star" size={15} color="gray" key={i} />);
    }
  }
  return array;
};

const FavoritesScreen = ({ favoris, setFavoris }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState();
  useEffect(() => {
    // NE JAMAIS OUBLIER UN isLoading, setIsLoading lorsqu'il y a un useEffect
    const fetchFavoris = async () => {
      // console.log(await AsyncStorage.getItem("favoris"));

      // console.log(newFav);
      try {
        const newFav = await AsyncStorage.getItem("favoris"); // Récupéré l'Async
        const parseNewFav = JSON.parse(newFav); // Parser
        setFavoris(parseNewFav); // Appeler setFavoris avec la variable parser
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    };
    fetchFavoris();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Chargement...</Text>
      ) : favoris === null ? (
        <Text>Pas de favoris</Text>
      ) : (
        <View>
          {favoris.map((item, index) => {
            // console.log("Dites moi tout => ", Object.keys(item));
            return (
              <View style={styles.containerItem} key={index}>
                <View>
                  <Image
                    style={styles.images}
                    source={{ uri: item.restaurantSelected.pictures[0] }}
                  />
                </View>

                <View style={styles.rightBlock}>
                  <View style={styles.names}>
                    <Text style={{ fontWeight: "700" }}>
                      {item.restaurantSelected.name}
                    </Text>
                  </View>

                  <View style={styles.stars}>
                    {stars(item.restaurantSelected.rating)}

                    <View
                      style={{
                        borderColor: "green",
                        backgroundColor: "white",
                        borderWidth: 2,
                        borderRadius: 5,
                        marginLeft: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "700",
                          color: "green",
                        }}
                      >
                        {item.restaurantSelected.type}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setDescription(!description);
                    }}
                  >
                    <View style={styles.descriptions}>
                      <Text numberOfLines={description ? null : 2}>
                        {item.restaurantSelected.description}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },

  containerItem: {
    flexDirection: "row",
  },

  images: {
    width: 120,
    height: 120,
    margin: 10,
  },

  rightBlock: {
    margin: 10,

    width: "65%",
    marginLeft: 5,
  },
  stars: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  descriptions: {
    width: "100%",
  },
});

export default FavoritesScreen;
