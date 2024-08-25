import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchUserScreen from "../screens/SearchUserScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function SearchTab() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="searchUser" component={SearchUserScreen} />
            <Stack.Screen name="profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}