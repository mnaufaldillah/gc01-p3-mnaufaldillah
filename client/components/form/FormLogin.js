import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../queries/query";

import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import * as SecureStore from "expo-secure-store"

export default function FormLogin({ navigation }) {
    const { setIsSignedIn } = useContext(AuthContext);
    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

    const [inputLogin, setInputLogin]  = useState({
        email: '',
        password: ''
    });

    async function handleLogin() {
        try {
            // console.log(`Cat < -------------`);
            
            const res = await loginUser({
                variables: {
                    login: inputLogin
                }
            });

            // console.log(res.data?.loginUser?.access_token);
            await SecureStore.setItemAsync("access_token", res.data.loginUser.access_token);
            
            setIsSignedIn(true)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <Text style={styles.title}>Welcome to FOS</Text>

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setInputLogin({...inputLogin, email: text})}
                value={inputLogin.email}
                placeholder="Email"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setInputLogin({...inputLogin, password: text})}
                secureTextEntry
                value={inputLogin.password}
                placeholder="Password"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("register")}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: "center"
    },
    input: {
        height: 40,
        width: 300,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 16,
        paddingLeft: 10,
        padding: 0
    },
    button: {
        backgroundColor: "skyblue",
        padding: 10,
        borderRadius: 5,
        marginBottom: 16
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center"
    }
});