import { View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { AxiosInstance } from "../api/AxiosInstance";
import { useNavigation } from '@react-navigation/native';

export default function EditorasContainer() {

    const [dataEditora, setDataEditora] = useState();

    const navigation = useNavigation();

    useEffect(() => {
        getEditoras()
    }, [])

    const getEditoras = async () => {
        await AxiosInstance.get("/editoras",
            {
                headers: {
                    "Authorization": `Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjg3Mzg1ODg5LCJ1c2VyIjoie1wiaWRcIjoxLFwidXNlcm5hbWVcIjpcInVzZXJcIixcImVtYWlsXCI6XCJ1c2VyQG1haWwuY29tXCIsXCJyb2xlc1wiOltcIlJPTEVfVVNFUlwiXX0iLCJleHAiOjE2ODc0NzIyODl9.YyiiPNs8gePexq7P5Fpqy-9Z-l5ee75uGCtxpITy7gJNTiHGmA6xFvEqqPML1Bt4`
                }
            }).then(result => {
                setDataEditora(result.data)
            }).catch(error => {
                console.log("Ocorreu um erro ao recuperar os dados: " + error)
            })
    }

    const Item = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => navigation.navigate('EscritoraScreen', item)}>
                <Image
                    style={styles.imagem}
                    source={{ uri: `data:image/png;base64,${item.img}` }}
                />
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <FlatList
                contentContainerStyle={styles.list}
                data={dataEditora}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.codigoEditora}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 3
    },
    list: {
        gap: 30,
    },
})