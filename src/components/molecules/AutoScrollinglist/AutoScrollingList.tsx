import React, { useRef, useEffect, useCallback, useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, Animated, Easing, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

interface AutoScrollingListProps {
  data: { image: number; text: string }[]; 
  onSelectCategory: (category: string) => void; // Callback to handle selection
  selectedCategory: string; // Prop to indicate the currently selected category
}

const AutoScrollingList: React.FC<AutoScrollingListProps> = ({ data, onSelectCategory, selectedCategory }) => {
  const flatListRef = useRef<FlatList<{ image: number; text: string }>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollSpeed = 50; // Adjust to control the scrolling speed
  let isScrolling = useRef(true).current;

  const animateScroll = useCallback(() => {

    if (!isScrolling) return;

    Animated.timing(scrollX, {
      toValue: width * data.length,

      
      duration: (width * data.length) / scrollSpeed * 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished && isScrolling) {
        scrollX.setValue(0); // Reset scroll position
        animateScroll();
      }
    });
  }, [data.length, scrollX, scrollSpeed]);

  useEffect(() => {
    animateScroll();

    return () => {
      isScrolling = false;
      scrollX.stopAnimation();
    };
  }, [animateScroll, scrollX]);

  useEffect(() => {
    const listenerId = scrollX.addListener(({ value }) => {
      const offset = value % (width * data.length);
      flatListRef.current?.scrollToOffset({ offset, animated: false });
    });

    return () => {
      scrollX.removeListener(listenerId);
    };
  }, [scrollX]);

  const handleScrollBeginDrag = () => {
    isScrolling = false;
    scrollX.stopAnimation();
  };

  const handleCategoryPress = (category: string) => {

    onSelectCategory(category); // Trigger the callback with the selected category
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.itemContainer,
              selectedCategory === item.text && styles.selectedItemContainer, // Apply selected style
            ]}
            onPress={() => handleCategoryPress(item.text)}
          >
            <Image source={item.image} style={styles.image} />
            <Text
              style={[
                styles.text,
                selectedCategory === item.text && styles.selectedText, // Apply selected text style
              ]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled
        onScrollBeginDrag={handleScrollBeginDrag}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    paddingHorizontal: 16,
    backgroundColor: '#F3F1E9',
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 13,
    padding: 6,
    borderRadius: 8,
  },
  selectedItemContainer: {
    backgroundColor: '#C2BCA8', // Highlight color for selected category
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    fontFamily: "MuliLight-lg9VZ"
  },
  selectedText: {
    color: 'black', // Change text color for selected category
    fontSize: 16,
    fontFamily: "MuliLight-lg9VZ"
  },
});

export default AutoScrollingList;
