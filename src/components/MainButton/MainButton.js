import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

export const MainButton = ({title = 'Button', isDisabled = false, onPress, style, isNonFill, isGrayDisabled}) => {
  const Container = isDisabled || isGrayDisabled ? View : TouchableOpacity;
  return (
    <Container
      style={[!!isNonFill ? styles.nonFill : isGrayDisabled ? styles.isGrayDisabled : styles.container, style]}
      onPress={onPress}
    >
      <Text style={!!isNonFill ? styles.titleTextGreen : styles.titleText}>{title}</Text>
    </Container>
  )
};
