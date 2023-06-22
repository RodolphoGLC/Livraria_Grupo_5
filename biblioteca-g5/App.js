import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screen/LoginScreen';
import Tabs from './src/screen/Tabs';
import { NavigationContainer } from '@react-navigation/native';

import { DataProvider } from './src/context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;