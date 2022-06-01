import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// Import Components
import RestaurantsScreen from "./containers/RestaurantsScreen";
import RestaurantScreen from "./containers/RestaurantScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import MapScreen from "./containers/MapScreen";
import Signup from "./containers/Signup";
import { Octicons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const navigation = useNavigation();
  const [favoris, setFavoris] = useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => (
            <AntDesign
              onPress={() => {
                navigation.navigate("Signup");
              }}
              name="adduser"
              size={24}
              color="black"
            />
          ),
          headerLeft: () => <Octicons name="sign-in" size={24} color="black" />,
        }}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "#8359c7" },
          }}
          name="HappyCow"
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
                          favoris={favoris}
                          setFavoris={setFavoris}
                        />
                      )}
                    </Stack.Screen>

                    <Stack.Screen name="Restaurant">
                      {() => (
                        <RestaurantScreen
                          setFavoris={setFavoris}
                          favoris={favoris}
                        />
                      )}
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
