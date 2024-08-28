import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface TextFieldProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  value: string;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder, secureTextEntry = false, onChangeText, value }) => {
  return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#000"
        onChangeText={onChangeText}
        value={value}
      />
  );
};

const styles = StyleSheet.create({
  input: {
    flex:1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: 'black',
  },
});

export default TextField;
