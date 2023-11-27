import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Segunda(){
 
    const navigation = useNavigation()
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.txt2}>Informe seu nome</Text>
                <TextInput onChangeText={setNome} value={nome} style={styles.input}></TextInput>
            </View>

            <View>
                <Text style={styles.txt2}>Informe seu sobrenome</Text>
                <TextInput onChangeText={setSobrenome} value={sobrenome} style={styles.input}></TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('terceira', {nome, sobrenome})} style={styles.btnIniciar}><Text style={styles.txt}>Proximo</Text></TouchableOpacity>
            </View>
        </View>
    )
}