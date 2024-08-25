import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import CardComment from "../components/card/CardComment";
import FormComment from "../components/form/FormComment";
import CardPostDetail from "../components/card/CardPostDetail";

import { useMutation, useQuery } from "@apollo/client";
import { GET_POST_BY_ID, LIKE_POST } from "../queries/query";
import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

export default function PostDetailScreen({ route }) {
    // console.log(route.params);

    const { postDetail } = route.params;

    const {data, loading, error } = useQuery(GET_POST_BY_ID, {
        variables: {
            postId: postDetail._id
        }
    });

    const [likePost, { dataLike, loadingLike, errorLike }] = useMutation(LIKE_POST, {
        refetchQueries: [GET_POST_BY_ID]
    });

    async function handleLike() {
        try {
            const newLike = {
                postId: data.getPostById._id
            }

            await likePost({
                variables: {
                    like: newLike
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(data, `<--------------`);

    if(loading) {
        return (
            <Loading />
        )
    }

    if(error) {
        return (
            <Error error={error}/>
        )
    }
    
    return (
        <View style={styles.container}>
            <ScrollView >
                <CardPostDetail postDetail={data.getPostById}/>

                <TouchableOpacity style={styles.button} onPress={handleLike}>
                    <Text style={styles.buttonText}>Like Post</Text>
                </TouchableOpacity>

                <FormComment postId={data.getPostById._id}/>

                {data.getPostById.comments.map((item, index) => {
                    return (
                        <CardComment commentDetail={item} key={index}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor:"white"
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