// src/components/atoms/TextField.tsx

import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '@/theme';

interface TextFieldProps extends TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  value: string;
}

const TextField: React.FC<TextFieldProps> = ({ placeholder, secureTextEntry, onChangeText, value }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { borderColor: colors.gray800, color: colors.gray800 }]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray400}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
  },
});

export default TextField;
