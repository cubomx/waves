import React from 'react';
import {View, StyleSheet, Text, Image, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {ButtonGen} from '../components/Buttons';
import Logo from '../images/logo.png';

export default SignUp = () => {
    alert_ =  () => Alert.alert('Button Pressed!');
    const navigation = useNavigation();
    const goToLogin = () => navigation.navigate('Login');
    return (
        <View style={styles.container}>
            <Image source={Logo} style={{width: 300, height: 150, resizeMode: 'stretch'}}/>
            <ButtonGen title="Sign Up with Facebook" 
                color='blue' 
                txtColor="white" 
                font='MavenPro-Bold'
                width={300} 
                txtSize={20}
                func={this.alert_}/>
            <ButtonGen title="Sign Up with Google" color="red" txtColor="white" font='MavenPro-Bold' width={300} txtSize={20} func={this.alert_}/>
            <Text style={{fontFamily: 'MavenPro-Medium', fontSize: 30}}>or</Text>
            <ButtonGen title="Sign Up with Email" color="green" txtColor="white" font='MavenPro-Bold' width={300} txtSize={20} func={this.alert_}/>
            <ButtonGen title="I already have an account" color="rgba(255, 0, 255, 0.0)" txtColor="#4285f4" font='MavenPro-Regular' width={300} txtSize={20} func={goToLogin}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'white', 
        flex: 1,
        flexDirection: 'column', 
        justifyContent:'space-evenly', 
        alignItems:'center',
    },
})