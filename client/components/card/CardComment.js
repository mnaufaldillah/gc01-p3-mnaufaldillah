import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function CardComment({ commentDetail }) {
    function renderTime() {
        const foundDate = new Date(commentDetail.createdAt * 1);
        const formattedDate = foundDate.toLocaleDateString("en-US", {weekday: "short", year: "numeric", month: "long", day: "numeric"});
        const formattedTime = foundDate.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit"})

        return `${formattedDate} ${formattedTime}`;
    }

    return (
        <TouchableOpacity >
            <View 
                style={styles.comment}
            >
                <Text
                    style={styles.commentInfo}
                >
                    {commentDetail?.username} commented:
                </Text>

                <Text
                    style={styles.commentContent}
                >
                    {commentDetail?.content}
                </Text>

                <Text
                    style={styles.commentInfo}
                >
                    Created At: {renderTime()}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    comment: {
        backgroundColor: "lavender",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: "100%"
    },
    commentContent: {
        fontSize: 20
    },
    commentInfo: {
        fontSize: 12
    }
});