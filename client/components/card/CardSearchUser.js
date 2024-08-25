import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function CardSearchUser({ searchUserDetail }) {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("profile", { searchUserDetail })
        }}>
            <View 
                style={styles.searchUser}
            >
                <Text
                    style={styles.searchUserContent}
                >
                   {searchUserDetail?.username}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    searchUser: {
        backgroundColor: "aquamarine",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: "100%"
    },
    searchUserContent: {
        fontSize: 16
    }
});