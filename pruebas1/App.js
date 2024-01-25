import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.basetext}>CHESPY_JM</Text>
       
       <Button title='apretame o te caga¿?'></Button>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#33FFBE',
    alignItems: 'center',
    marginTop: 50,
    //justifyContent: 'center',
  },
  basetext:{
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
