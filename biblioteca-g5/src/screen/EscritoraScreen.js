import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import AxiosInstance from '../api/AxiosInstance';
import { DataContext } from '../context/DataContext'
//import LivrosContainer from "../components/LivrosContainer"

export const EscritoraScreen = (item) => {
    const { dadosUsuario } = useContext(DataContext);

    const [dadosEscritora, setDadosEscritora] = useState([]);
    const [dadosLivros, setDadosLivros] = useState([]);

    const idEditora = item.codigoEditora;

    const getEditoraId = async () => {
        await AxiosInstance.get(`/editoras/${idEditora}`,
            { headers: { "Authorization": `Bearer ${dadosUsuario.token}` } }
        ).then(resultado => {
            console.log('Get Editoras: ' + JSON.stringify(resultado.data))
            setDadosEscritora(resultado.data);
        }).catch((error) => {
            console.log("Erro ao recuperar editoras: " + error);
        });
    };

    const getLivrosEditora = async () => {
        await AxiosInstance.get(`/livros/por-editora/${idEditora}`,
            { headers: { "Authorization": `Bearer ${dadosUsuario.token}` } }
        ).then((resultado) => {
            setDadosLivros(resultado.data);
            console.log('Get Livros: ' + JSON.stringify(resultado))
        }).catch((error) => {
            console.log("Erro ao recuperar editoras: " + error);
        });
    }

    useEffect(() => {
        getEditoraId();
        getLivrosEditora();
    }, []);

    const CardLivro = () => {
        <View style={styles.cardLivro}>
            <View style={styles.cardImagem}>
                <Image
                    style={styles.imgLivro}
                    source={{ uri: `data:image/png;base64,${img}` }}
                />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.nomeLivro}>{item.nomeLivro}</Text>
                <Text style={styles.infoLivro}>{item.codigoIsbn}</Text>
                <Text style={styles.infoLivro}>{item.dataLancamento}</Text>
            </View>
        </View>
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logoEditora}
                source={{ uri: `data:image/png;base64,${dadosEscritora.img}` }}
            />
            <Text style={styles.nomeEditora}>{dadosEscritora.nomeEditora}</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={dadosLivros}
                keyExtractor={item => item.codigoLivro}
                renderItem={({ item }) => <CardLivro />}
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

    logoEditora: {
        width: 100,
        height: 100,
    },

    nomeEditora: {

    },

    imagemLivro: {
        width: 100,
        height: 100,
    },

    cardLivro: {

    },

    cardImagem: {

    },

    imgLivro: {

    },

    cardInfo: {

    },

    nomeLivro: {

    },

    infoLivro: {

    },
});