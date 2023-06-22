import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import { AxiosInstance } from '../api/AxiosInstance';
import { DataContext } from '../context/DataContext';


export const LoginScreen = ({ navigation }) => {

    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const {armazenarDadosUsuario} = useContext(DataContext);


    const handleLogin = async () => {
    
        try{
          const resultado = await AxiosInstance.post('/auth/signin',{
            username: usuario,
            password: senha
          });
    
          if(resultado.status === 200){
            
            console.log('deu certo')
            var jwtToken = resultado.data;
            armazenarDadosUsuario(jwtToken["accessToken"]);
    
            navigation.navigate('Livraria')
    
          } else {
            console.log('erro');
          }
    
        }catch (error){
          console.log('erro: ' + error);
        }
      }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo</Text>
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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.txtButton}>Entrar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#116a7b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#000'
    },
    input: {
        height: 40,
        width: 270,
        margin: 12,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#cdc2ae',
    },
    button: {
        borderRadius: 15,
        backgroundColor: '#000',
        color: '#fff',
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    txtButton: {
      color: '#fff',
    }
});