import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function FormComment() {
    const [comment, setComment]  = useState('');

    async function handleComment() {
        try {
            console.log(comment);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setComment(text)}
                value={comment}
                placeholder="Email"
            />

            <TouchableOpacity style={styles.button} onPress={handleComment}>
                <Text style={styles.buttonText}>Post Comment</Text>
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
        height: 80,
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