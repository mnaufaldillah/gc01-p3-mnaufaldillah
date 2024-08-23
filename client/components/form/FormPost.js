import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function FormPost() {
    const [newPost, setNewPost]  = useState({
        content: '',
        imgUrl: '',
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
            <Text style={styles.title}>Add New Post</Text>

            <TextInput 
                style={styles.inputPost}
                multiline={true}
                onChangeText={( text ) => setNewPost({...newPost, content: text})}
                value={newPost.name}
                placeholder="Your Thoughts?"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setNewPost({...newPost, imgUrl: text})}
                value={newPost.imgUrl}
                placeholder="Image maybe?"
            />

            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setNewPost({...newPost, tag: text})}
                value={newPost.tag}
                placeholder="Tag maybe?"
            />

            <TouchableOpacity style={styles.button} onPress={handlerAddPost}>
                <Text style={styles.buttonText}>Submit</Text>
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
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 10,
        padding: 0
    },
    inputPost: {
        height: 80,
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 10,
        padding: 0
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