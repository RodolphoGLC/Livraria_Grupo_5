import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import AxiosInstance from '../../api/AxiosInstance';
import { DataContext } from '../../context/DataContext'

export const EscritoraScreen = () => {
    const { dadosUsuario } = useContext(DataContext);

    const [dadosEscritora, setDadosEscritora] = useState([]);
    const [dadosLivros, setDadosLivros] = useState([]);

    //Get Editora p/ id, espero que o ID venha do navigate
    const getEditoraId = async () => {
        await AxiosInstance.get(`/editoras/${1}`,
            { headers: { "Authorization": `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjg3Mzc0NjIwLCJ1c2VyIjoie1wiaWRcIjoxLFwidXNlcm5hbWVcIjpcInVzZXJcIixcImVtYWlsXCI6XCJ1c2VyQG1haWwuY29tXCIsXCJyb2xlc1wiOltcIlJPTEVfVVNFUlwiXX0iLCJleHAiOjE2ODc0NjEwMjB9.0oOlmVkuFuGtwsoGdsdS3uwZniS4W-2cdVxVLfiGnG6W_P0KmV3cbFMXIP_P7FZX` } }
        ).then(resultado => {
            console.log('Get Editoras: ' + JSON.stringify(resultado.data))
            setDadosEscritora(resultado.data);
        }).catch((error) => {
            console.log("Erro ao recuperar editoras: " + error);
        });
    };

    //Fazer por filtrar pela editora, espero o id vindo do navigate
    const getLivrosEditora = async () => {
        await AxiosInstance.get(`/livros/por-editora/${2}`,
            { headers: { "Authorization": `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjg3Mzc0NjIwLCJ1c2VyIjoie1wiaWRcIjoxLFwidXNlcm5hbWVcIjpcInVzZXJcIixcImVtYWlsXCI6XCJ1c2VyQG1haWwuY29tXCIsXCJyb2xlc1wiOltcIlJPTEVfVVNFUlwiXX0iLCJleHAiOjE2ODc0NjEwMjB9.0oOlmVkuFuGtwsoGdsdS3uwZniS4W-2cdVxVLfiGnG6W_P0KmV3cbFMXIP_P7FZX` } }
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

    const CardLivro = (item, img) => {
        <View style={styles.cardLivro}>
            <View style={styles.cardImagem}>
                <Image
                    style={styles.logoLivro}
                    source={{ uri: `data:image/png;base64,${img}` }}
                />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.nomeLivro}>{item.nomeLivro}</Text>
                <Text style={styles.codigoLivro}>{item.codigoIsbn}</Text>
                <Text style={styles.dataLivro}>{item.dataLancamento}</Text>
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
                renderItem={({ item }) => <CardLivro item={item} img={item.imagem} />}
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

    imagemLivro: {
        width: 100,
        height: 100,
    }
});