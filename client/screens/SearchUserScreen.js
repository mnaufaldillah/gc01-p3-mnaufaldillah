import { View, StyleSheet, ScrollView } from "react-native";
import FormSearchUser from "../components/form/FormSearchUser";
import CardSearchUser from "../components/card/CardSearchUser";

export default function SearchUserScreen({ navigation }) {
    return (
        <View  style={styles.container}>
            <ScrollView >
                <FormSearchUser />
                <CardSearchUser />
                <CardSearchUser />
                <CardSearchUser />
                <CardSearchUser />
                <CardSearchUser />
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