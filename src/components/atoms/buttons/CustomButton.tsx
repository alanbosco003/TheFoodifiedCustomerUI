// src/components/atoms/CustomButton/CustomButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  isPrimary?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, isPrimary = true }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isPrimary ? styles.primary : styles.secondary]}
      onPress={onPress}
    >
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
  },
  primary: {
    backgroundColor: 'black',
  },
  secondary: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'black',
  },
});

export default CustomButton;
