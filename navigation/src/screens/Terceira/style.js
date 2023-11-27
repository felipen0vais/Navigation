import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      
    },
    btnIniciar:{
        width:170,
        height:50,
        backgroundColor:'green',
        borderRadius:15,
        alignItems:'center',
        marginTop:190
    },
    txt:{
        marginTop:9,
        fontSize:25,
        fontWeight:'bold',
        color:'#fff'
    },
    input:{
        borderRadius:15,
        width:290,
        height:40,
        borderColor:'black',
        borderWidth:1
    },
    txt2:{
        marginTop:9,
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    container2:{
        flexDirection:'row',
    }
  });
 export default styles 