import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface HeaderProps {
  name: string;
  subtitle: string;
  imagesList: any[];
}

const RestaurantHeader: React.FC<HeaderProps> = ({ name, subtitle, imagesList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === imagesList.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, [imagesList.length]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: currentIndex * width, animated: true });
    }
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <FlatList
        ref={flatListRef}
        data={imagesList}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />
      <View style={styles.indicatorContainer}>
        {imagesList.map((_, index) => (
          <View
            key={index}
            style={[styles.indicator, { backgroundColor: index === currentIndex ? '#000' : '#ccc' }]}
          />
        ))}
      </View>
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
    width: width - 36,
    height: 200,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
});

export default RestaurantHeader;
