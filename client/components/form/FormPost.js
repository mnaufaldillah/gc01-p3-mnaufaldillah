import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POST, GET_POSTS } from "../../queries/query";

export default function FormPost({ navigation }) {
    const [addPost, { data, loading, error }] = useMutation(ADD_POST, {
        refetchQueries: [GET_POSTS],
        onCompleted: () => {
            navigation.navigate("home");
        }
    });

    const [newPost, setNewPost]  = useState({
        content: '',
        imgUrl: '',
        tags: ''
    });

    async function handlerAddPost() {
        try {
            // setNewPost({...newPost, tag: newPost.tag.split(' ')});
            newPost.tags = newPost.tags.split(" ");
            // console.log(newPost);

            await addPost({
                variables: {
                    post: newPost
                }
            });
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
                onChangeText={( text ) => setNewPost({...newPost, tags: text})}
                value={newPost.tags}
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