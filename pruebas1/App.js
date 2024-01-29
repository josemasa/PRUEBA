import { StatusBar } from "expo-status-bar";
import Boton  from "./components/Boton";
import ContadorConBoton from "./components/contadorConBoton";
import {
  StyleSheet,
  Pressable,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";




  export default function App() {
  return (


    
    <View style={styles.container}>
      <Text style={styles.basetext}>Creando botones </Text>

    <View style={styles.caja}>
      <ContadorConBoton ></ContadorConBoton>
    </View>
    <View style={styles.caja}>
      <ContadorConBoton></ContadorConBoton>
    </View>
     
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#33FFF3",
    alignItems: "center",
    marginTop: 50,
    margin: 5,
    justifyContent: 'center',
  },
  basetext: {
    color: "red",
    fontWeight: "bold",
    fontSize: 24,
  },
  caja: {
   width:350, //ancho caja
   height:250,//alto caja 
   backgroundColor:"#F6F14F", //color caja
   borderWidth: 2, //borde 
   padding:5,
   borderRadius:20,

  },
  
});
