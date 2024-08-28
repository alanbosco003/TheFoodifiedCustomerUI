// src/components/atoms/TextField/TextField.tsx

import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface TextFieldProps extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  value: string;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder, secureTextEntry, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#000"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F3F1E9",
  },
  input: {
    height: 40,
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 16,
    fontSize: 14,
    backgroundColor: 'white', 
    // color: 'black',
    color: '#666',
    fontFamily: "MuliLightItalic-nRvDR",
  },
});

export default TextField;
