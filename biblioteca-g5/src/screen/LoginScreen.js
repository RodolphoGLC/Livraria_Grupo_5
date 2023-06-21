import React from 'react';

import { useState } from 'react';
import { Alert } from 'react-native';

import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export const LoginScreen = () => {

    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');

    return (
        <View style={styles.container}>
            <Text>Bem-vindo</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsuario}
                value={usuario}
                placeholder="Usuario"
            />
            <TextInput
                style={styles.input}
                onChangeText={setSenha}
                value={senha}
                placeholder="Senha"
            />
            <TouchableOpacity onPress={Alert('sai')}>
                <Text>Entrar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});