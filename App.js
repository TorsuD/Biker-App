import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from "./screens/Login";
import Home from "./screens/Home";
import Cart from "./screens/Cart";

export default function App() {
      const MainNavigator = createStackNavigator();

  return (
    <View style= {{flex:1}} >
        <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName= "Login">
            <MainNavigator.Screen name="Login" component={Login} />
             <MainNavigator.Screen name="Home" component={Home} />
             <MainNavigator.Screen name="Cart" component={Cart} />
             </MainNavigator.Navigator> 
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
