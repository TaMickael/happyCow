import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign, Octicons } from "@expo/vector-icons";

// Import Components
import RestaurantsScreen from "./containers/RestaurantsScreen";
import RestaurantScreen from "./containers/RestaurantScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import MapScreen from "./containers/MapScreen";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";

import Headers from "./containers/Headers";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [restaurants, setRestaurants] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [favoris, setFavoris] = useState([]);
  const [headers, setHeaders] = useState("");
  const [signin, setSignin] = useState("");
  const [signup, setSignup] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator
        name="HappyCow"
        screenOptions={() => ({
          headerTitle: () => (
            <Headers headers={headers} setHeaders={setHeaders} />
          ),

          headerStyle: { backgroundColor: "#8359c7" },
        })}
      >
        <Stack.Screen
          name="tab"
          // options={{
          //   headerShown: false,
          // }}
        >
          {() => (
            <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: "purple",
                tabBarInactiveTintColor: "gray",
              }}
            >
              <Tab.Screen
                name="Explorer"
                options={{
                  headerShown: false,
                  tabBarLabel: "Explorer",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="search" size={size} color={color} />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                    screenOptions={{
                      headerShown: false,
                    }}
                  >
                    <Stack.Screen name="explorer" title="My explorer">
                      {() => (
                        <RestaurantsScreen
                          restaurants={restaurants}
                          setRestaurants={setRestaurants}
                        />
                      )}
                    </Stack.Screen>

                    <Stack.Screen name="Restaurant">
                      {() => (
                        <RestaurantScreen
                          setRestaurant={setRestaurant}
                          restaurant={restaurant}
                        />
                      )}
                    </Stack.Screen>
                    <Stack.Screen name="Signin" title="My SiginScreen">
                      {() => <Signin signin={signin} setSignin={setSignin} />}
                    </Stack.Screen>

                    <Stack.Screen option name="Signup" title="My SignupScreen">
                      {() => <Signup signup={signup} setSignup={setSignup} />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>

              <Tab.Screen
                name="Favorites"
                options={{
                  tabBarLabel: "Favorites",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons
                      name="favorite-border"
                      size={size}
                      color={color}
                    />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="favorites" title="My Favorites">
                      {() => (
                        <FavoritesScreen
                          setFavoris={setFavoris}
                          favoris={favoris}
                        />
                      )}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>

              <Tab.Screen
                name="Map"
                options={{
                  headerShown: false,
                  tabBarLabel: "Map",
                  tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="map-marker" size={24} color="black" />
                  ),
                }}
              >
                {() => (
                  <Stack.Navigator
                    screenOptions={{
                      headerShown: false,
                    }}
                  >
                    <Stack.Screen name="map" title="My Map">
                      {() => <MapScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
