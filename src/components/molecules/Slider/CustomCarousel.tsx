import React from 'react';
import { View, StyleSheet, Image, Text, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface CarouselItem {
    id: string;
    image: any; // Adjust the type based on your image data type
    title: string;
}
  
interface CustomCarouselProps {
    data: CarouselItem[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ data }) => {
    const carouselHeight = 10;
    const windowWidth = useWindowDimensions().width;
    const itemWidth = windowWidth - 36; // Subtracting 36 to account for padding (18px on each side)

    const renderItem = ({ item }: { item: CarouselItem }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={{ height: 180 }}>      
             <Carousel
            itemHeight={70}
            data={data}
            renderItem={renderItem}
            sliderWidth={windowWidth}
            itemWidth={itemWidth}
            inactiveSlideScale={1}
            sliderHeight={carouselHeight} 
            inactiveSlideOpacity={1}
        />
        </View>
 
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 18, // Padding from left and right
    },
    image: {
        width: '100%',
        height: '100%', // Ensure the image takes up the full height of the container
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
});

export default CustomCarousel;
