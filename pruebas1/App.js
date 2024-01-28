import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
  Pressable,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.basetext}>creando botones </Text>
       
       <Button 
        title="apretame o te caga¿?"
        onPress={() => Alert.alert('PUTO EL QUE LEE')}
        ></Button>

       
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#33FFF3',
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
