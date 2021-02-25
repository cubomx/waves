import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ButtonGen} from '../components/Buttons';
import Logo from '../images/logo.png';

export default SignUp = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={{width: 300, height: 150, resizeMode: 'stretch'}}/>
            <ButtonGen title="Sign Up with Facebook" color='blue' txtColor="white" font='MavenPro-Bold' width={300}/>
            <ButtonGen title="Sign Up with Google" color="red" txtColor="white" font='MavenPro-Bold' width={300}/>
            <Text style={{fontFamily: 'MavenPro-Medium', fontSize: 30}}>or</Text>
            <ButtonGen title="Sign Up with Email" color="green" txtColor="white" font='MavenPro-Bold' width={300}/>
            <ButtonGen title="I already have an account" color="rgba(255, 0, 255, 0.0)" txtColor="#4285f4" font='MavenPro-Regular' width={300}/>
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