import { ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Loading() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={'large'} />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}