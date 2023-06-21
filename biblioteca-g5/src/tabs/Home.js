import { View, Text, StyleSheet } from "react-native"
import EditorasContainer from "../components/EditorasContainer"
import LivrosContainer from "../components/LivrosContainer"
import { Card } from '@rneui/themed';
import { ScrollView } from "react-native"

export default function Home() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <EditorasContainer></EditorasContainer>

                <Text style={styles.title}>Livros</Text>

                <LivrosContainer></LivrosContainer>

                <Text style={styles.title}>Destaque</Text>

                <Card containerStyle={styles.highlight}>
                        <Card.Image
                            style={styles.imagem}
                            source={{
                                uri: ("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1XxCHH2U-Dc6e6hcl0kIWZMujA7ZXcpl4z5UwZeOG_BAWk3TRSl43E6MGrfGVRcHbWzQCmFNA8urGn2AhySo30AGsGnzGyrPfVeGmXuxUJaBKd1VCthHo2E_sRifsDbKlUEQ1znkHahwJ7m3h0sXS1_iIjuolIKot0lNB-0GL2KBlyzJw5feu8PK4/s1920/Livros%20que%20ser%C3%A3o%20publicados%20aqui%20em%202023%20(5).png")
                            }}
                        />
                        <Text style={styles.titleHighlight}>
                            📅 Lançamentos 2023 📅
                        </Text>
                        <Text style={styles.description}>
                            Veja os lançamentos literários que estão por vir neste ano!
                        </Text>
                    </Card>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        gap: 30
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    highlight: {
        padding: 5,
        margin: 0,
        backgroundColor: "#000",
        borderRadius: 3,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0
    },
    titleHighlight: {
        color: "#000",
        fontWeight: "bold",
        padding: 5,
        textAlign: "center",
        backgroundColor: "#fff"
    },
    description: {
        padding: 5,
        textAlign: "center",
        color: "#fff"
    }
})