import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function FormSearchUser() {
    const [searchUser, setSearchUser]  = useState('');

    async function handleSearchUser() {
        try {
            console.log(searchUser);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setSearchUser(text)}
                value={searchUser}
                placeholder="Search User"
            />

            <TouchableOpacity style={styles.button} onPress={handleSearchUser}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 16,
        padding: 0,
    },
    button: {
        width: "40%",
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