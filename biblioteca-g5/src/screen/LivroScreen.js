import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';


const LivroScreen = ({ route }) => {
  const livroData = route.params

  return (
    <View style={styles.container}>

      <View style={styles.cardLivro}>
        <View style={styles.cardImagem}>
          <Image style={styles.tinyLogo} source={{ uri:`data:image/jpeg;base64,${livroData.img}`  }} />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.tituloLivro}>{livroData.nomeLivro}</Text>
          <Text style={styles.autorLivro}>{livroData.autor}</Text>
          <Text style={styles.editoraLivro}>{livroData.editoraDTO?.nomeEditora}</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLivro: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
  },
  cardImagem: {
    marginRight: 10,
  },
  cardInfo: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  tituloLivro: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  autorLivro: {
    fontSize: 16,
    marginBottom: 5,
  },
  editoraLivro: {
    marginBottom: 5,
  },
});

export default LivroScreen;
