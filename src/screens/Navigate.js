import React from 'react';
import {Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './Home';
import Login from './Login';
import Loading from './Loading';
import SignUp from './SignUp';
import Menu from './Menu';

import {ButtonNavigate, SButton} from '../components/ButtonsNavigate';
import styles from '../styles/TextStyle';


const Stack = createStackNavigator();


const Navigate = () => {
    handlePress = () => {
        Alert.alert('Button Pressed!');
    }


    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>

        <Stack.Screen 
            name='signup'
            component={SignUp}
        />

        <Stack.Screen 
            name="Menu"
            options={{
                headerShown: true,
                headerLeftContainerStyle: styles.btnLeft,
                headerTitleStyle: styles.screenTxt,
                headerLeft: () => (<ButtonNavigate name='chevron-circle-left' size={30} place="waves"/>)
            }}
        
            component={Menu}
        />

        <Stack.Screen
            name="waves"
            options={{
            headerShown: true,
            headerTitleStyle: styles.waves,
            headerLeftContainerStyle: styles.btnLeft,
            headerRightContainerStyle: styles.btnRight,
            headerRight: () => (<SButton name='info' size={26} func={this.handlePress}/>),
            headerLeft: () => ( <ButtonNavigate name='bars' size={26} place="Menu"  />),
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