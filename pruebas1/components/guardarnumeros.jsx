import React,{useState}  from 'react';
import { View, Text,TextInput, Button,StyleSheet, FlatList} from 'react-native';
import Boton from './Boton';



const GuardarNumeros = () => {
  const [inputValue, setInputValue] = useState('');
  const [miArray,setMiArray]= useState([]);
   
  const agregarElemento = () =>{
    if (inputValue.trim() !== ''){

      const nuevoArray=[...miArray,inputValue];
      setMiArray(nuevoArray);
      
      setInputValue('');
    }
  };

  const borrarLista= () =>{
    setMiArray([]);
   };


 return(
   <View>
     <TextInput
        placeholder="Ingresa un valor"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
       <Boton title='Agregar' onPress={agregarElemento}></Boton>
       <Boton title='Borrar' onPress={borrarLista}></Boton>

       <Text>Elementos del Array: </Text>
      <FlatList
          data={miArray}
          renderItem ={({item})=> <Text>{item}</Text>}
          keyExtractor={(item, index)=>index.toString()}     
      >


      </FlatList>
     
   </View>
 ) ;
};




export default GuardarNumeros;
