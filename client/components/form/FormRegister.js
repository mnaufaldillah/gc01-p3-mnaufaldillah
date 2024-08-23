import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function FormRegister() {
    const [registerUser, setRegisterUser]  = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });

    async function handleRegister() {
        try {
            console.log(registerUser);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <Text style={styles.title}>Register User</Text>

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setRegisterUser({...registerUser, name: text})}
                value={registerUser.name}
                placeholder="Full name"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setRegisterUser({...registerUser, username: text})}
                value={registerUser.username}
                placeholder="Username"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setRegisterUser({...registerUser, email: text})}
                value={registerUser.email}
                placeholder="Email"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setRegisterUser({...registerUser, password: text})}
                secureTextEntry
                value={registerUser.password}
                placeholder="Password"
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
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