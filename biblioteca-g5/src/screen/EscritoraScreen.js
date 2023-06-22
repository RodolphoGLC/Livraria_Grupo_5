import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const EscritoraScreen = ({ route }) => {
    const navigation = useNavigation();

    const editora = route.params;
    const livro = route.params.listaLivrosDTO;

    return (
        <View style={styles.container}>
            <View style={styles.containerEditora}>
                <Image
                    style={styles.logoEditora}
                    source={{ uri: `data:image/png;base64,${editora.img}` }}
                />
            </View>

            <View style={styles.containerLivros}>
                {livro.map((livro) => (
                    <View key={livro.codigoLivro} style={styles.cardBook}>
                        <TouchableOpacity onPress={() => navigation.navigate('Livro', livro)}>
                            <Image
                                style={styles.imagemLivro}
                                source={{ uri: `data:image/png;base64,${livro.imagem}` }}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C2DEDC',
    },

    containerEditora: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        marginBottom: 50
    },

    logoEditora: {
        width: 100,
        height: 100,
    },

    nomeEditora: {

    },

    containerLivros: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardBook: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#116A7B',
        width: "80%",
    },

    imagemLivro: {
        width: 140,
        height: 200,
    },

    nomeLivro: {

    },
});