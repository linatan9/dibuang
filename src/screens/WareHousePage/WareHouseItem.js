import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {images, colors, icons} from '../../constants';

export const WareHouseItem = ({wareHouse, onPress}) => {
  return (
    <TouchableOpacity style={styles.wareHouseContainer} onPress={() => onPress(wareHouse?.address?.fullAddress)}>
      <Text style={styles.wareHouseTitleText}>{wareHouse?.name}</Text>
      <Text style={styles.wareHouseMainText}>{wareHouse?.address?.fullAddress}</Text>
      <View style={styles.wareHouseTextWithIcon}>
        <icons.Phone style={{marginTop: 10}}/>
        <Text style={[styles.wareHouseMainText, {marginLeft: 5}]}>{wareHouse?.address.contactNumber || wareHouse?.emailAddress}</Text>
      </View>
    </TouchableOpacity>
  )
};

