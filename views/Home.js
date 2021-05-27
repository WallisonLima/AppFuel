import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {css} from '../assets/css/Css';

export default function Home({navigation}){

    return (
        <View style={css.container2}>
            <TouchableOpacity style={css.button__home} onPress={()=> navigation.navigate('Login', {id: 30})}>
                <Image style={{height: 200, width: 200}} source={require('../assets/img/buttonLogin.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Rastreio')}>
                <Image style={{height: 200, width: 200}} source={require('../assets/img/buttonRastreio.png')} />
            </TouchableOpacity>
        </View>
    )
}