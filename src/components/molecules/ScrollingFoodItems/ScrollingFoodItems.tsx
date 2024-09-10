// src/components/molecules/ScrollingFoodItems/ScrollingFoodItems.tsx

import React, { useRef, useEffect, useCallback } from 'react';
import { View, Image, ScrollView, StyleSheet, ImageSourcePropType, Animated, Easing, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface ScrollingFoodIconsProps {
  images: ImageSourcePropType[];
}

const ScrollingFoodIcons: React.FC<ScrollingFoodIconsProps> = ({ images }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollSpeed = 50; // Adjust speed of scrolling

 
  // Calculate the total width of the scrolling content
  const contentWidth = images.length * 48; // 40px width + 8px marginRight per image

  const animateScroll = useCallback(() => {


    

    Animated.timing(scrollX, {
      toValue: contentWidth, // Scroll to the end
      duration: (contentWidth) / scrollSpeed * 123, // Duration based on speed
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        scrollX.setValue(0); // Reset scroll position to start
        animateScroll(); // Repeat the animation
      }
    });
  }, [contentWidth, scrollSpeed, scrollX]);

  useEffect(() => {
    animateScroll();

    return () => {
      scrollX.stopAnimation();
    };
  }, [animateScroll, scrollX]);

  useEffect(() => {
    const listenerId = scrollX.addListener(({ value }) => {
      const offset = value % contentWidth; // Loop back to start
      scrollViewRef.current?.scrollTo({ x: offset, animated: false });
    });

    return () => {
      scrollX.removeListener(listenerId);
    };
  }, [scrollX, contentWidth]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false} // Disable manual scrolling
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {images.concat(images).map((image, index) => (
        <View style={styles.imageContainer} key={index}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50, // Max height of the scroll view
  },
  contentContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    height: 50, 
    width: 50, 
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 8, // Spacing between images
  },
  image: {
    height: '100%', // Ensure the image fills the container
    width: '100%', // Ensure the image fills the container
    borderRadius: 8,
  },
});

export default ScrollingFoodIcons;
