import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export const AuthTopTitle = ({title, subTitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  )
};
