// src/components/atoms/ItemAddButton/ItemAddButton.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ItemAddButtonProps {
  itemCount: number;
  onProceed: () => void;
}

const ItemAddButton: React.FC<ItemAddButtonProps> = ({ itemCount, onProceed }) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.itemCountText}>Items added: {itemCount}</Text>
      <TouchableOpacity style={styles.proceedButton} onPress={onProceed}>
        <Text style={styles.proceedButtonText}>Proceed →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  itemCountText: {
    fontSize: 16,
    color: 'black',
  },
  proceedButton: {
    backgroundColor: 'black',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ItemAddButton;
