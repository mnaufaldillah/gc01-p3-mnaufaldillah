import { View, StyleSheet } from "react-native";
import FormRegister from "../components/form/FormRegister";

export default function RegisterScreen({ navigation }) {
    return (
        <View  style={styles.container}>
            <FormRegister />
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