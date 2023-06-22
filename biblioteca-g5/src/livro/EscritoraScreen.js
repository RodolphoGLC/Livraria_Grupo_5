import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import AxiosInstance from '../api/AxiosInstance';

export const EscritoraScreen = () => {
    const { dadosUsuario } = useContext(DataContext);

    const [dadosEscritora, setDadosEscritora] = useState([]);
    const [dadosLivros, setDadosLivros] = useState([]);

    //Get Editora p/ id, espero que o ID venha do navigate
    const getEditoraId = async (id) => {
        await AxiosInstance.get(`editoras/${id}`,
            { headers: { "Authorization": `Bearer ${dadosUsuario?.token}` } }
        ).then(resultado => {
            console.log('Get Editoras: ' + JSON.stringify(resultado.data))
            setDadosEscritora(resultado.data);
            setDadosLivros(resultado.data.listaLivrosDTO);
        }).catch((error) => {
            console.log("Erro ao recuperar editoras: " + error);
        });
    };

    useEffect(() => {
        getEditoraId();
    }, []);

    const CardLivro = () => {
        <View style={styles.cardLivro}>
            <View style={styles.cardImagem}>
                <Image
                    style={styles.logoEditora}
                    source={'https://franciscanos.org.br/noticias/wp-content/uploads/2021/03/vozes_logo-450x450.png'}
                />

            </View>
            <View style={styles.cardInfo}>

            </View>
        </View>
    };

    return (
      <View style={styles.container}>
          <Image
              style={styles.logoEditora}
              source={'https://franciscanos.org.br/noticias/wp-content/uploads/2021/03/vozes_logo-450x450.png'}
          />
          <Text style={styles.nomeEditora}>Rocco</Text>

          <FlatList
              showsVerticalScrollIndicator={false}
              data={dadosEscritora}
              keyExtractor={item => item.codigoEditora}
              renderItem={({ item }) => <Text></Text>}
          />
      </View>
  );
}

//Receber os dados de editora, 


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});