import { View, StyleSheet } from "react-native";
import FormLogin from "../components/form/FormLogin";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
    const navigation = useNavigation()

    return (
        <View  style={styles.container}>
            <FormLogin navigation={navigation}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "white"
    }
});