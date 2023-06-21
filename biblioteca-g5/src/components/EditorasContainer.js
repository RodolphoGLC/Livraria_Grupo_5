import { View, FlatList, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

export default function EditorasContainer() {

    const [dataEditora, setDataEditora] = useState()

    // useEffect( () => {
    //     getEditoras()
    // }, [])

    // const getEditoras = async () => {
    //     await AxiosInstance.get("/editoras", 
    //     {
    //         headers: {
    //             "Authorization": `Bearer ${userData.token}`
    //         }
    //     }).then( result => {
    //         setDataEditora(result.data)
    //     }).catch( error => {
    //         console.log("Ocorreu um erro ao recuperar os dados: " + error)
    //     })
    // }

    const Item = ({ image }) => (
        <View style={styles.item}>
            <Image
                style={styles.imagem}
                source={{uri: `data:image/png;base64,${image}`}}
            />
        </View>
    );

    return(
        <View>
            <FlatList
                contentContainerStyle={styles.list}
                data={dataEditora}
                renderItem={({ item }) => <Item image={item.img} />}
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