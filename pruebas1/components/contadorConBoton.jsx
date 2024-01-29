import React, { useState } from 'react';
import { View, Text, Button,StyleSheet} from 'react-native';
import Boton from './Boton';
const ContadorConBoton = () => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };
  const ceroContador = () =>{
     setContador  (0);
  };
  return (
    <View>
      <Text style={styles.cuadrotexto}>Contador: {contador}</Text>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>

      <Boton title="AUMENTAR" onPress={aumentarContador}></Boton>
      <Boton title="CERO" onPress={ceroContador}></Boton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    cuadrotexto:{
       backgroundColor:"#fff",
       borderWidth:2,
       borderRadius:20,
       textAlign:"center",
       
    },
   
});


export default ContadorConBoton;
