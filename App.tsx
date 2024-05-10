import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/Login'
import RegistrationScreen from './src/Register'
import HomeScreen from './src/Home'
import MyStack from './src/router'

const App = () => {
  return (
    <View style={{flex:1}}>
        <MyStack />
    </View>
  )
}

export default App