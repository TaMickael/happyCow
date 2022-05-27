import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import mydata from "../restaurants.json";

const MapScreen = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPermissionAndLocationAndFetchData = async () => {
      try {
        // Demandé la permission :
        const { status } = await Location.requestForegroundPermissionsAsync();
        console.log("status:", status);
        let response = mydata;
        if (status === "granted") {
          const location = await Location.getCurrentPositionAsync();
          // console.log(location);
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
        } else {
          setError(true);
        }
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPermissionAndLocationAndFetchData();
  }, []);

  const checkColor = () => {
    if (mydata.type === "vegetarian") {
      checkColor === "green";
    } else {
      checkColor === "red";
    }
  };

  return isLoading ? (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="green" />
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.856614,
          longitude: 2.3522219,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        showsUserLocation={true}
      >
        {mydata.map((store, index) => {
          return (
            <MapView.Marker
              onPress={() => {
                navigation.navigate("Restaurant", {
                  id: store.placeId,
                });
              }}
              pinColor={checkColor(store.type)}
              key={index}
              coordinate={{
                latitude: store.location.lat,
                longitude: store.location.lng,
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});

export default MapScreen;
