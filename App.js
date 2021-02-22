/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from 'waves/src/screens/Login';

const App = () => {
  return (
    <NavigationContainer> 
      <Login />
    </NavigationContainer>
  );
};


export default App;
