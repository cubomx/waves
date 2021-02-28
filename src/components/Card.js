import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const Card = (props) => {
    return(
        
            <Pressable>
                <View style={[styles.box, {backgroundColor: props.color}]}>
                    <Text style={styles.txt}>
                        {props.title}
                    </Text>
                    <Text style={[styles.txt, {fontSize: 15, fontFamily: 'MavenPro-Regular'}]}>
                        Progreso: {props.status}
                    </Text>
                </View>
            </Pressable>
        
    );
}

const styles = StyleSheet.create({
    box:{
        flexDirection: 'column',
        height: 'auto',
        width: 300,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 15,
        padding: 20
    },
    txt: {
        fontFamily: 'MavenPro-Bold',
        fontSize: 25,
        color: 'white',
    },
})

export {Card};