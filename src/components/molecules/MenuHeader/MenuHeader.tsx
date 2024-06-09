// src/components/molecules/RestaurantHeader.tsx

import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface HeaderProps {
  name: string;
  subtitle: string;
  images: string[];
}

const RestaurantHeader: React.FC<HeaderProps> = ({ name, subtitle, images }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<string>>(null);

  useEffect(() => {
    let isCancelled = false;

    const startAutoScroll = () => {
      if (!isCancelled) {
        Animated.timing(scrollX, {
          toValue: width * (images.length - 1),
          duration: 5000 * (images.length - 1),
          useNativeDriver: true,
        }).start(() => {
          if (!isCancelled) {
            flatListRef.current?.scrollToIndex({ index: 0, animated: false });
            startAutoScroll();
          }
        });
      }
    };

    startAutoScroll();

    return () => {
      isCancelled = true;
      scrollX.stopAnimation();
    };
  }, [images, scrollX]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={typeof item === 'string' ? { uri: item } : item} style={styles.image} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  imageContainer: {
    width: width - 36, // 36 to account for padding
    height: 200,
    paddingRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default RestaurantHeader;
