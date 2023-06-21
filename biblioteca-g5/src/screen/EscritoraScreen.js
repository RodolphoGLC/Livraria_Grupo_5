import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import AxiosInstance from '../api/AxiosInstance';

export const EscritoraScreen = () => {
    const { dadosUsuario } = useContext(DataContext);

    const [dadosEditora, setDadosEditora] = useState([]);

    //Get Editora p/ id, espero que o ID venha do navigate
    const getEditoraId = async () => {
        await AxiosInstance.get(`/editoras`,
            { headers: { "Authorization": `Bearer ${dadosUsuario?.token}` } }
        ).then(resultado => {
            console.log('Get Editoras: ' + JSON.stringify(resultado.data))
            setDadosEditora(resultado.data);
        }).catch((error) => {
            console.log("Erro ao recuperar editoras: " + error);
        });
    };

    useEffect(() => {
        getEditoraId();
    }, []);

    const CardEditora = () => {
        
    }

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                horizontal
                data={dadosEditora}
                renderItem={({ item }) => <CardEditora img={item.img} />}
                keyExtractor={item => item.codigoEditora}
            />
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