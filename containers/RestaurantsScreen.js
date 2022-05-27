import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DATA from "../restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

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

const RestaurantsScreen = () => {
  const navigation = useNavigation();
  const [description, setDescription] = useState(false);
  const [location, setLocation] = useState();
  const [filteredData, setFilteredData] = useState(DATA);

  const filterByType = (diet) => {
    // FAIRE UNE BOUCLE POUR PASSER EN REVUE CHAQUE ELEMENT DE NOTRE JSON
    // (DANS LA BOUCLE -DONC A CHAQUE TOUR-) SI LE TYPE DE MON RESTAURANT CORRESPOND À MON FILTRE
    //  ALORS ON PUSH DANS LE TABLEAU INITIALEMENT VIDE
    // APRES LA BOUCLE, METTRE NOTRE TABLEAU DANS FILTEREDdATA (AVEC SETfILTEREDdATA)
    const arr = [];
    let finalTab = [];
    if (diet) {
      for (let i = 0; i < DATA.length; i++) {
        if (DATA[i].type === diet) {
          finalTab.push(DATA[i]);
        }
      }
      return finalTab;
    } else {
      return DATA;
    }
  };

  return (
    <View>
      <View style={styles.containerInput}>
        <View>
          <FontAwesome5
            style={styles.icon}
            name="search-location"
            size={24}
            color="black"
          />
        </View>

        <TextInput
          placeholder="Localisation"
          textContentType="location"
          style={styles.input}
          onChangeText={(text) => {
            setLocation(text);
          }}
          value={location}
        />
      </View>

      <View style={styles.platType}>
        <TouchableOpacity
          onPress={() => {
            setFilteredData(filterByType("vegan"));
          }}
        >
          <Text style={[styles.textWeight, styles.purple]}>VEGAN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setFilteredData(filterByType("vegetarian"));
          }}
        >
          <Text style={[styles.textWeight, styles.purple]}>VEGETARIAN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFilteredData(filterByType("Veg Store"));
          }}
        >
          <Text style={[styles.textWeight, styles.purple]}>VEG STORE</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.placeId}
        renderItem={({ item }) => {
          return (
            <SafeAreaView style={styles.container}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Restaurant", {
                    Restaurant: item,
                  });
                }}
              >
                <View>
                  <Image
                    style={styles.images}
                    source={{ uri: item.thumbnail }}
                  />
                </View>
              </TouchableOpacity>

              <View style={styles.containerRight}>
                <View>
                  <Text style={styles.names}>{item.name}</Text>
                </View>

                <View style={styles.stars}>
                  {stars(item.rating)}
                  <View>
                    <Text>{item.type}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setDescription(!description);
                  }}
                >
                  <View style={styles.descriptions}>
                    <Text numberOfLines={description ? null : 2}>
                      {item.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
        }}
      />
    </View>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  containerInput: {
    backgroundColor: "#8359c7",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    padding: 10,
  },

  input: {
    flex: 1,

    width: "97%",
    height: 40,
    borderColor: "#8359c7",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 8,
  },
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

    width: "65%",
    marginLeft: 5,
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
    width: "100%",
  },

  textWeight: {
    fontWeight: "bold",
  },
  menuDiet: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#6cc551",
    minHeight: 50,
  },
  purple: {
    color: "#6f35c0",
  },
});
