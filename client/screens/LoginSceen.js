import { View, StyleSheet } from "react-native";
import FormLogin from "../components/form/FormLogin";

export default function LoginScreen({ navigation }) {
    return (
        <View  style={styles.container}>
            <FormLogin />
            
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