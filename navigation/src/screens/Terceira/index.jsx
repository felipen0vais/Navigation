import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Terceira({route}){

    const {nome, sobrenome} = route.params;
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.txt2}>Informe seu CPF</Text>
                <TextInput onChangeText={setCpf} value={cpf} style={styles.input}></TextInput>
            </View>

            <View>
                <Text style={styles.txt2}>Informe seu RG</Text>
                <TextInput onChangeText={setRg} value={rg} style={styles.input}></TextInput>
            </View>
            <View style={styles.container2}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.btnIniciar, {backgroundColor:'red'}]}><Text style={styles.txt}>Voltar</Text></TouchableOpacity>

                </View>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('quarta', {nome, sobrenome, cpf, rg})} style={styles.btnIniciar}><Text style={styles.txt}>Proxima</Text></TouchableOpacity>

                </View>
            </View>
        </View>
    )
}