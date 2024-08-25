import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../queries/query";


export default function FormRegister({ navigation }) {
    const [registerUser, { data, loading, error }] = useMutation(REGISTER_USER);

    const [inputRegister, setInputRegister]  = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });



    async function handleRegister() {
        try {
            // console.log(`Cat < -------------`);
            
            await registerUser({
                variables: {
                    register: inputRegister
                }
            });

            navigation.navigate("login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <Text style={styles.title}>Register User</Text>

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setInputRegister({...inputRegister, name: text})}
                value={inputRegister.name}
                placeholder="Full name"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setInputRegister({...inputRegister, username: text})}
                value={inputRegister.username}
                placeholder="Username"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setInputRegister({...inputRegister, email: text})}
                value={inputRegister.email}
                placeholder="Email"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setInputRegister({...inputRegister, password: text})}
                secureTextEntry
                value={inputRegister.password}
                placeholder="Password"
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")}>
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