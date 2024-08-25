import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CardProfile from "../components/card/CardProfile";

import { useMutation, useQuery } from "@apollo/client";
import { GET_USER, FOLLOW_USER } from "../queries/query";

import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

export default function ProfileScreen({ route }) {
    const { searchUserDetail } = route.params;

    // console.log(searchUserDetail);
    

    const {data, loading, error } = useQuery(GET_USER, {
        variables: {
            userId: searchUserDetail._id
        }
    });

    const [followUser, { dataFollow, loadingFollow, errorFollow }] = useMutation(FOLLOW_USER, {
        refetchQueries: [GET_USER]
    });

    async function handleFollow() {
        try {
            const newFollow = {
                followingId: data.getUser._id
            }

            // console.log(newFollow);

            await followUser({
                variables: {
                    follow: newFollow
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
        <View  style={styles.container}>
            <CardProfile profileDetail={data.getUser}/>

            <TouchableOpacity style={styles.button} onPress={handleFollow}>
                <Text style={styles.buttonText}>Follow User</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "white"
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