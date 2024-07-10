// src/components/atoms/ItemAddButton/ItemAddButton.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

interface Item {
  id: string;
  title: string;
  count: number;
}

interface ItemAddButtonProps {
  itemCount: number;
  items: Item[];
  onProceed: () => void;
}

const ItemAddButton: React.FC<ItemAddButtonProps> = ({ itemCount, items, onProceed }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.buttonContainer, expanded && styles.expanded]}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.itemCountText}>Items added: {itemCount}</Text>
        <Text style={styles.expandText}>{expanded ? '↑' : '↓'}</Text>
      </TouchableOpacity>
      {expanded && (
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemRow}>
              <Text style={styles.itemText}>{item.title}</Text>
              <Text style={styles.itemText}>{item.count}</Text>
            </View>
          )}
          style={styles.itemList}
        />
      )}
      <TouchableOpacity style={styles.proceedButton} onPress={onProceed}>
        <Text style={styles.proceedButtonText}>Proceed →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 16,
    padding: 6,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  expanded: {
    height: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemCountText: {
    fontSize: 16,
    color: 'white',
  },
  expandText: {
    fontSize: 16,
    color: 'white',
  },
  itemList: {
    marginTop: 10,
    flex: 1,
    width: '100%',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    color: 'white',
    fontSize: 14,
  },
  proceedButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  proceedButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default ItemAddButton;
