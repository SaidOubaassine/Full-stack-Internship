import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Posts from "../screens/Posts";
import PostDetail from "../screens/PostDetail"

const Stack = createNativeStackNavigator()

function PostsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Posts" component={Posts}/>
            <Stack.Screen name="Detail" component={PostDetail} />
        </Stack.Navigator>
    )
}

export default function NavigationContainerFunction(){
    return(
        <NavigationContainer>
            <PostsStack />
        </NavigationContainer>
    )
}