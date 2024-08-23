import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function CardPost({ postDetail }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity >
            <View 
                // key={postDetail?.id}
                style={styles.post}
            >
                <Text
                    style={styles.postInfo}
                >
                    {/* {postDetail?.author?.username} */}
                    Muhammad Naufaldillah
                </Text>

                <Text
                    style={styles.postContent}
                >
                    lorem ipsum
                    {/* {postDetail?.content} */}
                </Text>

                <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zojZbURgjQUYrXJ6l-P_HqJNuURVFNGKIA&s"
                    style={styles.postImage}
                />

                <Text
                    style={styles.postInfo}
                >
                    Tagged in : Jaguar
                    {/* Tagged in: {postDetail?.tags} */}
                </Text>

                <Text
                    style={styles.postInfo}
                >
                    Created At: 2024/04/04 
                    {/* Created At: {postDetail?.createdAt} */}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post: {
        backgroundColor: "honeydew",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: "100%"
    },
    postImage: {
        height: 200,
        width: "100%",
        alignContent: "center"
    },
    postContent: {
        fontSize: 20
    },
    postInfo: {
        fontSize: 16
    }
});