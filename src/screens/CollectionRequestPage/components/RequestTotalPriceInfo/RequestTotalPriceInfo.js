import React, {useMemo} from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import {images, icons} from '../../../../constants';
import { priceConverter } from '../../../../helpers/helper';

export const RequestTotalPriceInfo = ({checkedCategories, categories, redeemTotalPrice}) => {
  const getCategoryPriceForKilo = (checkedCat) => {
    const category = categories.find(category => {
      return category.category === checkedCat.category;
    });
    return category.priceInCentsPerGram;
  };

  const getTotalPrice = () => {
    let priceInCents = 0;
    checkedCategories.map(checkedCat => {
      let checkedCategoryPriceInCentsPerGram = getCategoryPriceForKilo(checkedCat);
      priceInCents += (checkedCat.weightInGrams) * (checkedCategoryPriceInCentsPerGram / 100);
    });
    return priceConverter(priceInCents, ' ');
  };
  const totalPriceInCent = useMemo(() => getTotalPrice(), [checkedCategories]);

  const oriceToDisplay = redeemTotalPrice ? priceConverter(redeemTotalPrice / 100, '.') : totalPriceInCent;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{redeemTotalPrice ? 'Pendapatan' : 'Estimasi Pendapatan'}</Text>
      <View style={styles.detailsContainer}>
        <Text>Total Harga</Text>
        <Text style={styles.priceText}>Rp {oriceToDisplay}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text>Biaya Admin (0%)</Text>
        <Text style={styles.priceText}>Rp 0</Text>
      </View>
      <View style={[styles.detailsContainer, styles.totalContainerBorder]}>
        <Text>Total Estimasi Pendapatan</Text>
        <Text style={styles.priceText}>Rp {oriceToDisplay}</Text>
      </View>
    </View>
  )
};
