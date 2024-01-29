import { StatusBar } from "expo-status-bar";
import Boton  from "./components/Boton";
import {
  StyleSheet,
  Pressable,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

const MiComponente = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };


  export default function App() {
  return (


    
    <View style={styles.container}>
      <Text style={styles.basetext}>Creando botones </Text>
    
   {/*  */}
     
     <Boton title={"jose marcelo"}></Boton>
     <Text>{contador}</Text>
     <Boton title={"Laura Macarena"}></Boton>
     <Boton title={"Lola Josefina"}></Boton>
     <Boton title={"Umma"}></Boton>

      
     
     
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
  container1: {
    
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#ffff",
  },
  
});
}