import React from "react"
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SplashScreen, LoginScreen, Home, Search, CategoryScreen, Profile, DetailBook} from '../screen'

import { Text } from "../components"
import { theme } from '../styles/theme'

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
          return <Text size={12} color="white">{label}</Text>
         
        },
        tabBarActiveTintColor: theme.colors.active,
        tabBarInactiveTintColor: theme.colors.white,
        tabBarStyle:{
          borderTopWidth: 0,
          backgroundColor: theme.colors.black,
        },
        
      })}
    >
      <Tab.Screen name="HomeTab" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="ProfileTab" component={Profile} options={{ headerShown: false }}/>
      <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
    </Tab.Navigator>
    )
  
  }

export const Routes = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={BottomRoute} options={{ headerShown: false }}/>
                <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Detail" component={DetailBook} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}