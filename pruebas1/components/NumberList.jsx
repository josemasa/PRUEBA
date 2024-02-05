import React from 'react';
import { FlatList, Text, View } from 'react-native';

const NumberList = () => {
  // Generar una lista de números
  const data = Array.from({ length: 10 }, (_, index) => index + 1);

  // Renderizar cada elemento de la lista
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
    />
  );
};

export default NumberList;
