import React from 'react';
import {View, Text} from 'react-native';
import {colors, icons} from '../../../../constants';
import styles from './styles';
import { ORDERS_STATUS_ITEMS } from '../../../../constants/data';
import { getCategoryIconByName, priceConverter, wordToWordWithFirstCapital } from '../../../../helpers/helper';

export const TrashItem = ({category, categoryPrices}) => {
  const itemName = category.category;
  const priceCategory = categoryPrices.find(categoryWithPrice => {
    return categoryWithPrice.category === category.category
  });
  const totalPrice = category.weightInGrams * priceCategory.priceInCentsPerGram / 100;
  return (
    <View style={styles.container}>
      {getCategoryIconByName(category.category)}
      <View style={styles.detailsInfoContainer}>
        <Text style={styles.categoryNameText}>{wordToWordWithFirstCapital(category.category)}</Text>
        <Text style={styles.categoryPricePerKg}>Rp {priceConverter(priceCategory.priceInCentsPerGram / 100 * 1000, '.')}/kg</Text>
        <Text style={styles.totalPriceText}>Rp {priceConverter(totalPrice, '.')}</Text>
      </View>
      <View style={styles.totalWeightContainer}>
        <Text style={styles.weightText}>{category.weightInGrams / 1000}</Text>
        <Text style={styles.weightTextKg}>kg</Text>
      </View>
    </View>
  )
};
