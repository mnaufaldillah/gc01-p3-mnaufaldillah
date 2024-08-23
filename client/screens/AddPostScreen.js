import { View, StyleSheet } from "react-native";
import FormPost from "../components/form/FormPost";

export default function AddPostScreen({ navigation }) {
    return (
        <View  style={styles.container}>
            <FormPost />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "white"
    }
});