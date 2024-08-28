import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, Text } from 'react-native';

interface TextFieldProps extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  value: string;
  errorText?: string | null;  // Allow null
}

const TextField: React.FC<TextFieldProps> = ({ placeholder, secureTextEntry, onChangeText, value, errorText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTextfield}>
        <TextInput
          style={[styles.input, errorText ? styles.errorInput : null]}
          placeholder={placeholder}
          placeholderTextColor="#000"
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 25,
    width: "100%",
    alignItems: 'center',
  },
  containerTextfield: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 30,
    paddingHorizontal: 16,
    fontSize: 14,
    backgroundColor: 'white', 
    color: '#666',
    fontFamily: "MuliLightItalic-nRvDR",
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  errorText: {
    fontSize: 8,
    color: 'red',
    marginTop: 4,
    fontFamily: "MuliLightItalic-nRvDR",
    alignSelf: 'flex-start', // Aligns the error text to the start (left side)
    marginLeft: 10, // Matches the paddingHorizontal of the container for alignment
  },
});

export default TextField;
