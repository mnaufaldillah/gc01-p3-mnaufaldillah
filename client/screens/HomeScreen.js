import { View, StyleSheet, ScrollView } from "react-native";
import CardPost from "../components/card/CardPost";
import CardComment from "../components/card/CardComment";
import FormComment from "../components/form/FormComment";
import CardProfile from "../components/card/CardProfile";

export default function HomeScreen({ navigation }) {
    return (
        <View  style={styles.container}>
            <ScrollView >
                <CardPost />
                <CardPost />
                <CardPost />
                <CardPost />
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