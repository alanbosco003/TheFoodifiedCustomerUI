// src/components/atoms/TextButton.tsx

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

interface TextButtonProps {
  title: string;
  onPress: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({ title, onPress }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, { color: colors.purple100 }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default TextButton;
