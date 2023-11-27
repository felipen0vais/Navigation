import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


export default function Quarta({route}){

    const {nome, sobrenome, cpf, rg} = route.params

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.txt2}>Olá {route.params?.nome} {route.params?.sobrenome}</Text>
                
            </View>

            <View>
                <Text style={styles.txt2}>Portador do documento</Text>
                <Text style={styles.txt2}>CPF</Text>
                <Text style={styles.txt2}>{route.params?.cpf}</Text>
                <Text style={styles.txt2}>RG</Text>
                <Text style={styles.txt2}>{route.params?.rg}</Text>
            </View>
            <View style={styles.container2}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.btnIniciar, {backgroundColor:'red'}]}><Text style={styles.txt}>Voltar</Text></TouchableOpacity>

                </View>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('inicio')} style={styles.btnIniciar}><Text style={styles.txt}>Finalizar</Text></TouchableOpacity>

                </View>
            </View>
        </View>
    )
}