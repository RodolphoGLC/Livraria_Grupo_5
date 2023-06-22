import { View, FlatList } from "react-native";
import { Card } from '@rneui/themed';
import { Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import {AxiosInstance} from "../api/AxiosInstance"

export default function LivrosContainer() {

    const [dataLivros, setDataLivros] = useState()


    const getLivros = async () => {
        await AxiosInstance.get("/livros",
            {
                headers: {
                    "Authorization": `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjg3Mzg0NDA0LCJ1c2VyIjoie1wiaWRcIjoxLFwidXNlcm5hbWVcIjpcInVzZXJcIixcImVtYWlsXCI6XCJ1c2VyQG1haWwuY29tXCIsXCJyb2xlc1wiOltcIlJPTEVfVVNFUlwiXX0iLCJleHAiOjE2ODc0NzA4MDR9.gjuuLYVucnfu_dMgkVEi4SLFBrl2HpYF22Vez0Dum94iin6TtJ3mrEC6I_fcPKJa`
                }
            }).then(result => {
                setDataLivros(result.data)
            }).catch(error => {
                console.log("Ocorreu um erro ao recuperar os dados: " + error)
            })
    }

    useEffect(() => {
        getLivros()
    }, [])

    return (
        <View style={styles.container} >
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.teste}
                data={dataLivros}
                renderItem={({ item }) =>
                    item.editoraDTO.codigoEditora == 4 ? (
                        <Card containerStyle={styles.cardContainer}>
                            <Card.Image
                                style={styles.imagem}
                                source={{ uri: `data:image/jpeg;base64,${item.img}` }}
                            />
                        </Card>
                    ) : (null)
                }
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
        backgroundColor: "#CDC2AE",
        borderRadius: 5,
        height: 200,
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