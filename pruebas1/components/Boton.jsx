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
    marginTop:10,
    backgroundColor: '#0f914a',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Boton;
