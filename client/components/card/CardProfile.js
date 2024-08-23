import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function CardProfile({ profileDetail }) {
    return (
        <TouchableOpacity >
            <View 
                // key={postDetail?.id}
                style={styles.profile}
            >
                <Text
                    style={styles.profileContent}
                >
                    Naufal123
                    {/* {postDetail?.content} */}
                </Text>

                <Text
                    style={styles.profileInfo}
                >
                    Muhammad Naufaldillah
                    {/* Created At: {postDetail?.createdAt} */}
                </Text>

                <Text
                    style={styles.profileInfo}
                >
                    Number of Following: 4
                    {/* Created At: {postDetail?.createdAt} */}
                </Text>

                <Text
                    style={styles.profileInfo}
                >
                    Number of Followers: 6
                    {/* Created At: {postDetail?.createdAt} */}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    profile: {
        backgroundColor: "aquamarine",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: "100%"
    },
    profileContent: {
        fontSize: 24
    },
    profileInfo: {
        fontSize: 16
    }
});