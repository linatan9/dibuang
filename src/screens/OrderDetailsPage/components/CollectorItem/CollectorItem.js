import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import {colors, icons} from '../../../../constants';
import styles from './styles';

export const CollectorItem = ({collector}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 50, height: 50}}>
        {
          collector?.selfie ? (
            <Image
              resizeMode="contain"
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{ uri: collector?.selfie }}
            />
          ) : (
            <icons.BlankAvatar/>
          )
        }
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{collector.fullName}</Text>
        <TouchableOpacity style={styles.phoneContainer} onPress={() => Linking.openURL(`tel:${collector.phoneNumber}`)}>
          <Text>{collector.phoneNumber}</Text>
        </TouchableOpacity>
        {
          collector?.transportationId ? <Text style={styles.transportationIdText}>{collector.transportationId}</Text> : null
        }
      </View>
    </View>
  )
};
