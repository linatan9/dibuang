import { CALL_CAR_CATEGORIES_NAMES } from '../constants/data';
import {} from 'react-native';
import icons from '../constants/icons';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import colors from '../constants/colors';

export const priceConverter = (price, symbol) => {
  return price?.toString().replace(/\./g, '').replace(/\B(?=(\d{3})+(?!\d))/g, `${symbol}`);
};

export const wordToWordWithFirstCapital = (text) => {
  const lowerCAseText = text?.toLowerCase();
  return lowerCAseText.charAt(0).toUpperCase() + lowerCAseText.slice(1);
};

export const getCategoryIconByName = (categoryName) => {
  switch (categoryName) {
    case CALL_CAR_CATEGORIES_NAMES.PLASTIC:
      return (<View style={{position: 'relative'}}>
        <icons.PlastikActionItemIcon style={styles.iconImage}/>
        <icons.PlastikActionItem/>
      </View>)
    case CALL_CAR_CATEGORIES_NAMES.PAPER:
      return (<View style={{position: 'relative'}}>
        <icons.PaperActionItemIcon  style={styles.iconImagePaper}/>
        <icons.PaperActionItem />
      </View>)
    default: return null
  }
};

const styles = StyleSheet.create({
  iconImage: {
    position: 'absolute',
    top: 7,
    left: 7,
    zIndex: 10
  },
  iconImagePaper: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 10
  },
});
