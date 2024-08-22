import { Text, View, StyleSheet, FlatList } from "react-native";
import CardPost from "../components/card/CardPost";
import CardComment from "../components/card/CardComment";
import FormComment from "../components/form/FormComment";
export default function HomeScreen({ navigation }) {
    return (
        <View  style={styles.container}>
            <Text>Home Screen</Text>
            
            <CardPost />
            <FormComment />
            <CardComment />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});