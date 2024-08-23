import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function FormLogin({ navigation }) {
    const [loginUser, setLoginUser]  = useState({
        email: '',
        password: ''
    });

    async function handleLogin() {
        try {
            console.log(loginUser);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <Text style={styles.title}>Welcome to FOS</Text>

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setLoginUser({...loginUser, email: text})}
                value={loginUser.email}
                placeholder="Email"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setLoginUser({...loginUser, password: text})}
                secureTextEntry
                value={loginUser.password}
                placeholder="Password"
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
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