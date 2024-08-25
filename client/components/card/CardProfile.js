import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function CardProfile({ profileDetail }) {
    return (
        <TouchableOpacity >
            <View 
                key={profileDetail?._id}
                style={styles.profile}
            >
                <Text
                    style={styles.profileContent}
                >
                    {profileDetail?.username} 
                </Text>

                <Text
                    style={styles.profileInfo}
                >
                    {profileDetail?.name}
                </Text>

                <Text
                    style={styles.profileInfo}
                >
                    Number of Followings: {profileDetail?.followings.length}
                    {/* Created At: {postDetail?.createdAt} */}
                </Text>

                <Text
                    style={styles.profileInfo}
                >
                    Number of Followers: {profileDetail?.followers?.length}
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