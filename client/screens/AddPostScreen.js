import { View, StyleSheet } from "react-native";
import FormPost from "../components/form/FormPost";
import { useNavigation } from "@react-navigation/native";

export default function AddPostScreen() {
    const navigation = useNavigation()
    return (
        <View  style={styles.container}>
            <FormPost navigation={navigation}/>
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