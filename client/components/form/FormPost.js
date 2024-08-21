import { Text, View } from "react-native";

export default function FormPost({ postDetail }) {
    return (
        <Pressable >
            <View 
                key="1"
                style={{ 
                    padding: 10,
                    marginBottom: 10,
                    width: "100%"
                 }}
            >
                <Text>Test This is the first post</Text>
            </View>
        </Pressable>
    )
}