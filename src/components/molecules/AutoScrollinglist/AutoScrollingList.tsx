import React, { useRef, useEffect, useCallback } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const { width } = Dimensions.get('window');

interface AutoScrollingListProps {
  data: { image: number; text: string }[]; // Updated to array of objects with image and text
}

const AutoScrollingList: React.FC<AutoScrollingListProps> = ({ data }) => {
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

  const handleScrollEndDrag = () => {
    // Do nothing, stop automatic scrolling permanently after user interaction
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data} // Use original data without duplication
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled // Enable manual scrolling
        onScrollBeginDrag={handleScrollBeginDrag}
        onScrollEndDrag={handleScrollEndDrag}
        onMomentumScrollEnd={handleScrollEndDrag}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    paddingHorizontal: 16,
    // padding: 16,
    backgroundColor: 'white',
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  image: {
    width: 60, // Adjust to fit within your layout
    height: 60,
    borderRadius: 8,
  },
  text: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
});

export default AutoScrollingList;
