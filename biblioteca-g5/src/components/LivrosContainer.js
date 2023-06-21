import { View, FlatList } from "react-native";
import { Card } from '@rneui/themed';
import { Text, StyleSheet } from "react-native";

export default function LivrosContainer() {

        const livros = [
            {
                image: "https://m.media-amazon.com/images/I/81MZ8OjmQrL._AC_UF1000,1000_QL80_.jpg",
                title: 'Senhor dos Anéis: Sociedade do Anel',
                description: "Lorem Impsum"
            },
            {
                image: "https://http2.mlstatic.com/D_NQ_NP_634290-MLU50343531498_062022-O.webp",
                title: 'Trono de Vidro: Rainha das Sombras Vol. 4',
                description: "Lorem Impsum"
            },
            {
                image: "https://m.media-amazon.com/images/I/71K0ACNXURL._AC_UF1000,1000_QL80_.jpg",
                title: 'O Guia Definitivo do Mochileiro das Galáxias',
                description: "Lorem Impsum"
            },
            {
                image: "https://m.media-amazon.com/images/I/51UPmi8FVSL.jpg",
                title: 'Maze Runner: Correr ou Morrer',
                description: "Lorem Impsum"
            },
        ];
    
    
        return (
            <View style={styles.container} >
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.teste}
                        data={livros}
                        renderItem={({ item }) =>
                            <Card containerStyle={styles.cardContainer}>
                                <Card.Image
                                    style={styles.imagem}
                                    source={{
                                        uri: item.image
                                    }}
                                />
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                            </Card>}
                    />
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imagem: {
        width: 140,
        borderRadius: 3,
        height: 200
    },
    teste: {
        flexDirection: 'row',
        padding: 0,
        gap: 35
    },
    title: {
        maxWidth: 140,
        color: "#fff",
        padding: 10,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },
    cardContainer: { 
        padding: 0, 
        backgroundColor: "#000", 
        borderRadius: 5, 
        height: 280, 
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        margin: 0
    },
    scrollView: {
        height: 280
    }
})