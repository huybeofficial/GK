import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import EmailValidateScreen from './screens/EmailValidateScreen';



const StackNavigator = createStackNavigator({
  StartScreen: {
    screen: StartScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  ForgotPasswordScreen: {
    screen: ForgotPasswordScreen
  },
  EmailValidateScreen: {
    screen: EmailValidateScreen
  },
}, {
  initialRouteName: "StartScreen"
})


export default createAppContainer(StackNavigator)