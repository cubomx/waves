import React from 'react';
import {View, Image, Text} from 'react-native';
import Logo from '../images/waves.png';

const Loading = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', backgroundColor:'rgba(0, 175, 145, 1.0)', alignItems:'center', paddingBottom: 100}}>
            <Image source={Logo} style={{width: 250, height: 250, resizeMode: 'stretch'}}/>
            <Text style={{fontFamily:'Pacifico-Regular', fontSize:60, color: 'white' }}>waves</Text>
        </View>
    );
}

export default Loading;