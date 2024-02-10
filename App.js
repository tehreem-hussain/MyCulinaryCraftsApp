import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import RestaurantScreen from './src/screens/RestaurantScreen';
import CartScreen from './src/screens/CartScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Restaurants' }} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Your Cart' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

