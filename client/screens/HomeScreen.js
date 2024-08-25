import { View, StyleSheet, ScrollView, Text, TouchableOpacity, FlatList } from "react-native";
import CardPost from "../components/card/CardPost";

import * as SecureStore from "expo-secure-store";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../queries/query";

import Error from "../components/error/Error";
import Loading from "../components/loading/Loading";


export default function HomeScreen({ navigation }) {
    const { setIsSignedIn } = useContext(AuthContext);
    const { data, loading, error } = useQuery(GET_POSTS);

    async function handleLogout() {
        try {
            await SecureStore.deleteItemAsync("access_token");
            setIsSignedIn(false)
        } catch (error) {
            console.log(error);
        }
    }

    if(loading) {
        return (
            <Loading />
        )
    }

    if(error) {
        return (
            <Error error={error} />
        )
    }

    return (
        <View  style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>

            {/* <ScrollView >
                <CardPost />
                <CardPost />
                <CardPost />
                <CardPost />
            </ScrollView> */}

            <FlatList 
                data={data.getPosts}
                renderItem={({ item }) => <CardPost postDetail={item}/>}
            />
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