import React, { Component } from 'react';
import {Text, View} from 'react-native';


class Home extends Component{
    render(){
        return (
            <View style={{justifyContent:'center', alignSelf:'center'}}>
                <Text style={{fontFamily: 'FontAwesome5_Solid', fontSize:36}}>Home</Text>
            </View>
        );
    }
    
}

export default Home;