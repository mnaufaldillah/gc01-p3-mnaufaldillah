import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function FormPost({ postDetail }) {
    const [newPost, setNewPost]  = useState({
        content: '',
        imageUrl: '',
        tag: ''
    });

    async function handlerAddPost() {
        try {
            setNewPost({...newPost, tag: newPost.tag.split(' ')});


            console.log(newPost);
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
        marginBottom: 16,
        padding: 0
    },
    button: {
        backgroundColor: "blue",
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