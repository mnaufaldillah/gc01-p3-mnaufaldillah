import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

import { useMutation } from "@apollo/client";
import { COMMENT_POST, GET_POST_BY_ID, GET_POSTS } from "../../queries/query";

export default function FormComment({ postId }) {
    // console.log(postId, `<-------------- POST ID`);
    const [commentPost, { data, loading, error }] = useMutation(COMMENT_POST, {
        refetchQueries: [GET_POST_BY_ID]
    });
    
    const [inputComment, setInputComment]  = useState('');

    async function handleComment() {
        try {
            // console.log(comment);
            const newComment = {
                content: inputComment,
                postId
            }

            await commentPost({
                variables: {
                    comment: newComment
                }
            })
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                onChangeText={( text ) => setInputComment(text)}
                value={inputComment}
                placeholder="Your Comment"
            />

            <TouchableOpacity style={styles.button} onPress={handleComment}>
                <Text style={styles.buttonText}>Post Comment</Text>
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
        marginBottom: 16,
        paddingLeft: 10,
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