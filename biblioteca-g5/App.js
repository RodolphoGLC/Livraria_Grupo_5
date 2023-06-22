import { LoginScreen } from './src/screen/LoginScreen';
import Tabs from './src/screen/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DataProvider } from './src/context/DataContext';
import LivroScreen from './src/screen/LivroScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Livraria" component={Tabs} />
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen name="Livro" component={LivroScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;