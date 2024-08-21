import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Item {
  id: string;
  title: string;
  count: number;
}

interface ItemAddButtonProps {
  itemCount: number;
  items: Item[];
  onProceed: () => void;
}

const ItemAddButton: React.FC<ItemAddButtonProps> = ({ itemCount, items, onProceed }) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(40)).current; // Start with the height for the header

  const toggleExpand = () => {
    if (expanded) {
      // Collapse the container
      Animated.timing(animatedHeight, {
        toValue: 40,  // Height for just the header
        duration: 450,
        easing: Easing.bounce,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      // Expand the container
      setExpanded(true);
      Animated.timing(animatedHeight, {
        toValue: 360,  // Target height for the expanded view
        duration: 300,
        easing: Easing.circle,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.buttonContainer, { height: animatedHeight }]}>
        <View style={styles.AddedItemCountStyle}>
          <TouchableOpacity onPress={toggleExpand} style={styles.header}>
            <Text style={styles.itemCountText}>Items added: {itemCount}</Text>
            <View style={styles.iconAndTextContainer}>
              <Icon style={styles.iconStyle} name={!expanded ? "angle-double-up" : "angle-double-down"} size={24} color='#C2BCA8' />
              <Text style={styles.expandText}>{expanded ? 'show less' : 'show more'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {expanded && (
          <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.itemRow}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.itemText}>{item.count}</Text>
              </View>
            )}
            style={styles.itemList}
          />
        )}
      </Animated.View>

      {/* Keep the Proceed button outside of the animated container */}
      <View style={styles.proceedButtonContainer}>
      <LinearGradient
        colors={['#D5D1C2', '#C2BCA8']} // Specify the gradient colors
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.proceedButton}
      >
        <TouchableOpacity style={styles.touchableArea} onPress={onProceed}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </LinearGradient>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    marginRight: 8,
  },
  AddedItemCountStyle: {
    paddingVertical: 8,
    paddingHorizontal: 22,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 0,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
    shadowColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: 22,
  },
  itemCountText: {
    fontSize: 16,
    color: '#C2BCA8',
    fontWeight: "500",
    fontFamily: "Muli-1GDlj"
  },
  expandText: {
    fontSize: 16,
    color: '#C2BCA8',
    fontWeight: "500",
    fontFamily: "Muli-1GDlj"
  },
  itemList: {
    marginTop: 10,
    flex: 1,
    width: '100%',
  },
  itemRow: {
    marginHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#C2BCA8',
  },
  itemText: {
    color: '#C2BCA8',
    fontSize: 14,
    fontFamily: "Muli-1GDlj",
  },
  proceedButton: {
    height: 45,
    backgroundColor: '#C2BCA8',
    borderRadius: 28,
    alignSelf: 'stretch',
    marginHorizontal: 22,
    marginBottom: 8
  },
  proceedButtonText: {
    fontSize: 18,
    // color: '#666',
    color: 'black',
    fontFamily: "MuliBold-YzEVy"
  },
  touchableArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  proceedButtonContainer: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ItemAddButton;
