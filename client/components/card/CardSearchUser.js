import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function CardSearchUser({ searchUserDetail }) {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity >
            <View 
                // key={postDetail?.id}
                style={styles.searchUser}
            >
                <Text
                    style={styles.searchUserContent}
                >
                    Naufal123
                    {/* {postDetail?.content} */}
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