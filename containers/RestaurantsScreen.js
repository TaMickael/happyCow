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
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
    // console.log(diet);
    // FAIRE UNE BOUCLE POUR PASSER EN REVUE CHAQUE ELEMENT DE NOTRE JSON
    // (DANS LA BOUCLE -DONC A CHAQUE TOUR-) SI LE TYPE DE MON RESTAURANT CORRESPOND À MON FILTRE
    //  ALORS ON PUSH DANS LE TABLEAU INITIALEMENT VIDE
    // APRES LA BOUCLE, METTRE NOTRE TABLEAU DANS FILTEREDdATA (AVEC SETfILTEREDdATA)

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
        <View style={styles.iconInput}>
          <FontAwesome5
            style={styles.icon}
            name="search-location"
            size={24}
            color="black"
          />

          <TextInput
            style={styles.textInput}
            placeholder="A proximité"
            textContentType="location"
            onChangeText={(text) => {
              setLocation(text);
            }}
            value={location}
          />
        </View>
      </View>

      <View style={styles.platType}>
        <TouchableOpacity
          style={styles.purple}
          onPress={() => {
            setFilteredData(filterByType("vegan"));
          }}
        >
          <Ionicons name="leaf" size={24} color="green" />
          <Text style={styles.textWeight}>VEGAN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.purple}
          onPress={() => {
            setFilteredData(filterByType("vegetarian"));
          }}
        >
          <Entypo name="leaf" size={24} color="purple" />
          <Text style={styles.textWeight}>VEGETARIAN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.purple}
          onPress={() => {
            setFilteredData(filterByType("Veg Store"));
          }}
        >
          <MaterialCommunityIcons name="leaf-maple" size={24} color="red" />
          <Text style={[styles.textWeight]}>VEG STORE</Text>
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
                    restaurantSelected: item,
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
                      {item.type}
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
    width: "100%",
    backgroundColor: "#8359c7",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  iconInput: {
    marginTop: 10,
    marginBottom: 10,
    width: "95%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
  },
  icon: {
    padding: 10,
  },

  textInput: {},

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
    alignItems: "center",
  },
  descriptions: {
    width: "100%",
  },

  platType: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
  },

  menuDiet: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#6cc551",
    minHeight: 50,
  },
  textWeight: {
    fontWeight: "bold",
    color: "#6f35c0",
  },
  purple: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",

    alignItems: "center",
    // justifyContent: "space-between",
  },
});
