import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {images, icons} from '../../constants';


export const EmptyOrdersList = () => {
  return (
    <View style={styles.emptyOrdersContainer}>
      <images.EmptyOrdersList/>
      <Text style={styles.emptyOrdersTitle}>Tidak Ada Pesanan</Text>
      <Text style={styles.emptyOrdersSubTitle}>Mulai langkah perubahan dan pisahkan sampah Anda sekarang juga</Text>
    </View>
  )
};
