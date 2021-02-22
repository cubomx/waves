import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { material } from 'react-native-typography'
import { SocialIcon, Button   } from 'react-native-elements'
import Logo from '../images/logo.png';

const Login = () => {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={styles.container}>
          <View>
              <Image source={Logo} style={{width: 300, height: 150, resizeMode: 'stretch'}}/>
          </View>
        <View style={{alignItems:'flex-end',  width: 300}}> 
            <Text style={material.display1}>email</Text>
            <TextInput style={styles.text}/>

            <Text style={material.display1}>password</Text>
            <TextInput secureTextEntry={true} style={styles.text}/>

            <Text style={material.title}>Forgot your password?</Text>   
        </View>

        <View style={{alignItems:'flex-end',  width: 300}}>
            <Button title="Sign In" type='outline' containerViewStyle={{marginBottom: 30}}/>
        </View>

        <View style={{flexDirection:'column', alignItems:'center'}}>
        
            <View style={{flexDirection: 'row'}}> 
            <View style={styles.divider}></View>
                <Text style={material.display1}> or </Text>
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
        flexDirection: 'column', justifyContent:'space-evenly', alignItems:'center'
    },
    text: {
        borderWidth: 2, 
        borderColor: 'gray', 
        borderRadius: 10, 
        alignSelf: 'stretch',
        fontSize: 20, 
        paddingLeft: 10,
    },
    divider:{
        borderBottomColor: 'gray',
        borderBottomWidth: 3, 
        width:100, 
        alignSelf:'center'
    }
})


export default Login;