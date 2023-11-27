import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style"
import { useState } from "react";


export default function Inicio(){

const navigation = useNavigation()



    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={[styles.txt, {color:'black'}]}>UNIPAR</Text>
            </View>
            
            <TouchableOpacity style={styles.btnIniciar} onPress={ () => navigation.navigate('segunda')}><Text style={styles.txt}>INICIAR</Text></TouchableOpacity>

        </View>
    )
}