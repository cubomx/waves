import React from 'react';
import {Text, Pressable, StyleSheet, View, Image, Alert} from 'react-native';



const ButtonGen = (props) => {
    return (
        <Pressable style={
            ({pressed}) => [
                {
                    backgroundColor: pressed ? '#d8d8d8' : props.color,
                },
                
                styles.btn,
                {width: props.width},
                ]
            }
            onPress={() => Alert.alert('Button Pressed!')}>
            <Text style={[styles.txt, {color: props.txtColor, fontFamily:props.font, fontSize: props.txtSize}]}> {props.title} </Text>
        </Pressable> 
        
    );
}

const ButtonIcon = (props) =>{
    return(
        <Pressable >
            <View style={styles.subContainer}>
                <Image source={props.icon} style={[styles.img, {marginRight: 30}]} />
                <Text style={[styles.txt, styles.txtMenu, {color: 'black'}]} >{props.txt}</Text>
            </View>
            
        </Pressable>
    )
}



const styles = StyleSheet.create({
    txt: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'MavenPro-Bold',
    },
    txtMenu:{
        fontSize: 28,   
    },
    btn:{
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: 300
    },
    subContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30
    },
    img:{
        width: 80, 
        height: 80, 
        resizeMode: 'stretch'
    },
})


export {ButtonGen, ButtonIcon};  