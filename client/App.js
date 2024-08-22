import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './screens/LoginSceen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import SearchUserScreen from './screens/SearchUserScreen';
import AddPostScreen from './screens/AddPostScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name='Login' component={LoginScreen}/> */}
        {/* <Tab.Screen name='Register' component={RegisterScreen} /> */}
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='AddPost' component={AddPostScreen} />
        <Tab.Screen name='SearchUser' component={SearchUserScreen} />
        <Tab.Screen name='ProfileScreen' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
