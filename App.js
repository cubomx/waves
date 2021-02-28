/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigate from './src/screens/Navigate';
import {useFonts} from 'expo-font';
import {AppLoading} from 'expo';




const App = () => {
  
  const [loaded] = useFonts({
    'MavenPro-Back': require('./assets/fonts/MavenPro-Black.ttf'),
    'MavenPro-Bold': require('./assets/fonts/MavenPro-Bold.ttf'), 
    'MavenPro-ExtraBold': require('./assets/fonts/MavenPro-ExtraBold.ttf'),
    'MavenPro-Medium': require('./assets/fonts/MavenPro-Medium.ttf'),
    'MavenPro-Regular': require('./assets/fonts/MavenPro-Regular.ttf'),
    'MavenPro-SemiBold': require('./assets/fonts/MavenPro-SemiBold.ttf'),
    'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }
  
  return (
    <NavigationContainer> 
      <Navigate />
    </NavigationContainer>
  );
};


export default App;