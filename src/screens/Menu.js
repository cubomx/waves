import React from 'react';
import {StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {ButtonIcon, ButtonGen} from '../components/Buttons';

import Profile from '../images/icons/profile.png';
import Settings from '../images/icons/settings.png';
import Reward from '../images/icons/reward.png';
import Stats from '../images/icons/stats.png';

export default Menu = () => {
    const navigation = useNavigation();
    const goOut = () => navigation.navigate('Login');

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ButtonIcon txColor='black' icon={Profile} txt='Profile'/>
                <ButtonIcon txColor='black' icon={Settings} txt='Settings'/>
                <ButtonIcon txColor='black' icon={Reward} txt='Reward'/>
                <ButtonIcon txColor='black' icon={Stats} txt='Stats'/>
            </View>
            <View style={styles.bottom}>
                <ButtonGen title="Log out" color="#cc0000ff" txtColor="white" txtSize={30} font="MavenPro-Bold" width={200} func={goOut}/>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white', 
        flex: 1,
        flexDirection: 'column', 
        justifyContent:'space-between', 
        paddingTop: 40
    },
    subContainer:{
        flex: 6,
        alignItems:'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingBottom: 50
    },
    bottom:{
        flex: 3,
        alignItems: 'center',
    },
})
