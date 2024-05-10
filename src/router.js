import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './Home';
import LoginScreen from './Login';
import RegistrationScreen from './Register';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegistrationScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack