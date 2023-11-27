import { NavigationContainer } from "@react-navigation/native";
import Routes from "./app.routes";

export default function Nav(){
    return(
        <NavigationContainer>
            <Routes></Routes>
        </NavigationContainer>
    )
}