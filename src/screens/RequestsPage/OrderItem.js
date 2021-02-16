import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {images, icons} from '../../constants';
import moment from 'moment';
import { COLLECTIONS_TIMES } from '../../constants/data';
import { priceConverter } from '../../helpers/helper';


export const OrderItem = ({order, navigation}) => {
  return (
    <View style={styles.orderItemContainer}>
      <View style={styles.orderItemCodeContainer}>
        <Text style={styles.orderItemCodeTitle}>Kode Pesanan: </Text>
        <Text style={styles.orderItemCode}>{order.code}</Text>
      </View>
      <View style={styles.orderItemDateRow}>
        <View style={styles.orderItemDateRow}>
          <icons.Calendar color={'black'}/>
          <Text style={styles.orderItemDateText}>{moment(order.collectionDate).format('DD MMM YYYY')}</Text>
        </View>
        <View style={[styles.orderItemDateRow, {marginLeft: 15}]}>
          <icons.Clock color={'black'}/>
          <Text style={styles.orderItemDateText}>{COLLECTIONS_TIMES[order.collectionTimeOfDay]}</Text>
        </View>
      </View>
      <Text style={styles.orderItemAddress}>
        {order.collectionAddress.fullAddress}
      </Text>
      <View style={styles.orderItemDetailsRow}>
        <Text style={styles.orderItemPrice}>
          Rp {priceConverter(order.totalEstimatedPointInCents / 100, '.')}
        </Text>
        <TouchableOpacity style={styles.orderItemsDetailsButton} onPress={() => navigation.navigate('OrderDetailsPage', {order})}>
          <Text style={styles.orderItemsDetailsButtonText}>Lihat Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};
