// src/screens/Menu.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import LogoLight from '@/theme/assets/images/food/foodImage1.jpeg';
import Food1 from '@/theme/assets/images/food/foodImage1.jpeg';
import Food2 from '@/theme/assets/images/food/foodImage2.jpeg';
import Food3 from '@/theme/assets/images/food/foodImage3.jpeg';

import RestaurantHeader from '@/components/molecules/MenuHeader/MenuHeader';
import AutoScrollingList from '@/components/molecules/AutoScrollinglist/AutoScrollingList';

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
    id: '3',
    image: LogoLight,
    title: 'Pizza',
    description: 'Delicious cheese pizza',
    price: '$10',
  },
  {
    id: '4',
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.name}>{"Sai Savour"}</Text>
        <RestaurantHeader imagesList={carouselData} />
        <Text style={styles.subHeadings}>{"Categories"}</Text>
        <AutoScrollingList data={carouselDataCategory} />
        <View style={styles.menuList}>
          {menuItems.map(item => renderMenuItem({ item }))}
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  subHeadings: {
    paddingLeft: 20,
    fontSize: 16,
    color: '#666',
    fontWeight: "500"
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  name: {
    padding: 11,
    textAlign: "center",
    fontSize: 21,
    fontWeight: "600",
    color: "black"
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scrollViewContent: {
    backgroundColor: "white",
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
