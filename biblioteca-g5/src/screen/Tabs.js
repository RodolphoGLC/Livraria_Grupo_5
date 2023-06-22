import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from './LoginScreen';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Home from '../tabs/Home';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
            <Tab.Navigator
                initialRouteName="Livraria"
                screenOptions={{
                    tabBarActiveTintColor: '#ECE5C7',
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#116A7B",
                        borderTopWidth: 0,
                        height: 60
                    },
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Livraria"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Editoras"
                    component={LoginScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="search" color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Favoritos"
                    component={LoginScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="heart" color={color} size={size} />
                        )
                    }}
                />
                <Tab.Screen
                    name="Carrinho"
                    component={LoginScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cart" color={color} size={size} />
                        )
                    }}
                />
            </Tab.Navigator>
    )
}