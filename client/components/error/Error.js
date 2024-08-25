import { Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function Error({ error }) {
    console.log(error);
    
    return (
        <SafeAreaProvider>
            <SafeAreaView
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
                <Text>Found Error {JSON.stringify(error.message)}</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}