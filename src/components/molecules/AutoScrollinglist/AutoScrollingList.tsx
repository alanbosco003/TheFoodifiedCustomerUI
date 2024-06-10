import React, { useRef, useEffect, useCallback } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const { width } = Dimensions.get('window');

interface AutoScrollingListProps {
  data: number[]; // Assuming the data array contains image resource IDs
}

const AutoScrollingList: React.FC<AutoScrollingListProps> = ({ data }) => {
  const flatListRef = useRef<FlatList<number>>(null);
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
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
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
    padding: 16,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: 100, // Adjust to fit within your layout
    height: 100,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default AutoScrollingList;
