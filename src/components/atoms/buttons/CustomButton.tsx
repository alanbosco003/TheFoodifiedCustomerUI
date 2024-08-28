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
    height: 40,
    width: 200,
    borderRadius: 30,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  primary: {
    backgroundColor: '#C2BCA8',
    paddingHorizontal: 25,
  },
  secondary: {
    backgroundColor: 'black',
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    // color: '#666',
    color: 'white',
    fontFamily: "Muli-1GDlj"
  },
  primaryText: {
    color: 'black',
  },
  secondaryText: {
    color: 'white',
  },
});

export default CustomButton;
