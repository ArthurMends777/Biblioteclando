import React from "react"
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen , HomeScreen, ProfileScreen, SearchScreen, Category, DetailBook, FavoriteBooks, LoanBook, RegisterScreen } from "../Screens/"
import { theme } from "../styles/theme"
import { Text } from "../Components"
import { useAuth } from "../Contexts/auth"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
    <Stack.Screen name="Details" component={DetailBook} options={{ headerShown: false }} />
    <Stack.Screen name="Favorite" component={FavoriteBooks} options={{ headerShown: false }} />
    <Stack.Screen name="Loan" component={LoanBook} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

const Routes = () => {
  const { infoUser } = useAuth();

  return (
    <NavigationContainer>
      {infoUser ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons name={getRouteIcon(route.name)} size={size} color={color} />
              )
            },
            tabBarLabel: ({ focused, color }) => {
              return <Text size={12} mb={10} color="white">{getRouteLabel(route.name)}</Text>
            },
            tabBarActiveTintColor: theme.colors.white,
            tabBarInactiveTintColor: theme.colors.active,
            tabBarStyle: {
              borderTopWidth: 0,
              backgroundColor: theme.colors.bottomBar,
              height: 60,
            },
          })}
        >
          <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false }}/>
          <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ headerShown: false }}/>
          <Tab.Screen name="SearchTab" component={SearchScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const getRouteIcon = (routeName) => {
  const routeIcons = {
    "HomeTab": "book-outline",
    "ProfileTab": "md-people",
    "SearchTab": "search-outline",
  };

  return routeIcons[routeName];
};

const getRouteLabel = (routeName) => {
  const routeLabels = {
    "HomeTab": "Início",
    "ProfileTab": "Meu Perfil",
    "SearchTab": "Buscar",
  };

  return routeLabels[routeName];
};

export default Routes;