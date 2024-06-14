// src/screens/Menu.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import LogoLight from '@/theme/assets/images/food/foodImage1.jpeg';
import Food1 from '@/theme/assets/images/food/foodImage1.jpeg';
import Food2 from '@/theme/assets/images/food/foodImage2.jpeg';
import Food3 from '@/theme/assets/images/food/foodImage3.jpeg';
 

import RestaurantHeader from '@/components/molecules/MenuHeader/MenuHeader';
import AutoScrollingList from '@/components/molecules/AutoScrollinglist/AutoScrollingList';


const carouselDataCategory = [
  LogoLight,
  LogoLight,
  LogoLight,
  LogoLight,
  LogoLight,
  LogoLight,
  LogoLight
  // Add more items as needed
];

const carouselData = [
  Food1,
  Food2,
  Food3,
  // Add more items as needed
];

interface MenuItem {
  id: string;
  image: number; // Change the type to match the image resource ID type
  title: string;
  description: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    image: LogoLight,
    title: 'Pizza',
    description: 'Delicious cheese pizza',
    price: '$10',
  },
  {
    id: '2',
    image: LogoLight,
    title: 'Burger',
    description: 'Juicy beef burger',
    price: '$8',
  },
  {
    id: '1',
    image: LogoLight,
    title: 'Pizza',
    description: 'Delicious cheese pizza',
    price: '$10',
  },
  {
    id: '2',
    image: LogoLight,
    title: 'Burger',
    description: 'Juicy beef burger',
    price: '$8',
  },
  // Add more items here
];

const Menu = () => {
  const { colors, gutters, fonts } = useTheme();

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={[styles.menuItem, gutters.marginBottom_16]}>
      <Image source={item.image} style={styles.menuItemImage} />
      <View style={styles.menuItemDetails}>
        <Text style={styles.menuItemTitle}>{item.title}</Text>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
        <View style={styles.menuItemFooter}>
          <Text style={styles.menuItemPrice}>{item.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeScreen>
      {/* <AppBar title="Sai Savour" /> */}
      <RestaurantHeader
        name="Sai Savour"
        subtitle="Best food in town"
        imagesList={carouselData}
      />
      <View style={styles.container}>
        <AutoScrollingList data={carouselDataCategory} />
        <FlatList
          data={menuItems}
          renderItem={renderMenuItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.menuList}
        />
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  menuItemImage: {
    width: 100,
    height: 100,
  },
  menuItemDetails: {
    flex: 1,
    padding: 16,
  },
  menuItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  menuItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ff6347',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Menu;
