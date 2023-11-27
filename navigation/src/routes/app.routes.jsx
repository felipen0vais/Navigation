import Inicio from "../screens/Inicio";
import Segunda from "../screens/Segunda"
import Terceira from "../screens/Terceira";
import Quarta from "../screens/Quarta"
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="inicio" component={Inicio}></Stack.Screen>
            <Stack.Screen name="segunda" component={Segunda} ></Stack.Screen>
            <Stack.Screen name="terceira" component={Terceira} ></Stack.Screen>
            <Stack.Screen name="quarta" component={Quarta} ></Stack.Screen>
        </Stack.Navigator>
    )
}