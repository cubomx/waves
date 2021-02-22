import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import Loading from './Loading';

const Stack = createStackNavigator();

const Navigate = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen 
            name="Starting"
            component={Loading}
            />

            <Stack.Screen
            name="Login" 
            component={Login} />

            
            
            <Stack.Screen
            name="Home" 
            component={Home} />
        </Stack.Navigator>
    )
}

export default Navigate;