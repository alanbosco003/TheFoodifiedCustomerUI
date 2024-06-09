// src/components/molecules/AppBar/AppBar.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // You might need to install this package

const AppBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.title}>Back</Text>
        {/* <Icon name="arrow-back" size={24} color="#000" /> */}
      </TouchableOpacity>
      <Text style={styles.title}>Sai Savour</Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Icon name="settings" size={24} color="#000" />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppBar;
