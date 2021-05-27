import React from 'react';
import { useState } from 'react';
import {KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Platform } from 'react-native';
import {css} from '../assets/css/Css';


export default function  Login({route}){

    const [display, setDisplay] = useState('none');


    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
                <Image style={{height: 200, width: 200}} source={require('../assets/img/logomarca.png')} />
            </View>

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder="Usuário:" />
                <TextInput style={css.login__input} placeholder="Senha:" />
                <TouchableOpacity style={css.login__button} onPress={()=>setDisplay('flex')}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
            </View>
        </KeyboardAvoidingView>
    )
}