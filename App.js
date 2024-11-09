import {Text,View} from 'react-native';
import First1 from "./components/First1";
import Second1 from "./components/Second1";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from  "@react-navigation/native-stack";
import React from 'react';

const Stack=createNativeStackNavigator();

export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen name="FirstPage" component={First1}  
      options={{ headerShown: false }} />
      <Stack.Screen name="SecondPage" component={Second1}
       options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}