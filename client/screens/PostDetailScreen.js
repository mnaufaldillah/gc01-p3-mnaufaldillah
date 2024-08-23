import { View, StyleSheet, ScrollView } from "react-native";
import CardComment from "../components/card/CardComment";
import FormComment from "../components/form/FormComment";
import CardPostDetail from "../components/card/CardPostDetail";

export default function PostDetailScreen({ navigation }) {
    return (
        <View  style={styles.container}>
            <ScrollView >
                <CardPostDetail />
                <FormComment />
                <CardComment />
                <CardComment />
                <CardComment />
                <CardComment />
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