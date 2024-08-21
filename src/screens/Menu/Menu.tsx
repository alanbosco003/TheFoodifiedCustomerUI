// src/screens/Menu.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import LogoLight from '@/theme/assets/images/food/foodImage1.jpeg';
import Food1 from '@/theme/assets/images/food/foodImage1.jpeg';
import Food2 from '@/theme/assets/images/food/foodImage2.jpeg';
import Food3 from '@/theme/assets/images/food/foodImage3.jpeg';


import RestaurantHeader from '@/components/molecules/MenuHeader/MenuHeader';
import AutoScrollingList from '@/components/molecules/AutoScrollinglist/AutoScrollingList';
import ItemAddButton from '@/components/atoms/buttons/ItemAddButton';

import { menuItems, MenuItem } from '@/constants/MenuConstants';

const carouselDataCategory = [
  { image: LogoLight, text: "Juice" },
  { image: LogoLight, text: "Pizza" },
  { image: LogoLight, text: "Burger" },
  { image: LogoLight, text: "Pasta" },
  { image: LogoLight, text: "Salad" },
  { image: LogoLight, text: "Sushi" },
  { image: LogoLight, text: "Dessert" },
];

const carouselData = [
  Food1,
  Food2,
  Food3,
  // Add more items as needed
];

const Menu = () => {
  const { colors, gutters, fonts } = useTheme();
  const [itemCounts, setItemCounts] = useState<{ [key: string]: number }>({});
  // Calculate total items whenever itemCounts changes

  const totalItems = Object.values(itemCounts).reduce((sum, count) => sum + count, 0);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // State for selected category

  const handleSelectCategory = (category: string) => {
    if (selectedCategory == category) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }  
    // Filter menu items based on the selected category if needed
  };

  const handleAddItem = (id: string) => {
    setItemCounts(prevCounts => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
    console.log(totalItems)
  };

  const handleProceed = () => {
    // Handle the proceed action
    console.log('Proceeding with items:', itemCounts);
  };

  const handleRemoveItem = (id: string) => {
    setItemCounts(prevCounts => {
      const newCounts = { ...prevCounts };
      if (newCounts[id] > 1) {
        newCounts[id] -= 1;
      } else {
        delete newCounts[id];
      }
      return newCounts;
    });
  };

  const selectedItems = Object.keys(itemCounts).map(key => ({
    id: key,
    title: menuItems.find(item => item.id === key)?.title || '',
    count: itemCounts[key],
  }));

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={[styles.menuItem, gutters.marginBottom_16]}>
      <Image source={item.image} style={styles.menuItemImage} />
      <View style={styles.menuItemDetails}>
        <View style={styles.menuItemTextContainer}>
          <Text style={styles.menuItemTitle}>{item.title}</Text>
          <Text style={styles.menuItemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
        </View>
        <View style={styles.menuItemFooter}>
          <Text style={styles.menuItemPrice}>{item.price}</Text>
          {itemCounts[item.id] ? (
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)} style={styles.counterButton}>
                <Text style={styles.counterButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.itemCount}>{itemCounts[item.id]}</Text>
              <TouchableOpacity onPress={() => handleAddItem(item.id)} style={styles.counterButton}>
                <Text style={styles.counterButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => handleAddItem(item.id)} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <SafeScreen>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.name}>{"Sai Savour"}</Text>
          <RestaurantHeader imagesList={carouselData} />
          <Text style={styles.subHeadings}>{"Categories"}</Text>
          <AutoScrollingList
            data={carouselDataCategory}
            onSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
                    <View style={[styles.menuList, totalItems > 0 && { marginBottom: 60 }]}>
            {menuItems
              .filter(item => !selectedCategory || item.category === selectedCategory)
              .map(item => renderMenuItem({ item }))}
          </View>
        </ScrollView>
        {totalItems > 0 && (
        <ItemAddButton
          itemCount={totalItems}
          items={selectedItems}
          onProceed={handleProceed}
        />
      )}
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({

  floatingButtonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  subHeadings: {
    paddingLeft: 20,
    fontSize: 18,
    // color: '#666',
    color: 'black',
    fontWeight: "500",
    fontFamily: "Muli-1GDlj"
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  name: {
    paddingVertical: 12,
    paddingLeft: 20,
    textAlign: "left",
    fontSize: 21,
    fontWeight: "600",
    color: "black",
    fontFamily: "Pacifico-Regular"
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scrollViewContent: {
    backgroundColor: "#F3F1E9",
    flexGrow: 1,
    paddingBottom: 16, // Optional: Adds space at the bottom
  },
  carouselImage: {
    width: '100%',
    height: 200,
  },
  menuList: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  menuItem: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 16,
    padding: 4, // Padding to fit the image within the component
    height: 100 + 8, // Image height + padding (4 * 2)
  },
  menuItemImage: {
    width: 100,
    height: 100,
    borderRadius: 6,
    marginRight: 10,
  },
  menuItemDetails: {
    flex: 1,
    justifyContent: 'space-between', // Ensure the footer is at the bottom
  },
  menuItemTextContainer: {
    justifyContent: 'flex-start', 
    // Container for the title and description
  },
  menuItemTitle: {
    fontSize: 16,
    // color: '#666',
    color: 'black',
    fontWeight: "500",
    fontFamily: "Muli-1GDlj"
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
    fontFamily: "MuliLightItalic-nRvDR",
  },
  menuItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemPrice: {
    fontSize: 16,
    color: 'black',
    fontWeight: "500",
    fontFamily: "Muli-1GDlj"
  },
  addButton: {
    marginRight: 10,
    backgroundColor: 'black',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  addButtonText: {
    paddingHorizontal: 15,
    fontSize: 14,
    // color: '#666',
    color: 'white',
    fontWeight: "500",
    fontFamily: "Muli-1GDlj"
  },
  counterContainer: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: 'black',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  counterButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  itemCount: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Menu;
