import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PostDetailScreen from "../screens/PostDetailScreen";

const Stack = createNativeStackNavigator();

export default function HomeTab() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="detailPost" component={PostDetailScreen} /> 
        </Stack.Navigator>
    )
}