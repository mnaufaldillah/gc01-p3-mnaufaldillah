import { View, StyleSheet } from "react-native";
import FormRegister from "../components/form/FormRegister";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen({ route }) {
    const navigation = useNavigation();

    return (
        <View  style={styles.container}>
            <FormRegister navigation={navigation}/>
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