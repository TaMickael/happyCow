import { useRoute } from "@react-navigation/core";
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
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import MapView from "react-native-maps";

// import data from "../restaurants.json";
// console.log(data[0].pictures);

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

const RestaurantScreen = (props) => {
  // console.log(props);
  const { params } = useRoute();
  // console.log(params.restaurantSelected);

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
            <View>
              <Text style={{ fontSize: 30, color: "white" }}>
                {params.restaurantSelected.name}
              </Text>
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
                coordinate={{
                  latitude: params.restaurantSelected.location[1],
                  longitude: params.restaurantSelected.location[0],
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
