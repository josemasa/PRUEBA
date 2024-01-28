import { StatusBar } from "expo-status-bar";
import CustomButton  from "./components/Custonbutton";
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
    

      <Button
        title="OPCION 1"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
      <Button
        title="OPCION 2"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
      <Button
        title="OPCION 3"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
      <Button
        title="OPCION 4"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
      <Button
        title="OPCION 5"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>

      <Button
        title="OPCION 6"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
    
      
     

     <View style={styles.container1}>
      <Button
        title="OPCION 1"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
      </View>
      <View style={styles.container1}>
      <Button
        title="OPCION 1"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
      </View>
      <View style={styles.container1}>
      <Button
        title="OPCION 1"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
      </View>
      <View style={styles.container1}>
      <Button
        title="OPCION 1"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
      </View>
      <View style={styles.container1}>
      <Button
        title="OPCION 1"
        onPress={() => Alert.alert("PUTO EL QUE LEE")}
      ></Button>
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
  container1: {
    
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#3349FF',
  },
  
});
