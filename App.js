
import React,{useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import HomeScreen from './components/HomeScreen';
import EyesCheckScreen from './components/EyesCheckScreen';
import * as Speech from 'expo-speech';
import ColorBlindnessCheck from './components/ColorBlindnessCheck';

const Stack = createStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const speak = (text) => {
    Speech.speak(text); 
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true); 
    setUserData(userData); 
   
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
    setUserData(null);
    speak("Logout successfuly"); 
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} initialParams={{ isLoggedIn, handleLogin }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ isLoggedIn, userData, handleLogout }}/>
        <Stack.Screen name="Eyes Number Check" component={EyesCheckScreen} initialParams={{ isLoggedIn, userData, handleLogout }}/>
        <Stack.Screen name="Eyes Colour Check" component={ColorBlindnessCheck} initialParams={{ isLoggedIn, userData, handleLogout }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
