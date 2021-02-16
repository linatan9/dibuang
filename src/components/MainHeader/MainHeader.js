import React from 'react';
import {View, Platform, Text, TouchableOpacity} from 'react-native';
import {images, icons} from '../../constants';
import styles from './styles';


export const MainHeader = ({navigation, title, isBackButton = true, horizontalPadding, icon, iconRoute, backRouteName, customBackHandler}) => {
  return (
    <View style={[styles.container, {paddingRight: horizontalPadding === 0 ? 20 : 0, paddingLeft: horizontalPadding === 0 ? 20 : 0}]}>
      {
        isBackButton && <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() =>
            customBackHandler ? customBackHandler() : backRouteName ? navigation.navigate(backRouteName) : navigation.canGoBack() && navigation.goBack()
          }>
          {
            Platform.OS === 'ios' ?
              <icons.BackButtonIos style={{width: 20, height: 20}} size={20}/>
            :
              <icons.BackButtonAndroid style={{width: 20, height: 20}} size={20}/>
          }
        </TouchableOpacity>
      }
      <Text style={styles.title}>{title}</Text>
      {
        icon ? <TouchableOpacity onPress={() => navigation.navigate(iconRoute)} style={{flex: 1, alignItems: 'flex-end'}}>
          {icon}
        </TouchableOpacity> : null
      }
    </View>
  )
};
