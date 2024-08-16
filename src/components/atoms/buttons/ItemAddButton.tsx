// src/components/atoms/ItemAddButton/ItemAddButton.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName } from 'react-native-fontawesome';
const validIcon = parseIconFromClassName('fas fa-chevron-left') // will be parsed to chevronLeft
import Icon from 'react-native-vector-icons/FontAwesome';
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
          <View style={styles.AddedItemCountStyle}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.itemCountText}>Items added: {itemCount}</Text>
        <Icon name="angle-double-up" size={24} color="white" />
        {/* <FontAwesome style={{fontSize: 32}} icon={validIcon}></FontAwesome> */}
        {/* <FontAwesome icon={SolidIcons.smile} /> */}
        {/* <Icon name="rocket" size={30} color="#900" />
         */}
        {/* <Icon
          name={expanded ? 'angle-up' : 'angle-down'}
          size={20}
          color="white" // Change color to match your design
        /> */}
        <Text style={styles.expandText}>{expanded ? 'show less' : 'show more'}</Text>
      </TouchableOpacity>
    </View>
      {/* <View style={styles.AddedItemCountStyle}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.itemCountText}>Items added: {itemCount}</Text>
        <Text style={styles.expandText}>{expanded ? '↓ show less' : '↑ show more'}</Text>
      </TouchableOpacity>
      </View> */}
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
            <LinearGradient
        colors={['#D5D1C2', '#C2BCA8']} // Specify the gradient colors
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.proceedButton}
      >
      <TouchableOpacity style={styles.touchableArea} onPress={onProceed}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  AddedItemCountStyle: {
    paddingVertical:8,
    paddingHorizontal: 22, // Add padding on both sides
  },
  buttonContainer: {
    // height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 0,
    borderTopRightRadius: 6,
    borderTopLeftRadius:6,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  expanded: {
    height: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: 22,  
  },
  itemCountText: {
    fontSize: 16,
    color: '#C2BCA8', 
    fontWeight: "400"
  },
  expandText: {
    fontSize: 14,
    color: '#C2BCA8',
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
    height: 45,
    backgroundColor: '#C2BCA8',
    borderRadius: 28,
    // paddingHorizontal: 12,
    // paddingVertical: 6,
    alignSelf: 'stretch',  
    marginHorizontal: 22,  
  },
  proceedButtonText: {
    fontWeight: "600",
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  touchableArea: {
    flex: 1, // Ensures TouchableOpacity takes up full height and width of the button
    justifyContent: 'center', // Centers text vertically
    alignItems: 'center', // Centers text horizontally
  },
});

export default ItemAddButton;
