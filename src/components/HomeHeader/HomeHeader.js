import React from 'react';
import {View, Platform, Text, TouchableOpacity} from 'react-native';
import {images, icons} from '../../constants';
import styles from './styles';


export const HomeHeader = ({navigation, title, isBackButton = true, horizontalPadding}) => {
  return (
    <View style={[styles.container, {paddingRight: horizontalPadding === 0 ? 20 : 0, paddingLeft: horizontalPadding === 0 ? 20 : 0}]}>
      <View style={styles.logoContainer}>
        <images.LogoName style={styles.logoName}/>
        <images.Logo  style={styles.logo}/>
      </View>
      {/*<icons.NotificationIcon/>*/}
    </View>
  )
};
