import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// Import Components
import RestaurantsScreen from "./containers/RestaurantsScreen";
import FavoritesScreen from "./containers/FavoritesScreen";
import MapScreen from "./containers/MapScreen";
import Logo from "./containers/Logo";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="restaurants">
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
                      headerTitle: () => <Logo />,
                    }}
                  >
                    <Stack.Screen name="Explorer" title="My App">
                      {() => <RestaurantsScreen />}
                    </Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>

              <Tab.Screen
                name="Favorites"
                options={{
                  headerShown: false,
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
                  <Stack.Navigator
                    screenOptions={{ headerTitle: () => <Logo /> }}
                  >
                    <Stack.Screen name="Favorites" title="My Favorites">
                      {() => <FavoritesScreen />}
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
                    screenOptions={{ headerTitle: () => <Logo /> }}
                  >
                    <Stack.Screen name="Map" title="My Map">
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
