import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import {ButtonNavigate} from '../components/ButtonNavigate';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Login from './Login';
import Loading from './Loading';
import styles from '../styles/TextStyle';

const Stack = createStackNavigator();


const Navigate = () => {
    

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>

        <Stack.Screen
            name="waves"
            options={{
            headerShown: true,
            headerTitleStyle: styles.waves,
            headerLeftContainerStyle: styles.btnLeft,
            headerRightContainerStyle: styles.btnRight,
            headerRight: () => (<ButtonNavigate name='info'/>),
            headerLeft: () => ( <ButtonNavigate name='bars' />),
            }}
            component={Home} 
        />

        <Stack.Screen
             name="Starting"
             component={Loading}
        />
        <Stack.Screen
            name="Login" 
            component={Login} 
        />

        </Stack.Navigator>
    )
}

export default Navigate;