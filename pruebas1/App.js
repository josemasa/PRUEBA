import { StatusBar } from "expo-status-bar";

import ContadorConBoton from "./components/contadorConBoton";
import GuardarNumeros from "./components/guardarnumeros";
import {
  StyleSheet,
  Pressable,
  ScrollView,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import NumberList from "./components/NumberList";




  export default function App() {
  return (


    <View style={styles.container}>

      <Text style={styles.basetext}>Creando botones </Text>
    {/* contador incrementa con un boton y vuelve a 0 con otro */}
     {/* <View style={styles.caja}>
      <ContadorConBoton ></ContadorConBoton>
    </View>  */}

    {/* lista de numeros del 1 al 10  */}
     {/* <View style={styles.caja}>
      <NumberList></NumberList>
    </View>  */}

    {/* Guardar numeros  */}
    <View style={styles.caja}>
     <GuardarNumeros></GuardarNumeros>
    </View>
      <StatusBar style="auto" />
    </View>
  
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#398CF7",
    alignItems: "center",
    marginTop: 50,
    margin: 5,
    justifyContent: 'center',
  },
  basetext: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 24,
  },
  caja: {
   width:350, //ancho caja
   height:250,//alto caja 
   backgroundColor:"#1CA3DE", //color caja
   borderWidth: 2, //borde 
   padding:5,
   borderRadius:20,

  },
  
});
