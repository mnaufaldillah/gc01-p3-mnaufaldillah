import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"

export default function CardPost({ postDetail }) {
    const navigation = useNavigation();

    function renderImage() {
        if(postDetail.imgUrl) {
            return (
                <Image
                    src={postDetail.imgUrl}
                    style={styles.postImage}
                />
            )
        } else {
            return null
        }
    }

    function renderTags() {
        let textOutput = ``
        
        for(let i = 1; i <= postDetail.tags.length; i++ ) {
            if(i === postDetail.tags.length) {
                textOutput += `${postDetail.tags[i - 1]}`
            } else {
                textOutput += `${postDetail.tags[i - 1]}, `
            }
        }

        return textOutput
    }

    function renderTime() {
        const foundDate = new Date(postDetail.createdAt * 1);
        const formattedDate = foundDate.toLocaleDateString("en-US", {weekday: "short", year: "numeric", month: "long", day: "numeric"});
        const formattedTime = foundDate.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit"})

        return `${formattedDate} ${formattedTime}`;
    }

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("detailPost", {postDetail});
        }}>
            <View 
                key={postDetail?._id}
                style={styles.post}
            >
                <Text
                    style={styles.postInfo}
                >
                    {postDetail?.author?.username}
                </Text>

                <Text
                    style={styles.postContent}
                >
                    {postDetail?.content}
                </Text>

                {renderImage()}

                <Text
                    style={styles.postInfo}
                >
                    Tagged in: {renderTags()}
                </Text>

                <Text
                    style={styles.postInfo}
                >
                    Created At: {renderTime()}
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