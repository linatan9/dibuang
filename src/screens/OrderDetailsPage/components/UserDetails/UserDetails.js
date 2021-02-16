import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {colors, icons} from '../../../../constants';
import styles from './styles';
import { COLLECTIONS_TIMES, ORDERS_STATUS_ITEMS } from '../../../../constants/data';
import { getCategoryIconByName, priceConverter, wordToWordWithFirstCapital } from '../../../../helpers/helper';
import moment from 'moment';

export const UserDetails = ({order}) => {
  return (
    <View style={styles.orderItemContainer}>
      <Text style={styles.title}>Detail Pengambilan</Text>
      <Text style={styles.username}>{order.member.fullName}</Text>
      <Text style={styles.orderItemAddress}>
        {order.collectionAddress.fullAddress}
      </Text>
      <View style={[styles.orderItemDateRow, {marginBottom: 10}]}>
        <icons.Phone color={'black'}/>
        <Text style={styles.orderItemDateText}>{order.member.phoneNumber}</Text>
      </View>
      <View style={styles.orderItemDateRow}>
        <View style={styles.orderItemDateRow}>
          <icons.Clock color={'black'}/>
          <Text style={styles.orderItemDateText}>{moment(order.collectionDate).format('DD MMMM YYYY')}</Text>
        </View>
        <View style={[styles.orderItemDateRow, {marginLeft: 15}]}>
          <icons.Calendar color={'black'}/>
          <Text style={styles.orderItemDateText}>{COLLECTIONS_TIMES[order.collectionTimeOfDay]}</Text>
        </View>
      </View>
    </View>
  )
};
