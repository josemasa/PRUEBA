import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1} >AQUI VAMOS A HACER UNA GALERIA DE PRODUCTOS</Text>
      <Image style={styles.imagen} source={{uri:'https://i.blogs.es/ceda9c/dalle/450_1000.jpg',}}></Image>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  text1:{
   color:'green',
   fontSize:50,
  },
  imagen:{
    width:366,
    height:366,
  },
});
