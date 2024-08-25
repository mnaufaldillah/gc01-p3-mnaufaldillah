import { View, StyleSheet, ScrollView } from "react-native";
import FormSearchUser from "../components/form/FormSearchUser";
import CardSearchUser from "../components/card/CardSearchUser";

import { useQuery } from "@apollo/client";
import { SEARCH_USER } from "../queries/query";

import Loading from "../components/loading/Loading";
import Error from "../components/error/Error";

export default function SearchUserScreen() {
    const { data, loading, error, refetch } = useQuery(SEARCH_USER, {
        variables: {
            inputSearch: ``
        }
    });

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
            <ScrollView >
                <FormSearchUser refetch={refetch}/>
                
                {data?.searchUser?.map((item) => {
                    return (
                        <CardSearchUser key={item._id} searchUserDetail={item} />
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
    }
});