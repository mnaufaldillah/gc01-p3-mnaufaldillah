import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function CardComment({ postDetail }) {
    return (
        <Pressable >
            <View 
                // key={postDetail?.id}
                style={styles.comment}
            >
                <Text
                    style={styles.commentInfo}
                >
                    {/* {postDetail?.author?.username} */}
                    Naufal123 commented:
                </Text>


                <Text
                    style={styles.commentContent}
                >
                    What A great day!
                    {/* {postDetail?.content} */}
                </Text>

                <Text
                    style={styles.commentInfo}
                >
                    Created At: 2024/04/04 
                    {/* Created At: {postDetail?.createdAt} */}
                </Text>
            </View>
        </Pressable>
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