import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SocialIcon, Button   } from 'react-native-elements'
import Logo from '../images/logo.png';

const Login = () => {
    
        const navigation = useNavigation();
        const goHome = () => navigation.navigate('waves');
        return (
            
            // Try setting `flexDirection` to `column`.
            <View style={styles.container}>
                <View>
                    <Image source={Logo} style={{width: 300, height: 150, resizeMode: 'stretch'}}/>
                </View>
                
              <View style={{alignItems:'flex-end',  width: 300}}> 
                  <Text style={styles.label}>email</Text>
                  <TextInput style={styles.text}/>
      
                  <Text style={styles.label}>password</Text>
                  <TextInput secureTextEntry={true} style={styles.text}/>
      
                  <Text style={styles.forgot}>Forgot your password?</Text>   
              </View>
      
              <View style={{alignItems:'flex-end',  width: 300}}>
                  <Button title="Sign In" type='outline' containerViewStyle={{marginBottom: 30}} onPress={goHome}/>
              </View>
      
              <View style={{flexDirection:'column', alignItems:'center'}}>
              
                  <View style={{flexDirection: 'row'}}> 
                  <View style={styles.divider}></View>
                      <Text style={styles.label}> or </Text>
                  <View style={styles.divider}></View>
                  </View>
                  
                  <View style={{flexDirection:'row'}}>
                      <SocialIcon type='facebook' style={{marginRight:80}}/>
                      <SocialIcon type='google' />
                  </View>
      
              </View>
              
              
              
            </View>
          );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent:'space-between', 
        alignItems:'center',
        backgroundColor: 'rgba(0, 175, 145, 0.2)',
        paddingTop: 20,
        paddingBottom: 20
    },
    text: {
        borderWidth: 2, 
        borderColor: 'gray', 
        borderRadius: 10, 
        alignSelf: 'stretch',
        fontSize: 20, 
        paddingLeft: 10,
    },
    label:{
        fontSize: 20,
        fontFamily: 'MavenPro-Bold'
    },  
    divider:{
        borderBottomColor: 'gray',
        borderBottomWidth: 3, 
        width:100, 
        alignSelf:'center'
    },
    forgot:{
        textDecorationLine:'underline',
        fontFamily: 'MavenPro-Bold'
    }
})


export default Login;