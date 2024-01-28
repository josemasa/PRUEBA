import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

const CustomButton = () => {
    const onPressHandler = () => {
      // Función que se ejecutará al hacer clic en el botón
      Alert.alert('Botón clicado');
    };
  
    return (
      <View style={styles.container}>
        <Button title="Mi Botón" onPress={onPressHandler} />
      </View>
    );
  };
  
const styles = StyleSheet.create({
    container1: {
      margin: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#3498db',
    },
  });
  