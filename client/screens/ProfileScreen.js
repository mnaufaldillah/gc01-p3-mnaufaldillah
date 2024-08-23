import { View, StyleSheet } from "react-native";
import FormPost from "../components/form/FormPost";
import CardProfile from "../components/card/CardProfile";

export default function ProfileScreen({ navigation }) {
    return (
        <View  style={styles.container}>
            <CardProfile />
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