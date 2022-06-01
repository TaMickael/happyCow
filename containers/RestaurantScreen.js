import { useRoute, useNavigation } from "@react-navigation/core";

import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";

import MapView from "react-native-maps";

import AsyncStorage from "@react-native-async-storage/async-storage";

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

const RestaurantScreen = ({ setFavoris, favoris }) => {
  // console.log(props);
  const { params } = useRoute();
  // console.log(params.restaurantSelected);

  const FavorisFunction = async () => {
    //await AsyncStorage.removeItem("favoris");

    const arrayFavoris = await AsyncStorage.getItem("favoris"); // Récup l'Async
    if (!arrayFavoris) {
      newArray = [params];
      const stringifiedArray = JSON.stringify(newArray); // Stringifié le nouveau Tableau
      await AsyncStorage.setItem("favoris", stringifiedArray); // Renvoyez dans l'Async qui est "favoris"
    } else {
      const parsedFav = JSON.parse(arrayFavoris); // Parser les données Récupérer dans l'Async
      parsedFav.push(params); // Push les données (params)
      const stringifiedArray = JSON.stringify(parsedFav); // Stringifié le parse
      await AsyncStorage.setItem("favoris", stringifiedArray); // Renvoyez les données parsé dans "favoris"
    }
    // console.log(await AsyncStorage.getItem("favoris"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <FlatList
              horizontal={true}
              data={params.restaurantSelected.pictures}
              renderItem={({ item }) => {
                return (
                  <SafeAreaView>
                    <View style={styles.blockHead}>
                      <ImageBackground
                        source={{ uri: item }}
                        style={{ width: 200, height: 200 }}
                      />
                    </View>
                  </SafeAreaView>
                );
              }}
            />
          </View>

          <View style={{ padding: 10, backgroundColor: "#8359c7" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30, color: "white" }}>
                {params.restaurantSelected.name}
              </Text>

              <Fontisto
                onPress={FavorisFunction}
                name="favorite"
                size={24}
                color="white"
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {stars(params.restaurantSelected.rating)}
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
                  {params.restaurantSelected.type}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="time-outline" size={24} color="white" />
              <Text style={{ color: "white" }}>DITES-NOUS</Text>
            </View>
          </View>
          <View style={styles.iconRestaurant}>
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <FontAwesome5 name="pen" size={24} color="black" />
                <Text style={{ marginTop: 5 }}>Ajouter un Avis</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <MaterialIcons name="add-a-photo" size={24} color="black" />
                <Text style={{ marginTop: 5 }}>Ajouter une photo</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Ionicons name="call" size={24} color="black" />
                <Text style={{ marginTop: 5 }}>Appeler</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 40 }}>
            <View style={{ marginBottom: 30 }}>
              <Text>
                Hosts vegan pop-up dinners at various venues - see Facebook for
                details
              </Text>
            </View>

            <View>
              <Text>
                Outdoor seating - Reservations required - Wheelchair accessible
                - Cash only - Free Wi-Fi
              </Text>
            </View>
          </View>

          <View>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 48.856614,
                longitude: 2.3522219,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
            >
              <MapView.Marker
                key={params.restaurantSelected}
                coordinate={{
                  latitude: params.restaurantSelected.location.lat,
                  longitude: params.restaurantSelected.location.lng,
                }}
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  blockHead: {
    backgroundColor: "#8359c7",
  },

  iconRestaurant: {
    margin: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  map: {
    width: Dimensions.get("screen").width,
    top: 40,
    height: 230,
  },
});

export default RestaurantScreen;
