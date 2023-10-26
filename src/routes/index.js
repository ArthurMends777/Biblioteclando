import React from "react"
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen , HomeScreen, ProfileScreen, SearchScreen, Category, DetailBook, FavoriteBooks } from "../Screens/"
import { theme } from "../styles/theme"
import { Text } from "../Components"

const routeIcons = {
    "HomeTab": "home-outline",
    "Search": "search-outline",
    "ProfileTab" : "md-people",
  }
  
const BottomRoute = () => {
const Tab = createBottomTabNavigator()

return(
        <Tab.Navigator 
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                return (
                <Ionicons name={routeIcons[route.name]} size={size} color={color} />
                )
            },
            tabBarLabel: ({ focused, color }) => {
                let label = '';
                switch (route.name) {
                case 'HomeTab':
                    label = 'Início'; 
                    break;
                case 'Search':
                    label = 'Buscar'; 
                    break;
                case 'ProfileTab':
                    label = "Meu Perfil";
                    break;
                }
                return <Text size={12} mb={10} color="white">{label}</Text>
                
            },
            tabBarActiveTintColor: theme.colors.white,
            tabBarInactiveTintColor: theme.colors.active,
            tabBarStyle:{
                borderTopWidth: 0,
                backgroundColor: theme.colors.bottomBar,
                height: 60,
            },
            
            })}
        >
            <Tab.Screen name="HomeTab" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="SearchTab" component={SearchScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

export const Routes = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={BottomRoute} options={{ headerShown: false }}/>
                <Stack.Screen name="Category" component={Category} options={{ headerShown: false }}/>
                <Stack.Screen name="Details" component={DetailBook} options={{ headerShown: false }}/>
                <Stack.Screen name="Favorite" component={FavoriteBooks} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}