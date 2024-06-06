// src/components/molecules/AutoScrollingList.tsx

import React, { useRef, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const { width } = Dimensions.get('window');

interface AutoScrollingListProps {
  data: number[]; // Assuming the data array contains image resource IDs
}

const AutoScrollingList: React.FC<AutoScrollingListProps> = ({ data }) => {
  const flatListRef = useRef<FlatList<number>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let currentIndex = 0;

    const startAutoScroll = () => {
      flatListRef.current?.scrollToOffset({ animated: true, offset: currentIndex * (width - 36) });

      Animated.timing(scrollX, {
        toValue: currentIndex * (width - 36),
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        currentIndex++;
        if (currentIndex < data.length) {
          startAutoScroll();
        } else {
          currentIndex = 0;
          flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
          setTimeout(startAutoScroll, 2000); // Delay before starting over
        }
      });
    };

    startAutoScroll();

    return () => {
      scrollX.stopAnimation();
    };
  }, [data, scrollX]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onTouchStart={() => {
          scrollX.stopAnimation();
        }}
        onTouchEnd={() => {
        //   startAutoScroll();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: width - 36, // Adjust to fit within your layout
    height: 200,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default AutoScrollingList;
