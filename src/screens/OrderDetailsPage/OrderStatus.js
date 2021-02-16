import React from 'react';
import {View, Text} from 'react-native';
import {colors, icons} from '../../constants';
import styles from './styles';
import { ORDERS_STATUS_ITEMS } from '../../constants/data';

export const OrderStatus = ({status}) => {
  const orderStatusData = ORDERS_STATUS_ITEMS[status]
  return (
    <View style={[styles.statusContainer, {backgroundColor: orderStatusData.color}]}>
      <View style={styles.orderStatusTextContainer}>
        <Text style={styles.orderStatusTitleText}>{orderStatusData.title}</Text>
        <Text style={styles.orderStatusText}>{orderStatusData.text}</Text>
      </View>
      <View>
        {orderStatusData.icon}
      </View>
    </View>
  )
};
