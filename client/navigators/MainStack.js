import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "../screens/LoginSceen";
import RegisterScreen from "../screens/RegisterScreen";

import HomeScreen from "../screens/HomeScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import AddPostScreen from "../screens/AddPostScreen";
import SearchUserScreen from "../screens/SearchUserScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { ActivityIndicator, View, StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function MainStack() {
    const { isSignedIn, setSignedIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        SecureStore.getItemAsync(`access_token`)
            .then((token) => {
                if(token) {
                    setSignedIn(true)
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    if(loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {isSignedIn ? (
                <Tab.Navigator >
                    <Tab.Screen name="home" component={HomeScreen}/>
                    <Tab.Screen name="addPost" component={AddPostScreen} />
                    <Tab.Screen name="searchUser" component={SearchUserScreen} />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator >
                    <Stack.Screen name="login" component={LoginScreen} />
                    <Stack.Screen name="register" component={RegisterScreen} />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
})