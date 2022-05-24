import {
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import DATA from "../restaurants.json";
import { FontAwesome } from "@expo/vector-icons";

const stars = (nbEtoile) => {
  const array = [];
  for (let i = 0; i < 5; i++) {
    if (i < nbEtoile) {
      array.push(<FontAwesome name="star" size={15} color="#FFB100" key={i} />);
    } else {
      array.push(<FontAwesome name="star" size={15} color="gray" key={i} />);
    }
  }
  return array;
};

const RestaurantsScreen = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => {
        return (
          <SafeAreaView style={styles.container}>
            <View>
              <Image style={styles.images} source={{ uri: item.thumbnail }} />
            </View>

            <View style={styles.containerRight}>
              <View>
                <Text style={styles.names}>{item.name}</Text>
              </View>

              <View style={styles.stars}>
                {stars(item.rating)}
                <Text>{item.reviews}</Text>
              </View>

              <View style={styles.descriptions}>
                <Text numberOfLines={2}>{item.description}</Text>
              </View>
            </View>
          </SafeAreaView>
        );
      }}
    />
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
  },
  images: {
    width: 120,
    height: 120,
    margin: 10,
  },
  containerRight: {
    margin: 10,
  },
  names: {
    fontWeight: "700",
    marginBottom: 10,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 10,
  },
  descriptions: {
    width: "80%",
  },
});
