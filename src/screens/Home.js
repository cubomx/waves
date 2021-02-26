import React, { Component } from 'react';
import {Text, View, FlatList, SafeAreaView} from 'react-native';
import Card from '../components/Card';

const DATA = [
    {id:'1', title:'Letras', color:'#ff9601', status:'Completado'},
    {id:'2', title:'Verbos', color:'#017aff', status:'Completado'},
    {id:'3', title:'Países', color:'#26ae60', status:'En curso'},
    {id:'4', title:'Personas', color:'#ff3b30', status:'No iniciado'},
    {id:'5', title:'Cosas', color:'#5956d6', status:'No iniciado'},
    {id:'6', title:'Animales', color:'#ff9601', status:'No iniciado'}
]


export default Home = () => {

    renderItem = ({item}) => (
        <Card title={item.title} color={item.color} status={item.status}/>
    )

    return (
        <SafeAreaView>
            <FlatList 
            data = {DATA}
            renderItem={renderItem}
            /> 
        </SafeAreaView>
    );
    
}

