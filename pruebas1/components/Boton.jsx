// Boton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Boton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.textoBoton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    

    marginTop:5,
    backgroundColor: '#C3BE0C',
    padding: 15,
    borderRadius: 20,
    borderWidth:2,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Boton;
